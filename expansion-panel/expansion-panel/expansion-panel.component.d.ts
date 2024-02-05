import { EventEmitter, OnInit } from '@angular/core';
import { ExpansionPanel } from '../expansion-panel.interface';
import * as i0 from "@angular/core";
export declare class ExpansionPanelComponent implements ExpansionPanel, OnInit {
    onClick: EventEmitter<ExpansionPanelComponent>;
    id: string;
    disabled: boolean;
    expanded: boolean;
    label: string;
    ngxType: 'card' | 'normal';
    constructor();
    ngOnInit(): void;
    expand(): void;
    guid(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionPanelComponent, "ngx-expansion-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "ngxType": { "alias": "ngxType"; "required": false; }; }, { "onClick": "onClick"; }, never, ["*"], true, never>;
}
