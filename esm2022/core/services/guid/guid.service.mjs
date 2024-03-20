import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class Guid {
    static { this.EMPTY = '00000000-0000-0000-0000-000000000000'; }
    constructor() { }
    static create() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    static isGuid(guid) {
        if (!guid)
            throw new TypeError(`Invalid argument; has no value.`);
        var validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
        return validator.test(guid);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Guid, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Guid, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Guid, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL2NvcmUvc2VydmljZXMvZ3VpZC9ndWlkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLElBQUk7YUFDRCxVQUFLLEdBQUcsc0NBQXNDLEFBQXpDLENBQTBDO0lBRTdELGdCQUFlLENBQUM7SUFFVCxNQUFNLENBQUMsTUFBTTtRQUNsQixPQUFPLHNDQUFzQyxDQUFDLE9BQU8sQ0FDbkQsT0FBTyxFQUNQLFVBQVUsQ0FBQztZQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDaEMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQVk7UUFDL0IsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQ3hCLGdFQUFnRSxFQUNoRSxHQUFHLENBQ0osQ0FBQztRQUNGLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOytHQXZCVSxJQUFJO21IQUFKLElBQUksY0FGSCxNQUFNOzs0RkFFUCxJQUFJO2tCQUhoQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHdWlkIHtcclxuICBwdWJsaWMgc3RhdGljIEVNUFRZID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKFxyXG4gICAgICAvW3h5XS9nLFxyXG4gICAgICBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXHJcbiAgICAgICAgICB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNHdWlkKGd1aWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFndWlkKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGFyZ3VtZW50OyBoYXMgbm8gdmFsdWUuYCk7XHJcbiAgICB2YXIgdmFsaWRhdG9yID0gbmV3IFJlZ0V4cChcclxuICAgICAgJ15bYS16MC05XXs4fS1bYS16MC05XXs0fS1bYS16MC05XXs0fS1bYS16MC05XXs0fS1bYS16MC05XXsxMn0kJyxcclxuICAgICAgJ2knXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHZhbGlkYXRvci50ZXN0KGd1aWQpO1xyXG4gIH1cclxufVxyXG4iXX0=