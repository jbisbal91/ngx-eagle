import * as i0 from '@angular/core';
import { Component, Optional, Self, Input, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';

const ngxSizeMap = {
    small: '2.5rem',
    medium: '3rem',
    large: '3.5rem',
};
const ngxRoundedOutlinedMap = {
    small: '2px',
    medium: '4px',
    large: '6px',
};
const ngxRoundedfilledMap = {
    small: '2px 2px 0px 0px',
    medium: '4px 4px 0px 0px',
    large: '6px 6px 0px 0px',
};
class InputComponent {
    constructor(elementRef, cdr, ngControl) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.ngControl = ngControl;
        this.ngxSize = 'medium';
        this.ngxRounded = 'medium';
        this.ngxFillMode = 'filled';
        this.label = '';
        this.placeholder = '';
        this.onChange = () => { };
        this.onTouched = () => { };
        this.valStatus = true;
        this.disabled = false;
        this.inputFocus = false;
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    ngAfterViewInit() {
        this.initialize();
        //Se lanza el evento cuando se esta haciendo focus en el input
        this.inputRef.nativeElement.addEventListener('focus', () => {
            this.inputFocus = true;
            this.moveLabel();
        });
        //Se lanza el evento cuando se desenfoca del input
        this.inputRef.nativeElement.addEventListener('blur', () => {
            this.inputFocus = false;
            this.moveLabel();
            this.validate();
        });
    }
    ngOnChanges() {
        this.initialize();
        this.cdr.markForCheck();
    }
    initialize() {
        setTimeout(() => {
            this.ngControl.control?.setValue(this.value);
            this.containerRef.nativeElement.style.height = ngxSizeMap[this.ngxSize];
            this.containerRef.nativeElement.style.borderRadius =
                this.ngxFillMode === 'outlined'
                    ? ngxRoundedOutlinedMap[this.ngxRounded]
                    : ngxRoundedfilledMap[this.ngxRounded];
            this.labelRef.nativeElement.style.position = 'absolute';
            this.placeholder = this.inputRef.nativeElement.placeholder;
            this.moveLabel();
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
            if (this.inputFocus || this.value) {
                const top = this.ngxFillMode === 'outlined' ? '-0.375rem ' : '0px';
                this.labelRef.nativeElement.style.top = top;
                this.labelRef.nativeElement.style.fontSize = '0.75rem';
                this.inputRef.nativeElement.placeholder = this.placeholder;
                this.buildBorderOutlined();
            }
            else {
                const top = `${(containerHeight * 0.3333) / 16}rem`;
                this.labelRef.nativeElement.style.top = top;
                this.labelRef.nativeElement.style.fontSize = '0.875rem';
                this.inputRef.nativeElement.placeholder = '';
                this.drawLineTopBorder();
            }
        }
    }
    onInputChange(event) {
        this.value = event.target.value;
        this.ngControl.control?.setValue(this.value);
        this.validate();
        this.buildBorderOutlined();
    }
    buildBorderOutlined() {
        if (this.ngxFillMode === 'outlined') {
            const containerWidth = this.containerRef.nativeElement.offsetWidth;
            const labelWidth = this.labelRef.nativeElement.offsetWidth;
            const percent = ((labelWidth + 10) / containerWidth) * 100;
            let color = this.valStatus // validacion
                ? this.inputFocus // si esta el input con el focus activo coloca el color que le corresponde
                    ? 'var(--ngx-comp-form-field-filled-border-color)'
                    : 'currentColor'
                : '#F44336';
            const background = `linear-gradient(to right, ${color} 5px, transparent 5px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
            const borderColor = `transparent ${color} ${color}`;
            this.containerRef.nativeElement.style.borderColor = borderColor;
            this.containerRef.nativeElement.style.background = background;
        }
    }
    drawLineTopBorder() {
        const background = this.ngxFillMode === 'outlined'
            ? 'linear-gradient(to right, transparent 0%, currentColor 0%) no-repeat top/100% 1px'
            : 'none';
        const borderColor = `transparent currentColor currentColor`;
        this.containerRef.nativeElement.style.borderColor = borderColor;
        this.containerRef.nativeElement.style.background = background;
    }
    validate() {
        this.valStatus =
            this.ngControl.status?.toLowerCase() === 'valid' ? true : false;
        this.containerRef.nativeElement.style.color = this.valStatus
            ? 'currentColor'
            : '#F44336';
        this.inputRef.nativeElement.style.color = this.valStatus
            ? 'var(--ngx-comp-form-field-filled-border-color)'
            : '#F44336';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InputComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: InputComponent, isStandalone: true, selector: "ngx-input", inputs: { ngxSize: "ngxSize", ngxRounded: "ngxRounded", ngxFillMode: "ngxFillMode", label: "label", placeholder: "placeholder" }, viewQueries: [{ propertyName: "containerRef", first: true, predicate: ["input_container"], descendants: true }, { propertyName: "labelRef", first: true, predicate: ["input_label"], descendants: true }, { propertyName: "inputRef", first: true, predicate: ["input"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <div
      #input_container
      class="ngx-input"
      [class.ngx-input-filled]="ngxFillMode === 'filled'"
      [class.ngx-input-outlined]="ngxFillMode === 'outlined'"
    >
      <label #input_label class="ngx-input-label">{{ label }}</label>
      <input
        #input
        class="ngx-nat-input"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        (input)="onInputChange($event)"
      />
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-input',
                    template: `
    <div
      #input_container
      class="ngx-input"
      [class.ngx-input-filled]="ngxFillMode === 'filled'"
      [class.ngx-input-outlined]="ngxFillMode === 'outlined'"
    >
      <label #input_label class="ngx-input-label">{{ label }}</label>
      <input
        #input
        class="ngx-nat-input"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        (input)="onInputChange($event)"
      />
    </div>
  `,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { ngxSize: [{
                type: Input
            }], ngxRounded: [{
                type: Input
            }], ngxFillMode: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
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
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: InputModule, imports: [InputComponent], exports: [InputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InputModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InputModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [InputComponent],
                    imports: [InputComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { InputComponent, InputModule };
//# sourceMappingURL=ngx-eagle-input.mjs.map
