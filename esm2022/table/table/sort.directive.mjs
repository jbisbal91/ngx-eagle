import { Directive, EventEmitter, HostListener, Output, } from '@angular/core';
import * as i0 from "@angular/core";
export class SortDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.status = null;
        this.sort = document.createElement('div');
        this.arrowUp = document.createElement('span');
        this.arrowDown = document.createElement('span');
        this.changeSorting = new EventEmitter();
    }
    ngOnInit() {
        this.elementRef.nativeElement.addEventListener('click', this.onClick.bind(this));
        this.buildSort();
    }
    buildSort() {
        this.renderer.addClass(this.elementRef.nativeElement, 'ngx-th-sort-arrow');
        this.renderer.addClass(this.sort, 'ngx-sort-arrow');
        this.renderer.addClass(this.arrowUp, 'ngx-arrow-up');
        this.renderer.addClass(this.arrowDown, 'ngx-arrow-down');
        this.renderer.appendChild(this.sort, this.arrowUp);
        this.renderer.appendChild(this.sort, this.arrowDown);
        this.renderer.appendChild(this.elementRef.nativeElement, this.sort);
    }
    onClick(event) {
        if (this.status === null) {
            this.status = 'ascend';
            this.renderer.addClass(this.arrowUp, 'active');
            this.renderer.removeClass(this.arrowDown, 'active');
        }
        else if (this.status === 'ascend') {
            this.status = 'descend';
            this.renderer.removeClass(this.arrowUp, 'active');
            this.renderer.addClass(this.arrowDown, 'active');
        }
        else {
            this.status = null;
            this.renderer.removeClass(this.arrowUp, 'active');
            this.renderer.removeClass(this.arrowDown, 'active');
        }
        this.changeSorting.emit(this.status);
    }
    onClick3(event) {
        const clickedElement = event.target;
        if (!this.elementRef.nativeElement.contains(clickedElement) &&
            clickedElement.hasAttribute('ngxsort')) {
            this.status = null;
            this.renderer.removeClass(this.arrowUp, 'active');
            this.renderer.removeClass(this.arrowDown, 'active');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SortDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: SortDirective, isStandalone: true, selector: "th[ngxSort]", outputs: { changeSorting: "changeSorting" }, host: { listeners: { "document:click": "onClick3($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SortDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'th[ngxSort]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { changeSorting: [{
                type: Output
            }], onClick3: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZ3gtZWFnbGUvdGFibGUvdGFibGUvc29ydC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osWUFBWSxFQUdaLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQzs7QUFPdkIsTUFBTSxPQUFPLGFBQWE7SUFPeEIsWUFBb0IsUUFBbUIsRUFBUyxVQUFzQjtRQUFsRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU50RSxXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLFlBQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLGNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWpDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUNtQixDQUFDO0lBRTFFLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDNUMsT0FBTyxFQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUN4QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBR25CLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDckQ7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFHTSxRQUFRLENBQUMsS0FBaUI7UUFDL0IsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQXFCLENBQUM7UUFDbkQsSUFDRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDdkQsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFDdEM7WUFDQSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOytHQXpEVSxhQUFhO21HQUFiLGFBQWE7OzRGQUFiLGFBQWE7a0JBSnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjt5SEFPVyxhQUFhO3NCQUF0QixNQUFNO2dCQXlDQSxRQUFRO3NCQURkLFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neFNvcnQgfSBmcm9tICcuLi90eXBpbmdzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAndGhbbmd4U29ydF0nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBzdGF0dXM6IE5neFNvcnQgPSBudWxsO1xyXG4gIHNvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhcnJvd1VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGFycm93RG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgQE91dHB1dCgpIGNoYW5nZVNvcnRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPE5neFNvcnQ+KCk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnY2xpY2snLFxyXG4gICAgICB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKVxyXG4gICAgKTtcclxuICAgIHRoaXMuYnVpbGRTb3J0KCk7XHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBidWlsZFNvcnQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbmd4LXRoLXNvcnQtYXJyb3cnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zb3J0LCAnbmd4LXNvcnQtYXJyb3cnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5hcnJvd1VwLCAnbmd4LWFycm93LXVwJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYXJyb3dEb3duLCAnbmd4LWFycm93LWRvd24nKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5zb3J0LCB0aGlzLmFycm93VXApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLnNvcnQsIHRoaXMuYXJyb3dEb3duKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuc29ydCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSAnYXNjZW5kJztcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmFycm93VXAsICdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmFycm93RG93biwgJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gJ2FzY2VuZCcpIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSAnZGVzY2VuZCc7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5hcnJvd1VwLCAnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5hcnJvd0Rvd24sICdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gbnVsbDtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmFycm93VXAsICdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmFycm93RG93biwgJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFuZ2VTb3J0aW5nLmVtaXQodGhpcy5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkNsaWNrMyhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhjbGlja2VkRWxlbWVudCkgJiZcclxuICAgICAgY2xpY2tlZEVsZW1lbnQuaGFzQXR0cmlidXRlKCduZ3hzb3J0JylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9IG51bGw7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5hcnJvd1VwLCAnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5hcnJvd0Rvd24sICdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19