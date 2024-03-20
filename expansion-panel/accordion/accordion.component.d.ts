import { AfterContentInit, AfterViewInit, ChangeDetectorRef, OnChanges, OnDestroy, QueryList } from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { NgxExpandIconPosition, NgxType } from '../typings';
import * as i0 from "@angular/core";
export declare class AccordionComponent implements AfterViewInit, AfterContentInit, OnChanges, OnDestroy {
    private cdr;
    multi: boolean;
    ngxColor: string;
    ngxExpandIconPosition: NgxExpandIconPosition;
    ngxType: NgxType;
    expansionPanels: QueryList<ExpansionPanelComponent>;
    private subscription;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    setProp(): void;
    ngAfterContentInit(): void;
    expand(component: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "ngx-accordion", never, { "multi": { "alias": "multi"; "required": false; }; "ngxColor": { "alias": "ngxColor"; "required": false; }; "ngxExpandIconPosition": { "alias": "ngxExpandIconPosition"; "required": false; }; "ngxType": { "alias": "ngxType"; "required": false; }; }, {}, ["expansionPanels"], ["*"], true, never>;
    static ngAcceptInputType_multi: unknown;
}
