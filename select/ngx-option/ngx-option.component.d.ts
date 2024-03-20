import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { Option } from './ngx-option.interface';
import * as i0 from "@angular/core";
export declare class NgxOptionComponent implements Option, AfterViewInit {
    disabled: boolean;
    selected: boolean;
    value: any;
    label: any;
    selectedOptionOnClick: EventEmitter<Option>;
    checked: boolean;
    isVisible: boolean;
    contentRef: ElementRef;
    selectedOption(opt: NgxOptionComponent): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxOptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxOptionComponent, "ngx-option", never, { "disabled": { "alias": "disabled"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "selectedOptionOnClick": "selectedOptionOnClick"; }, never, ["*"], true, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_selected: unknown;
}
