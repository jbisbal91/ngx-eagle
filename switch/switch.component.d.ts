import { AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwitchComponent implements ControlValueAccessor, AfterContentInit {
    private cdr;
    isChecked: boolean;
    onChange: any;
    onTouched: any;
    disabled: boolean;
    constructor(cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchComponent, "ngx-switch", never, {}, {}, never, never, true, never>;
}
