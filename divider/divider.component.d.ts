import { AfterViewInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { NgxOrientation, NgxType } from './typings';
import * as i0 from "@angular/core";
export declare class DividerComponent implements AfterViewInit {
    private cdr;
    private elementRef;
    private renderer;
    ngxDashed: boolean;
    ngxColor: string;
    ngxOrientation: NgxOrientation;
    ngxText: string;
    ngxType: NgxType;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DividerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DividerComponent, "ngx-divider", never, { "ngxDashed": { "alias": "ngxDashed"; "required": false; }; "ngxColor": { "alias": "ngxColor"; "required": false; }; "ngxOrientation": { "alias": "ngxOrientation"; "required": false; }; "ngxText": { "alias": "ngxText"; "required": false; }; "ngxType": { "alias": "ngxType"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_ngxDashed: unknown;
}
