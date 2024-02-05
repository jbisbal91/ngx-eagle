import { OnInit } from '@angular/core';
import { Tab } from './tab.interface';
import * as i0 from "@angular/core";
export declare class TabComponent implements Tab, OnInit {
    id: string;
    isActive: boolean;
    label: string;
    disabled: boolean;
    ngOnInit(): void;
    guid(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabComponent, "ngx-tab", never, { "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], true, never>;
}
