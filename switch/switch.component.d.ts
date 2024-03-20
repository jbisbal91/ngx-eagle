import { AfterContentInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgxSize } from './typings';
import * as i0 from "@angular/core";
export declare class SwitchComponent implements ControlValueAccessor, AfterContentInit {
    private cdr;
    private elementRef;
    isChecked: boolean;
    onChange: any;
    onTouched: any;
    disabled: boolean;
    ngxSize: NgxSize;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef);
    ngAfterContentInit(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchComponent, "ngx-switch", never, { "ngxSize": { "alias": "ngxSize"; "required": false; }; }, {}, never, never, true, never>;
}
