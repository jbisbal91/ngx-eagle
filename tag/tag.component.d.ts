import { ElementRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NgxMode } from './typings';
import { ColorConverter } from 'ngx-eagle/core/services';
import { ColorContrast } from 'ngx-eagle/core/types';
import * as i0 from "@angular/core";
export declare class TagComponent implements OnInit, OnChanges {
    private renderer;
    private elementRef;
    private colorConverter;
    ngxBordered: boolean;
    ngxColor: ColorContrast | string;
    ngxChecked: boolean;
    ngxMode: NgxMode;
    readonly ngxOnClose: EventEmitter<MouseEvent>;
    readonly ngxCheckedChange: EventEmitter<boolean>;
    backgroundColor: string;
    color: string;
    constructor(renderer: Renderer2, elementRef: ElementRef, colorConverter: ColorConverter);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updateCheckedStatus(): void;
    setTagColor(): void;
    closeTag(e: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagComponent, "ngx-tag", never, { "ngxBordered": { "alias": "ngxBordered"; "required": false; }; "ngxColor": { "alias": "ngxColor"; "required": false; }; "ngxChecked": { "alias": "ngxChecked"; "required": false; }; "ngxMode": { "alias": "ngxMode"; "required": false; }; }, { "ngxOnClose": "ngxOnClose"; "ngxCheckedChange": "ngxCheckedChange"; }, never, ["*"], true, never>;
    static ngAcceptInputType_ngxBordered: unknown;
    static ngAcceptInputType_ngxChecked: unknown;
}
