import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class Autofill {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
    }
    monitor(elementOrRef) {
        const result = new Subject();
        return result;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Autofill, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Autofill, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Autofill, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZpbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25neC1lYWdsZS9jb3JlL3NlcnZpY2VzL2F1dG9maWxsL2F1dG9maWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQWUzQyxNQUFNLE9BQU8sUUFBUTtJQUVuQixZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUQzQix1QkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztJQUNoQyxDQUFDO0lBSXZDLE9BQU8sQ0FDTCxZQUEyQztRQUUzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBaUIsQ0FBQztRQUM1QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOytHQVhVLFFBQVE7bUhBQVIsUUFBUSxjQUZQLE1BQU07OzRGQUVQLFFBQVE7a0JBSHBCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCB0eXBlIEF1dG9maWxsRXZlbnQgPSB7XHJcbiAgdGFyZ2V0OiBFbGVtZW50O1xyXG4gIGlzQXV0b2ZpbGxlZDogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgTW9uaXRvcmVkRWxlbWVudEluZm8gPSB7XHJcbiAgcmVhZG9ubHkgc3ViamVjdDogU3ViamVjdDxBdXRvZmlsbEV2ZW50PjtcclxuICB1bmxpc3RlbjogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvZmlsbCB7XHJcbiAgcHJpdmF0ZSBfbW9uaXRvcmVkRWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE1vbml0b3JlZEVsZW1lbnRJbmZvPigpO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxyXG5cclxuICBtb25pdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWY8RWxlbWVudD4pOiBPYnNlcnZhYmxlPEF1dG9maWxsRXZlbnQ+O1xyXG5cclxuICBtb25pdG9yKFxyXG4gICAgZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50PlxyXG4gICk6IE9ic2VydmFibGU8QXV0b2ZpbGxFdmVudD4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFN1YmplY3Q8QXV0b2ZpbGxFdmVudD4oKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19