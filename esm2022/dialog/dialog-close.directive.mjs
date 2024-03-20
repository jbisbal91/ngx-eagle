import { Directive, ElementRef, HostListener, inject, Input, } from '@angular/core';
import { DialogRef } from './dialog-ref';
import { NgxDialog } from './dialog.service';
import * as i0 from "@angular/core";
export class DialogCloseDirective {
    constructor() {
        this.host = inject(ElementRef);
        this.NgxDialog = inject(NgxDialog);
        this.ref = inject(DialogRef, { optional: true });
    }
    ngOnInit() {
        this.ref = this.ref || this.getRefFromParent();
    }
    onClose() {
        this.ref?.close(this.dialogClose);
    }
    getRefFromParent() {
        let parent = this.host.nativeElement.parentElement;
        while (parent && parent.localName !== 'ngx-dialog') {
            parent = parent.parentElement;
        }
        return parent
            ? this.NgxDialog.dialogs.find(({ id }) => id === parent?.id)
            : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogCloseDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DialogCloseDirective, isStandalone: true, selector: "[dialogClose]", inputs: { dialogClose: "dialogClose" }, host: { listeners: { "click": "onClose()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dialogClose]',
                    standalone: true,
                }]
        }], propDecorators: { dialogClose: [{
                type: Input
            }], onClose: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNsb3NlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25neC1lYWdsZS9kaWFsb2cvZGlhbG9nLWNsb3NlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFNN0MsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQUtVLFNBQUksR0FBNEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELGNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsUUFBRyxHQUFpQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7S0F1QjNFO0lBbEJDLFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUdELE9BQU87UUFDTCxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDbkQsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxZQUFZLEVBQUU7WUFDbEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7U0FDL0I7UUFDRCxPQUFPLE1BQU07WUFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFDNUQsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7K0dBekJVLG9CQUFvQjttR0FBcEIsb0JBQW9COzs0RkFBcEIsb0JBQW9CO2tCQUpoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBT0MsV0FBVztzQkFEVixLQUFLO2dCQVFOLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgaW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmJztcclxuaW1wb3J0IHsgTmd4RGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tkaWFsb2dDbG9zZV0nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dDbG9zZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiA9IGluamVjdChFbGVtZW50UmVmKTtcclxuICBwcml2YXRlIE5neERpYWxvZyA9IGluamVjdChOZ3hEaWFsb2cpO1xyXG4gIHJlZjogRGlhbG9nUmVmIHwgdW5kZWZpbmVkIHwgbnVsbCA9IGluamVjdChEaWFsb2dSZWYsIHsgb3B0aW9uYWw6IHRydWUgfSk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGlhbG9nQ2xvc2U6IGFueTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJlZiA9IHRoaXMucmVmIHx8IHRoaXMuZ2V0UmVmRnJvbVBhcmVudCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIG9uQ2xvc2UoKSB7XHJcbiAgICB0aGlzLnJlZj8uY2xvc2UodGhpcy5kaWFsb2dDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlZkZyb21QYXJlbnQoKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LmxvY2FsTmFtZSAhPT0gJ25neC1kaWFsb2cnKSB7XHJcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmVudFxyXG4gICAgICA/IHRoaXMuTmd4RGlhbG9nLmRpYWxvZ3MuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gcGFyZW50Py5pZClcclxuICAgICAgOiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=