import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NgxMode } from './typings';
import * as i0 from "@angular/core";
export declare class TagComponent {
    private renderer;
    private elementRef;
    ngxMode: NgxMode;
    ngxColor?: string;
    ngxChecked: boolean;
    readonly ngxOnClose: EventEmitter<MouseEvent>;
    readonly ngxCheckedChange: EventEmitter<boolean>;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    updateCheckedStatus(): void;
    closeTag(e: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagComponent, "ngx-tag", never, { "ngxMode": { "alias": "ngxMode"; "required": false; }; "ngxColor": { "alias": "ngxColor"; "required": false; }; "ngxChecked": { "alias": "ngxChecked"; "required": false; }; }, { "ngxOnClose": "ngxOnClose"; "ngxCheckedChange": "ngxCheckedChange"; }, never, ["*"], true, never>;
}
