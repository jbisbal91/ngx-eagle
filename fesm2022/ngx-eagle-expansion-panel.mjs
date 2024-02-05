import * as i0 from '@angular/core';
import { EventEmitter, Component, Output, Input, ContentChildren, NgModule } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

class ExpansionPanelComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.id = '';
        this.disabled = false;
        this.expanded = false;
        this.label = '';
        this.ngxType = 'normal';
    }
    ngOnInit() {
        this.id = this.guid();
    }
    expand() {
        const expansionPanel = new ExpansionPanelComponent();
        expansionPanel.expanded = this.expanded;
        expansionPanel.label = this.label;
        expansionPanel.disabled = this.disabled;
        expansionPanel.id = this.id;
        this.onClick.emit(expansionPanel);
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ExpansionPanelComponent, isStandalone: true, selector: "ngx-expansion-panel", inputs: { disabled: "disabled", label: "label", ngxType: "ngxType" }, outputs: { onClick: "onClick" }, host: { classAttribute: "ngx-expansion-panel" }, ngImport: i0, template: `
    <div
      class="card-epanel mb-4 p-4"
      [class.card-bg]="ngxType === 'card'"
      [ngClass]="{ 'rounded-lg box-shadow': ngxType === 'card' }"
    >
      <div (click)="expand()" class="card-header">
        <span>{{ label }}</span>
        <span class="arrow flex" [ngClass]="expanded ? 'rotate' : 'no-rotate'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <ng-content *ngIf="expanded"></ng-content>
      <div class="divider mt-4" *ngIf="ngxType === 'normal'"></div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-expansion-panel',
                    template: `
    <div
      class="card-epanel mb-4 p-4"
      [class.card-bg]="ngxType === 'card'"
      [ngClass]="{ 'rounded-lg box-shadow': ngxType === 'card' }"
    >
      <div (click)="expand()" class="card-header">
        <span>{{ label }}</span>
        <span class="arrow flex" [ngClass]="expanded ? 'rotate' : 'no-rotate'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <ng-content *ngIf="expanded"></ng-content>
      <div class="divider mt-4" *ngIf="ngxType === 'normal'"></div>
    </div>
  `,
                    standalone: true,
                    host: {
                        class: 'ngx-expansion-panel',
                    },
                    imports: [NgClass, NgIf],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { onClick: [{
                type: Output
            }], disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], ngxType: [{
                type: Input
            }] } });

class AccordionComponent {
    constructor() {
        this.subscription = new Subscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterContentInit() {
        this.expansionPanels.forEach((ep) => {
            this.subscription.add(ep.onClick.subscribe((value) => {
                this.expand(value);
            }));
        });
    }
    expand(component) {
        this.expansionPanels.forEach((ep) => {
            if (ep.id === component.id) {
                ep.expanded = ep.expanded ? false : true;
            }
            else {
                ep.expanded = false;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AccordionComponent, isStandalone: true, selector: "ngx-accordion", queries: [{ propertyName: "expansionPanels", predicate: ExpansionPanelComponent }], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-accordion',
                    template: `<ng-content></ng-content>`,
                    standalone: true
                }]
        }], propDecorators: { expansionPanels: [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, ExpansionPanelComponent, ExpansionPanelModule };
//# sourceMappingURL=ngx-eagle-expansion-panel.mjs.map
