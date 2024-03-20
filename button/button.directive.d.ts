import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NgxFillMode, NgxRounded, NgxSize } from './typings';
import { ColorConverter } from 'ngx-eagle/core/services';
import { ColorContrast } from 'ngx-eagle/core/types';
import * as i0 from "@angular/core";
export declare class ButtonDirective implements OnInit, OnChanges {
    private renderer;
    private elementRef;
    private colorConverter;
    ngxColor: ColorContrast | string;
    ngxFillMode: NgxFillMode;
    ngxRounded: NgxRounded;
    ngxSize: NgxSize;
    constructor(renderer: Renderer2, elementRef: ElementRef, colorConverter: ColorConverter);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    setColorByMode(color: ColorContrast | string): void;
    setColor(backgroundColor: string, color: string, borderColor: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonDirective, "button[ngx-button]", never, { "ngxColor": { "alias": "ngxColor"; "required": false; }; "ngxFillMode": { "alias": "ngxFillMode"; "required": false; }; "ngxRounded": { "alias": "ngxRounded"; "required": false; }; "ngxSize": { "alias": "ngxSize"; "required": false; }; }, {}, never, never, true, never>;
}
