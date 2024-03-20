import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ResizeDirective implements OnInit {
    private renderer;
    elementRef: ElementRef;
    private isLeftClickPressed;
    resize: HTMLElement;
    startX: number;
    width: number;
    mouseMovement: number;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    buildResize(): void;
    onMouseDown(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    mouseup(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResizeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ResizeDirective, "th[ngxResize]", never, {}, {}, never, never, true, never>;
}
