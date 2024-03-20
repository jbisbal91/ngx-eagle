import * as i0 from '@angular/core';
import { EventEmitter, forwardRef, Component, ChangeDetectionStrategy, Input, ViewChild, Output, NgModule } from '@angular/core';
import { Guid } from 'ngx-eagle/core/services';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class CheckboxComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.checked = false;
        this.indeterminate = false;
        this.ngxColor = '#1890FF';
        this.ngxSize = 'default';
        this.disabled = false;
        this.onChecked = new EventEmitter();
        this.onChange = () => {
            this.onChecked.emit(this.checked);
        };
        this.onTouched = () => { };
        this.id = Guid.create();
        this.disabled = elementRef.nativeElement.hasAttribute('disabled');
    }
    ngAfterViewChecked() {
        this.setColor();
    }
    ngAfterViewInit() {
        this.setColor();
        if (typeof this.ngxSize === 'number') {
            this.setSizeInNumber();
        }
    }
    setSizeInNumber() {
        const size = Number(this.ngxSize) / 16 + 'rem';
        this.renderer.setStyle(this.inputCheckboxRef.nativeElement, 'width', size);
        this.renderer.setStyle(this.inputCheckboxRef.nativeElement, 'height', size);
    }
    eventChecked(event) {
        const target = event.target;
        if (!this.disabled) {
            this.checked = target.checked;
            this.writeValue(this.checked);
        }
    }
    setColor() {
        if (!this.ngxColor) {
            this.ngxColor = '#1890FF';
        }
        if (this.inputCheckboxRef &&
            (this.inputCheckboxRef.nativeElement.indeterminate ||
                this.inputCheckboxRef.nativeElement.checked)) {
            this.renderer.setStyle(this.inputCheckboxRef.nativeElement, 'background-color', this.disabled ? '#9E9E9E' : this.ngxColor);
        }
        else {
            this.renderer.setStyle(this.inputCheckboxRef.nativeElement, 'background-color', 'transparent');
        }
    }
    writeValue(checked) {
        this.checked = checked;
        this.onChange(this.checked);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CheckboxComponent, isStandalone: true, selector: "ngx-checkbox", inputs: { checked: "checked", indeterminate: "indeterminate", ngxColor: "ngxColor", ngxSize: "ngxSize" }, outputs: { onChecked: "onChecked" }, host: { properties: { "class.ngx-checkbox-sm": "ngxSize === 'small'", "class.ngx-checkbox-df": "ngxSize === 'default'", "class.ngx-checkbox-lg": "ngxSize === 'large'" }, classAttribute: "ngx-checkbox" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CheckboxComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "inputCheckboxRef", first: true, predicate: ["input_checkbox"], descendants: true }], ngImport: i0, template: `
    <input
      #input_checkbox
      [id]="id"
      type="checkbox"
      [indeterminate]="indeterminate"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-checkbox',
                    template: `
    <input
      #input_checkbox
      [id]="id"
      type="checkbox"
      [indeterminate]="indeterminate"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `,
                    host: {
                        class: 'ngx-checkbox',
                        '[class.ngx-checkbox-sm]': `ngxSize === 'small'`,
                        '[class.ngx-checkbox-df]': `ngxSize === 'default'`,
                        '[class.ngx-checkbox-lg]': `ngxSize === 'large'`,
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CheckboxComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { checked: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], ngxColor: [{
                type: Input
            }], ngxSize: [{
                type: Input
            }], inputCheckboxRef: [{
                type: ViewChild,
                args: ['input_checkbox']
            }], onChecked: [{
                type: Output
            }] } });

class CheckboxModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CheckboxModule, imports: [CheckboxComponent], exports: [CheckboxComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [CheckboxComponent],
                    imports: [CheckboxComponent],
                }]
        }] });

const CheckboxSize = ['large', 'small', 'default'];

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxComponent, CheckboxModule };
//# sourceMappingURL=ngx-eagle-checkbox.mjs.map
