import * as i0 from '@angular/core';
import { booleanAttribute, numberAttribute, Component, Optional, Self, Input, ViewChild, NgModule } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import * as i1 from 'ngx-eagle/core/services';
import { Guid } from 'ngx-eagle/core/services';
import { ErrorColor } from 'ngx-eagle/core/types';
import { Subscription, timer } from 'rxjs';
import * as i2 from '@angular/forms';

class NgxOutlinedTextFieldComponent {
    constructor(elementRef, renderer, stylesService, ngControl) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.stylesService = stylesService;
        this.ngControl = ngControl;
        this.autocomplete = '';
        this.disabled = false;
        this.placeholder = '';
        this.rows = 4;
        this.type = 'text';
        this.value = '';
        this._placeholder = '';
        this.errorText = '';
        this.inputPrefixId = Guid.create();
        this.borderColor = '#747775';
        this.onChange = () => { };
        this.onTouched = () => { };
        this.isValid = true;
        this.isFocused = false;
        this.autofilledSubscription = new Subscription();
        this.autofilled = false;
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    ngOnDestroy() {
        this.autofilledSubscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.customProperties();
        this.initialize();
        this.autofillMonitor();
    }
    autofillMonitor() {
        if (this.label) {
            this.autofilledSubscription = timer(0, 100).subscribe(() => {
                this.autofilled = this.inputRef.nativeElement.matches(':autofill');
                if (this.autofilled) {
                    this.applyFocusedStyle();
                }
                else {
                    this.moveLabel();
                }
            });
        }
    }
    customProperties() {
        const styles = {
            'border-color': (value) => {
                this.borderColor = value;
                this.renderer.setStyle(this.containerRef.nativeElement, 'border-color', value);
            },
        };
        for (const style in styles) {
            if (styles.hasOwnProperty(style)) {
                const value = this.stylesService.getStyleValue(this.elementRef.nativeElement, style);
                styles[style](value);
            }
        }
    }
    typeOf(value) {
        return typeof value;
    }
    initialize() {
        this.moveLabel();
        setTimeout(() => {
            this.disabled = this.elementRef?.nativeElement.hasAttribute('disabled');
            this.required = this.elementRef?.nativeElement.hasAttribute('required');
            this.errorText =
                this.elementRef?.nativeElement.attributes['error-text']?.value;
            this.ngControl?.control?.setValue(this.value);
            if (this.type === 'textarea') {
                const width = this.stylesService.getStyleValue(this.elementRef.nativeElement, 'width');
                this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', width);
            }
        });
    }
    writeValue(value) {
        this.value = value;
        this.moveLabel();
        this.onChange(this.value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    moveLabel() {
        if (this.labelRef) {
            const containerHeight = this.containerRef.nativeElement.offsetHeight;
            if ((this.isFocused || this.isValidValue(this.value)) && this.label) {
                this.applyFocusedStyle();
            }
            else {
                this.applyDefaultStyle(containerHeight);
            }
        }
    }
    applyFocusedStyle() {
        this.setLabelStyle('-0.375rem', '0.75rem');
        this._placeholder = this.placeholder;
        this.buildBorderOutlined();
    }
    applyDefaultStyle(containerHeight) {
        const height = (containerHeight - 14) / 2;
        const top = this.type !== 'textarea' ? `${height / 16}rem` : '0.75rem';
        this.setLabelStyle(top, '0.875rem');
        this._placeholder = '';
        this.drawLineTopBorder();
    }
    setLabelStyle(top, fontSize) {
        const left = this.prefix && !this.isFocused && !this.value && !this.autofilled
            ? `${this.prefixWidth()}px`
            : '0.75rem';
        this.renderer.setStyle(this.labelRef?.nativeElement, 'top', top);
        this.renderer.setStyle(this.labelRef?.nativeElement, 'font-size', fontSize);
        this.renderer.setStyle(this.labelRef?.nativeElement, 'left', left);
    }
    prefixWidth() {
        const prefix = document.getElementById(this.inputPrefixId);
        const result = prefix ? prefix?.offsetWidth : 0;
        return result;
    }
    onInput(event) {
        this.value = event.target.value;
        this.ngControl?.control?.setValue(this.value);
        this.validate();
        if (this.label) {
            this.buildBorderOutlined();
        }
        else {
            this.drawLineTopBorder();
        }
    }
    onFocus(event) {
        this.isFocused = true;
        this.moveLabel();
    }
    onBlur(event) {
        this.isFocused = false;
        this.validate();
        this.moveLabel();
    }
    buildBorderOutlined() {
        const percent = this.calculateBorderPercent();
        const background = this.calculateBackgroundStyle(percent);
        this.setBorderTop('unset');
        this.renderer.setStyle(this.containerRef.nativeElement, 'background', background);
    }
    calculateBorderPercent() {
        const containerWidth = this.containerRef.nativeElement.offsetWidth;
        const labelWidth = this.labelRef.nativeElement.offsetWidth;
        return ((labelWidth + 16) / containerWidth) * 100;
    }
    calculateBackgroundStyle(percent) {
        const color = this.isValid ? this.borderColor : ErrorColor;
        return `linear-gradient(to right, ${color} 8px, transparent 8px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
    }
    drawLineTopBorder() {
        const color = this.isValid ? this.borderColor : ErrorColor;
        this.setBorderTop('unset');
        this.renderer.setStyle(this.containerRef.nativeElement, 'background', `linear-gradient(to right, transparent 0%, ${color} 0%) no-repeat top/100% 1px`);
    }
    setBorderTop(border) {
        this.renderer.setStyle(this.containerRef.nativeElement, 'border-top', border);
    }
    validate() {
        this.isValid =
            (!this.pattern && !this.ngControl && !this.required) ||
                this.ngControl?.status?.toLowerCase() === 'valid' ||
                (this.required && this.isValidValue(this.value) && !this.ngControl) ||
                (this.pattern && this.inputRef.nativeElement.validity.valid)
                ? true
                : false;
        const color = this.isValid ? this.borderColor : ErrorColor;
        this.renderer.setStyle(this.containerRef.nativeElement, 'border-color', color);
    }
    isValidValue(value) {
        return value !== undefined && value !== null && value !== '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxOutlinedTextFieldComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.StylesService }, { token: i2.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: NgxOutlinedTextFieldComponent, isStandalone: true, selector: "ngx-outlined-text-field", inputs: { autocomplete: "autocomplete", disabled: ["disabled", "disabled", booleanAttribute], label: "label", pattern: "pattern", placeholder: "placeholder", prefix: "prefix", required: ["required", "required", booleanAttribute], rows: ["rows", "rows", numberAttribute], suffix: "suffix", type: "type", value: "value" }, viewQueries: [{ propertyName: "containerRef", first: true, predicate: ["input_container"], descendants: true }, { propertyName: "labelRef", first: true, predicate: ["input_label"], descendants: true }, { propertyName: "inputRef", first: true, predicate: ["input"], descendants: true }], ngImport: i0, template: "<div #input_container class=\"ngx-outlined-text-field\">\r\n    <label #input_label class=\"ngx-input-label\">{{ label }}</label>\r\n    <div class=\"container\">\r\n      <div\r\n        [id]=\"inputPrefixId\"\r\n        class=\"prefix\"\r\n        *ngIf=\"prefix && type !== 'textarea'\"\r\n      >\r\n        <span *ngIf=\"typeOf(prefix) === 'string'\">{{ prefix }}</span>\r\n        <ng-template\r\n          *ngIf=\"typeOf(prefix) === 'object'\"\r\n          [ngTemplateOutlet]=\"prefix\"\r\n        ></ng-template>\r\n      </div>\r\n      <input\r\n        *ngIf=\"type !== 'textarea'\"\r\n        class=\"ngx-nat-input\"\r\n        #input\r\n        [type]=\"type\"\r\n        [pattern]=\"pattern\"\r\n        [placeholder]=\"_placeholder\"\r\n        [value]=\"value\"\r\n        [disabled]=\"disabled\"\r\n        [required]=\"required\"\r\n        (input)=\"onInput($event)\"\r\n        (focus)=\"onFocus($event)\"\r\n        (blur)=\"onBlur($event)\"\r\n        [autocomplete]=\"autocomplete\"\r\n      />\r\n      <textarea\r\n        class=\"ngx-nat-textarea\"\r\n        *ngIf=\"type === 'textarea'\"\r\n        #input\r\n        [rows]=\"rows\"\r\n        [placeholder]=\"_placeholder\"\r\n        [value]=\"value\"\r\n        [disabled]=\"disabled\"\r\n        [required]=\"required\"\r\n        (input)=\"onInput($event)\"\r\n        (focus)=\"onFocus($event)\"\r\n        (blur)=\"onBlur($event)\"\r\n        [autocomplete]=\"autocomplete\"\r\n      >\r\n      </textarea>\r\n      <div class=\"suffix\" *ngIf=\"suffix && type !== 'textarea'\">\r\n        <span *ngIf=\"typeOf(suffix) === 'string'\">{{ suffix }}</span>\r\n        <ng-template\r\n          *ngIf=\"typeOf(suffix) === 'object'\"\r\n          [ngTemplateOutlet]=\"suffix\"\r\n        ></ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <span class=\"error-text\" *ngIf=\"!isValid && errorText\">{{\r\n      errorText\r\n    }}</span>\r\n  </div>", styles: [":host{display:flex;border-radius:6px;border-color:currentColor;width:-moz-fit-content;width:fit-content}.ngx-outlined-text-field{display:flex;flex-direction:column;max-height:inherit;min-height:inherit;height:inherit;max-width:inherit;min-width:inherit;width:inherit;position:relative;border:1px solid;border-radius:inherit;border-color:inherit}.ngx-outlined-text-field>.container>.ngx-nat-textarea:disabled,.ngx-outlined-text-field>.container>.ngx-nat-input:disabled{opacity:.75;cursor:no-drop}.ngx-outlined-text-field>.ngx-input-label{max-width:max-content;position:absolute;transition:top .3s,font-size .3s;line-height:14px}.container{display:inline-flex;max-height:inherit;min-height:inherit;height:100%;max-width:inherit;min-width:inherit;width:inherit;align-items:center;overflow:hidden}.ngx-outlined-text-field>.container>.prefix,.ngx-outlined-text-field>.container>.suffix{justify-content:center;display:inline-flex;align-items:center;-webkit-user-select:none;user-select:none}.ngx-outlined-text-field>.container>.prefix+.ngx-nat-input{padding-left:0}.ngx-outlined-text-field>.container>.ngx-nat-input+.suffix{padding-right:0}.ngx-outlined-text-field>.container>.ngx-nat-textarea{padding:.75rem;white-space:break-spaces;max-width:inherit;min-width:inherit;width:inherit;max-height:inherit;min-height:inherit;height:inherit}.ngx-outlined-text-field>.container>.ngx-nat-input{padding-left:.75rem;padding-right:.75rem;white-space:nowrap;width:100%;height:100%;min-height:2rem;max-height:3.5rem;overflow:hidden}.ngx-outlined-text-field>.container>.ngx-nat-input[type=search]::-webkit-search-cancel-button{appearance:none}.ngx-outlined-text-field>.container>.ngx-nat-textarea,.ngx-outlined-text-field>.container>.ngx-nat-input{box-sizing:border-box;border-width:1px;border-style:solid;background:none;font-family:inherit;font-size:inherit;text-decoration:none;vertical-align:middle;-webkit-user-select:none;user-select:none;outline:none;position:relative;transition:color .2s ease-in-out;border:none;color:currentColor;-webkit-background-clip:text!important;background-clip:text!important}.ngx-outlined-text-field>.error-text{font-size:13px;color:#f44336;position:absolute;bottom:-20px}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxOutlinedTextFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-outlined-text-field', standalone: true, imports: [NgIf, NgTemplateOutlet], template: "<div #input_container class=\"ngx-outlined-text-field\">\r\n    <label #input_label class=\"ngx-input-label\">{{ label }}</label>\r\n    <div class=\"container\">\r\n      <div\r\n        [id]=\"inputPrefixId\"\r\n        class=\"prefix\"\r\n        *ngIf=\"prefix && type !== 'textarea'\"\r\n      >\r\n        <span *ngIf=\"typeOf(prefix) === 'string'\">{{ prefix }}</span>\r\n        <ng-template\r\n          *ngIf=\"typeOf(prefix) === 'object'\"\r\n          [ngTemplateOutlet]=\"prefix\"\r\n        ></ng-template>\r\n      </div>\r\n      <input\r\n        *ngIf=\"type !== 'textarea'\"\r\n        class=\"ngx-nat-input\"\r\n        #input\r\n        [type]=\"type\"\r\n        [pattern]=\"pattern\"\r\n        [placeholder]=\"_placeholder\"\r\n        [value]=\"value\"\r\n        [disabled]=\"disabled\"\r\n        [required]=\"required\"\r\n        (input)=\"onInput($event)\"\r\n        (focus)=\"onFocus($event)\"\r\n        (blur)=\"onBlur($event)\"\r\n        [autocomplete]=\"autocomplete\"\r\n      />\r\n      <textarea\r\n        class=\"ngx-nat-textarea\"\r\n        *ngIf=\"type === 'textarea'\"\r\n        #input\r\n        [rows]=\"rows\"\r\n        [placeholder]=\"_placeholder\"\r\n        [value]=\"value\"\r\n        [disabled]=\"disabled\"\r\n        [required]=\"required\"\r\n        (input)=\"onInput($event)\"\r\n        (focus)=\"onFocus($event)\"\r\n        (blur)=\"onBlur($event)\"\r\n        [autocomplete]=\"autocomplete\"\r\n      >\r\n      </textarea>\r\n      <div class=\"suffix\" *ngIf=\"suffix && type !== 'textarea'\">\r\n        <span *ngIf=\"typeOf(suffix) === 'string'\">{{ suffix }}</span>\r\n        <ng-template\r\n          *ngIf=\"typeOf(suffix) === 'object'\"\r\n          [ngTemplateOutlet]=\"suffix\"\r\n        ></ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <span class=\"error-text\" *ngIf=\"!isValid && errorText\">{{\r\n      errorText\r\n    }}</span>\r\n  </div>", styles: [":host{display:flex;border-radius:6px;border-color:currentColor;width:-moz-fit-content;width:fit-content}.ngx-outlined-text-field{display:flex;flex-direction:column;max-height:inherit;min-height:inherit;height:inherit;max-width:inherit;min-width:inherit;width:inherit;position:relative;border:1px solid;border-radius:inherit;border-color:inherit}.ngx-outlined-text-field>.container>.ngx-nat-textarea:disabled,.ngx-outlined-text-field>.container>.ngx-nat-input:disabled{opacity:.75;cursor:no-drop}.ngx-outlined-text-field>.ngx-input-label{max-width:max-content;position:absolute;transition:top .3s,font-size .3s;line-height:14px}.container{display:inline-flex;max-height:inherit;min-height:inherit;height:100%;max-width:inherit;min-width:inherit;width:inherit;align-items:center;overflow:hidden}.ngx-outlined-text-field>.container>.prefix,.ngx-outlined-text-field>.container>.suffix{justify-content:center;display:inline-flex;align-items:center;-webkit-user-select:none;user-select:none}.ngx-outlined-text-field>.container>.prefix+.ngx-nat-input{padding-left:0}.ngx-outlined-text-field>.container>.ngx-nat-input+.suffix{padding-right:0}.ngx-outlined-text-field>.container>.ngx-nat-textarea{padding:.75rem;white-space:break-spaces;max-width:inherit;min-width:inherit;width:inherit;max-height:inherit;min-height:inherit;height:inherit}.ngx-outlined-text-field>.container>.ngx-nat-input{padding-left:.75rem;padding-right:.75rem;white-space:nowrap;width:100%;height:100%;min-height:2rem;max-height:3.5rem;overflow:hidden}.ngx-outlined-text-field>.container>.ngx-nat-input[type=search]::-webkit-search-cancel-button{appearance:none}.ngx-outlined-text-field>.container>.ngx-nat-textarea,.ngx-outlined-text-field>.container>.ngx-nat-input{box-sizing:border-box;border-width:1px;border-style:solid;background:none;font-family:inherit;font-size:inherit;text-decoration:none;vertical-align:middle;-webkit-user-select:none;user-select:none;outline:none;position:relative;transition:color .2s ease-in-out;border:none;color:currentColor;-webkit-background-clip:text!important;background-clip:text!important}.ngx-outlined-text-field>.error-text{font-size:13px;color:#f44336;position:absolute;bottom:-20px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.StylesService }, { type: i2.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { autocomplete: [{
                type: Input
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], label: [{
                type: Input
            }], pattern: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], prefix: [{
                type: Input
            }], required: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], rows: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], suffix: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }], containerRef: [{
                type: ViewChild,
                args: ['input_container']
            }], labelRef: [{
                type: ViewChild,
                args: ['input_label']
            }], inputRef: [{
                type: ViewChild,
                args: ['input']
            }] } });

class InputModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: InputModule, imports: [NgxOutlinedTextFieldComponent], exports: [NgxOutlinedTextFieldComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InputModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InputModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [NgxOutlinedTextFieldComponent],
                    imports: [NgxOutlinedTextFieldComponent],
                }]
        }] });

const Type = [
    'text',
    'email',
    'number',
    'password',
    'search',
    'tel',
    'url',
    'textarea',
];

/**
 * Generated bundle index. Do not edit.
 */

export { InputModule, NgxOutlinedTextFieldComponent };
//# sourceMappingURL=ngx-eagle-input.mjs.map
