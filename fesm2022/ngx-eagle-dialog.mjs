import * as i0 from '@angular/core';
import { inject, ElementRef, NgZone, Directive, Input, InjectionToken, makeEnvironmentProviders, isDevMode, Component, ViewEncapsulation, ViewChild, ApplicationRef, EnvironmentInjector, createComponent, Injector, Injectable, TemplateRef, HostListener } from '@angular/core';
import { of, from, merge, Subject, fromEvent, BehaviorSubject } from 'rxjs';
import { filter, defaultIfEmpty, first, map, switchMap, takeUntil } from 'rxjs/operators';
import * as i1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';

class DialogRef {
}
class InternalDialogRef extends DialogRef {
    constructor(props = {}) {
        super();
        this.beforeCloseGuards = [];
        this.mutate(props);
    }
    close(result) {
        this.canClose(result)
            .pipe(filter(Boolean))
            .subscribe({ next: () => this.onClose(result) });
    }
    beforeClose(guard) {
        this.beforeCloseGuards.push(guard);
    }
    resetDrag(offset) {
        this.onReset(offset);
    }
    canClose(result) {
        const guards$ = this.beforeCloseGuards
            .map((guard) => guard(result))
            .filter((value) => value !== undefined && value !== true)
            .map((value) => {
            return typeof value === 'boolean'
                ? of(value)
                : from(value).pipe(filter((canClose) => !canClose));
        });
        return merge(...guards$).pipe(defaultIfEmpty(true), first());
    }
    mutate(props) {
        Object.assign(this, props);
        this.data = this.config.data;
        this.id = this.config.id;
    }
    updateConfig(config) {
        this.mutate({
            config: {
                ...this.config,
                ...config,
            },
        });
    }
    asDialogRef() {
        return this;
    }
}

function isNil(value) {
    return value === undefined || value === null;
}
function isString(value) {
    return typeof value === 'string';
}
function coerceCssPixelValue(value) {
    if (isNil(value)) {
        return '';
    }
    return isString(value) ? value : `${value}px`;
}

