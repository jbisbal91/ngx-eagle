import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges } from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from './typings';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class InputComponent implements AfterViewInit, ControlValueAccessor, OnChanges {
    elementRef: ElementRef;
    private cdr;
    ngControl: NgControl;
    ngxSize: NgxSize;
    ngxRounded: NgxRounded;
    ngxFillMode: NgxFillMode;
    label: string;
    placeholder: string;
    containerRef: ElementRef;
    labelRef: ElementRef;
    inputRef: ElementRef;
    onChange: any;
    onTouched: any;
    value: any;
    valStatus: boolean;
    disabled: boolean;
    inputFocus: boolean;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, ngControl: NgControl);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    initialize(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    moveLabel(): void;
    onInputChange(event: Event): void;
    buildBorderOutlined(): void;
    drawLineTopBorder(): void;
    validate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, [null, null, { optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "ngx-input", never, { "ngxSize": { "alias": "ngxSize"; "required": false; }; "ngxRounded": { "alias": "ngxRounded"; "required": false; }; "ngxFillMode": { "alias": "ngxFillMode"; "required": false; }; "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; }, {}, never, never, true, never>;
}
