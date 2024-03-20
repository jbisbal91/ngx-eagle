import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChildren, EventEmitter, HostListener, Input, Optional, Output, Self, ViewChild, booleanAttribute, } from '@angular/core';
import { Guid } from 'ngx-eagle/core/services';
import { ErrorColor } from 'ngx-eagle/core/types';
import { Subscription } from 'rxjs';
import { NgxOptionComponent } from '../ngx-option/ngx-option.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-eagle/core/services";
import * as i2 from "@angular/forms";
export class NgxOutlinedSelectFieldComponent {
    get value() {
        return this.internalValue;
    }
    set value(value) {
        setTimeout(() => {
            if (value) {
                if (this.multiple) {
                    this.multipleInputValues(value);
                }
                else {
                    this.singleInputValue(value);
                }
            }
        }, 100);
    }
    isSelectedOption(elemento) {
        if (Array.isArray(elemento)) {
            return elemento.every((item) => this.isSelectedOption(item));
        }
        else {
            return (typeof elemento === 'object' &&
                'label' in elemento &&
                'value' in elemento);
        }
    }
    constructor(elementRef, renderer, stylesService, ngControl) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.stylesService = stylesService;
        this.ngControl = ngControl;
        this.autocomplete = false;
        this.disabled = false;
        this.multiple = false;
        this.placeholder = '';
        this.internalValue = null;
        this.selectedOptions = [];
        this.onChangeValue = new EventEmitter();
        this._placeholder = '';
        this.errorText = '';
        this.inputPrefixId = Guid.create();
        this.optPos = 'bottom';
        this.borderColor = '#747775';
        this.onChange = () => { };
        this.onTouched = () => { };
        this.subscription = new Subscription();
        this.isValid = true;
        this.isFocused = false;
        this.autofilled = false;
        this.isOpenMultipleMode = false;
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.customProperties();
        this.initialize();
        this.optionList.forEach((option) => {
            option.checked = this.multiple;
            this.subscription.add(option.selectedOptionOnClick.subscribe(() => {
                if (this.multiple) {
                    this.multiSelectionOnClick(option.value);
                    this.onChange(this.selectedOptions);
                    this.onChangeValue.emit(this.selectedOptions);
                }
                else {
                    this.singleInputValue(option.value);
                    this.onChange(option.value);
                    this.onChangeValue.emit(option.value);
                }
            }));
        });
    }
    mousedown(event) {
        this.isOpenMultipleMode =
            this.multiple && this.optionsRef.nativeElement.contains(event.target);
        this.moveLabel();
    }
    onKeyDown(event) {
        if (!this.autocomplete) {
            event.preventDefault();
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
        if (this.multiple) {
            this.autocomplete = false;
        }
        this.moveLabel();
        setTimeout(() => {
            this.errorText =
                this.elementRef?.nativeElement.attributes['error-text']?.value;
            this.ngControl?.control?.setValue(this.internalValue);
        });
    }
    writeValue(value) {
        setTimeout(() => {
            if (value) {
                if (this.multiple) {
                    this.multipleInputValues(value);
                }
                else {
                    this.singleInputValue(value);
                }
            }
        }, 100);
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
    singleInputValue(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Invalid argument, only string values are allowed.');
        }
        let found = false;
        this.optionList.forEach((opt) => {
            if (opt.value === value) {
                this.internalValue = opt.label;
                opt.selected = true;
                found = true;
                this.moveLabel();
            }
            else {
                opt.selected = false;
            }
        });
        if (!found) {
            this.internalValue = null;
            this.onChange(null);
            this.onChangeValue.emit(null);
        }
    }
    multipleInputValues(selectedOptions) {
        if (!this.isSelectedOption(selectedOptions)) {
            throw new TypeError('Invalid argument, only values {label: string, value: string} or array of the same type are allowed.');
        }
        if (Array.isArray(selectedOptions)) {
            this.selectedOptions = selectedOptions;
            selectedOptions.forEach((option) => {
                this.optionList.forEach((opt) => {
                    if (opt.value === option.value) {
                        opt.selected = true;
                    }
                });
            });
            this.selectMultipleOptions(this.selectedOptions);
            this.moveLabel();
        }
    }
    selectMultipleOptions(selectedOptions) {
        const optionsLength = selectedOptions.length;
        const overflow = optionsLength > 1 ? `  (+${optionsLength - 1})` : '';
        this.internalValue =
            optionsLength > 0
                ? selectedOptions[optionsLength - 1].label + overflow
                : null;
    }
    multiSelectionOnClick(value) {
        this.optionList.forEach((opt) => {
            const isSelected = this.selectedOptions.some((option) => option.value === value);
            if (opt.value === value) {
                if (!isSelected) {
                    opt.selected = true;
                    this.selectedOptions.push({ label: opt.label, value: opt.value });
                }
                if (isSelected) {
                    const index = this.selectedOptions.findIndex((option) => option.value === value);
                    if (index !== -1) {
                        opt.selected = false;
                        this.selectedOptions.splice(index, 1);
                    }
                }
            }
        });
        this.selectMultipleOptions(this.selectedOptions);
        this.moveLabel();
    }
    moveLabel() {
        const containerHeight = this.containerRef?.nativeElement.offsetHeight;
        if ((this.isFocused ||
            this.isValidValue(this.internalValue) ||
            this.isValidValue(this.inputRef.nativeElement.value)) &&
            this.label) {
            this.applyFocusedStyle();
        }
        else {
            this.applyDefaultStyle(containerHeight);
        }
    }
    applyFocusedStyle() {
        this.setLabelStyle('-0.375rem', '0.75rem');
        this._placeholder = this.placeholder;
        this.buildBorderOutlined();
    }
    applyDefaultStyle(containerHeight) {
        const height = (containerHeight - 14) / 2;
        this.setLabelStyle(`${height / 16}rem`, '0.875rem');
        this._placeholder = '';
        this.drawLineTopBorder();
    }
    setLabelStyle(top, fontSize) {
        const left = this.prefix && !this.isFocused && !this.internalValue && !this.autofilled
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
        if (this.autocomplete) {
            this.onSearch(event);
        }
        if (this.label) {
            this.buildBorderOutlined();
        }
        else {
            this.drawLineTopBorder();
        }
    }
    onSearch(event) {
        const search = event.target.value.toLowerCase();
        if (search === '') {
            this.internalValue = '';
        }
        this.optionList.forEach((option) => {
            const label = option.label.toLowerCase();
            option.isVisible = label.includes(search);
            if (option.isVisible && option.selected) {
                option.selected = false;
            }
        });
    }
    onFocus(event) {
        this.isFocused = true;
        this.moveLabel();
        this.showBackdrop();
        this.adjustOptionsPosition();
    }
    onResize() {
        this.adjustOptionsPosition();
    }
    adjustOptionsPosition() {
        const contProp = this.containerRef.nativeElement.getBoundingClientRect();
        const optionsProp = this.optionsRef.nativeElement.getBoundingClientRect();
        let top = contProp.top + contProp.height;
        const offsetTop = contProp.top;
        const offsetBottom = window.innerHeight - top;
        this.optPos = 'bottom';
        setTimeout(() => {
            if (this.optionsRef) {
                const offsetHeight = this.optionsRef.nativeElement.offsetHeight;
                if (offsetBottom < optionsProp.height &&
                    offsetTop > offsetBottom &&
                    offsetHeight <= offsetTop) {
                    top = top - (offsetHeight + contProp.height + 4);
                    this.optPos = 'top';
                }
                this.renderer.setStyle(this.optionsRef.nativeElement, 'top', `${top}px`);
            }
        });
    }
    showBackdrop() {
        const backdrop = document.createElement('div');
        backdrop.classList.add('ngx-backdrop');
        document.body.appendChild(backdrop);
    }
    hideBackdrop() {
        const backdrop = document.querySelector('.ngx-backdrop');
        backdrop?.remove();
    }
    onBlur(event) {
        setTimeout(() => {
            this.isFocused = false;
            this.validate();
            this.moveLabel();
            this.hideBackdrop();
        }, 100);
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
                (this.required &&
                    this.isValidValue(this.internalValue) &&
                    !this.ngControl) ||
                (this.pattern && this.inputRef.nativeElement.validity.valid)
                ? true
                : false;
        const color = this.isValid ? this.borderColor : ErrorColor;
        this.renderer.setStyle(this.containerRef.nativeElement, 'border-color', color);
    }
    isValidValue(value) {
        return value !== undefined && value !== null && value !== '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxOutlinedSelectFieldComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.StylesService }, { token: i2.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: NgxOutlinedSelectFieldComponent, isStandalone: true, selector: "ngx-outlined-select-field", inputs: { autocomplete: ["autocomplete", "autocomplete", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], label: "label", multiple: ["multiple", "multiple", booleanAttribute], pattern: "pattern", placeholder: "placeholder", prefix: "prefix", required: ["required", "required", booleanAttribute], suffix: "suffix", value: "value" }, outputs: { onChangeValue: "onChangeValue" }, host: { listeners: { "document:mousedown": "mousedown($event)", "window:resize": "onResize($event)" } }, queries: [{ propertyName: "optionList", predicate: NgxOptionComponent }], viewQueries: [{ propertyName: "containerRef", first: true, predicate: ["input_container"], descendants: true }, { propertyName: "labelRef", first: true, predicate: ["input_label"], descendants: true }, { propertyName: "inputRef", first: true, predicate: ["input"], descendants: true }, { propertyName: "optionsRef", first: true, predicate: ["options_container"], descendants: true }], ngImport: i0, template: "<div #input_container class=\"ngx-outlined-select-field\">\r\n  <label #input_label class=\"ngx-input-label\">{{ label }}</label>\r\n  <div class=\"container\">\r\n    <div [id]=\"inputPrefixId\" class=\"prefix\" *ngIf=\"prefix\">\r\n      <span *ngIf=\"typeOf(prefix) === 'string'\">{{ prefix }}</span>\r\n      <ng-template\r\n        *ngIf=\"typeOf(prefix) === 'object'\"\r\n        [ngTemplateOutlet]=\"prefix\"\r\n      ></ng-template>\r\n    </div>\r\n    <input\r\n      class=\"ngx-nat-input\"\r\n      #input\r\n      type=\"text\"\r\n      [pattern]=\"pattern\"\r\n      [placeholder]=\"_placeholder\"\r\n      [value]=\"internalValue\"\r\n      [disabled]=\"disabled\"\r\n      [required]=\"required\"\r\n      (input)=\"onInput($event)\"\r\n      (focus)=\"onFocus($event)\"\r\n      (blur)=\"onBlur($event)\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      [readonly]=\"!autocomplete\"\r\n    />\r\n    <div class=\"suffix\" *ngIf=\"suffix\">\r\n      <span *ngIf=\"typeOf(suffix) === 'string'\">{{ suffix }}</span>\r\n      <ng-template\r\n        *ngIf=\"typeOf(suffix) === 'object'\"\r\n        [ngTemplateOutlet]=\"suffix\"\r\n      ></ng-template>\r\n    </div>\r\n  </div>\r\n  <span class=\"error-text\" *ngIf=\"!isValid && errorText\">{{ errorText }}</span>\r\n</div>\r\n<div\r\n  #options_container\r\n  class=\"ngx-options-container\"\r\n  [class.position-bottom]=\"optPos === 'bottom'\"\r\n  [class.position-top]=\"optPos === 'top'\"\r\n  [class.ngx-options-visible]=\"isFocused || isOpenMultipleMode\"\r\n  *ngIf=\"!disabled\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [":host{border-radius:6px;border-color:currentColor;width:212px}.ngx-outlined-select-field{display:flex;flex-direction:column;max-height:inherit;min-height:inherit;height:inherit;max-width:inherit;min-width:inherit;width:inherit;position:relative;border:1px solid;border-radius:inherit;border-color:inherit}.ngx-outlined-select-field>.container>.ngx-nat-textarea:disabled,.ngx-outlined-select-field>.container>.ngx-nat-input:disabled{opacity:.75;cursor:no-drop}.ngx-outlined-select-field>.ngx-input-label{align-items:center;max-width:max-content;position:absolute;font-size:.875rem;left:.75rem;transition:top .3s,font-size .3s;line-height:14px}.container{display:inline-flex;max-height:inherit;min-height:inherit;height:100%;max-width:inherit;min-width:inherit;width:inherit;align-items:center;overflow:hidden}.ngx-outlined-select-field>.container>.prefix,.ngx-outlined-select-field>.container>.suffix{justify-content:center;display:inline-flex;align-items:center;-webkit-user-select:none;user-select:none}.ngx-outlined-select-field>.container>.prefix+.ngx-nat-input{padding-left:0}.ngx-outlined-select-field>.container>.ngx-nat-input+.suffix{padding-right:0}.ngx-outlined-select-field>.container>.ngx-nat-input{padding-left:.75rem;padding-right:.75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;height:100%;min-height:2rem;max-height:3.5rem}.ngx-outlined-select-field>.container>.ngx-nat-input[type=search]::-webkit-search-cancel-button{appearance:none}.ngx-outlined-select-field>.container>.ngx-nat-textarea,.ngx-outlined-select-field>.container>.ngx-nat-input{box-sizing:border-box;border-width:1px;border-style:solid;background:none;font-family:inherit;font-size:inherit;text-decoration:none;vertical-align:middle;-webkit-user-select:none;user-select:none;outline:none;position:relative;transition:color .2s ease-in-out;border:none;color:currentColor;-webkit-background-clip:text!important;background-clip:text!important}.ngx-outlined-select-field>.error-text{font-size:13px;color:#f44336;position:absolute;bottom:-20px}.ngx-options-container{display:grid;width:inherit;position:fixed;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;box-sizing:border-box;max-height:15rem;overflow-y:scroll;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:auto;z-index:1000;visibility:hidden}.ngx-options-visible{visibility:visible}.position-top{border-radius:8px 8px 0 0}.position-bottom{border-radius:0 0 8px 8px}.ngx-options-container::-webkit-scrollbar{width:4px;background-color:#fff;border-bottom-right-radius:8px}.ngx-options-container::-webkit-scrollbar-thumb{background-color:#b9b9b9;border-radius:16px}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxOutlinedSelectFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-outlined-select-field', standalone: true, imports: [NgIf, NgTemplateOutlet], template: "<div #input_container class=\"ngx-outlined-select-field\">\r\n  <label #input_label class=\"ngx-input-label\">{{ label }}</label>\r\n  <div class=\"container\">\r\n    <div [id]=\"inputPrefixId\" class=\"prefix\" *ngIf=\"prefix\">\r\n      <span *ngIf=\"typeOf(prefix) === 'string'\">{{ prefix }}</span>\r\n      <ng-template\r\n        *ngIf=\"typeOf(prefix) === 'object'\"\r\n        [ngTemplateOutlet]=\"prefix\"\r\n      ></ng-template>\r\n    </div>\r\n    <input\r\n      class=\"ngx-nat-input\"\r\n      #input\r\n      type=\"text\"\r\n      [pattern]=\"pattern\"\r\n      [placeholder]=\"_placeholder\"\r\n      [value]=\"internalValue\"\r\n      [disabled]=\"disabled\"\r\n      [required]=\"required\"\r\n      (input)=\"onInput($event)\"\r\n      (focus)=\"onFocus($event)\"\r\n      (blur)=\"onBlur($event)\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      [readonly]=\"!autocomplete\"\r\n    />\r\n    <div class=\"suffix\" *ngIf=\"suffix\">\r\n      <span *ngIf=\"typeOf(suffix) === 'string'\">{{ suffix }}</span>\r\n      <ng-template\r\n        *ngIf=\"typeOf(suffix) === 'object'\"\r\n        [ngTemplateOutlet]=\"suffix\"\r\n      ></ng-template>\r\n    </div>\r\n  </div>\r\n  <span class=\"error-text\" *ngIf=\"!isValid && errorText\">{{ errorText }}</span>\r\n</div>\r\n<div\r\n  #options_container\r\n  class=\"ngx-options-container\"\r\n  [class.position-bottom]=\"optPos === 'bottom'\"\r\n  [class.position-top]=\"optPos === 'top'\"\r\n  [class.ngx-options-visible]=\"isFocused || isOpenMultipleMode\"\r\n  *ngIf=\"!disabled\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [":host{border-radius:6px;border-color:currentColor;width:212px}.ngx-outlined-select-field{display:flex;flex-direction:column;max-height:inherit;min-height:inherit;height:inherit;max-width:inherit;min-width:inherit;width:inherit;position:relative;border:1px solid;border-radius:inherit;border-color:inherit}.ngx-outlined-select-field>.container>.ngx-nat-textarea:disabled,.ngx-outlined-select-field>.container>.ngx-nat-input:disabled{opacity:.75;cursor:no-drop}.ngx-outlined-select-field>.ngx-input-label{align-items:center;max-width:max-content;position:absolute;font-size:.875rem;left:.75rem;transition:top .3s,font-size .3s;line-height:14px}.container{display:inline-flex;max-height:inherit;min-height:inherit;height:100%;max-width:inherit;min-width:inherit;width:inherit;align-items:center;overflow:hidden}.ngx-outlined-select-field>.container>.prefix,.ngx-outlined-select-field>.container>.suffix{justify-content:center;display:inline-flex;align-items:center;-webkit-user-select:none;user-select:none}.ngx-outlined-select-field>.container>.prefix+.ngx-nat-input{padding-left:0}.ngx-outlined-select-field>.container>.ngx-nat-input+.suffix{padding-right:0}.ngx-outlined-select-field>.container>.ngx-nat-input{padding-left:.75rem;padding-right:.75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;height:100%;min-height:2rem;max-height:3.5rem}.ngx-outlined-select-field>.container>.ngx-nat-input[type=search]::-webkit-search-cancel-button{appearance:none}.ngx-outlined-select-field>.container>.ngx-nat-textarea,.ngx-outlined-select-field>.container>.ngx-nat-input{box-sizing:border-box;border-width:1px;border-style:solid;background:none;font-family:inherit;font-size:inherit;text-decoration:none;vertical-align:middle;-webkit-user-select:none;user-select:none;outline:none;position:relative;transition:color .2s ease-in-out;border:none;color:currentColor;-webkit-background-clip:text!important;background-clip:text!important}.ngx-outlined-select-field>.error-text{font-size:13px;color:#f44336;position:absolute;bottom:-20px}.ngx-options-container{display:grid;width:inherit;position:fixed;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;box-sizing:border-box;max-height:15rem;overflow-y:scroll;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:auto;z-index:1000;visibility:hidden}.ngx-options-visible{visibility:visible}.position-top{border-radius:8px 8px 0 0}.position-bottom{border-radius:0 0 8px 8px}.ngx-options-container::-webkit-scrollbar{width:4px;background-color:#fff;border-bottom-right-radius:8px}.ngx-options-container::-webkit-scrollbar-thumb{background-color:#b9b9b9;border-radius:16px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.StylesService }, { type: i2.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { optionList: [{
                type: ContentChildren,
                args: [NgxOptionComponent]
            }], autocomplete: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], label: [{
                type: Input
            }], multiple: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], pattern: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], prefix: [{
                type: Input
            }], required: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], suffix: [{
                type: Input
            }], value: [{
                type: Input
            }], onChangeValue: [{
                type: Output
            }], containerRef: [{
                type: ViewChild,
                args: ['input_container']
            }], labelRef: [{
                type: ViewChild,
                args: ['input_label']
            }], inputRef: [{
                type: ViewChild,
                args: ['input']
            }], optionsRef: [{
                type: ViewChild,
                args: ['options_container']
            }], mousedown: [{
                type: HostListener,
                args: ['document:mousedown', ['$event']]
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW91dGxpbmVkLXNlbGVjdC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZ3gtZWFnbGUvc2VsZWN0L25neC1vdXRsaW5lZC1zZWxlY3QtZmllbGQvbmd4LW91dGxpbmVkLXNlbGVjdC1maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9uZ3gtZWFnbGUvc2VsZWN0L25neC1vdXRsaW5lZC1zZWxlY3QtZmllbGQvbmd4LW91dGxpbmVkLXNlbGVjdC1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFHTixJQUFJLEVBRUosU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O0FBVXhFLE1BQU0sT0FBTywrQkFBK0I7SUFtQjFDLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBVTtRQUNsQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENB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QixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ2tDLFFBQVE7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQzdCLE1BQU07c0JBQWQsS0FBSztnQkFNRixLQUFLO3NCQURSLEtBQUs7Z0JBK0JJLGFBQWE7c0JBQXRCLE1BQU07Z0JBU3VCLFlBQVk7c0JBQXpDLFNBQVM7dUJBQUMsaUJBQWlCO2dCQUNGLFFBQVE7c0JBQWpDLFNBQVM7dUJBQUMsYUFBYTtnQkFDSixRQUFRO3NCQUEzQixTQUFTO3VCQUFDLE9BQU87Z0JBQ2MsVUFBVTtzQkFBekMsU0FBUzt1QkFBQyxtQkFBbUI7Z0JBa0Q5QixTQUFTO3NCQURSLFlBQVk7dUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBb085QyxRQUFRO3NCQURQLFlBQVk7dUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiwgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2VsZixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgYm9vbGVhbkF0dHJpYnV0ZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgR3VpZCwgU3R5bGVzU2VydmljZSB9IGZyb20gJ25neC1lYWdsZS9jb3JlL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgRXJyb3JDb2xvciB9IGZyb20gJ25neC1lYWdsZS9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE5neE9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL25neC1vcHRpb24vbmd4LW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RlZE9wdGlvbiB9IGZyb20gJy4vc2VsZWN0ZWQtb3B0aW9uLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1vdXRsaW5lZC1zZWxlY3QtZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtb3V0bGluZWQtc2VsZWN0LWZpZWxkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uZ3gtb3V0bGluZWQtc2VsZWN0LWZpZWxkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmdJZiwgTmdUZW1wbGF0ZU91dGxldF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hPdXRsaW5lZFNlbGVjdEZpZWxkQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95XHJcbntcclxuICBAQ29udGVudENoaWxkcmVuKE5neE9wdGlvbkNvbXBvbmVudClcclxuICBwdWJsaWMgb3B0aW9uTGlzdCE6IFF1ZXJ5TGlzdDxOZ3hPcHRpb25Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYXV0b2NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbGFiZWwhOiBzdHJpbmc7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGF0dGVybiE6IGFueTtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcHJlZml4ITogYW55IHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHJlcXVpcmVkITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzdWZmaXghOiBhbnkgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgaW50ZXJuYWxWYWx1ZTogYW55ID0gbnVsbDtcclxuICBzZWxlY3RlZE9wdGlvbnM6IFNlbGVjdGVkT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmludGVybmFsVmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICB0aGlzLm11bHRpcGxlSW5wdXRWYWx1ZXModmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNpbmdsZUlucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRPcHRpb24oXHJcbiAgICBlbGVtZW50bzogYW55XHJcbiAgKTogZWxlbWVudG8gaXMgU2VsZWN0ZWRPcHRpb24gfCBTZWxlY3RlZE9wdGlvbltdIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnRvKSkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudG8uZXZlcnkoKGl0ZW0pID0+IHRoaXMuaXNTZWxlY3RlZE9wdGlvbihpdGVtKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIHR5cGVvZiBlbGVtZW50byA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgICAnbGFiZWwnIGluIGVsZW1lbnRvICYmXHJcbiAgICAgICAgJ3ZhbHVlJyBpbiBlbGVtZW50b1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlVmFsdWU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIF9wbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgZXJyb3JUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgcHVibGljIGlucHV0UHJlZml4SWQ6IHN0cmluZyA9IEd1aWQuY3JlYXRlKCk7XHJcblxyXG4gIG9wdFBvczogJ2JvdHRvbScgfCAndG9wJyA9ICdib3R0b20nO1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dF9jb250YWluZXInKSBjb250YWluZXJSZWYhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0X2xhYmVsJykgbGFiZWxSZWYhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXRSZWYhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ29wdGlvbnNfY29udGFpbmVyJykgb3B0aW9uc1JlZiE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGJvcmRlckNvbG9yOiBzdHJpbmcgPSAnIzc0Nzc3NSc7XHJcbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHt9O1xyXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge307XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGF1dG9maWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpc09wZW5NdWx0aXBsZU1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgc3R5bGVzU2VydmljZTogU3R5bGVzU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmN1c3RvbVByb3BlcnRpZXMoKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBvcHRpb24uY2hlY2tlZCA9IHRoaXMubXVsdGlwbGU7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWRPcHRpb25PbkNsaWNrLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsZWN0aW9uT25DbGljayhvcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZVZhbHVlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVJbnB1dFZhbHVlKG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2Uob3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZVZhbHVlLmVtaXQob3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIG1vdXNlZG93bihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmlzT3Blbk11bHRpcGxlTW9kZSA9XHJcbiAgICAgIHRoaXMubXVsdGlwbGUgJiYgdGhpcy5vcHRpb25zUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcclxuICAgIHRoaXMubW92ZUxhYmVsKCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5hdXRvY29tcGxldGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbVByb3BlcnRpZXMoKSB7XHJcbiAgICBjb25zdCBzdHlsZXM6IGFueSA9IHtcclxuICAgICAgJ2JvcmRlci1jb2xvcic6ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ2JvcmRlci1jb2xvcicsXHJcbiAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XHJcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0eWxlc1NlcnZpY2UuZ2V0U3R5bGVWYWx1ZShcclxuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgc3R5bGVcclxuICAgICAgICApO1xyXG4gICAgICAgIHN0eWxlc1tzdHlsZV0odmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0eXBlT2YodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tb3ZlTGFiZWwoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmVycm9yVGV4dCA9XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXNbJ2Vycm9yLXRleHQnXT8udmFsdWU7XHJcbiAgICAgIHRoaXMubmdDb250cm9sPy5jb250cm9sPy5zZXRWYWx1ZSh0aGlzLmludGVybmFsVmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdGhpcy5tdWx0aXBsZUlucHV0VmFsdWVzKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zaW5nbGVJbnB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2luZ2xlSW5wdXRWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGFyZ3VtZW50LCBvbmx5IHN0cmluZyB2YWx1ZXMgYXJlIGFsbG93ZWQuJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChvcHQpID0+IHtcclxuICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmludGVybmFsVmFsdWUgPSBvcHQubGFiZWw7XHJcbiAgICAgICAgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb3ZlTGFiZWwoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcHQuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9IG51bGw7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UobnVsbCk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VWYWx1ZS5lbWl0KG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbXVsdGlwbGVJbnB1dFZhbHVlcyhzZWxlY3RlZE9wdGlvbnM6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLmlzU2VsZWN0ZWRPcHRpb24oc2VsZWN0ZWRPcHRpb25zKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgICdJbnZhbGlkIGFyZ3VtZW50LCBvbmx5IHZhbHVlcyB7bGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZ30gb3IgYXJyYXkgb2YgdGhlIHNhbWUgdHlwZSBhcmUgYWxsb3dlZC4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZE9wdGlvbnMpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gc2VsZWN0ZWRPcHRpb25zO1xyXG4gICAgICBzZWxlY3RlZE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBTZWxlY3RlZE9wdGlvbikgPT4ge1xyXG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChvcHQpID0+IHtcclxuICAgICAgICAgIGlmIChvcHQudmFsdWUgPT09IG9wdGlvbi52YWx1ZSkge1xyXG4gICAgICAgICAgICBvcHQuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RNdWx0aXBsZU9wdGlvbnModGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xyXG4gICAgICB0aGlzLm1vdmVMYWJlbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0TXVsdGlwbGVPcHRpb25zKHNlbGVjdGVkT3B0aW9uczogU2VsZWN0ZWRPcHRpb25bXSkge1xyXG4gICAgY29uc3Qgb3B0aW9uc0xlbmd0aCA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGg7XHJcbiAgICBjb25zdCBvdmVyZmxvdyA9IG9wdGlvbnNMZW5ndGggPiAxID8gYCAgKCske29wdGlvbnNMZW5ndGggLSAxfSlgIDogJyc7XHJcbiAgICB0aGlzLmludGVybmFsVmFsdWUgPVxyXG4gICAgICBvcHRpb25zTGVuZ3RoID4gMFxyXG4gICAgICAgID8gc2VsZWN0ZWRPcHRpb25zW29wdGlvbnNMZW5ndGggLSAxXS5sYWJlbCArIG92ZXJmbG93XHJcbiAgICAgICAgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgbXVsdGlTZWxlY3Rpb25PbkNsaWNrKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChvcHQpID0+IHtcclxuICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zLnNvbWUoXHJcbiAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSB2YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICBpZiAob3B0LnZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICAgIGlmICghaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2goeyBsYWJlbDogb3B0LmxhYmVsLCB2YWx1ZTogb3B0LnZhbHVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkT3B0aW9ucy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIG9wdC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlbGVjdE11bHRpcGxlT3B0aW9ucyh0aGlzLnNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICB0aGlzLm1vdmVMYWJlbCgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZUxhYmVsKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5jb250YWluZXJSZWY/Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgaWYgKFxyXG4gICAgICAodGhpcy5pc0ZvY3VzZWQgfHxcclxuICAgICAgICB0aGlzLmlzVmFsaWRWYWx1ZSh0aGlzLmludGVybmFsVmFsdWUpIHx8XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkVmFsdWUodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlKSkgJiZcclxuICAgICAgdGhpcy5sYWJlbFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuYXBwbHlGb2N1c2VkU3R5bGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXBwbHlEZWZhdWx0U3R5bGUoY29udGFpbmVySGVpZ2h0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwbHlGb2N1c2VkU3R5bGUoKSB7XHJcbiAgICB0aGlzLnNldExhYmVsU3R5bGUoJy0wLjM3NXJlbScsICcwLjc1cmVtJyk7XHJcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XHJcbiAgICB0aGlzLmJ1aWxkQm9yZGVyT3V0bGluZWQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwbHlEZWZhdWx0U3R5bGUoY29udGFpbmVySGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGhlaWdodCA9IChjb250YWluZXJIZWlnaHQgLSAxNCkgLyAyO1xyXG4gICAgdGhpcy5zZXRMYWJlbFN0eWxlKGAke2hlaWdodCAvIDE2fXJlbWAsICcwLjg3NXJlbScpO1xyXG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSAnJztcclxuICAgIHRoaXMuZHJhd0xpbmVUb3BCb3JkZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TGFiZWxTdHlsZSh0b3A6IHN0cmluZywgZm9udFNpemU6IHN0cmluZykge1xyXG4gICAgY29uc3QgbGVmdCA9XHJcbiAgICAgIHRoaXMucHJlZml4ICYmICF0aGlzLmlzRm9jdXNlZCAmJiAhdGhpcy5pbnRlcm5hbFZhbHVlICYmICF0aGlzLmF1dG9maWxsZWRcclxuICAgICAgICA/IGAke3RoaXMucHJlZml4V2lkdGgoKX1weGBcclxuICAgICAgICA6ICcwLjc1cmVtJztcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYWJlbFJlZj8ubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHRvcCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubGFiZWxSZWY/Lm5hdGl2ZUVsZW1lbnQsICdmb250LXNpemUnLCBmb250U2l6ZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubGFiZWxSZWY/Lm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgbGVmdCk7XHJcbiAgfVxyXG5cclxuICBwcmVmaXhXaWR0aCgpIHtcclxuICAgIGNvbnN0IHByZWZpeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaW5wdXRQcmVmaXhJZCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBwcmVmaXggPyBwcmVmaXg/Lm9mZnNldFdpZHRoIDogMDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBvbklucHV0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMub25TZWFyY2goZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcclxuICAgICAgdGhpcy5idWlsZEJvcmRlck91dGxpbmVkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRyYXdMaW5lVG9wQm9yZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaChldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnN0IHNlYXJjaCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmIChzZWFyY2ggPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKG9wdGlvbjogTmd4T3B0aW9uQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIG9wdGlvbi5pc1Zpc2libGUgPSBsYWJlbC5pbmNsdWRlcyhzZWFyY2gpO1xyXG4gICAgICBpZiAob3B0aW9uLmlzVmlzaWJsZSAmJiBvcHRpb24uc2VsZWN0ZWQpIHtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLm1vdmVMYWJlbCgpO1xyXG4gICAgdGhpcy5zaG93QmFja2Ryb3AoKTtcclxuICAgIHRoaXMuYWRqdXN0T3B0aW9uc1Bvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcclxuICBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMuYWRqdXN0T3B0aW9uc1Bvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBhZGp1c3RPcHRpb25zUG9zaXRpb24oKSB7XHJcbiAgICBjb25zdCBjb250UHJvcCA9IHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBvcHRpb25zUHJvcCA9IHRoaXMub3B0aW9uc1JlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHRvcCA9IGNvbnRQcm9wLnRvcCArIGNvbnRQcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IG9mZnNldFRvcCA9IGNvbnRQcm9wLnRvcDtcclxuICAgIGNvbnN0IG9mZnNldEJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRvcDtcclxuICAgIHRoaXMub3B0UG9zID0gJ2JvdHRvbSc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMub3B0aW9uc1JlZikge1xyXG4gICAgICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IHRoaXMub3B0aW9uc1JlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBvZmZzZXRCb3R0b20gPCBvcHRpb25zUHJvcC5oZWlnaHQgJiZcclxuICAgICAgICAgIG9mZnNldFRvcCA+IG9mZnNldEJvdHRvbSAmJlxyXG4gICAgICAgICAgb2Zmc2V0SGVpZ2h0IDw9IG9mZnNldFRvcFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdG9wID0gdG9wIC0gKG9mZnNldEhlaWdodCArIGNvbnRQcm9wLmhlaWdodCArIDQpO1xyXG4gICAgICAgICAgdGhpcy5vcHRQb3MgPSAndG9wJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMub3B0aW9uc1JlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ3RvcCcsXHJcbiAgICAgICAgICBgJHt0b3B9cHhgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93QmFja2Ryb3AoKSB7XHJcbiAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnbmd4LWJhY2tkcm9wJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcclxuICB9XHJcblxyXG4gIGhpZGVCYWNrZHJvcCgpIHtcclxuICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5neC1iYWNrZHJvcCcpO1xyXG4gICAgYmFja2Ryb3A/LnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICB0aGlzLm1vdmVMYWJlbCgpO1xyXG4gICAgICB0aGlzLmhpZGVCYWNrZHJvcCgpO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkQm9yZGVyT3V0bGluZWQoKSB7XHJcbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5jYWxjdWxhdGVCb3JkZXJQZXJjZW50KCk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gdGhpcy5jYWxjdWxhdGVCYWNrZ3JvdW5kU3R5bGUocGVyY2VudCk7XHJcbiAgICB0aGlzLnNldEJvcmRlclRvcCgndW5zZXQnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdiYWNrZ3JvdW5kJyxcclxuICAgICAgYmFja2dyb3VuZFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQm9yZGVyUGVyY2VudCgpOiBudW1iZXIge1xyXG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMubGFiZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIHJldHVybiAoKGxhYmVsV2lkdGggKyAxNikgLyBjb250YWluZXJXaWR0aCkgKiAxMDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUJhY2tncm91bmRTdHlsZShwZXJjZW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmlzVmFsaWQgPyB0aGlzLmJvcmRlckNvbG9yIDogRXJyb3JDb2xvcjtcclxuICAgIHJldHVybiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2NvbG9yfSA4cHgsIHRyYW5zcGFyZW50IDhweCwgdHJhbnNwYXJlbnQgJHtwZXJjZW50fSUsICR7Y29sb3J9ICR7cGVyY2VudH0lKSBuby1yZXBlYXQgdG9wLzEwMCUgMXB4YDtcclxuICB9XHJcblxyXG4gIGRyYXdMaW5lVG9wQm9yZGVyKCkge1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmlzVmFsaWQgPyB0aGlzLmJvcmRlckNvbG9yIDogRXJyb3JDb2xvcjtcclxuICAgIHRoaXMuc2V0Qm9yZGVyVG9wKCd1bnNldCcpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2JhY2tncm91bmQnLFxyXG4gICAgICBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwJSwgJHtjb2xvcn0gMCUpIG5vLXJlcGVhdCB0b3AvMTAwJSAxcHhgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0Qm9yZGVyVG9wKGJvcmRlcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnYm9yZGVyLXRvcCcsXHJcbiAgICAgIGJvcmRlclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKCkge1xyXG4gICAgdGhpcy5pc1ZhbGlkID1cclxuICAgICAgKCF0aGlzLnBhdHRlcm4gJiYgIXRoaXMubmdDb250cm9sICYmICF0aGlzLnJlcXVpcmVkKSB8fFxyXG4gICAgICB0aGlzLm5nQ29udHJvbD8uc3RhdHVzPy50b0xvd2VyQ2FzZSgpID09PSAndmFsaWQnIHx8XHJcbiAgICAgICh0aGlzLnJlcXVpcmVkICYmXHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkVmFsdWUodGhpcy5pbnRlcm5hbFZhbHVlKSAmJlxyXG4gICAgICAgICF0aGlzLm5nQ29udHJvbCkgfHxcclxuICAgICAgKHRoaXMucGF0dGVybiAmJiB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQudmFsaWRpdHkudmFsaWQpXHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiBmYWxzZTtcclxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5pc1ZhbGlkID8gdGhpcy5ib3JkZXJDb2xvciA6IEVycm9yQ29sb3I7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnYm9yZGVyLWNvbG9yJyxcclxuICAgICAgY29sb3JcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkVmFsdWUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09ICcnO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNpbnB1dF9jb250YWluZXIgY2xhc3M9XCJuZ3gtb3V0bGluZWQtc2VsZWN0LWZpZWxkXCI+XHJcbiAgPGxhYmVsICNpbnB1dF9sYWJlbCBjbGFzcz1cIm5neC1pbnB1dC1sYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IFtpZF09XCJpbnB1dFByZWZpeElkXCIgY2xhc3M9XCJwcmVmaXhcIiAqbmdJZj1cInByZWZpeFwiPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cInR5cGVPZihwcmVmaXgpID09PSAnc3RyaW5nJ1wiPnt7IHByZWZpeCB9fTwvc3Bhbj5cclxuICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgKm5nSWY9XCJ0eXBlT2YocHJlZml4KSA9PT0gJ29iamVjdCdcIlxyXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByZWZpeFwiXHJcbiAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aW5wdXRcclxuICAgICAgY2xhc3M9XCJuZ3gtbmF0LWlucHV0XCJcclxuICAgICAgI2lucHV0XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgW3BhdHRlcm5dPVwicGF0dGVyblwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJfcGxhY2Vob2xkZXJcIlxyXG4gICAgICBbdmFsdWVdPVwiaW50ZXJuYWxWYWx1ZVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIlxyXG4gICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcclxuICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxyXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICAgIFtyZWFkb25seV09XCIhYXV0b2NvbXBsZXRlXCJcclxuICAgIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3VmZml4XCIgKm5nSWY9XCJzdWZmaXhcIj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJ0eXBlT2Yoc3VmZml4KSA9PT0gJ3N0cmluZydcIj57eyBzdWZmaXggfX08L3NwYW4+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICpuZ0lmPVwidHlwZU9mKHN1ZmZpeCkgPT09ICdvYmplY3QnXCJcclxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJzdWZmaXhcIlxyXG4gICAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiIWlzVmFsaWQgJiYgZXJyb3JUZXh0XCI+e3sgZXJyb3JUZXh0IH19PC9zcGFuPlxyXG48L2Rpdj5cclxuPGRpdlxyXG4gICNvcHRpb25zX2NvbnRhaW5lclxyXG4gIGNsYXNzPVwibmd4LW9wdGlvbnMtY29udGFpbmVyXCJcclxuICBbY2xhc3MucG9zaXRpb24tYm90dG9tXT1cIm9wdFBvcyA9PT0gJ2JvdHRvbSdcIlxyXG4gIFtjbGFzcy5wb3NpdGlvbi10b3BdPVwib3B0UG9zID09PSAndG9wJ1wiXHJcbiAgW2NsYXNzLm5neC1vcHRpb25zLXZpc2libGVdPVwiaXNGb2N1c2VkIHx8IGlzT3Blbk11bHRpcGxlTW9kZVwiXHJcbiAgKm5nSWY9XCIhZGlzYWJsZWRcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19