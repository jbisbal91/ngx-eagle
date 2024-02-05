import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgxDrawerPlacement } from './typings';
import * as i0 from "@angular/core";
export declare class DrawerComponent implements OnInit, OnChanges {
    ngxVisible: boolean;
    ngxPlacement: NgxDrawerPlacement;
    readonly ngxOnClose: EventEmitter<void>;
    backdropRef: ElementRef;
    drawerRef: ElementRef;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    openDrawer(): void;
    closeDrawer(event: Event): void;
    closingAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrawerComponent, "ngx-drawer", never, { "ngxVisible": { "alias": "ngxVisible"; "required": false; }; "ngxPlacement": { "alias": "ngxPlacement"; "required": false; }; }, { "ngxOnClose": "ngxOnClose"; }, never, ["*"], true, never>;
}