class DialogDraggableDirective {
    constructor() {
        this.dialogDragEnabled = false;
        this.host = inject(ElementRef);
        this.zone = inject(NgZone);
        this.delta = { x: 0, y: 0 };
        this.offset = { x: 0, y: 0 };
        this.enabled = true;
        this.destroy$ = new Subject();
    }
    set dialogDragOffset(offset) {
        this.reset(offset);
    }
    ngAfterViewInit() {
        if (!this.enabled) {
            return;
        }
        this.init();
    }
    ngOnChanges() {
        if (!this.enabled && this.dialogDragEnabled && this.dialogDragTarget) {
            this.enabled = true;
            if (this.handle) {
                this.handle.style.setProperty('cursor', 'move');
            }
            else if (this.enabled) {
                this.init();
            }
        }
        if (!this.dialogDragEnabled) {
            this.enabled = false;
            if (this.handle) {
                this.handle.style.setProperty('cursor', '');
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    reset(offset) {
        const defaultValues = { x: 0, y: 0 };
        this.offset = { ...defaultValues, ...offset };
        this.delta = { ...defaultValues };
        this.translate();
    }
    setupEvents() {
        this.zone.runOutsideAngular(() => {
            const mousedown$ = fromEvent(this.handle, 'mousedown');
            const mousemove$ = fromEvent(document, 'mousemove');
            const mouseup$ = fromEvent(document, 'mouseup');
            const mousedrag$ = mousedown$.pipe(filter(() => this.enabled), map((event) => ({
                startX: event.clientX,
                startY: event.clientY,
            })), switchMap(({ startX, startY }) => mousemove$.pipe(map((event) => {
                event.preventDefault();
                this.delta = {
                    x: event.clientX - startX,
                    y: event.clientY - startY,
                };
                if (this.dragConstraint === 'constrain') {
                    this.checkConstraint();
                }
            }), takeUntil(mouseup$))), takeUntil(this.destroy$));
            mousedrag$.subscribe(() => {
                if (this.delta.x === 0 && this.delta.y === 0) {
                    return;
                }
                this.translate();
            });
            mouseup$
                .pipe(filter(() => this.enabled), filter(() => this.delta.x !== 0 || this.delta.y !== 0), takeUntil(this.destroy$))
                .subscribe(() => {
                if (this.dragConstraint === 'bounce') {
                    this.checkConstraint();
                    this.translate();
                }
                this.offset.x += this.delta.x;
                this.offset.y += this.delta.y;
                this.delta = { x: 0, y: 0 };
            });
        });
    }
    translate() {
        if (this.target) {
            this.zone.runOutsideAngular(() => {
                requestAnimationFrame(() => {
                    const transform = `translate(${this.translateX}px, ${this.translateY}px)`;
                    this.target?.style.setProperty('transform', transform);
                });
            });
        }
    }
    get translateX() {
        return this.offset.x + this.delta.x;
    }
    get translateY() {
        return this.offset.y + this.delta.y;
    }
    init() {
        if (!this.dialogDragTarget) {
            throw new Error('You need to specify the drag target');
        }
        this.handle =
            this.dialogDragHandle instanceof Element
                ? this.dialogDragHandle
                : typeof this.dialogDragHandle === 'string' && this.dialogDragHandle
                    ? document.querySelector(this.dialogDragHandle)
                    : this.host.nativeElement;
        if (this.handle && this.enabled) {
            this.handle.style.setProperty('cursor', 'move');
        }
        this.target =
            this.dialogDragTarget instanceof HTMLElement
                ? this.dialogDragTarget
                : document.querySelector(this.dialogDragTarget);
        this.setupEvents();
        this.translate();
    }
    checkConstraint() {
        if (this.target) {
            const { width, height } = this.target.getBoundingClientRect();
            const { innerWidth, innerHeight } = window;
            const verticalDistance = this.translateY > 0
                ? this.translateY + height / 2
                : this.translateY - height / 2;
            const maxVerticalDistance = innerHeight / 2;
            const horizontalDistance = this.translateX > 0
                ? this.translateX + width / 2
                : this.translateX - width / 2;
            const maxHorizontalDistance = innerWidth / 2;
            if (-maxVerticalDistance > verticalDistance) {
                this.delta.y = -maxVerticalDistance + height / 2 - this.offset.y;
            }
            if (maxVerticalDistance < verticalDistance) {
                this.delta.y = maxVerticalDistance - height / 2 - this.offset.y;
            }
            if (-maxHorizontalDistance > horizontalDistance) {
                this.delta.x = -maxHorizontalDistance + width / 2 - this.offset.x;
            }
            if (maxHorizontalDistance < horizontalDistance) {
                this.delta.x = maxHorizontalDistance - width / 2 - this.offset.x;
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogDraggableDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DialogDraggableDirective, isStandalone: true, selector: "[dialogDraggable]", inputs: { dialogDragHandle: "dialogDragHandle", dialogDragTarget: "dialogDragTarget", dialogDragEnabled: "dialogDragEnabled", dialogDragOffset: "dialogDragOffset", dragConstraint: "dragConstraint" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogDraggableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dialogDraggable]',
                    standalone: true,
                }]
        }], propDecorators: { dialogDragHandle: [{
                type: Input
            }], dialogDragTarget: [{
                type: Input
            }], dialogDragEnabled: [{
                type: Input
            }], dialogDragOffset: [{
                type: Input
            }], dragConstraint: [{
                type: Input
            }] } });

const DIALOG_DOCUMENT_REF = new InjectionToken('A reference to the document. Useful for iframes that want appends to parent window', {
    providedIn: 'root',
    factory() {
        return inject(DOCUMENT);
    },
});
function defaultGlobalConfig() {
    return {
        id: undefined,
        container: inject(DIALOG_DOCUMENT_REF).body,
        backdrop: true,
        closeButton: true,
        enableClose: {
            backdrop: true,
            escape: true,
        },
        draggable: false,
        dragConstraint: 'none',
        resizable: false,
        size: 'md',
        windowClass: undefined,
        width: undefined,
        minWidth: undefined,
        maxWidth: undefined,
        height: undefined,
        minHeight: undefined,
        maxHeight: undefined,
        data: undefined,
        vcr: undefined,
        sizes: {
            sm: {
                height: 'auto',
                width: '400px',
            },
            md: {
                height: 'auto',
                width: '560px',
            },
            lg: {
                height: 'auto',
                width: '800px',
            },
            fullScreen: {
                height: '100%',
                width: '100%',
            },
        },
        onClose: undefined,
        onOpen: undefined,
    };
}
const GLOBAL_DIALOG_CONFIG = new InjectionToken('Global dialog config token', {
    providedIn: 'root',
    factory() {
        return defaultGlobalConfig();
    },
});
const NODES_TO_INSERT = new InjectionToken('Nodes inserted into the dialog');
function provideDialogConfig(config) {
    return makeEnvironmentProviders([
        {
            provide: GLOBAL_DIALOG_CONFIG,
            useFactory() {
                const defaultConfig = defaultGlobalConfig();
                return {
                    ...defaultConfig,
                    ...config,
                    sizes: {
                        ...defaultConfig.sizes,
                        ...config.sizes,
                    },
                };
            },
        },
    ]);
}
function provideDialogDocRef(doc) {
    return makeEnvironmentProviders([
        {
            provide: DIALOG_DOCUMENT_REF,
            useValue: doc,
        },
    ]);
}

class DialogComponent {
    constructor() {
        this.dialogRef = inject(InternalDialogRef);
        this.config = this.dialogRef.config;
        this.size = this.config.sizes?.[this.config.size || 'md'];
        this.styles = {
            width: coerceCssPixelValue(this.config.width || this.size?.width),
            minWidth: coerceCssPixelValue(this.config.minWidth || this.size?.minWidth),
            maxWidth: coerceCssPixelValue(this.config.maxWidth || this.size?.maxWidth),
            height: coerceCssPixelValue(this.config.height || this.size?.height),
            minHeight: coerceCssPixelValue(this.config.minHeight || this.size?.minHeight),
            maxHeight: coerceCssPixelValue(this.config.maxHeight || this.size?.maxHeight),
        };
        this.destroy$ = new Subject();
        this.nodes = inject(NODES_TO_INSERT);
        this.document = inject(DOCUMENT);
        this.host = inject(ElementRef).nativeElement;
        this.NgxDialog = inject(NgxDialog);
        this.nodes.forEach((node) => this.host.appendChild(node));
        if (this.config.windowClass) {
            const classNames = this.config.windowClass.split(/\s/).filter((x) => x);
            classNames.forEach((name) => this.host.classList.add(name));
        }
        if (!this.config.id) {
            const id = `dialog-${crypto.randomUUID()}`;
            this.config.id = id;
            this.dialogRef.updateConfig({ id });
            if (isDevMode()) {
                console.warn(`[@ngx/dialog]: Dialog id is not provided, generated id is ${id}, providing an id is recommended to prevent unexpected multiple behavior`);
            }
        }
        this.host.id = this.config.id;
    }
    ngOnInit() {
        const backdrop = this.config.backdrop
            ? this.backdrop.nativeElement
            : this.document.body;
        const dialogElement = this.dialogElement.nativeElement;
        const backdropClick$ = fromEvent(backdrop, 'click', {
            capture: true,
        }).pipe(filter(({ target }) => !dialogElement.contains(target)));
        backdropClick$.pipe(takeUntil(this.destroy$)).subscribe(this.dialogRef.backdropClick$);
        const closeConfig = typeof this.config.enableClose === 'boolean' ||
            this.config.enableClose === 'onlyLastStrategy'
            ? {
                escape: this.config.enableClose,
                backdrop: this.config.enableClose,
            }
            : this.config.enableClose;
        merge(fromEvent(this.document.body, 'keyup').pipe(filter(({ key }) => key === 'Escape'), map(() => closeConfig.escape)), backdropClick$.pipe(map(() => closeConfig.backdrop)))
            .pipe(takeUntil(this.destroy$), filter((strategy) => {
            if (!strategy)
                return false;
            if (strategy === 'onlyLastStrategy') {
                return this.NgxDialog.isLastOpened(this.config.id);
            }
            return true;
        }))
            .subscribe(() => this.closeDialog());
        this.nodes.forEach((node) => dialogElement.appendChild(node));
        if (this.config.zIndexGetter) {
            const zIndex = this.config.zIndexGetter().toString();
            backdrop.style.setProperty('--dialog-backdrop-z-index', zIndex);
        }
    }
    reset(offset) {
        if (this.config.draggable) {
            this.draggable.reset(offset);
        }
    }
    closeDialog() {
        this.dialogRef.close();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DialogComponent, isStandalone: true, selector: "ngx-dialog", viewQueries: [{ propertyName: "backdrop", first: true, predicate: ["backdrop"], descendants: true, static: true }, { propertyName: "dialogElement", first: true, predicate: ["dialog"], descendants: true, static: true }, { propertyName: "draggable", first: true, predicate: DialogDraggableDirective, descendants: true }], ngImport: i0, template: `
    <div
      #backdrop
      class="ngx-dialog-backdrop"
      [hidden]="!config.backdrop"
      [class.ngx-dialog-backdrop-visible]="config.backdrop"
    >
      <div
        #dialog
        class="ngx-dialog-content"
        [class.ngx-dialog-resizable]="config.resizable"
        [ngStyle]="styles"
        role="dialog"
      >
        <div
          *ngIf="config.draggable"
          class="ngx-drag-marker"
          dialogDraggable
          [dialogDragEnabled]="true"
          [dialogDragTarget]="dialog"
          [dragConstraint]="config.dragConstraint"
        ></div>
        <div
          *ngIf="config.closeButton"
          class="ngx-close-dialog"
          (click)="closeDialog()"
        >
          <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
            />
          </svg>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [".ngx-dialog-content{display:flex;flex-direction:column;overflow:hidden;position:relative;animation:dialog-open .4s cubic-bezier(.25,.8,.25,1);border-radius:var(--dialog-content-border-radius, 4px);box-sizing:border-box;box-shadow:var(--dialog-content-box-shadow, 0px 11px 19px rgba(15, 20, 58, .14));background:var(--dialog-content-bg, #fff);width:auto;max-width:100%;height:auto;max-height:100%}@keyframes dialog-open{0%{transform:translate(50px)}to{transform:none}}.ngx-dialog-content.ngx-dialog-resizable{resize:both}.ngx-dialog-backdrop{position:fixed;display:flex;align-items:center;justify-content:center;inset:0;height:100%;width:100%;padding:30px;z-index:var(--dialog-backdrop-z-index, 1050);background-color:transparent;animation:dialog-open-backdrop .3s}.ngx-dialog-backdrop.ngx-dialog-backdrop-visible{background:var(--dialog-backdrop-bg, rgba(0, 0, 0, .32))}@keyframes dialog-open-backdrop{0%{opacity:0}to{opacity:1}}.ngx-drag-marker{position:absolute;left:0;top:0;cursor:move;width:100%;height:var(--dialog-drag-marker-height, 10px)}.ngx-close-dialog{display:flex;align-items:center;justify-content:center;position:absolute;cursor:pointer;top:var(--dialog-close-btn-top, 6px);right:var(--dialog-close-btn-right, 10px);width:var(--dialog-close-btn-size, 30px);height:var(--dialog-close-btn-size, 30px);color:var(--dialog-close-btn-color, #5f6368);transition:all .2s ease-in-out;border-radius:50%}.ngx-close-dialog svg{width:var(--dialog-close-svg-size, 12px);height:var(--dialog-close-svg-size, 12px)}.ngx-close-dialog:hover{color:var(--dialog-close-btn-color-hover, #5f6368);background-color:var(--dialog-close-btn-bg-hover, #eee)}body.ngx-dialog-hidden{overflow:hidden}\n"], dependencies: [{ kind: "directive", type: DialogDraggableDirective, selector: "[dialogDraggable]", inputs: ["dialogDragHandle", "dialogDragTarget", "dialogDragEnabled", "dialogDragOffset", "dragConstraint"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-dialog', standalone: true, imports: [DialogDraggableDirective, CommonModule], template: `
    <div
      #backdrop
      class="ngx-dialog-backdrop"
      [hidden]="!config.backdrop"
      [class.ngx-dialog-backdrop-visible]="config.backdrop"
    >
      <div
        #dialog
        class="ngx-dialog-content"
        [class.ngx-dialog-resizable]="config.resizable"
        [ngStyle]="styles"
        role="dialog"
      >
        <div
          *ngIf="config.draggable"
          class="ngx-drag-marker"
          dialogDraggable
          [dialogDragEnabled]="true"
          [dialogDragTarget]="dialog"
          [dragConstraint]="config.dragConstraint"
        ></div>
        <div
          *ngIf="config.closeButton"
          class="ngx-close-dialog"
          (click)="closeDialog()"
        >
          <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
            />
          </svg>
        </div>
      </div>
    </div>
  `, encapsulation: ViewEncapsulation.None, styles: [".ngx-dialog-content{display:flex;flex-direction:column;overflow:hidden;position:relative;animation:dialog-open .4s cubic-bezier(.25,.8,.25,1);border-radius:var(--dialog-content-border-radius, 4px);box-sizing:border-box;box-shadow:var(--dialog-content-box-shadow, 0px 11px 19px rgba(15, 20, 58, .14));background:var(--dialog-content-bg, #fff);width:auto;max-width:100%;height:auto;max-height:100%}@keyframes dialog-open{0%{transform:translate(50px)}to{transform:none}}.ngx-dialog-content.ngx-dialog-resizable{resize:both}.ngx-dialog-backdrop{position:fixed;display:flex;align-items:center;justify-content:center;inset:0;height:100%;width:100%;padding:30px;z-index:var(--dialog-backdrop-z-index, 1050);background-color:transparent;animation:dialog-open-backdrop .3s}.ngx-dialog-backdrop.ngx-dialog-backdrop-visible{background:var(--dialog-backdrop-bg, rgba(0, 0, 0, .32))}@keyframes dialog-open-backdrop{0%{opacity:0}to{opacity:1}}.ngx-drag-marker{position:absolute;left:0;top:0;cursor:move;width:100%;height:var(--dialog-drag-marker-height, 10px)}.ngx-close-dialog{display:flex;align-items:center;justify-content:center;position:absolute;cursor:pointer;top:var(--dialog-close-btn-top, 6px);right:var(--dialog-close-btn-right, 10px);width:var(--dialog-close-btn-size, 30px);height:var(--dialog-close-btn-size, 30px);color:var(--dialog-close-btn-color, #5f6368);transition:all .2s ease-in-out;border-radius:50%}.ngx-close-dialog svg{width:var(--dialog-close-svg-size, 12px);height:var(--dialog-close-svg-size, 12px)}.ngx-close-dialog:hover{color:var(--dialog-close-btn-color-hover, #5f6368);background-color:var(--dialog-close-btn-bg-hover, #eee)}body.ngx-dialog-hidden{overflow:hidden}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { backdrop: [{
                type: ViewChild,
                args: ['backdrop', { static: true }]
            }], dialogElement: [{
                type: ViewChild,
                args: ['dialog', { static: true }]
            }], draggable: [{
                type: ViewChild,
                args: [DialogDraggableDirective, { static: false }]
            }] } });

const OVERFLOW_HIDDEN_CLASS = 'ngx-dialog-hidden';
class NgxDialog {
    constructor() {
        this.appRef = inject(ApplicationRef);
        this.injector = inject(EnvironmentInjector);
        this.document = inject(DIALOG_DOCUMENT_REF);
        this.globalConfig = inject(GLOBAL_DIALOG_CONFIG);
        this.dialogs = [];
        this.hasOpenDialogSub = new BehaviorSubject(false);
        this.hasOpenDialogs$ = this.hasOpenDialogSub.asObservable();
    }
    hasOpenDialogs() {
        return this.dialogs.length > 0;
    }
    isOpen(id) {
        return this.dialogs.some((ref) => ref.id === id);
    }
    isLastOpened(idOrRef) {
        const id = idOrRef instanceof DialogRef ? idOrRef.id : idOrRef;
        return this.dialogs.at(-1)?.id === id;
    }
    closeAll() {
        this.dialogs.forEach((dialog) => dialog.close());
    }
    open(componentOrTemplate, config = {}) {
        const mergedConfig = this.mergeConfig(config);
        if (isComponent(componentOrTemplate)) {
            mergedConfig.id ??= componentOrTemplate.name;
        }
        const dialogRef = new InternalDialogRef({
            config: mergedConfig,
            backdropClick$: new Subject(),
        });
        const attachOptions = isTemplate(componentOrTemplate)
            ? this.openTemplate(componentOrTemplate, dialogRef)
            : isComponent(componentOrTemplate)
                ? this.openComponent(componentOrTemplate, dialogRef)
                : throwMustBeAComponentOrATemplateRef(componentOrTemplate);
        if (this.isOpen(dialogRef.id)) {
            attachOptions.view.destroy();
        }
        mergedConfig.onOpen?.();
        this.dialogs.push(dialogRef);
        this.hasOpenDialogSub.next(true);
        if (this.dialogs.length === 1) {
            this.document.body.classList.add(OVERFLOW_HIDDEN_CLASS);
        }
        return this.attach(dialogRef, attachOptions);
    }
    openTemplate(template, dialogRef) {
        const config = dialogRef.config;
        const context = {
            $implicit: dialogRef,
            config,
        };
        const view = config.vcr?.createEmbeddedView(template, context) || template.createEmbeddedView(context);
        return {
            ref: template,
            view,
            attachToApp: !config.vcr,
        };
    }
    openComponent(Component, dialogRef) {
        const componentRef = createComponent(Component, {
            elementInjector: Injector.create({
                providers: [
                    {
                        provide: DialogRef,
                        useValue: dialogRef,
                    },
                ],
                parent: dialogRef.config.vcr?.injector || this.injector,
            }),
            environmentInjector: this.injector,
        });
        return {
            ref: componentRef,
            view: componentRef.hostView,
            attachToApp: true,
        };
    }
    attach(dialogRef, { ref, view, attachToApp }) {
        const dialog = this.createDialog(dialogRef, view);
        const container = getNativeElement(dialogRef.config.container);
        const hooks = {
            after: new Subject(),
        };
        const onClose = (result) => {
            this.globalConfig.onClose?.();
            this.dialogs = this.dialogs.filter(({ id }) => dialogRef.id !== id);
            this.hasOpenDialogSub.next(this.hasOpenDialogs());
            container.removeChild(dialog.location.nativeElement);
            this.appRef.detachView(dialog.hostView);
            this.appRef.detachView(view);
            dialog.destroy();
            view.destroy();
            hooks.after.next(result);
            hooks.after.complete();
            if (!this.hasOpenDialogs()) {
                this.document.body.classList.remove(OVERFLOW_HIDDEN_CLASS);
            }
        };
        const onReset = (offset) => {
            dialog.instance.reset(offset);
        };
        dialogRef.mutate({
            ref,
            onClose,
            afterClosed$: hooks.after.asObservable(),
            onReset,
        });
        container.appendChild(dialog.location.nativeElement);
        this.appRef.attachView(dialog.hostView);
        if (attachToApp) {
            this.appRef.attachView(view);
        }
        return dialogRef.asDialogRef();
    }
    createDialog(dialogRef, view) {
        return createComponent(DialogComponent, {
            elementInjector: Injector.create({
                providers: [
                    {
                        provide: InternalDialogRef,
                        useValue: dialogRef,
                    },
                    {
                        provide: NODES_TO_INSERT,
                        useValue: view.rootNodes,
                    },
                ],
                parent: this.injector,
            }),
            environmentInjector: this.injector,
        });
    }
    mergeConfig(inlineConfig) {
        return {
            ...this.globalConfig,
            ...inlineConfig,
            sizes: this.globalConfig?.sizes,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxDialog, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxDialog, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxDialog, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
function throwMustBeAComponentOrATemplateRef(value) {
    throw new TypeError(`Dialog must receive a Component or a TemplateRef, but this has been passed instead: ${value}`);
}
function getNativeElement(element) {
    return element instanceof ElementRef ? element.nativeElement : element;
}
function isTemplate(tplOrComp) {
    return tplOrComp instanceof TemplateRef;
}
function isComponent(tplOrComp) {
    return !isTemplate(tplOrComp) && typeof tplOrComp === 'function';
}

class DialogCloseDirective {
    constructor() {
        this.host = inject(ElementRef);
        this.NgxDialog = inject(NgxDialog);
        this.ref = inject(DialogRef, { optional: true });
    }
    ngOnInit() {
        this.ref = this.ref || this.getRefFromParent();
    }
    onClose() {
        this.ref?.close(this.dialogClose);
    }
    getRefFromParent() {
        let parent = this.host.nativeElement.parentElement;
        while (parent && parent.localName !== 'ngx-dialog') {
            parent = parent.parentElement;
        }
        return parent
            ? this.NgxDialog.dialogs.find(({ id }) => id === parent?.id)
            : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogCloseDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DialogCloseDirective, isStandalone: true, selector: "[dialogClose]", inputs: { dialogClose: "dialogClose" }, host: { listeners: { "click": "onClose()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dialogClose]',
                    standalone: true,
                }]
        }], propDecorators: { dialogClose: [{
                type: Input
            }], onClose: [{
                type: HostListener,
                args: ['click']
            }] } });

class CloseAllDialogsDirective {
    constructor() {
        this.NgxDialog = inject(NgxDialog);
    }
    onClose() {
        this.NgxDialog.closeAll();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CloseAllDialogsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: CloseAllDialogsDirective, isStandalone: true, selector: "[closeAllDialogs]", host: { listeners: { "click": "onClose()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CloseAllDialogsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[closeAllDialogs]',
                    standalone: true,
                }]
        }], propDecorators: { onClose: [{
                type: HostListener,
                args: ['click']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { CloseAllDialogsDirective, DialogCloseDirective, DialogRef, NgxDialog, provideDialogConfig, provideDialogDocRef };
//# sourceMappingURL=ngx-eagle-dialog.mjs.map
