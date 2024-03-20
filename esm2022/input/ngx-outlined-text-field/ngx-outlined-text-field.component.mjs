import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, Optional, Self, ViewChild, booleanAttribute, numberAttribute, } from '@angular/core';
import { Guid } from 'ngx-eagle/core/services';
import { ErrorColor } from 'ngx-eagle/core/types';
import { Subscription, timer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-eagle/core/services";
import * as i2 from "@angular/forms";
export class NgxOutlinedTextFieldComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW91dGxpbmVkLXRleHQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL2lucHV0L25neC1vdXRsaW5lZC10ZXh0LWZpZWxkL25neC1vdXRsaW5lZC10ZXh0LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL25neC1lYWdsZS9pbnB1dC9uZ3gtb3V0bGluZWQtdGV4dC1maWVsZC9uZ3gtb3V0bGluZWQtdGV4dC1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBRUwsUUFBUSxFQUVSLElBQUksRUFFSixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFVM0MsTUFBTSxPQUFPLDZCQUE2QjtJQWlDeEMsWUFDUyxVQUFzQixFQUNyQixRQUFtQixFQUNuQixhQUE0QixFQUNULFNBQW9CO1FBSHhDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUNULGNBQVMsR0FBVCxTQUFTLENBQVc7UUFsQ3hDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQ0ssYUFBUSxHQUFZLEtBQUssQ0FBQztRQUd6RCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUdLLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFL0MsU0FBSSxHQUFZ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bUdBQTdCLDZCQUE2QixzSUFJcEIsZ0JBQWdCLHdIQUtoQixnQkFBZ0IsMEJBQ2hCLGVBQWUsNFdDdENyQyxnNURBd0RRLHlzRUQ5QkksSUFBSSw2RkFBRSxnQkFBZ0I7OzRGQUVyQiw2QkFBNkI7a0JBUHpDLFNBQVM7K0JBQ0UseUJBQXlCLGNBR3ZCLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQzs7MEJBdUM5QixRQUFROzswQkFBSSxJQUFJOzRDQWxDVixZQUFZO3NCQUFwQixLQUFLO2dCQUNrQyxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUM3QixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNrQyxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUNDLElBQUk7c0JBQTFDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUM1QixNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFPd0IsWUFBWTtzQkFBekMsU0FBUzt1QkFBQyxpQkFBaUI7Z0JBQ0YsUUFBUTtzQkFBakMsU0FBUzt1QkFBQyxhQUFhO2dCQUNKLFFBQVE7c0JBQTNCLFNBQVM7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBib29sZWFuQXR0cmlidXRlLFxyXG4gIG51bWJlckF0dHJpYnV0ZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgR3VpZCwgU3R5bGVzU2VydmljZSB9IGZyb20gJ25neC1lYWdsZS9jb3JlL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgRXJyb3JDb2xvciB9IGZyb20gJ25neC1lYWdsZS9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOZ3hUeXBlIH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1vdXRsaW5lZC10ZXh0LWZpZWxkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LW91dGxpbmVkLXRleHQtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25neC1vdXRsaW5lZC10ZXh0LWZpZWxkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmdJZiwgTmdUZW1wbGF0ZU91dGxldF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hPdXRsaW5lZFRleHRGaWVsZENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveVxyXG57XHJcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBsYWJlbCE6IHN0cmluZztcclxuICBASW5wdXQoKSBwYXR0ZXJuITogYW55O1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBwcmVmaXghOiBhbnkgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgcmVxdWlyZWQhOiBib29sZWFuO1xyXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHJvd3M6IG51bWJlciA9IDQ7XHJcbiAgQElucHV0KCkgc3VmZml4ITogYW55IHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgdHlwZTogTmd4VHlwZSA9ICd0ZXh0JztcclxuICBASW5wdXQoKSB2YWx1ZTogYW55ID0gJyc7XHJcblxyXG4gIF9wbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgZXJyb3JUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIGlucHV0UHJlZml4SWQ6IHN0cmluZyA9IEd1aWQuY3JlYXRlKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0X2NvbnRhaW5lcicpIGNvbnRhaW5lclJlZiE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRfbGFiZWwnKSBsYWJlbFJlZiE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dFJlZiE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGJvcmRlckNvbG9yOiBzdHJpbmcgPSAnIzc0Nzc3NSc7XHJcbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHt9O1xyXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge307XHJcblxyXG4gIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgYXV0b2ZpbGxlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gIGF1dG9maWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgc3R5bGVzU2VydmljZTogU3R5bGVzU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYXV0b2ZpbGxlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jdXN0b21Qcm9wZXJ0aWVzKCk7XHJcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIHRoaXMuYXV0b2ZpbGxNb25pdG9yKCk7XHJcbiAgfVxyXG5cclxuICBhdXRvZmlsbE1vbml0b3IoKSB7XHJcbiAgICBpZiAodGhpcy5sYWJlbCkge1xyXG4gICAgICB0aGlzLmF1dG9maWxsZWRTdWJzY3JpcHRpb24gPSB0aW1lcigwLCAxMDApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hdXRvZmlsbGVkID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50Lm1hdGNoZXMoJzphdXRvZmlsbCcpO1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9maWxsZWQpIHtcclxuICAgICAgICAgIHRoaXMuYXBwbHlGb2N1c2VkU3R5bGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tb3ZlTGFiZWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tUHJvcGVydGllcygpIHtcclxuICAgIGNvbnN0IHN0eWxlczogYW55ID0ge1xyXG4gICAgICAnYm9yZGVyLWNvbG9yJzogKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yJyxcclxuICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcclxuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3R5bGVzU2VydmljZS5nZXRTdHlsZVZhbHVlKFxyXG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICBzdHlsZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc3R5bGVzW3N0eWxlXSh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHR5cGVPZih2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuICAgIHRoaXMubW92ZUxhYmVsKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZWxlbWVudFJlZj8ubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgIHRoaXMucmVxdWlyZWQgPSB0aGlzLmVsZW1lbnRSZWY/Lm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xyXG4gICAgICB0aGlzLmVycm9yVGV4dCA9XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXNbJ2Vycm9yLXRleHQnXT8udmFsdWU7XHJcbiAgICAgIHRoaXMubmdDb250cm9sPy5jb250cm9sPy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3RleHRhcmVhJykge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zdHlsZXNTZXJ2aWNlLmdldFN0eWxlVmFsdWUoXHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICd3aWR0aCdcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICdtaW4td2lkdGgnLFxyXG4gICAgICAgICAgd2lkdGhcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5tb3ZlTGFiZWwoKTtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgbW92ZUxhYmVsKCkge1xyXG4gICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIGlmICgodGhpcy5pc0ZvY3VzZWQgfHwgdGhpcy5pc1ZhbGlkVmFsdWUodGhpcy52YWx1ZSkpICYmIHRoaXMubGFiZWwpIHtcclxuICAgICAgICB0aGlzLmFwcGx5Rm9jdXNlZFN0eWxlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hcHBseURlZmF1bHRTdHlsZShjb250YWluZXJIZWlnaHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGx5Rm9jdXNlZFN0eWxlKCkge1xyXG4gICAgdGhpcy5zZXRMYWJlbFN0eWxlKCctMC4zNzVyZW0nLCAnMC43NXJlbScpO1xyXG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xyXG4gICAgdGhpcy5idWlsZEJvcmRlck91dGxpbmVkKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGx5RGVmYXVsdFN0eWxlKGNvbnRhaW5lckhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBoZWlnaHQgPSAoY29udGFpbmVySGVpZ2h0IC0gMTQpIC8gMjtcclxuICAgIGNvbnN0IHRvcCA9IHRoaXMudHlwZSAhPT0gJ3RleHRhcmVhJyA/IGAke2hlaWdodCAvIDE2fXJlbWAgOiAnMC43NXJlbSc7XHJcbiAgICB0aGlzLnNldExhYmVsU3R5bGUodG9wLCAnMC44NzVyZW0nKTtcclxuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gJyc7XHJcbiAgICB0aGlzLmRyYXdMaW5lVG9wQm9yZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldExhYmVsU3R5bGUodG9wOiBzdHJpbmcsIGZvbnRTaXplOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGxlZnQgPVxyXG4gICAgICB0aGlzLnByZWZpeCAmJiAhdGhpcy5pc0ZvY3VzZWQgJiYgIXRoaXMudmFsdWUgJiYgIXRoaXMuYXV0b2ZpbGxlZFxyXG4gICAgICAgID8gYCR7dGhpcy5wcmVmaXhXaWR0aCgpfXB4YFxyXG4gICAgICAgIDogJzAuNzVyZW0nO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmxhYmVsUmVmPy5uYXRpdmVFbGVtZW50LCAndG9wJywgdG9wKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYWJlbFJlZj8ubmF0aXZlRWxlbWVudCwgJ2ZvbnQtc2l6ZScsIGZvbnRTaXplKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYWJlbFJlZj8ubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBsZWZ0KTtcclxuICB9XHJcblxyXG4gIHByZWZpeFdpZHRoKCkge1xyXG4gICAgY29uc3QgcHJlZml4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pbnB1dFByZWZpeElkKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHByZWZpeCA/IHByZWZpeD8ub2Zmc2V0V2lkdGggOiAwO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIG9uSW5wdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgIHRoaXMubmdDb250cm9sPy5jb250cm9sPy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIGlmICh0aGlzLmxhYmVsKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRCb3JkZXJPdXRsaW5lZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kcmF3TGluZVRvcEJvcmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Gb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tb3ZlTGFiZWwoKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cihldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIHRoaXMubW92ZUxhYmVsKCk7XHJcbiAgfVxyXG5cclxuICBidWlsZEJvcmRlck91dGxpbmVkKCkge1xyXG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMuY2FsY3VsYXRlQm9yZGVyUGVyY2VudCgpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IHRoaXMuY2FsY3VsYXRlQmFja2dyb3VuZFN0eWxlKHBlcmNlbnQpO1xyXG4gICAgdGhpcy5zZXRCb3JkZXJUb3AoJ3Vuc2V0Jyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJhY2tncm91bmRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUJvcmRlclBlcmNlbnQoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmxhYmVsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICByZXR1cm4gKChsYWJlbFdpZHRoICsgMTYpIC8gY29udGFpbmVyV2lkdGgpICogMTAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVCYWNrZ3JvdW5kU3R5bGUocGVyY2VudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5pc1ZhbGlkID8gdGhpcy5ib3JkZXJDb2xvciA6IEVycm9yQ29sb3I7XHJcbiAgICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtjb2xvcn0gOHB4LCB0cmFuc3BhcmVudCA4cHgsIHRyYW5zcGFyZW50ICR7cGVyY2VudH0lLCAke2NvbG9yfSAke3BlcmNlbnR9JSkgbm8tcmVwZWF0IHRvcC8xMDAlIDFweGA7XHJcbiAgfVxyXG5cclxuICBkcmF3TGluZVRvcEJvcmRlcigpIHtcclxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5pc1ZhbGlkID8gdGhpcy5ib3JkZXJDb2xvciA6IEVycm9yQ29sb3I7XHJcbiAgICB0aGlzLnNldEJvcmRlclRvcCgndW5zZXQnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdiYWNrZ3JvdW5kJyxcclxuICAgICAgYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCUsICR7Y29sb3J9IDAlKSBuby1yZXBlYXQgdG9wLzEwMCUgMXB4YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldEJvcmRlclRvcChib3JkZXI6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2JvcmRlci10b3AnLFxyXG4gICAgICBib3JkZXJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZSgpIHtcclxuICAgIHRoaXMuaXNWYWxpZCA9XHJcbiAgICAgICghdGhpcy5wYXR0ZXJuICYmICF0aGlzLm5nQ29udHJvbCAmJiAhdGhpcy5yZXF1aXJlZCkgfHxcclxuICAgICAgdGhpcy5uZ0NvbnRyb2w/LnN0YXR1cz8udG9Mb3dlckNhc2UoKSA9PT0gJ3ZhbGlkJyB8fFxyXG4gICAgICAodGhpcy5yZXF1aXJlZCAmJiB0aGlzLmlzVmFsaWRWYWx1ZSh0aGlzLnZhbHVlKSAmJiAhdGhpcy5uZ0NvbnRyb2wpIHx8XHJcbiAgICAgICh0aGlzLnBhdHRlcm4gJiYgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LnZhbGlkaXR5LnZhbGlkKVxyXG4gICAgICAgID8gdHJ1ZVxyXG4gICAgICAgIDogZmFsc2U7XHJcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuaXNWYWxpZCA/IHRoaXMuYm9yZGVyQ29sb3IgOiBFcnJvckNvbG9yO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2JvcmRlci1jb2xvcicsXHJcbiAgICAgIGNvbG9yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFZhbHVlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJztcclxuICB9XHJcbn1cclxuIiwiPGRpdiAjaW5wdXRfY29udGFpbmVyIGNsYXNzPVwibmd4LW91dGxpbmVkLXRleHQtZmllbGRcIj5cclxuICAgIDxsYWJlbCAjaW5wdXRfbGFiZWwgY2xhc3M9XCJuZ3gtaW5wdXQtbGFiZWxcIj57eyBsYWJlbCB9fTwvbGFiZWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBbaWRdPVwiaW5wdXRQcmVmaXhJZFwiXHJcbiAgICAgICAgY2xhc3M9XCJwcmVmaXhcIlxyXG4gICAgICAgICpuZ0lmPVwicHJlZml4ICYmIHR5cGUgIT09ICd0ZXh0YXJlYSdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0eXBlT2YocHJlZml4KSA9PT0gJ3N0cmluZydcIj57eyBwcmVmaXggfX08L3NwYW4+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAqbmdJZj1cInR5cGVPZihwcmVmaXgpID09PSAnb2JqZWN0J1wiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJwcmVmaXhcIlxyXG4gICAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgKm5nSWY9XCJ0eXBlICE9PSAndGV4dGFyZWEnXCJcclxuICAgICAgICBjbGFzcz1cIm5neC1uYXQtaW5wdXRcIlxyXG4gICAgICAgICNpbnB1dFxyXG4gICAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICAgIFtwYXR0ZXJuXT1cInBhdHRlcm5cIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJfcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIlxyXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxyXG4gICAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcclxuICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIGNsYXNzPVwibmd4LW5hdC10ZXh0YXJlYVwiXHJcbiAgICAgICAgKm5nSWY9XCJ0eXBlID09PSAndGV4dGFyZWEnXCJcclxuICAgICAgICAjaW5wdXRcclxuICAgICAgICBbcm93c109XCJyb3dzXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiX3BsYWNlaG9sZGVyXCJcclxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcclxuICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcclxuICAgICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgICAgICAgW2F1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdWZmaXhcIiAqbmdJZj1cInN1ZmZpeCAmJiB0eXBlICE9PSAndGV4dGFyZWEnXCI+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0eXBlT2Yoc3VmZml4KSA9PT0gJ3N0cmluZydcIj57eyBzdWZmaXggfX08L3NwYW4+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAqbmdJZj1cInR5cGVPZihzdWZmaXgpID09PSAnb2JqZWN0J1wiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJzdWZmaXhcIlxyXG4gICAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiIWlzVmFsaWQgJiYgZXJyb3JUZXh0XCI+e3tcclxuICAgICAgZXJyb3JUZXh0XHJcbiAgICB9fTwvc3Bhbj5cclxuICA8L2Rpdj4iXX0=