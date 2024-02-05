import { Directive, Input, } from '@angular/core';
import * as i0 from "@angular/core";
export class TableDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngxScroll = null;
        this.ngxBordered = false;
    }
    ngAfterViewInit() {
        this.addScroll();
    }
    addScroll() {
        if (this.ngxScroll) {
            const { x, y } = this.ngxScroll;
            const newDiv = this.renderer2.createElement('div');
            this.renderer2.addClass(newDiv, 'table-container');
            if (x || y) {
                this.renderer2.setStyle(newDiv, 'overflow', 'scroll');
                if (x) {
                    this.renderer2.setStyle(newDiv, 'max-width', x);
                }
                if (y) {
                    this.renderer2.setStyle(newDiv, 'max-height', y);
                }
                this.renderer2.insertBefore(this.renderer2.parentNode(this.elementRef.nativeElement), newDiv, this.elementRef.nativeElement);
                this.renderer2.appendChild(newDiv, this.elementRef.nativeElement);
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TableDirective, isStandalone: true, selector: "table[ngx-table]", inputs: { ngxScroll: "ngxScroll", ngxBordered: "ngxBordered" }, host: { properties: { "class.ngx-table-bordered": "ngxBordered" }, classAttribute: "ngx-table" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'table[ngx-table]',
                    host: {
                        class: 'ngx-table',
                        '[class.ngx-table-bordered]': 'ngxBordered',
                    },
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { ngxScroll: [{
                type: Input
            }], ngxBordered: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVhZ2xlL3RhYmxlL3RhYmxlL3RhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQzs7QUFldkIsTUFBTSxPQUFPLGNBQWM7SUFJekIsWUFBbUIsVUFBc0IsRUFBVSxTQUFvQjtRQUFwRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUg5RCxjQUFTLEdBQXlCLElBQUksQ0FBQztRQUN2QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUU2QyxDQUFDO0lBRTNFLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLFNBQVM7UUFDZixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNqRDtnQkFDRCxJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNsRDtnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFDeEQsTUFBTSxFQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUM5QixDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ25FO1NBQ0Y7SUFDSCxDQUFDOytHQS9CVSxjQUFjO21HQUFkLGNBQWM7OzRGQUFkLGNBQWM7a0JBUjFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxXQUFXO3dCQUNsQiw0QkFBNEIsRUFBRSxhQUFhO3FCQUM1QztvQkFDRCxVQUFVLEVBQUUsSUFBSTtpQkFDakI7eUhBRVUsU0FBUztzQkFBakIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmludGVyZmFjZSBTY3JvbGxPcHRpb25zIHtcclxuICB4Pzogc3RyaW5nO1xyXG4gIHk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAndGFibGVbbmd4LXRhYmxlXScsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICduZ3gtdGFibGUnLFxyXG4gICAgJ1tjbGFzcy5uZ3gtdGFibGUtYm9yZGVyZWRdJzogJ25neEJvcmRlcmVkJyxcclxuICB9LFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIG5neFNjcm9sbDogU2Nyb2xsT3B0aW9ucyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG5neEJvcmRlcmVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZFNjcm9sbCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRTY3JvbGwoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uZ3hTY3JvbGwpIHtcclxuICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLm5neFNjcm9sbDtcclxuICAgICAgY29uc3QgbmV3RGl2ID0gdGhpcy5yZW5kZXJlcjIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKG5ld0RpdiwgJ3RhYmxlLWNvbnRhaW5lcicpO1xyXG4gICAgICBpZiAoeCB8fCB5KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUobmV3RGl2LCAnb3ZlcmZsb3cnLCAnc2Nyb2xsJyk7XHJcbiAgICAgICAgaWYgKHgpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKG5ld0RpdiwgJ21heC13aWR0aCcsIHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeSkge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUobmV3RGl2LCAnbWF4LWhlaWdodCcsIHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcmVyMi5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyMi5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcclxuICAgICAgICAgIG5ld0RpdixcclxuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyMi5hcHBlbmRDaGlsZChuZXdEaXYsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=