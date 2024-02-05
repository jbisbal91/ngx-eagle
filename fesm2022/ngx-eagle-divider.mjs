import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { NgIf } from '@angular/common';

class DividerComponent {
    constructor() {
        this.ngxText = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DividerComponent, isStandalone: true, selector: "ngx-divider", inputs: { ngxText: "ngxText" }, host: { classAttribute: "ngx-divider" }, ngImport: i0, template: `
    <ng-container>
      <span *ngIf="ngxText">{{ ngxText }}</span>
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-divider',
                    template: `
    <ng-container>
      <span *ngIf="ngxText">{{ ngxText }}</span>
    </ng-container>
  `,
                    standalone: true,
                    host: {
                        class: 'ngx-divider',
                    },
                    imports: [NgIf],
                }]
        }], propDecorators: { ngxText: [{
                type: Input
            }] } });

class DividerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DividerModule, imports: [DividerComponent], exports: [DividerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [DividerComponent],
                    imports: [DividerComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DividerComponent, DividerModule };
//# sourceMappingURL=ngx-eagle-divider.mjs.map
