import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NgxSize, NgxType } from './typings';
import * as i0 from "@angular/core";
export declare class ProgressComponent implements AfterViewInit, OnChanges {
    private cdr;
    private renderer;
    private elementRef;
    ngxColor: string;
    ngxPercent: number;
    ngxSize: NgxSize;
    ngxTimer: number;
    ngxType: NgxType;
    template: TemplateRef<void>;
    lineProgressRef: ElementRef;
    circleProgressRef: ElementRef;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private updateLineProgress;
    private updateCircleProgress;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressComponent, "ngx-progress", never, { "ngxColor": { "alias": "ngxColor"; "required": false; }; "ngxPercent": { "alias": "ngxPercent"; "required": false; }; "ngxSize": { "alias": "ngxSize"; "required": false; }; "ngxTimer": { "alias": "ngxTimer"; "required": false; }; "ngxType": { "alias": "ngxType"; "required": false; }; "template": { "alias": "template"; "required": false; }; }, {}, never, never, true, never>;
}
