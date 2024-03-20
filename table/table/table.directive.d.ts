import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
interface ScrollOptions {
    x?: string;
    y?: string;
}
export declare class TableDirective implements AfterViewInit {
    elementRef: ElementRef;
    private renderer2;
    ngxScroll: ScrollOptions | null;
    ngxBordered: boolean;
    constructor(elementRef: ElementRef, renderer2: Renderer2);
    ngAfterViewInit(): void;
    private addScroll;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TableDirective, "table[ngx-table]", never, { "ngxScroll": { "alias": "ngxScroll"; "required": false; }; "ngxBordered": { "alias": "ngxBordered"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_ngxBordered: unknown;
}
export {};
