import { Directive, HostListener, inject } from '@angular/core';
import { NgxDialog } from './dialog.service';
import * as i0 from "@angular/core";
export class CloseAllDialogsDirective {
    constructor() {
        this.NgxDialog = inject(NgxDialog);
    }
    onClose() {
        this.NgxDialog.closeAll();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CloseAllDialogsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: CloseAllDialogsDirective, isStandalone: true, selector: "[closeAllDialogs]", host: { listeners: { "click": "onClose()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CloseAllDialogsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[closeAllDialogs]',
                    standalone: true,
                }]
        }], propDecorators: { onClose: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWxsLWRpYWxvZ3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL2RpYWxvZy9jbG9zZS1hbGwtZGlhbG9ncy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFNN0MsTUFBTSxPQUFPLHdCQUF3QjtJQUpyQztRQUtVLGNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7S0FNdkM7SUFIQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDOytHQU5VLHdCQUF3QjttR0FBeEIsd0JBQXdCOzs0RkFBeEIsd0JBQXdCO2tCQUpwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFLQyxPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5neERpYWxvZyB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY2xvc2VBbGxEaWFsb2dzXScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENsb3NlQWxsRGlhbG9nc0RpcmVjdGl2ZSB7XHJcbiAgcHJpdmF0ZSBOZ3hEaWFsb2cgPSBpbmplY3QoTmd4RGlhbG9nKTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIG9uQ2xvc2UoKSB7XHJcbiAgICB0aGlzLk5neERpYWxvZy5jbG9zZUFsbCgpO1xyXG4gIH1cclxufVxyXG4iXX0=