import { Directive, HostListener, } from '@angular/core';
import * as i0 from "@angular/core";
export class ResizeDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.isLeftClickPressed = false;
        this.startX = 0;
        this.width = 0;
        this.mouseMovement = 0;
        this.resize = document.createElement('div');
    }
    ngOnInit() {
        this.buildResize();
        this.resize.addEventListener('mousedown', this.onMouseDown.bind(this));
    }
    buildResize() {
        this.renderer.addClass(this.resize, 'ngx-th-resize');
        this.renderer.appendChild(this.elementRef.nativeElement, this.resize);
    }
    onMouseDown(event) {
        if (event.button === 0) {
            this.isLeftClickPressed = true;
            const cellProp = this.elementRef.nativeElement.getBoundingClientRect();
            this.width = cellProp.width;
        }
        if (this.isLeftClickPressed) {
            this.startX = event.clientX;
            this.renderer.listen('document', 'mousemove', this.onMouseMove.bind(this));
        }
    }
    onMouseMove(event) {
        if (event.button === 0 && this.isLeftClickPressed) {
            this.mouseMovement = event.clientX - this.startX;
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', `${this.width + this.mouseMovement}px`);
            console.log(`${this.width + this.mouseMovement}px`);
        }
    }
    mouseup(event) {
        if (event.button === 0 && this.isLeftClickPressed) {
            this.isLeftClickPressed = false;
            this.width += this.mouseMovement;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResizeDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ResizeDirective, isStandalone: true, selector: "th[ngxResize]", host: { listeners: { "document:mouseup": "mouseup($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResizeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'th[ngxResize]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { mouseup: [{
                type: HostListener,
                args: ['document:mouseup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1lYWdsZS90YWJsZS90YWJsZS9yZXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxHQUdiLE1BQU0sZUFBZSxDQUFDOztBQU12QixNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUFvQixRQUFtQixFQUFTLFVBQXNCO1FBQWxELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTDlELHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUVuQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFpQjtRQUMzQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2xCLFVBQVUsRUFDVixXQUFXLEVBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQzVCLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsS0FBaUI7UUFDM0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixXQUFXLEVBQ1gsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksQ0FDdkMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFBO1NBQ3BEO0lBQ0gsQ0FBQztJQUdELE9BQU8sQ0FBQyxLQUFpQjtRQUN2QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNqRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNsQztJQUNILENBQUM7K0dBdERVLGVBQWU7bUdBQWYsZUFBZTs7NEZBQWYsZUFBZTtrQkFKM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO3lIQWtEQyxPQUFPO3NCQUROLFlBQVk7dUJBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICd0aFtuZ3hSZXNpemVdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzaXplRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIGlzTGVmdENsaWNrUHJlc3NlZCA9IGZhbHNlO1xyXG4gIHJlc2l6ZTogSFRNTEVsZW1lbnQ7XHJcbiAgc3RhcnRYID0gMDtcclxuICB3aWR0aCA9IDA7XHJcbiAgbW91c2VNb3ZlbWVudCA9IDA7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5yZXNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5idWlsZFJlc2l6ZSgpO1xyXG4gICAgdGhpcy5yZXNpemUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkUmVzaXplKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnJlc2l6ZSwgJ25neC10aC1yZXNpemUnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVzaXplKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XHJcbiAgICAgIHRoaXMuaXNMZWZ0Q2xpY2tQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgY29uc3QgY2VsbFByb3AgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgdGhpcy53aWR0aCA9IGNlbGxQcm9wLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNMZWZ0Q2xpY2tQcmVzc2VkKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRYID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oXHJcbiAgICAgICAgJ2RvY3VtZW50JyxcclxuICAgICAgICAnbW91c2Vtb3ZlJyxcclxuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcylcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwICYmIHRoaXMuaXNMZWZ0Q2xpY2tQcmVzc2VkKSB7XHJcbiAgICAgIHRoaXMubW91c2VNb3ZlbWVudCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLnN0YXJ0WDtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnbWluLXdpZHRoJyxcclxuICAgICAgICBgJHt0aGlzLndpZHRoICsgdGhpcy5tb3VzZU1vdmVtZW50fXB4YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLndpZHRoICsgdGhpcy5tb3VzZU1vdmVtZW50fXB4YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNldXAnLCBbJyRldmVudCddKVxyXG4gIG1vdXNldXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmIChldmVudC5idXR0b24gPT09IDAgJiYgdGhpcy5pc0xlZnRDbGlja1ByZXNzZWQpIHtcclxuICAgICAgdGhpcy5pc0xlZnRDbGlja1ByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy53aWR0aCArPSB0aGlzLm1vdXNlTW92ZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==