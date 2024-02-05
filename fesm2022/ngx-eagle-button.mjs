import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';

class ButtonDirective {
    constructor() {
        this.ngxSize = 'medium';
        this.ngxRounded = 'medium';
        this.ngxFillMode = 'elevated';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ButtonDirective, isStandalone: true, selector: "button[ngx-button]", inputs: { ngxSize: "ngxSize", ngxRounded: "ngxRounded", ngxFillMode: "ngxFillMode" }, host: { properties: { "class.ngx-button-sm": "ngxSize === 'small'", "class.ngx-button-md": "ngxSize === 'medium'", "class.ngx-button-lg": "ngxSize === 'large'", "class.ngx-rounded-sm": "ngxRounded === 'small'", "class.ngx-rounded-md": "ngxRounded === 'medium'", "class.ngx-rounded-lg": "ngxRounded === 'large'", "class.ngx-rounded-full": "ngxRounded === 'full'", "class.ngx-button-filled": "ngxFillMode === 'filled'", "class.ngx-button-outlined": "ngxFillMode === 'outlined'", "class.ngx-button-text": "ngxFillMode === 'text'", "class.ngx-button-elevated": "ngxFillMode === 'elevated'" }, classAttribute: "ngx-button" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[ngx-button]',
                    host: {
                        class: 'ngx-button',
                        '[class.ngx-button-sm]': `ngxSize === 'small'`,
                        '[class.ngx-button-md]': `ngxSize === 'medium'`,
                        '[class.ngx-button-lg]': `ngxSize === 'large'`,
                        '[class.ngx-rounded-sm]': `ngxRounded === 'small'`,
                        '[class.ngx-rounded-md]': `ngxRounded === 'medium'`,
                        '[class.ngx-rounded-lg]': `ngxRounded === 'large'`,
                        '[class.ngx-rounded-full]': `ngxRounded === 'full'`,
                        '[class.ngx-button-filled]': `ngxFillMode === 'filled'`,
                        '[class.ngx-button-outlined]': `ngxFillMode === 'outlined'`,
                        '[class.ngx-button-text]': `ngxFillMode === 'text'`,
                        '[class.ngx-button-elevated]': `ngxFillMode === 'elevated'`,
                    },
                    standalone: true,
                }]
        }], propDecorators: { ngxSize: [{
                type: Input
            }], ngxRounded: [{
                type: Input
            }], ngxFillMode: [{
                type: Input
            }] } });

class ButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, imports: [ButtonDirective], exports: [ButtonDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ButtonDirective],
                    imports: [ButtonDirective],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonDirective, ButtonModule };
//# sourceMappingURL=ngx-eagle-button.mjs.map
