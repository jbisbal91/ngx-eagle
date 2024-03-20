import { AfterContentInit, ChangeDetectorRef, EventEmitter, QueryList, Renderer2 } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Tab } from '../tab/tab.interface';
import { NgxAlignTabs, NgxMode, NgxTabPosition } from '../typings';
import * as i0 from "@angular/core";
export declare class TabGroupComponent implements AfterContentInit {
    private renderer;
    private cdr;
    tabs: QueryList<TabComponent>;
    ngxAlignTabs: NgxAlignTabs;
    ngxMode: NgxMode;
    ngxTabPosition: NgxTabPosition;
    internalSelectedIndex: number;
    get ngxSelectedIndex(): number;
    set ngxSelectedIndex(index: number);
    ngxSelectedIndexChange: EventEmitter<number>;
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    findTabByIndex(index: number): TabComponent;
    selectTab(index: number): void;
    closeTab(tab: Tab): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupComponent, "ngx-tab-group", never, { "ngxAlignTabs": { "alias": "ngxAlignTabs"; "required": false; }; "ngxMode": { "alias": "ngxMode"; "required": false; }; "ngxTabPosition": { "alias": "ngxTabPosition"; "required": false; }; "ngxSelectedIndex": { "alias": "ngxSelectedIndex"; "required": false; }; }, { "ngxSelectedIndexChange": "ngxSelectedIndexChange"; }, ["tabs"], ["*"], true, never>;
}
