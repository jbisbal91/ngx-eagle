import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { ExpansionPanel } from '../expansion-panel.interface';
import { NgxExpandIconPosition, NgxType } from '../typings';
import * as i0 from "@angular/core";
export declare class ExpansionPanelComponent implements ExpansionPanel {
    private elementRef?;
    ngxActiveChange: EventEmitter<ExpansionPanelComponent>;
    id: string;
    disabled: boolean;
    expanded: boolean;
    hideToggle: boolean;
    ngxLabel: any | TemplateRef<void>;
    ngxColor: string;
    ngxType: NgxType;
    ngxExpandIconPosition: NgxExpandIconPosition;
    lastExP: boolean;
    constructor(elementRef?: ElementRef<any> | undefined);
    expand(): void;
    typeOf(value: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionPanelComponent, "ngx-expansion-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "hideToggle": { "alias": "hideToggle"; "required": false; }; "ngxLabel": { "alias": "ngxLabel"; "required": false; }; }, { "ngxActiveChange": "ngxActiveChange"; }, never, ["*"], true, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_expanded: unknown;
    static ngAcceptInputType_hideToggle: unknown;
}
