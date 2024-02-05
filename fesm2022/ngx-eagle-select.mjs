import * as i0 from '@angular/core';
import { booleanAttribute, Component, Optional, Self, Input, ViewChild, HostListener, Host, NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReplaySubject, Subscription } from 'rxjs';
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
const ngxRoundedOptContMap = {
    small: '0px 0px 2px 2px',
    medium: '0px 0px 4px 4px',
    large: '0px 0px 6px 6px',
};
class SelectComponent {
    constructor(elementRef, cdr, ngControl) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.ngControl = ngControl;
        this.ngxSize = 'medium';
        this.ngxRounded = 'medium';
        this.ngxFillMode = 'filled';
        this.label = '';
        this.placeholder = '';
        this.autocomplete = false;
        this.containerRef$ = new ReplaySubject();
        this.inputRef$ = new ReplaySubject();
        this.onChange = () => { };
        this.onTouched = () => { };
        this.valStatus = true;
        this.disabled = false;
        this.inputFocus = false;
        this.isOpenDropdown = false;
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
            if (!this.isOpenDropdown) {
                this.moveLabel();
            }
            this.validate();
        });
    }
    openDropdown(isOpenDropdown) {
        setTimeout(() => {
            if (isOpenDropdown) {
                this.isOpenDropdown = this.isOpenDropdown ? false : true;
            }
            else {
                this.isOpenDropdown = isOpenDropdown;
            }
            if (this.optContRef) {
                this.optContRef.nativeElement.style.borderRadius =
                    ngxRoundedOptContMap[this.ngxRounded];
            }
            if (this.ngxFillMode === 'outlined') {
                this.containerRef.nativeElement.style.borderRadius = this.isOpenDropdown
                    ? ngxRoundedfilledMap[this.ngxRounded]
                    : ngxRoundedOutlinedMap[this.ngxRounded];
            }
        }, 100);
    }
    clickout(event) {
        this.openDropdown(this.selectRef.nativeElement.contains(event.target));
        this.value = this.inputRef.nativeElement.value; // se actualiza el valor dependiendo del valor que fue selecionado en el dropdown
        this.moveLabel();
    }
    ngOnChanges() {
        this.initialize();
        this.moveArrow();
        this.cdr.markForCheck();
    }
    initialize() {
        setTimeout(() => {
            this.ngControl.control?.setValue(this.value);
            this.containerRef.nativeElement.style.height = ngxSizeMap[this.ngxSize];
            this.containerRef$.next(this.containerRef);
            this.inputRef$.next(this.inputRef);
            this.containerRef.nativeElement.style.borderRadius =
                this.ngxFillMode === 'outlined'
                    ? ngxRoundedOutlinedMap[this.ngxRounded]
                    : ngxRoundedfilledMap[this.ngxRounded];
            this.labelRef.nativeElement.style.position = 'absolute';
            this.moveLabel();
            this.moveArrow();
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
            if (this.inputFocus || this.value !== '') {
                const top = this.ngxFillMode === 'outlined' ? '-0.375rem ' : '0px';
                this.labelRef.nativeElement.style.top = top;
                this.labelRef.nativeElement.style.fontSize = '0.75rem';
                this.inputRef.nativeElement.placeholder = this.placeholder;
                this.buildBorderOutlined();
            }
            else {
                const top = `${(containerHeight * 0.333) / 16}rem`;
                this.labelRef.nativeElement.style.top = top;
                this.labelRef.nativeElement.style.fontSize = '1rem';
                this.inputRef.nativeElement.placeholder = '';
                this.drawLineTopBorder();
            }
        }
    }
    moveArrow() {
        if (this.arrowRef) {
            const containerHeight = this.containerRef.nativeElement.offsetHeight;
            const marginTop = `${(containerHeight * 0.282) / 16}rem`;
            this.arrowRef.nativeElement.style.marginTop = marginTop;
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
            const formFieldWidth = this.containerRef.nativeElement.offsetWidth;
            const labelWidth = this.labelRef.nativeElement.offsetWidth;
            const percent = ((labelWidth + 10) / formFieldWidth) * 100;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: SelectComponent, isStandalone: true, selector: "ngx-select", inputs: { ngxSize: "ngxSize", ngxRounded: "ngxRounded", ngxFillMode: "ngxFillMode", label: "label", placeholder: "placeholder", autocomplete: ["autocomplete", "autocomplete", booleanAttribute] }, host: { listeners: { "document:mousedown": "clickout($event)" } }, viewQueries: [{ propertyName: "selectRef", first: true, predicate: ["field_form_select"], descendants: true }, { propertyName: "containerRef", first: true, predicate: ["select_container"], descendants: true }, { propertyName: "labelRef", first: true, predicate: ["select_label"], descendants: true }, { propertyName: "inputRef", first: true, predicate: ["select_input"], descendants: true }, { propertyName: "arrowRef", first: true, predicate: ["select_arrow"], descendants: true }, { propertyName: "optContRef", first: true, predicate: ["option_container"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <div class="ngx-field-form-select" #field_form_select>
      <div
        #select_container
        class="ngx-select"
        [class.ngx-select-filled]="ngxFillMode === 'filled'"
        [class.ngx-select-outlined]="ngxFillMode === 'outlined'"
      >
        <label #select_label class="ngx-select-label">{{ label }}</label>
        <input
          #select_input
          class="ngx-select-input"
          [placeholder]="placeholder"
          [value]="value"
          [disabled]="disabled"
          [readonly]="!autocomplete"
          (input)="onInputChange($event)"
        />
        <span class="ngx-select-arrow">
          <svg
            #select_arrow
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M7 10L12 15L17 10H7Z" fill="black" />
          </svg>
        </span>
      </div>
      <div
        *ngIf="isOpenDropdown && !disabled"
        #option_container
        class="ngx-option-container"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-select',
                    template: `
    <div class="ngx-field-form-select" #field_form_select>
      <div
        #select_container
        class="ngx-select"
        [class.ngx-select-filled]="ngxFillMode === 'filled'"
        [class.ngx-select-outlined]="ngxFillMode === 'outlined'"
      >
        <label #select_label class="ngx-select-label">{{ label }}</label>
        <input
          #select_input
          class="ngx-select-input"
          [placeholder]="placeholder"
          [value]="value"
          [disabled]="disabled"
          [readonly]="!autocomplete"
          (input)="onInputChange($event)"
        />
        <span class="ngx-select-arrow">
          <svg
            #select_arrow
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M7 10L12 15L17 10H7Z" fill="black" />
          </svg>
        </span>
      </div>
      <div
        *ngIf="isOpenDropdown && !disabled"
        #option_container
        class="ngx-option-container"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
                    standalone: true,
                    imports: [NgIf],
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
            }], autocomplete: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], selectRef: [{
                type: ViewChild,
                args: ['field_form_select']
            }], containerRef: [{
                type: ViewChild,
                args: ['select_container']
            }], labelRef: [{
                type: ViewChild,
                args: ['select_label']
            }], inputRef: [{
                type: ViewChild,
                args: ['select_input']
            }], arrowRef: [{
                type: ViewChild,
                args: ['select_arrow']
            }], optContRef: [{
                type: ViewChild,
                args: ['option_container']
            }], clickout: [{
                type: HostListener,
                args: ['document:mousedown', ['$event']]
            }] } });

class OptionComponent {
    constructor(selectComponent) {
        this.selectComponent = selectComponent;
        this.value = '';
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.selectComponent?.containerRef$.subscribe((containerRef) => {
            const containerWidth = containerRef.nativeElement.offsetWidth;
            const containerHeight = containerRef.nativeElement.offsetHeight - 8;
            this.optionItemRef.nativeElement.style.width = `${containerWidth / 16}rem`;
            this.optionItemRef.nativeElement.style.height = `${containerHeight / 16}rem`;
        }));
        this.subscription.add(this.selectComponent?.inputRef$.subscribe((inputRef) => {
            this.inputRef = inputRef;
        }));
    }
    onClick() {
        this.inputRef.nativeElement.value =
            this.optionItemRef.nativeElement.textContent;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OptionComponent, deps: [{ token: SelectComponent, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: OptionComponent, isStandalone: true, selector: "ngx-option", inputs: { value: "value" }, viewQueries: [{ propertyName: "optionItemRef", first: true, predicate: ["option_item"], descendants: true }], ngImport: i0, template: `
    <div (click)="onClick()" #option_item class="ngx-option">
      <ng-content></ng-content>
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-option',
                    template: `
    <div (click)="onClick()" #option_item class="ngx-option">
      <ng-content></ng-content>
    </div>
  `,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: SelectComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }]; }, propDecorators: { optionItemRef: [{
                type: ViewChild,
                args: ['option_item']
            }], value: [{
                type: Input
            }] } });

class SelectModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SelectModule, imports: [SelectComponent, OptionComponent], exports: [SelectComponent, OptionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [SelectComponent, OptionComponent],
                    exports: [SelectComponent, OptionComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { OptionComponent, SelectComponent, SelectModule };
//# sourceMappingURL=ngx-eagle-select.mjs.map
