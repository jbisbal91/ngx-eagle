import { Directive, Input, booleanAttribute, } from '@angular/core';
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
            this.renderer2.addClass(newDiv, 'ngx-table-container');
            if (x || y) {
                this.renderer2.setStyle(newDiv, 'overflow', 'auto');
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: TableDirective, isStandalone: true, selector: "table[ngx-table]", inputs: { ngxScroll: "ngxScroll", ngxBordered: ["ngxBordered", "ngxBordered", booleanAttribute] }, host: { properties: { "class.ngx-table-bordered": "ngxBordered" }, classAttribute: "ngx-table" }, ngImport: i0 }); }
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
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL3RhYmxlL3RhYmxlL3RhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULEtBQUssRUFFTCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7O0FBZXZCLE1BQU0sT0FBTyxjQUFjO0lBSXpCLFlBQW1CLFVBQXNCLEVBQVUsU0FBb0I7UUFBcEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIOUQsY0FBUyxHQUF5QixJQUFJLENBQUM7UUFDUixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVjLENBQUM7SUFFM0UsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLHFCQUFxQixDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2pEO2dCQUNELElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2xEO2dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUN4RCxNQUFNLEVBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQzlCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDbkU7U0FDRjtJQUNILENBQUM7K0dBL0JVLGNBQWM7bUdBQWQsY0FBYyxrSUFFTCxnQkFBZ0I7OzRGQUZ6QixjQUFjO2tCQVIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsV0FBVzt3QkFDbEIsNEJBQTRCLEVBQUUsYUFBYTtxQkFDNUM7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO3lIQUVVLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ2tDLFdBQVc7c0JBQWxELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbnRlcmZhY2UgU2Nyb2xsT3B0aW9ucyB7XHJcbiAgeD86IHN0cmluZztcclxuICB5Pzogc3RyaW5nO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3RhYmxlW25neC10YWJsZV0nLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LXRhYmxlJyxcclxuICAgICdbY2xhc3Mubmd4LXRhYmxlLWJvcmRlcmVkXSc6ICduZ3hCb3JkZXJlZCcsXHJcbiAgfSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBuZ3hTY3JvbGw6IFNjcm9sbE9wdGlvbnMgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgbmd4Qm9yZGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkU2Nyb2xsKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFNjcm9sbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm5neFNjcm9sbCkge1xyXG4gICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMubmd4U2Nyb2xsO1xyXG4gICAgICBjb25zdCBuZXdEaXYgPSB0aGlzLnJlbmRlcmVyMi5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3MobmV3RGl2LCAnbmd4LXRhYmxlLWNvbnRhaW5lcicpO1xyXG4gICAgICBpZiAoeCB8fCB5KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUobmV3RGl2LCAnb3ZlcmZsb3cnLCAnYXV0bycpO1xyXG4gICAgICAgIGlmICh4KSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZShuZXdEaXYsICdtYXgtd2lkdGgnLCB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKG5ld0RpdiwgJ21heC1oZWlnaHQnLCB5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlcjIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksXHJcbiAgICAgICAgICBuZXdEaXYsXHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuYXBwZW5kQ2hpbGQobmV3RGl2LCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19