import { ChangeDetectorRef, OnInit, QueryList, Renderer2 } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Tab } from '../tab/tab.interface';
import * as i0 from "@angular/core";
export type NgxTabPosition = 'top' | 'left' | 'right';
export type NgxAlignTabs = 'start' | 'end' | 'center';
export type NgxMode = 'default' | 'closeable';
export declare class TabGroupComponent implements OnInit {
    private renderer;
    private cdr;
    tabs: QueryList<TabComponent>;
    ngxTabPosition: NgxTabPosition;
    ngxMode: NgxMode;
    ngxAlignTabs: NgxAlignTabs;
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    selectTab(tab: Tab): void;
    closeTab(tab: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupComponent, "ngx-tab-group", never, { "ngxTabPosition": { "alias": "ngxTabPosition"; "required": false; }; "ngxMode": { "alias": "ngxMode"; "required": false; }; "ngxAlignTabs": { "alias": "ngxAlignTabs"; "required": false; }; }, {}, ["tabs"], ["*"], true, never>;
}
