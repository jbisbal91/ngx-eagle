import { AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export type NgxJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
export type NgxAlign = 'top' | 'middle' | 'bottom';
export declare class RowDirective implements AfterContentInit {
    private cdr;
    ngxAlign: NgxAlign;
    ngxGutter: string;
    ngxJustify: NgxJustify;
    ngxSpan: number;
    readonly currentSpan$: ReplaySubject<number>;
    readonly currentGutter$: ReplaySubject<string>;
    constructor(cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RowDirective, "[ngx-row]", never, { "ngxAlign": { "alias": "ngxAlign"; "required": false; }; "ngxGutter": { "alias": "ngxGutter"; "required": false; }; "ngxJustify": { "alias": "ngxJustify"; "required": false; }; "ngxSpan": { "alias": "ngxSpan"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_ngxSpan: unknown;
}
