import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { SelectComponent } from './select.component';
import * as i0 from "@angular/core";
export declare class OptionComponent implements OnInit, OnDestroy {
    selectComponent: SelectComponent;
    optionItemRef: ElementRef;
    value: string;
    inputRef: ElementRef;
    private subscription;
    constructor(selectComponent: SelectComponent);
    ngOnInit(): void;
    onClick(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OptionComponent, [{ optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OptionComponent, "ngx-option", never, { "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
