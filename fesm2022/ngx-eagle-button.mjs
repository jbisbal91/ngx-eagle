import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';
import * as i1 from 'ngx-eagle/core/services';

class ButtonDirective {
    constructor(renderer, elementRef, colorConverter) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colorConverter = colorConverter;
        this.ngxFillMode = 'filled';
        this.ngxRounded = 'medium';
        this.ngxSize = 'medium';
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('ngxFillMode')) {
            this.setColorByMode(this.ngxColor ? this.ngxColor : '#1890FF');
        }
        if (changes.hasOwnProperty('ngxColor')) {
            this.setColorByMode(this.ngxColor);
        }
    }
    ngOnInit() {
        if (!this.ngxColor) {
            this.setColorByMode('#1890FF');
        }
    }
    setColorByMode(color) {
        var colorContrast;
        if (typeof color === 'string') {
            colorContrast =
                color !== '#1890FF'
                    ? this.colorConverter.contrastingColors(color)
                    : { backgroundColor: '#1890FF', overlayColor: '#ffffff' };
        }
        if (typeof color === 'object') {
            colorContrast = color;
        }
        switch (this.ngxFillMode) {
            case 'filled':
                this.setColor(colorContrast.backgroundColor, colorContrast.overlayColor, 'transparent');
                break;
            case 'outlined':
                this.setColor('transparent', colorContrast.backgroundColor, colorContrast.backgroundColor);
                break;
            case 'elevated':
                this.setColor(colorContrast.backgroundColor, colorContrast.overlayColor, 'transparent');
                break;
            case 'text':
                this.setColor('transparent', colorContrast.backgroundColor, 'transparent');
                break;
        }
    }
    setColor(backgroundColor, color, borderColor) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', backgroundColor);
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', borderColor);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.ColorConverter }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ButtonDirective, isStandalone: true, selector: "button[ngx-button]", inputs: { ngxColor: "ngxColor", ngxFillMode: "ngxFillMode", ngxRounded: "ngxRounded", ngxSize: "ngxSize" }, host: { properties: { "class.ngx-button-sm": "ngxSize === 'small'", "class.ngx-button-md": "ngxSize === 'medium'", "class.ngx-button-lg": "ngxSize === 'large'", "class.ngx-rounded-sm": "ngxRounded === 'small'", "class.ngx-rounded-md": "ngxRounded === 'medium'", "class.ngx-rounded-lg": "ngxRounded === 'large'", "class.ngx-rounded-full": "ngxRounded === 'full'", "class.ngx-button-filled": "ngxFillMode === 'filled'", "class.ngx-button-outlined": "ngxFillMode === 'outlined'", "class.ngx-button-text": "ngxFillMode === 'text'", "class.ngx-button-elevated": "ngxFillMode === 'elevated'" }, classAttribute: "ngx-button" }, usesOnChanges: true, ngImport: i0 }); }
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
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.ColorConverter }]; }, propDecorators: { ngxColor: [{
                type: Input
            }], ngxFillMode: [{
                type: Input
            }], ngxRounded: [{
                type: Input
            }], ngxSize: [{
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
