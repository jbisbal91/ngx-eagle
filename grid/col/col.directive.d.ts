import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { RowDirective } from '../row/row.directive';
import * as i0 from "@angular/core";
export declare class ColDirective implements OnInit, OnDestroy {
    elementRef: ElementRef;
    private renderer2;
    rowDirective: RowDirective;
    ngxSpan: number;
    private subscription;
    constructor(elementRef: ElementRef, renderer2: Renderer2, rowDirective: RowDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setMaxWidthCols(totalCols: number): void;
    setGutter(gutter: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColDirective, [null, null, { optional: true; host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColDirective, "[ngx-col]", never, { "ngxSpan": { "alias": "ngxSpan"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_ngxSpan: unknown;
}
