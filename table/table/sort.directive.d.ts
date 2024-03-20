import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { NgxSort } from '../typings';
import * as i0 from "@angular/core";
export declare class SortDirective implements OnInit {
    private renderer;
    elementRef: ElementRef;
    status: NgxSort;
    sort: HTMLDivElement;
    arrowUp: HTMLSpanElement;
    arrowDown: HTMLSpanElement;
    changeSorting: EventEmitter<"ascend" | "descend" | null>;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    buildSort(): void;
    onClick(event: MouseEvent): void;
    onClick3(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SortDirective, "th[ngxSort]", never, {}, { "changeSorting": "changeSorting"; }, never, never, true, never>;
}
