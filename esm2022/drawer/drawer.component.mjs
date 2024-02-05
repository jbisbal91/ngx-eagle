import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
export class DrawerComponent {
    constructor() {
        this.ngxVisible = false;
        this.ngxPlacement = 'left';
        this.ngxOnClose = new EventEmitter();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes['ngxVisible']) {
            if (changes['ngxVisible'].currentValue) {
                this.openDrawer();
            }
            else {
                this.closingAction();
            }
        }
    }
    openDrawer() {
        setTimeout(() => {
            if (this.drawerRef &&
                (this.ngxPlacement === 'top' ||
                    this.ngxPlacement === 'bottom' ||
                    this.ngxPlacement === 'right' ||
                    this.ngxPlacement === 'left')) {
                const axis = this.ngxPlacement === 'top' || this.ngxPlacement === 'bottom'
                    ? 'Y'
                    : 'X';
                this.drawerRef.nativeElement.style.transform = `translate${axis}(0px)`;
            }
        });
    }
    closeDrawer(event) {
        const clickedElement = event.target;
        const isClickOnParent = clickedElement === this.backdropRef.nativeElement;
        const isClickOnChild = this.drawerRef.nativeElement.contains(clickedElement);
        if (isClickOnParent && !isClickOnChild) {
            this.closingAction();
        }
    }
    closingAction() {
        const transformMap = {
            bottom: 'translateY(100%)',
            top: 'translateY(-100%)',
            right: 'translateX(100%)',
            left: 'translateX(-100%)',
        };
        this.drawerRef.nativeElement.style.transform =
            transformMap[this.ngxPlacement];
        setTimeout(() => {
            this.ngxOnClose.emit();
        }, 500);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DrawerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DrawerComponent, isStandalone: true, selector: "ngx-drawer", inputs: { ngxVisible: "ngxVisible", ngxPlacement: "ngxPlacement" }, outputs: { ngxOnClose: "ngxOnClose" }, viewQueries: [{ propertyName: "backdropRef", first: true, predicate: ["backdrop"], descendants: true }, { propertyName: "drawerRef", first: true, predicate: ["drawer"], descendants: true }], usesOnChanges: true, ngImport: i0, template: ` <div
    #backdrop
    (click)="closeDrawer($event)"
    *ngIf="ngxVisible"
    class="ngx-drawer-backdrop"
  >
    <div
      #drawer
      class="ngx-drawer"
      [class.ngx-drawer-placement-top]="ngxPlacement === 'top'"
      [class.ngx-drawer-placement-right]="ngxPlacement === 'right'"
      [class.ngx-drawer-placement-bottom]="ngxPlacement === 'bottom'"
      [class.ngx-drawer-placement-left]="ngxPlacement === 'left'"
    >
      <ng-content></ng-content>
    </div>
  </div>`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DrawerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-drawer',
                    template: ` <div
    #backdrop
    (click)="closeDrawer($event)"
    *ngIf="ngxVisible"
    class="ngx-drawer-backdrop"
  >
    <div
      #drawer
      class="ngx-drawer"
      [class.ngx-drawer-placement-top]="ngxPlacement === 'top'"
      [class.ngx-drawer-placement-right]="ngxPlacement === 'right'"
      [class.ngx-drawer-placement-bottom]="ngxPlacement === 'bottom'"
      [class.ngx-drawer-placement-left]="ngxPlacement === 'left'"
    >
      <ng-content></ng-content>
    </div>
  </div>`,
                    standalone: true,
                    imports: [NgIf],
                }]
        }], propDecorators: { ngxVisible: [{
                type: Input
            }], ngxPlacement: [{
                type: Input
            }], ngxOnClose: [{
                type: Output
            }], backdropRef: [{
                type: ViewChild,
                args: ['backdrop']
            }], drawerRef: [{
                type: ViewChild,
                args: ['drawer']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7O0FBeUJ2QixNQUFNLE9BQU8sZUFBZTtJQXRCNUI7UUF1QlcsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixpQkFBWSxHQUF1QixNQUFNLENBQUM7UUFFaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7S0EyRDFEO0lBdERDLFFBQVEsS0FBVSxDQUFDO0lBRW5CLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN6QixJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQ0UsSUFBSSxDQUFDLFNBQVM7Z0JBQ2QsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUs7b0JBQzFCLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUTtvQkFDOUIsSUFBSSxDQUFDLFlBQVksS0FBSyxPQUFPO29CQUM3QixJQUFJLENBQUMsWUFBWSxLQUFLLE1BQU0sQ0FBQyxFQUMvQjtnQkFDQSxNQUFNLElBQUksR0FDUixJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFFBQVE7b0JBQzNELENBQUMsQ0FBQyxHQUFHO29CQUNMLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxZQUFZLElBQUksT0FBTyxDQUFDO2FBQ3hFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVk7UUFDdEIsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLE1BQXFCLENBQUM7UUFDbkQsTUFBTSxlQUFlLEdBQUcsY0FBYyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQzFFLE1BQU0sY0FBYyxHQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFeEQsSUFBSSxlQUFlLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLFlBQVksR0FBRztZQUNuQixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLEdBQUcsRUFBRSxtQkFBbUI7WUFDeEIsS0FBSyxFQUFFLGtCQUFrQjtZQUN6QixJQUFJLEVBQUUsbUJBQW1CO1NBQzFCLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUztZQUMxQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7K0dBOURVLGVBQWU7bUdBQWYsZUFBZSxxWUFwQmhCOzs7Ozs7Ozs7Ozs7Ozs7O1NBZ0JILDREQUVHLElBQUk7OzRGQUVILGVBQWU7a0JBdEIzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7U0FnQkg7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztpQkFDaEI7OEJBRVUsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUVhLFVBQVU7c0JBQTVCLE1BQU07Z0JBRWdCLFdBQVc7c0JBQWpDLFNBQVM7dUJBQUMsVUFBVTtnQkFDQSxTQUFTO3NCQUE3QixTQUFTO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neERyYXdlclBsYWNlbWVudCB9IGZyb20gJy4vdHlwaW5ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kcmF3ZXInLFxyXG4gIHRlbXBsYXRlOiBgIDxkaXZcclxuICAgICNiYWNrZHJvcFxyXG4gICAgKGNsaWNrKT1cImNsb3NlRHJhd2VyKCRldmVudClcIlxyXG4gICAgKm5nSWY9XCJuZ3hWaXNpYmxlXCJcclxuICAgIGNsYXNzPVwibmd4LWRyYXdlci1iYWNrZHJvcFwiXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICAjZHJhd2VyXHJcbiAgICAgIGNsYXNzPVwibmd4LWRyYXdlclwiXHJcbiAgICAgIFtjbGFzcy5uZ3gtZHJhd2VyLXBsYWNlbWVudC10b3BdPVwibmd4UGxhY2VtZW50ID09PSAndG9wJ1wiXHJcbiAgICAgIFtjbGFzcy5uZ3gtZHJhd2VyLXBsYWNlbWVudC1yaWdodF09XCJuZ3hQbGFjZW1lbnQgPT09ICdyaWdodCdcIlxyXG4gICAgICBbY2xhc3Mubmd4LWRyYXdlci1wbGFjZW1lbnQtYm90dG9tXT1cIm5neFBsYWNlbWVudCA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgICBbY2xhc3Mubmd4LWRyYXdlci1wbGFjZW1lbnQtbGVmdF09XCJuZ3hQbGFjZW1lbnQgPT09ICdsZWZ0J1wiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmAsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmdJZl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbmd4VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG5neFBsYWNlbWVudDogTmd4RHJhd2VyUGxhY2VtZW50ID0gJ2xlZnQnO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbmd4T25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmFja2Ryb3AnKSBiYWNrZHJvcFJlZiE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZHJhd2VyJykgZHJhd2VyUmVmITogRWxlbWVudFJlZjtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlc1snbmd4VmlzaWJsZSddKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzWyduZ3hWaXNpYmxlJ10uY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuRHJhd2VyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbG9zaW5nQWN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuZHJhd2VyUmVmICYmXHJcbiAgICAgICAgKHRoaXMubmd4UGxhY2VtZW50ID09PSAndG9wJyB8fFxyXG4gICAgICAgICAgdGhpcy5uZ3hQbGFjZW1lbnQgPT09ICdib3R0b20nIHx8XHJcbiAgICAgICAgICB0aGlzLm5neFBsYWNlbWVudCA9PT0gJ3JpZ2h0JyB8fFxyXG4gICAgICAgICAgdGhpcy5uZ3hQbGFjZW1lbnQgPT09ICdsZWZ0JylcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3QgYXhpcyA9XHJcbiAgICAgICAgICB0aGlzLm5neFBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgdGhpcy5uZ3hQbGFjZW1lbnQgPT09ICdib3R0b20nXHJcbiAgICAgICAgICAgID8gJ1knXHJcbiAgICAgICAgICAgIDogJ1gnO1xyXG4gICAgICAgIHRoaXMuZHJhd2VyUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSR7YXhpc30oMHB4KWA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VEcmF3ZXIoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGlzQ2xpY2tPblBhcmVudCA9IGNsaWNrZWRFbGVtZW50ID09PSB0aGlzLmJhY2tkcm9wUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBpc0NsaWNrT25DaGlsZCA9XHJcbiAgICAgIHRoaXMuZHJhd2VyUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpO1xyXG5cclxuICAgIGlmIChpc0NsaWNrT25QYXJlbnQgJiYgIWlzQ2xpY2tPbkNoaWxkKSB7XHJcbiAgICAgIHRoaXMuY2xvc2luZ0FjdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2luZ0FjdGlvbigpIHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybU1hcCA9IHtcclxuICAgICAgYm90dG9tOiAndHJhbnNsYXRlWSgxMDAlKScsXHJcbiAgICAgIHRvcDogJ3RyYW5zbGF0ZVkoLTEwMCUpJyxcclxuICAgICAgcmlnaHQ6ICd0cmFuc2xhdGVYKDEwMCUpJyxcclxuICAgICAgbGVmdDogJ3RyYW5zbGF0ZVgoLTEwMCUpJyxcclxuICAgIH07XHJcbiAgICB0aGlzLmRyYXdlclJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgIHRyYW5zZm9ybU1hcFt0aGlzLm5neFBsYWNlbWVudF07XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5uZ3hPbkNsb3NlLmVtaXQoKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==