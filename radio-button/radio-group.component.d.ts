import { AfterContentInit, ElementRef, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';
import { ControlValueAccessor } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { RadioButton } from './radio-button.interface';
import * as i0 from "@angular/core";
export declare class RadioGroupComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {
    private elementRef;
    radioButtons: QueryList<RadioButtonComponent>;
    private subscription;
    readonly currentRadioChecked$: ReplaySubject<RadioButton>;
    currentRadioChecked: EventEmitter<RadioButton>;
    onChange: any;
    onTouched: any;
    constructor(elementRef: ElementRef);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    setValue(ngxValue: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupComponent, "ngx-radio-group", never, {}, { "currentRadioChecked": "currentRadioChecked"; }, ["radioButtons"], ["*"], true, never>;
}
