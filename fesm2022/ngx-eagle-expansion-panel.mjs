import * as i0 from '@angular/core';
import { EventEmitter, booleanAttribute, Component, Output, Input, ChangeDetectionStrategy, ContentChildren, NgModule } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Guid } from 'ngx-eagle/core/services';
import { Subscription } from 'rxjs';

class ExpansionPanelComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.ngxActiveChange = new EventEmitter();
        this.id = Guid.create();
        this.disabled = false;
        this.expanded = false;
        this.hideToggle = false;
        this.ngxColor = '';
        this.lastExP = false;
        this.disabled = this.elementRef?.nativeElement.hasAttribute('disabled');
        this.hideToggle = this.elementRef?.nativeElement.hasAttribute('hideToggle');
    }
    expand() {
        if (this.disabled) {
            return;
        }
        const expansionPanel = new ExpansionPanelComponent();
        expansionPanel.expanded = !this.expanded;
        expansionPanel.ngxLabel = this.ngxLabel;
        expansionPanel.disabled = this.disabled;
        expansionPanel.id = this.id;
        this.ngxActiveChange.emit(expansionPanel);
    }
    typeOf(value) {
        return typeof value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: ExpansionPanelComponent, isStandalone: true, selector: "ngx-expansion-panel", inputs: { disabled: ["disabled", "disabled", booleanAttribute], expanded: ["expanded", "expanded", booleanAttribute], hideToggle: ["hideToggle", "hideToggle", booleanAttribute], ngxLabel: "ngxLabel" }, outputs: { ngxActiveChange: "ngxActiveChange" }, host: { classAttribute: "ngx-expansion-panel" }, ngImport: i0, template: `
    <div
      class="exp-panel"
      [class.card-type]="ngxType && ngxType === 'card'"
      [class.bordered-type]="ngxType && ngxType === 'bordered'"
      [class.border-bottom-exp-item]="ngxType === 'bordered' && lastExP"
      [style.backgroundColor]="ngxColor"
    >
      <div
        (click)="expand()"
        class="header"
        [class.border-bottom-header]="expanded && ngxType !== 'default'"
        [class.expand-icon-position]="ngxExpandIconPosition === 'left'"
        [class.disabled]="disabled"
      >
        <span *ngIf="typeOf(ngxLabel) === 'string'">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="typeOf(ngxLabel) === 'object'"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
        <span
          *ngIf="!hideToggle"
          class="arrow flex"
          [ngClass]="
            expanded
              ? ngxExpandIconPosition == 'left'
                ? 'rotate-left'
                : 'rotate-right'
              : ngxExpandIconPosition == 'left'
              ? 'no-rotate-left'
              : 'no-rotate-right'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <div
        [class.content]="ngxType !== 'default'"
        [class.content-default]="ngxType === 'default'"
        *ngIf="expanded"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-expansion-panel',
                    template: `
    <div
      class="exp-panel"
      [class.card-type]="ngxType && ngxType === 'card'"
      [class.bordered-type]="ngxType && ngxType === 'bordered'"
      [class.border-bottom-exp-item]="ngxType === 'bordered' && lastExP"
      [style.backgroundColor]="ngxColor"
    >
      <div
        (click)="expand()"
        class="header"
        [class.border-bottom-header]="expanded && ngxType !== 'default'"
        [class.expand-icon-position]="ngxExpandIconPosition === 'left'"
        [class.disabled]="disabled"
      >
        <span *ngIf="typeOf(ngxLabel) === 'string'">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="typeOf(ngxLabel) === 'object'"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
        <span
          *ngIf="!hideToggle"
          class="arrow flex"
          [ngClass]="
            expanded
              ? ngxExpandIconPosition == 'left'
                ? 'rotate-left'
                : 'rotate-right'
              : ngxExpandIconPosition == 'left'
              ? 'no-rotate-left'
              : 'no-rotate-right'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <div
        [class.content]="ngxType !== 'default'"
        [class.content-default]="ngxType === 'default'"
        *ngIf="expanded"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
                    standalone: true,
                    host: {
                        class: 'ngx-expansion-panel',
                    },
                    imports: [NgClass, NgIf, NgTemplateOutlet],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { ngxActiveChange: [{
                type: Output
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], expanded: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hideToggle: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxLabel: [{
                type: Input
            }] } });

class AccordionComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.multi = false;
        this.ngxColor = '';
        this.ngxExpandIconPosition = 'left';
        this.ngxType = 'default';
        this.subscription = new Subscription();
    }
    ngOnChanges() {
        setTimeout(() => {
            this.setProp();
        });
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.expansionPanels.last.lastExP = true;
        setTimeout(() => {
            this.setProp();
        });
    }
    setProp() {
        if (this.expansionPanels) {
            this.expansionPanels.forEach((exPanel) => {
                exPanel.ngxColor = this.ngxColor;
                exPanel.ngxType = this.ngxType;
                exPanel.ngxExpandIconPosition = this.ngxExpandIconPosition;
            });
        }
    }
    ngAfterContentInit() {
        this.expansionPanels.forEach((ep) => {
            this.subscription.add(ep.ngxActiveChange.subscribe((value) => {
                this.expand(value);
            }));
        });
    }
    expand(component) {
        this.expansionPanels.forEach((ep) => {
            if (ep.id === component.id) {
                ep.expanded = !ep.expanded;
            }
            else {
                if (!this.multi) {
                    ep.expanded = false;
                }
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: AccordionComponent, isStandalone: true, selector: "ngx-accordion", inputs: { multi: ["multi", "multi", booleanAttribute], ngxColor: "ngxColor", ngxExpandIconPosition: "ngxExpandIconPosition", ngxType: "ngxType" }, queries: [{ propertyName: "expansionPanels", predicate: ExpansionPanelComponent }], usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-accordion',
                    template: `<ng-content></ng-content>`,
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { multi: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxColor: [{
                type: Input
            }], ngxExpandIconPosition: [{
                type: Input
            }], ngxType: [{
                type: Input
            }], expansionPanels: [{
                type: ContentChildren,
                args: [ExpansionPanelComponent]
            }] } });

class ExpansionPanelModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, imports: [AccordionComponent, ExpansionPanelComponent], exports: [AccordionComponent, ExpansionPanelComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [AccordionComponent, ExpansionPanelComponent],
                    imports: [AccordionComponent, ExpansionPanelComponent],
                }]
        }] });

const AccordionType = ['card', 'bordered', 'default'];
const AccordionExpandIconPosition = ['left', 'right'];

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, ExpansionPanelComponent, ExpansionPanelModule };
//# sourceMappingURL=ngx-eagle-expansion-panel.mjs.map
