import { ComponentFactoryResolver, Injector, Type } from '@angular/core';
import * as i0 from "@angular/core";
export type NgStyle = {
    width?: string;
    height?: string;
};
export declare class NgxDialog {
    private resolver;
    private injector;
    ngxDialogId: number;
    constructor(resolver: ComponentFactoryResolver, injector: Injector);
    open(component: Type<any>, data?: any, style?: NgStyle): import("@angular/core").ComponentRef<any>;
    setStyle(overlayPane: HTMLDivElement, style: NgStyle): void;
    closeAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDialog, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxDialog>;
}
