import * as i0 from '@angular/core';
import { EventEmitter, forwardRef, Component, Optional, Host, Input, Output, ViewChild, ChangeDetectionStrategy, ContentChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription, ReplaySubject } from 'rxjs';
import { Guid } from 'ngx-eagle/core/services';

class RadioButtonComponent {
    constructor(elementRef, renderer, radioGroupComp) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.radioGroupComp = radioGroupComp;
        this.id = Guid.create();
        this.checked = false;
        this.disabled = false;
        this.ngxColor = '#1890FF';
        this.ngxValue = '';
        this.ngxSize = 'default';
        this.onclick = new EventEmitter();
        this.subscription = new Subscription();
        this.onChange = () => { };
        this.onTouched = () => { };
        this.disabled = elementRef.nativeElement.hasAttribute('disabled');
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    eventChecked(event) {
        const target = event.target;
        if (!this.disabled) {
            this.checked = target.checked;
            this.writeValue(this.checked);
            this.onClick();
        }
    }
    onClick() {
        let rb = {
            id: this.id,
            checked: this.checked,
            disabled: this.disabled,
            ngxColor: this.ngxColor,
            ngxValue: this.ngxValue,
        };
        this.onclick.emit(rb);
    }
    ngAfterViewChecked() {
        this.setAccentColor();
    }
    ngAfterViewInit() {
        this.setAccentColor();
        if (typeof this.ngxSize === 'number') {
            this.setSizeInNumber();
        }
        this.subscription.add(this.radioGroupComp?.currentRadioChecked$.subscribe((currentRadioChecked) => {
            this.onChange(currentRadioChecked.id === this.id ? true : false);
        }));
    }
    setSizeInNumber() {
        const size = Number(this.ngxSize) / 16 + 'rem';
        this.renderer.setStyle(this.inputRadioRef.nativeElement, 'width', size);
        this.renderer.setStyle(this.inputRadioRef.nativeElement, 'height', size);
    }
    writeValue(value) {
        this.checked = value;
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
    setAccentColor() {
        this.renderer.setStyle(this.inputRadioRef.nativeElement, 'accent-color', this.disabled ? '#9E9E9E' : this.ngxColor);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: RadioGroupComponent, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RadioButtonComponent, isStandalone: true, selector: "ngx-radio-button", inputs: { checked: "checked", ngxColor: "ngxColor", ngxValue: "ngxValue", ngxSize: "ngxSize" }, outputs: { onclick: "onclick" }, host: { properties: { "class.ngx-radio-button-sm": "ngxSize === 'small'", "class.ngx-radio-button-df": "ngxSize === 'default'", "class.ngx-radio-button-lg": "ngxSize === 'large'" }, classAttribute: "ngx-radio-button" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioButtonComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "inputRadioRef", first: true, predicate: ["input_radio_button"], descendants: true }], ngImport: i0, template: `
    <input
      #input_radio_button
      [id]="id"
      type="radio"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-radio-button',
                    template: `
    <input
      #input_radio_button
      [id]="id"
      type="radio"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `,
                    host: {
                        class: 'ngx-radio-button',
                        '[class.ngx-radio-button-sm]': `ngxSize === 'small'`,
                        '[class.ngx-radio-button-df]': `ngxSize === 'default'`,
                        '[class.ngx-radio-button-lg]': `ngxSize === 'large'`,
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioButtonComponent),
                            multi: true,
                        },
                    ],
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: RadioGroupComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }]; }, propDecorators: { checked: [{
                type: Input
            }], ngxColor: [{
                type: Input
            }], ngxValue: [{
                type: Input
            }], ngxSize: [{
                type: Input
            }], onclick: [{
                type: Output
            }], inputRadioRef: [{
                type: ViewChild,
                args: ['input_radio_button']
            }] } });

class RadioGroupComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.subscription = new Subscription();
        this.currentRadioChecked$ = new ReplaySubject();
        this.currentRadioChecked = new EventEmitter();
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterContentInit() {
        const disabled = this.elementRef.nativeElement.hasAttribute('disabled');
        this.setDisabledState(disabled);
        this.radioButtons.forEach((rb) => {
            this.subscription.add(rb.onclick.subscribe(() => {
                this.setValue(rb.ngxValue);
                this.onChange(rb.ngxValue);
                this.currentRadioChecked$.next(rb);
            }));
        });
    }
    writeValue(value) {
        if (value) {
            this.setValue(value);
            this.onChange(value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.radioButtons?.forEach((rb) => (rb.disabled = disabled));
    }
    setValue(ngxValue) {
        this.radioButtons.forEach((rb) => {
            rb.checked = rb.ngxValue === ngxValue ? true : false;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioGroupComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RadioGroupComponent, isStandalone: true, selector: "ngx-radio-group", outputs: { currentRadioChecked: "currentRadioChecked" }, host: { classAttribute: "ngx-radio-group" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioGroupComponent),
                multi: true,
            },
        ], queries: [{ propertyName: "radioButtons", predicate: RadioButtonComponent }], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-radio-group',
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'ngx-radio-group',
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioGroupComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { radioButtons: [{
                type: ContentChildren,
                args: [RadioButtonComponent]
            }], currentRadioChecked: [{
                type: Output
            }] } });

class RadioButtonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: RadioButtonModule, imports: [RadioGroupComponent, RadioButtonComponent], exports: [RadioGroupComponent, RadioButtonComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioButtonModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [RadioGroupComponent, RadioButtonComponent],
                    imports: [RadioGroupComponent, RadioButtonComponent],
                }]
        }] });

const RadioButtonSize = ['large', 'small', 'default'];

/**
 * Generated bundle index. Do not edit.
 */

export { RadioButtonComponent, RadioButtonModule, RadioGroupComponent };
//# sourceMappingURL=ngx-eagle-radio-button.mjs.map
