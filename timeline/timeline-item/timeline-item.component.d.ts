import { AfterViewInit, ElementRef, OnChanges, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NgxTimelineMode } from '../typings';
import * as i0 from "@angular/core";
export declare class TimelineItemComponent implements AfterViewInit, OnChanges {
    private renderer;
    ngxColor: string;
    ngxDot: any | TemplateRef<void>;
    ngxLabel: any | TemplateRef<void>;
    oLeft: number;
    oRight: number;
    lastItem: boolean;
    dotHeight: number;
    dotWidth: number;
    mode: NgxTimelineMode;
    timelineDotItemRef: ElementRef;
    timelineTailRef: ElementRef;
    constructor(renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    typeOf(value: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    initialDotDimensions(): void;
    setSizeDot(): void;
    setTailHeight(): void;
    setDotColor(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimelineItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimelineItemComponent, "ngx-timeline-item", never, { "ngxColor": { "alias": "ngxColor"; "required": false; }; "ngxDot": { "alias": "ngxDot"; "required": false; }; "ngxLabel": { "alias": "ngxLabel"; "required": false; }; }, {}, never, ["*"], true, never>;
}
