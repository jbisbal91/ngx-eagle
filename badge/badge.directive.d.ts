import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BadgeDirective implements OnInit, OnChanges {
    elementRef: ElementRef;
    private renderer2;
    ngxBadge: any;
    ngxBadgePosition: 'before' | 'after';
    ngxBadgeSize: 'small' | 'medium' | 'large';
    ngxBadgeHidden: boolean;
    newSpan: HTMLSpanElement;
    constructor(elementRef: ElementRef, renderer2: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BadgeDirective, "[ngxBadge]", never, { "ngxBadge": { "alias": "ngxBadge"; "required": false; }; "ngxBadgePosition": { "alias": "ngxBadgePosition"; "required": false; }; "ngxBadgeSize": { "alias": "ngxBadgeSize"; "required": false; }; "ngxBadgeHidden": { "alias": "ngxBadgeHidden"; "required": false; }; }, {}, never, never, true, never>;
}
