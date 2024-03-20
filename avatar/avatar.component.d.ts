import { AfterViewInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { NgxShape, NgxSize } from './typings';
import * as i0 from "@angular/core";
export declare class AvatarComponent implements AfterViewInit {
    elementRef: ElementRef;
    private renderer2;
    private cdr;
    ngxShape: NgxShape;
    ngxSize: NgxSize | number;
    ngxSrc: string | null;
    ngxText: string | null;
    avatarUserRef: ElementRef;
    constructor(elementRef: ElementRef, renderer2: Renderer2, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    setSizeInNumber(): void;
    setFontSizeImgUser(): void;
    getInitials(text: string): string;
    getBackgroundColor(initials: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarComponent, "ngx-avatar", never, { "ngxShape": { "alias": "ngxShape"; "required": false; }; "ngxSize": { "alias": "ngxSize"; "required": false; }; "ngxSrc": { "alias": "ngxSrc"; "required": false; }; "ngxText": { "alias": "ngxText"; "required": false; }; }, {}, never, never, true, never>;
}
