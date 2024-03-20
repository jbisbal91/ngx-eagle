import * as i0 from '@angular/core';
import { booleanAttribute, Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { NgIf } from '@angular/common';

class DividerComponent {
    constructor(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngxDashed = false;
        this.ngxColor = '#6b727c';
        this.ngxOrientation = 'center';
        this.ngxText = '';
        this.ngxType = 'horizontal';
        this.ngxDashed = elementRef.nativeElement.hasAttribute('ngxDashed');
    }
    ngAfterViewInit() {
        if (this.elementRef) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'border-top-color', this.ngxColor);
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.ngxColor);
        }
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: DividerComponent, isStandalone: true, selector: "ngx-divider", inputs: { ngxDashed: ["ngxDashed", "ngxDashed", booleanAttribute], ngxColor: "ngxColor", ngxOrientation: "ngxOrientation", ngxText: "ngxText", ngxType: "ngxType" }, host: { properties: { "class.ngx-divider-orientation-left": "ngxOrientation === 'left'", "class.ngx-divider-orientation-center": "ngxOrientation === 'center'", "class.ngx-divider-orientation-right": "ngxOrientation === 'right'", "class.ngx-divider-dashed": "ngxDashed", "class.ngx-divider-vertical": "ngxType === 'vertical'" }, classAttribute: "ngx-divider" }, ngImport: i0, template: `
    <ng-container>
      <span *ngIf="ngxText && ngxType === 'horizontal'">{{ ngxText }}</span>
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-divider',
                    template: `
    <ng-container>
      <span *ngIf="ngxText && ngxType === 'horizontal'">{{ ngxText }}</span>
    </ng-container>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    host: {
                        class: 'ngx-divider',
                        '[class.ngx-divider-orientation-left]': `ngxOrientation === 'left'`,
                        '[class.ngx-divider-orientation-center]': `ngxOrientation === 'center'`,
                        '[class.ngx-divider-orientation-right]': `ngxOrientation === 'right'`,
                        '[class.ngx-divider-dashed]': 'ngxDashed',
                        '[class.ngx-divider-vertical]': `ngxType === 'vertical'`,
                    },
                    imports: [NgIf],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { ngxDashed: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxColor: [{
                type: Input
            }], ngxOrientation: [{
                type: Input
            }], ngxText: [{
                type: Input
            }], ngxType: [{
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

const DividerOrientation = ['left', 'center', 'right'];
const DividerType = ['horizontal', 'vertical'];

/**
 * Generated bundle index. Do not edit.
 */

export { DividerComponent, DividerModule };
//# sourceMappingURL=ngx-eagle-divider.mjs.map
