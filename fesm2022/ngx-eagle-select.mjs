import * as i0 from '@angular/core';
import { EventEmitter, booleanAttribute, Component, Input, Output, ViewChild, Optional, Self, ContentChildren, HostListener, NgModule } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import * as i1 from 'ngx-eagle/core/services';
import { Guid } from 'ngx-eagle/core/services';
import { ErrorColor } from 'ngx-eagle/core/types';
import { Subscription } from 'rxjs';
import * as i2 from '@angular/forms';

class NgxOptionComponent {
    constructor() {
        this.disabled = false;
        this.selected = false;
        this.value = '';
        this.label = '';
        this.selectedOptionOnClick = new EventEmitter();
        this.checked = false;
        this.isVisible = true;
    }
    selectedOption(opt) {
        if (!opt.disabled) {
            this.selectedOptionOnClick.emit({
                disabled: opt.disabled,
                selected: opt.selected,
                value: opt.value,
                label: opt.label,
            });
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.label = this.contentRef?.nativeElement.textContent.trim();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxOptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: NgxOptionComponent, isStandalone: true, selector: "ngx-option", inputs: { disabled: ["disabled", "disabled", booleanAttribute], selected: ["selected", "selected", booleanAttribute], value: "value" }, outputs: { selectedOptionOnClick: "selectedOptionOnClick" }, host: { classAttribute: "ngx-option" }, viewQueries: [{ propertyName: "contentRef", first: true, predicate: ["content"], descendants: true }], ngImport: i0, template: "<div\r\n  *ngIf=\"isVisible\"\r\n  (click)=\"selectedOption(this)\"\r\n  #content\r\n  class=\"ngx-option\"\r\n  [class.ngx-option-selected]=\"selected\"\r\n  [class.ngx-option-disabled]=\"disabled\"\r\n>\r\n  <input\r\n    *ngIf=\"checked\"\r\n    type=\"checkbox\"\r\n    [checked]=\"selected\"\r\n    [disabled]=\"disabled\"\r\n  />\r\n  <div class=\"content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [":host{background-color:#fff}:host:hover{background-color:#f5f5f5}.ngx-option{display:flex;align-items:center;height:2rem;width:100%;background-color:inherit;transition:background-color .3s ease;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-option-disabled{color:#9e9e9e;pointer-events:none}.ngx-option-selected{background-color:#f5f5f5;color:#1890ff}.content{padding:0 .75rem}.ngx-option:hover{cursor:pointer;background-color:inherit}.ngx-option input[type=checkbox]:checked{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0zODItMjQwIDE1NC00NjhsNTctNTcgMTcxIDE3MSAzNjctMzY3IDU3IDU3LTQyNCA0MjRaIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+) no-repeat center;border:none}.ngx-option input[type=checkbox]{margin-left:.75rem;height:1.125rem;width:1.125rem;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxOptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-option', standalone: true, host: {
                        class: 'ngx-option',
                    }, imports: [NgIf], template: "<div\r\n  *ngIf=\"isVisible\"\r\n  (click)=\"selectedOption(this)\"\r\n  #content\r\n  class=\"ngx-option\"\r\n  [class.ngx-option-selected]=\"selected\"\r\n  [class.ngx-option-disabled]=\"disabled\"\r\n>\r\n  <input\r\n    *ngIf=\"checked\"\r\n    type=\"checkbox\"\r\n    [checked]=\"selected\"\r\n    [disabled]=\"disabled\"\r\n  />\r\n  <div class=\"content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [":host{background-color:#fff}:host:hover{background-color:#f5f5f5}.ngx-option{display:flex;align-items:center;height:2rem;width:100%;background-color:inherit;transition:background-color .3s ease;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-option-disabled{color:#9e9e9e;pointer-events:none}.ngx-option-selected{background-color:#f5f5f5;color:#1890ff}.content{padding:0 .75rem}.ngx-option:hover{cursor:pointer;background-color:inherit}.ngx-option input[type=checkbox]:checked{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0zODItMjQwIDE1NC00NjhsNTctNTcgMTcxIDE3MSAzNjctMzY3IDU3IDU3LTQyNCA0MjRaIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+) no-repeat center;border:none}.ngx-option input[type=checkbox]{margin-left:.75rem;height:1.125rem;width:1.125rem;cursor:pointer}\n"] }]
        }], propDecorators: { disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], selected: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], value: [{
                type: Input
            }], selectedOptionOnClick: [{
                type: Output
            }], contentRef: [{
                type: ViewChild,
                args: ['content']
            }] } });

class NgxOutlinedSelectFieldComponent {
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

class SelectModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SelectModule, imports: [NgxOutlinedSelectFieldComponent, NgxOptionComponent], exports: [NgxOutlinedSelectFieldComponent, NgxOptionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NgxOutlinedSelectFieldComponent, NgxOptionComponent],
                    exports: [NgxOutlinedSelectFieldComponent, NgxOptionComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NgxOptionComponent, NgxOutlinedSelectFieldComponent, SelectModule };
//# sourceMappingURL=ngx-eagle-select.mjs.map
