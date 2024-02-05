import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class SwitchComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.isChecked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.disabled = false;
    }
    ngAfterContentInit() {
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.isChecked = value;
        this.onChange(this.isChecked);
        this.cdr.markForCheck();
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
    toggle() {
        this.writeValue(!this.isChecked);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SwitchComponent, isStandalone: true, selector: "ngx-switch", host: { classAttribute: "ngx-switch" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SwitchComponent),
                multi: true,
            },
        ], ngImport: i0, template: `
    <button
      [disabled]="disabled"
      class="ngx-switch"
      [class.ngx-switch-checked]="isChecked"
      (click)="toggle()"
    >
      <span class="ngx-switch-knob"></span>
      <span class="ngx-switch-inner"></span>
    </button>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-switch',
                    template: `
    <button
      [disabled]="disabled"
      class="ngx-switch"
      [class.ngx-switch-checked]="isChecked"
      (click)="toggle()"
    >
      <span class="ngx-switch-knob"></span>
      <span class="ngx-switch-inner"></span>
    </button>
  `,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SwitchComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'ngx-switch',
                    },
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; } });

class SwitchModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SwitchModule, imports: [SwitchComponent], exports: [SwitchComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [SwitchComponent],
                    imports: [SwitchComponent,],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SwitchComponent, SwitchModule };
//# sourceMappingURL=ngx-eagle-switch.mjs.map
