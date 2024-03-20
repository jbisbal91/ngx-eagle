import { ElementRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export type AutofillEvent = {
    target: Element;
    isAutofilled: boolean;
};
export declare class Autofill {
    private _ngZone;
    private _monitoredElements;
    constructor(_ngZone: NgZone);
    monitor(element: ElementRef<Element>): Observable<AutofillEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<Autofill, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Autofill>;
}
