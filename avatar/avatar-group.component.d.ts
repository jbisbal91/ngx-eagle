import { AfterContentInit, ChangeDetectorRef, ElementRef, QueryList, Renderer2 } from '@angular/core';
import { AvatarComponent } from './avatar.component';
import * as i0 from "@angular/core";
export declare class AvatarGroupComponent implements AfterContentInit {
    private renderer;
    private elementRef;
    private cdr;
    maxVisibleAvatars: number | null;
    avatars: QueryList<AvatarComponent>;
    constructor(renderer: Renderer2, elementRef: ElementRef, cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    private updateVisibleAvatars;
    createNodeOverflow(overflow: number): void;
    setSizeNodeOverflow(nodeOverflow: any, ngxSize: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarGroupComponent, "ngx-avatar-group", never, { "maxVisibleAvatars": { "alias": "maxVisibleAvatars"; "required": false; }; }, {}, ["avatars"], ["*"], true, never>;
}
