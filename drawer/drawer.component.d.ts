import { AfterViewChecked, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NgxDrawerPlacement } from './typings';
import * as i0 from "@angular/core";
export declare class DrawerComponent implements AfterViewChecked {
    private renderer;
    ngxBackdrop: boolean;
    ngxBackdropClosable: boolean;
    ngxPlacement: NgxDrawerPlacement;
    internalVisible: boolean;
    get ngxVisible(): boolean;
    set ngxVisible(val: boolean);
    ngxVisibleChange: EventEmitter<boolean>;
    backdropRef: ElementRef;
    drawerRef: ElementRef;
    onChange: any;
    onTouched: any;
    constructor(renderer: Renderer2);
    ngAfterViewChecked(): void;
    setBgBackdrop(): void;
    openDrawer(): void;
    closeDrawer(event: Event): void;
    closingAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrawerComponent, "ngx-drawer", never, { "ngxBackdrop": { "alias": "ngxBackdrop"; "required": false; }; "ngxBackdropClosable": { "alias": "ngxBackdropClosable"; "required": false; }; "ngxPlacement": { "alias": "ngxPlacement"; "required": false; }; "ngxVisible": { "alias": "ngxVisible"; "required": false; }; }, { "ngxVisibleChange": "ngxVisibleChange"; }, never, ["*"], true, never>;
    static ngAcceptInputType_ngxBackdrop: unknown;
    static ngAcceptInputType_ngxBackdropClosable: unknown;
}
