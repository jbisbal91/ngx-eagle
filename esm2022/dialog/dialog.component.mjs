import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, inject, isDevMode, ViewChild, ViewEncapsulation, } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { InternalDialogRef } from './dialog-ref';
import { NgxDialog } from './dialog.service';
import { coerceCssPixelValue } from './dialog.utils';
import { DialogDraggableDirective } from './draggable.directive';
import { NODES_TO_INSERT } from './providers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DialogComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25neC1lYWdsZS9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBR1QsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQWMsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUE4QzlDLE1BQU0sT0FBTyxlQUFlO0lBb0MxQjtRQW5DQSxjQUFTLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEMsV0FBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBRXZCLFNBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQzdELFdBQU0sR0FBRztZQUNQLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMs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QUFJLFdBQ1AsQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLENBQUMsWUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DVCxpQkFFYyxpQkFBaUIsQ0FBQyxJQUFJOzBFQXFCN0IsUUFBUTtzQkFEZixTQUFTO3VCQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSS9CLGFBQWE7c0JBRHBCLFNBQVM7dUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFJN0IsU0FBUztzQkFEaEIsU0FBUzt1QkFBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBpbmplY3QsXHJcbiAgaXNEZXZNb2RlLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBJbnRlcm5hbERpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XHJcbmltcG9ydCB7IE5neERpYWxvZyB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBjb2VyY2VDc3NQaXhlbFZhbHVlIH0gZnJvbSAnLi9kaWFsb2cudXRpbHMnO1xyXG5pbXBvcnQgeyBEaWFsb2dEcmFnZ2FibGVEaXJlY3RpdmUsIERyYWdPZmZzZXQgfSBmcm9tICcuL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOT0RFU19UT19JTlNFUlQgfSBmcm9tICcuL3Byb3ZpZGVycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kaWFsb2cnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0RpYWxvZ0RyYWdnYWJsZURpcmVjdGl2ZSwgQ29tbW9uTW9kdWxlXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICAjYmFja2Ryb3BcclxuICAgICAgY2xhc3M9XCJuZ3gtZGlhbG9nLWJhY2tkcm9wXCJcclxuICAgICAgW2hpZGRlbl09XCIhY29uZmlnLmJhY2tkcm9wXCJcclxuICAgICAgW2NsYXNzLm5neC1kaWFsb2ctYmFja2Ryb3AtdmlzaWJsZV09XCJjb25maWcuYmFja2Ryb3BcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgI2RpYWxvZ1xyXG4gICAgICAgIGNsYXNzPVwibmd4LWRpYWxvZy1jb250ZW50XCJcclxuICAgICAgICBbY2xhc3Mubmd4LWRpYWxvZy1yZXNpemFibGVdPVwiY29uZmlnLnJlc2l6YWJsZVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwic3R5bGVzXCJcclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICpuZ0lmPVwiY29uZmlnLmRyYWdnYWJsZVwiXHJcbiAgICAgICAgICBjbGFzcz1cIm5neC1kcmFnLW1hcmtlclwiXHJcbiAgICAgICAgICBkaWFsb2dEcmFnZ2FibGVcclxuICAgICAgICAgIFtkaWFsb2dEcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAgICAgIFtkaWFsb2dEcmFnVGFyZ2V0XT1cImRpYWxvZ1wiXHJcbiAgICAgICAgICBbZHJhZ0NvbnN0cmFpbnRdPVwiY29uZmlnLmRyYWdDb25zdHJhaW50XCJcclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgKm5nSWY9XCJjb25maWcuY2xvc2VCdXR0b25cIlxyXG4gICAgICAgICAgY2xhc3M9XCJuZ3gtY2xvc2UtZGlhbG9nXCJcclxuICAgICAgICAgIChjbGljayk9XCJjbG9zZURpYWxvZygpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzI5LjI2OTMzIDMyOVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBkPVwibTE5NC44MDA3ODEgMTY0Ljc2OTUzMSAxMjguMjEwOTM4LTEyOC4yMTQ4NDNjOC4zNDM3NS04LjMzOTg0NCA4LjM0Mzc1LTIxLjgyNDIxOSAwLTMwLjE2NDA2My04LjMzOTg0NC04LjMzOTg0NC0yMS44MjQyMTktOC4zMzk4NDQtMzAuMTY0MDYzIDBsLTEyOC4yMTQ4NDQgMTI4LjIxNDg0NC0xMjguMjEwOTM3LTEyOC4yMTQ4NDRjLTguMzQzNzUtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjNsMTI4LjIxMDkzOCAxMjguMjE0ODQzLTEyOC4yMTA5MzggMTI4LjIxNDg0NGMtOC4zNDM3NSA4LjMzOTg0NC04LjM0Mzc1IDIxLjgyNDIxOSAwIDMwLjE2NDA2MyA0LjE1NjI1IDQuMTYwMTU2IDkuNjIxMDk0IDYuMjUgMTUuMDgyMDMyIDYuMjUgNS40NjA5MzcgMCAxMC45MjE4NzUtMi4wODk4NDQgMTUuMDgyMDMxLTYuMjVsMTI4LjIxMDkzNy0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQgMTI4LjIxNDg0NGM0LjE2MDE1NiA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc0LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1IDguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjN6bTAgMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlVXJsczogW2AuL2RpYWxvZy5jb21wb25lbnQuc2Nzc2BdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgZGlhbG9nUmVmID0gaW5qZWN0KEludGVybmFsRGlhbG9nUmVmKTtcclxuICBjb25maWcgPSB0aGlzLmRpYWxvZ1JlZi5jb25maWc7XHJcblxyXG4gIHByaXZhdGUgc2l6ZSA9IHRoaXMuY29uZmlnLnNpemVzPy5bdGhpcy5jb25maWcuc2l6ZSB8fCAnbWQnXTtcclxuICBzdHlsZXMgPSB7XHJcbiAgICB3aWR0aDogY29lcmNlQ3NzUGl4ZWxWYWx1ZSh0aGlzLmNvbmZpZy53aWR0aCB8fCB0aGlzLnNpemU/LndpZHRoKSxcclxuICAgIG1pbldpZHRoOiBjb2VyY2VDc3NQaXhlbFZhbHVlKHRoaXMuY29uZmlnLm1pbldpZHRoIHx8IHRoaXMuc2l6ZT8ubWluV2lkdGgpLFxyXG4gICAgbWF4V2lkdGg6IGNvZXJjZUNzc1BpeGVsVmFsdWUodGhpcy5jb25maWcubWF4V2lkdGggfHwgdGhpcy5zaXplPy5tYXhXaWR0aCksXHJcbiAgICBoZWlnaHQ6IGNvZXJjZUNzc1BpeGVsVmFsdWUodGhpcy5jb25maWcuaGVpZ2h0IHx8IHRoaXMuc2l6ZT8uaGVpZ2h0KSxcclxuICAgIG1pbkhlaWdodDogY29lcmNlQ3NzUGl4ZWxWYWx1ZShcclxuICAgICAgdGhpcy5jb25maWcubWluSGVpZ2h0IHx8IHRoaXMuc2l6ZT8ubWluSGVpZ2h0XHJcbiAgICApLFxyXG4gICAgbWF4SGVpZ2h0OiBjb2VyY2VDc3NQaXhlbFZhbHVlKFxyXG4gICAgICB0aGlzLmNvbmZpZy5tYXhIZWlnaHQgfHwgdGhpcy5zaXplPy5tYXhIZWlnaHRcclxuICAgICksXHJcbiAgfTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmFja2Ryb3AnLCB7IHN0YXRpYzogdHJ1ZSB9KVxyXG4gIHByaXZhdGUgYmFja2Ryb3AhOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZGlhbG9nJywgeyBzdGF0aWM6IHRydWUgfSlcclxuICBwcml2YXRlIGRpYWxvZ0VsZW1lbnQhOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgQFZpZXdDaGlsZChEaWFsb2dEcmFnZ2FibGVEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHByaXZhdGUgZHJhZ2dhYmxlITogRGlhbG9nRHJhZ2dhYmxlRGlyZWN0aXZlO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBub2RlcyA9IGluamVjdChOT0RFU19UT19JTlNFUlQpO1xyXG5cclxuICBwcml2YXRlIGRvY3VtZW50ID0gaW5qZWN0KERPQ1VNRU5UKTtcclxuICBwcml2YXRlIGhvc3Q6IEhUTUxFbGVtZW50ID0gaW5qZWN0KEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgTmd4RGlhbG9nID0gaW5qZWN0KE5neERpYWxvZyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB0aGlzLmhvc3QuYXBwZW5kQ2hpbGQobm9kZSkpO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLndpbmRvd0NsYXNzKSB7XHJcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSB0aGlzLmNvbmZpZy53aW5kb3dDbGFzcy5zcGxpdCgvXFxzLykuZmlsdGVyKCh4KSA9PiB4KTtcclxuICAgICAgY2xhc3NOYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZChuYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5pZCkge1xyXG4gICAgICBjb25zdCBpZCA9IGBkaWFsb2ctJHtjcnlwdG8ucmFuZG9tVVVJRCgpfWA7XHJcbiAgICAgIHRoaXMuY29uZmlnLmlkID0gaWQ7XHJcbiAgICAgIHRoaXMuZGlhbG9nUmVmLnVwZGF0ZUNvbmZpZyh7IGlkIH0pO1xyXG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBgW0BuZ3gvZGlhbG9nXTogRGlhbG9nIGlkIGlzIG5vdCBwcm92aWRlZCwgZ2VuZXJhdGVkIGlkIGlzICR7aWR9LCBwcm92aWRpbmcgYW4gaWQgaXMgcmVjb21tZW5kZWQgdG8gcHJldmVudCB1bmV4cGVjdGVkIG11bHRpcGxlIGJlaGF2aW9yYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaG9zdC5pZCA9IHRoaXMuY29uZmlnLmlkO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBiYWNrZHJvcCA9IHRoaXMuY29uZmlnLmJhY2tkcm9wXHJcbiAgICAgID8gdGhpcy5iYWNrZHJvcC5uYXRpdmVFbGVtZW50XHJcbiAgICAgIDogdGhpcy5kb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgZGlhbG9nRWxlbWVudCA9IHRoaXMuZGlhbG9nRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IGJhY2tkcm9wQ2xpY2skID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KGJhY2tkcm9wLCAnY2xpY2snLCB7XHJcbiAgICAgIGNhcHR1cmU6IHRydWUsXHJcbiAgICB9KS5waXBlKGZpbHRlcigoeyB0YXJnZXQgfSkgPT4gIWRpYWxvZ0VsZW1lbnQuY29udGFpbnModGFyZ2V0IGFzIEVsZW1lbnQpKSk7XHJcblxyXG4gICAgYmFja2Ryb3BDbGljayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh0aGlzLmRpYWxvZ1JlZi5iYWNrZHJvcENsaWNrJCk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VDb25maWcgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5jb25maWcuZW5hYmxlQ2xvc2UgPT09ICdib29sZWFuJyB8fFxyXG4gICAgICB0aGlzLmNvbmZpZy5lbmFibGVDbG9zZSA9PT0gJ29ubHlMYXN0U3RyYXRlZ3knXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGVzY2FwZTogdGhpcy5jb25maWcuZW5hYmxlQ2xvc2UsXHJcbiAgICAgICAgICAgIGJhY2tkcm9wOiB0aGlzLmNvbmZpZy5lbmFibGVDbG9zZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHRoaXMuY29uZmlnLmVuYWJsZUNsb3NlO1xyXG4gICAgbWVyZ2UoXHJcbiAgICAgIGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pih0aGlzLmRvY3VtZW50LmJvZHksICdrZXl1cCcpLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKCh7IGtleSB9KSA9PiBrZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgICBtYXAoKCkgPT4gY2xvc2VDb25maWcuZXNjYXBlKVxyXG4gICAgICApLFxyXG4gICAgICBiYWNrZHJvcENsaWNrJC5waXBlKG1hcCgoKSA9PiBjbG9zZUNvbmZpZy5iYWNrZHJvcCkpXHJcbiAgICApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICBmaWx0ZXIoKHN0cmF0ZWd5KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0cmF0ZWd5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICBpZiAoc3RyYXRlZ3kgPT09ICdvbmx5TGFzdFN0cmF0ZWd5Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5OZ3hEaWFsb2cuaXNMYXN0T3BlbmVkKHRoaXMuY29uZmlnLmlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlRGlhbG9nKCkpO1xyXG4gICAgdGhpcy5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiBkaWFsb2dFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpKTtcclxuICAgIGlmICh0aGlzLmNvbmZpZy56SW5kZXhHZXR0ZXIpIHtcclxuICAgICAgY29uc3QgekluZGV4ID0gdGhpcy5jb25maWcuekluZGV4R2V0dGVyKCkudG9TdHJpbmcoKTtcclxuICAgICAgYmFja2Ryb3Auc3R5bGUuc2V0UHJvcGVydHkoJy0tZGlhbG9nLWJhY2tkcm9wLXotaW5kZXgnLCB6SW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQob2Zmc2V0PzogRHJhZ09mZnNldCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmRyYWdnYWJsZSkge1xyXG4gICAgICB0aGlzLmRyYWdnYWJsZS5yZXNldChvZmZzZXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VEaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19