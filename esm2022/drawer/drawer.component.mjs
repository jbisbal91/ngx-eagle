import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild, booleanAttribute, } from '@angular/core';
import * as i0 from "@angular/core";
export class DrawerComponent {
    get ngxVisible() {
        return this.internalVisible;
    }
    set ngxVisible(val) {
        if (this.internalVisible !== val) {
            this.internalVisible = val;
            if (val) {
                this.openDrawer();
            }
            this.ngxVisibleChange.emit(val);
        }
    }
    constructor(renderer) {
        this.renderer = renderer;
        this.ngxBackdrop = true;
        this.ngxBackdropClosable = true;
        this.ngxPlacement = 'left';
        this.internalVisible = false;
        this.ngxVisibleChange = new EventEmitter();
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngAfterViewChecked() {
        this.setBgBackdrop();
    }
    setBgBackdrop() {
        if (this.backdropRef) {
            const bgBackdrop = this.ngxBackdrop
                ? 'rgba(0, 0, 0, 0.65)'
                : 'transparent';
            this.renderer.setStyle(this.backdropRef.nativeElement, 'background-color', bgBackdrop);
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
                this.renderer.setStyle(this.drawerRef.nativeElement, 'transform', `translate${axis}(0px)`);
            }
        });
    }
    closeDrawer(event) {
        const clickedElement = event.target;
        const isClickOnParent = clickedElement === this.backdropRef.nativeElement;
        const isClickOnChild = this.drawerRef.nativeElement.contains(clickedElement);
        if (isClickOnParent && !isClickOnChild && this.ngxBackdropClosable) {
            this.closingAction();
        }
    }
    closingAction() {
        if (this.drawerRef) {
            const transformMap = {
                bottom: 'translateY(100%)',
                top: 'translateY(-100%)',
                right: 'translateX(100%)',
                left: 'translateX(-100%)',
            };
            this.renderer.setStyle(this.drawerRef.nativeElement, 'transform', transformMap[this.ngxPlacement]);
            setTimeout(() => {
                this.ngxVisibleChange.emit(false);
            }, 500);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DrawerComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: DrawerComponent, isStandalone: true, selector: "ngx-drawer", inputs: { ngxBackdrop: ["ngxBackdrop", "ngxBackdrop", booleanAttribute], ngxBackdropClosable: ["ngxBackdropClosable", "ngxBackdropClosable", booleanAttribute], ngxPlacement: "ngxPlacement", ngxVisible: "ngxVisible" }, outputs: { ngxVisibleChange: "ngxVisibleChange" }, viewQueries: [{ propertyName: "backdropRef", first: true, predicate: ["backdrop"], descendants: true }, { propertyName: "drawerRef", first: true, predicate: ["drawer"], descendants: true }], ngImport: i0, template: ` <div
    #backdrop
    (click)="closeDrawer($event)"
    *ngIf="internalVisible"
    class="ngx-backdrop"
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
    *ngIf="internalVisible"
    class="ngx-backdrop"
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
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { ngxBackdrop: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxBackdropClosable: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxPlacement: [{
                type: Input
            }], ngxVisible: [{
                type: Input
            }], ngxVisibleChange: [{
                type: Output
            }], backdropRef: [{
                type: ViewChild,
                args: ['backdrop']
            }], drawerRef: [{
                type: ViewChild,
                args: ['drawer']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25neC1lYWdsZS9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDOztBQXlCdkIsTUFBTSxPQUFPLGVBQWU7SUFPMUIsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxHQUFZO1FBQ3pCLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxHQUFHLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7WUFDM0IsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFXRCxZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBOUJDLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLHdCQUFtQixHQUFZLElBQUksQ0FBQztRQUNuRSxpQkFBWSxHQUF1QixNQUFNLENBQUM7UUFFbkQsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFpQnZCLHFCQUFnQixHQUN4QixJQUFJLFlBQVksRUFBVyxDQUFDO1FBSzlCLGFBQVEsR0FBUSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDekIsY0FBUyxHQUFRLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUVnQixDQUFDO0lBRTNDLGtCQUFrQjtRQUNoQixJQUFJLENB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QUU7Z0JBQzdCLFlBQVk7c0JBQXBCLEtBQUs7Z0JBS0YsVUFBVTtzQkFEYixLQUFLO2dCQWVJLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFHZ0IsV0FBVztzQkFBakMsU0FBUzt1QkFBQyxVQUFVO2dCQUNBLFNBQVM7c0JBQTdCLFNBQVM7dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neERyYXdlclBsYWNlbWVudCB9IGZyb20gJy4vdHlwaW5ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kcmF3ZXInLFxyXG4gIHRlbXBsYXRlOiBgIDxkaXZcclxuICAgICNiYWNrZHJvcFxyXG4gICAgKGNsaWNrKT1cImNsb3NlRHJhd2VyKCRldmVudClcIlxyXG4gICAgKm5nSWY9XCJpbnRlcm5hbFZpc2libGVcIlxyXG4gICAgY2xhc3M9XCJuZ3gtYmFja2Ryb3BcIlxyXG4gID5cclxuICAgIDxkaXZcclxuICAgICAgI2RyYXdlclxyXG4gICAgICBjbGFzcz1cIm5neC1kcmF3ZXJcIlxyXG4gICAgICBbY2xhc3Mubmd4LWRyYXdlci1wbGFjZW1lbnQtdG9wXT1cIm5neFBsYWNlbWVudCA9PT0gJ3RvcCdcIlxyXG4gICAgICBbY2xhc3Mubmd4LWRyYXdlci1wbGFjZW1lbnQtcmlnaHRdPVwibmd4UGxhY2VtZW50ID09PSAncmlnaHQnXCJcclxuICAgICAgW2NsYXNzLm5neC1kcmF3ZXItcGxhY2VtZW50LWJvdHRvbV09XCJuZ3hQbGFjZW1lbnQgPT09ICdib3R0b20nXCJcclxuICAgICAgW2NsYXNzLm5neC1kcmF3ZXItcGxhY2VtZW50LWxlZnRdPVwibmd4UGxhY2VtZW50ID09PSAnbGVmdCdcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW05nSWZdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIG5neEJhY2tkcm9wOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgbmd4QmFja2Ryb3BDbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgbmd4UGxhY2VtZW50OiBOZ3hEcmF3ZXJQbGFjZW1lbnQgPSAnbGVmdCc7XHJcblxyXG4gIGludGVybmFsVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBuZ3hWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxWaXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG5neFZpc2libGUodmFsOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5pbnRlcm5hbFZpc2libGUgIT09IHZhbCkge1xyXG4gICAgICB0aGlzLmludGVybmFsVmlzaWJsZSA9IHZhbDtcclxuICAgICAgaWYgKHZhbCkge1xyXG4gICAgICAgIHRoaXMub3BlbkRyYXdlcigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubmd4VmlzaWJsZUNoYW5nZS5lbWl0KHZhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgbmd4VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID1cclxuICAgIG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmFja2Ryb3AnKSBiYWNrZHJvcFJlZiE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZHJhd2VyJykgZHJhd2VyUmVmITogRWxlbWVudFJlZjtcclxuXHJcbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHt9O1xyXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRCZ0JhY2tkcm9wKCk7XHJcbiAgfVxyXG5cclxuICBzZXRCZ0JhY2tkcm9wKCkge1xyXG4gICAgaWYgKHRoaXMuYmFja2Ryb3BSZWYpIHtcclxuICAgICAgY29uc3QgYmdCYWNrZHJvcCA9IHRoaXMubmd4QmFja2Ryb3BcclxuICAgICAgICA/ICdyZ2JhKDAsIDAsIDAsIDAuNjUpJ1xyXG4gICAgICAgIDogJ3RyYW5zcGFyZW50JztcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLmJhY2tkcm9wUmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxyXG4gICAgICAgIGJnQmFja2Ryb3BcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuZHJhd2VyUmVmICYmXHJcbiAgICAgICAgKHRoaXMubmd4UGxhY2VtZW50ID09PSAndG9wJyB8fFxyXG4gICAgICAgICAgdGhpcy5uZ3hQbGFjZW1lbnQgPT09ICdib3R0b20nIHx8XHJcbiAgICAgICAgICB0aGlzLm5neFBsYWNlbWVudCA9PT0gJ3JpZ2h0JyB8fFxyXG4gICAgICAgICAgdGhpcy5uZ3hQbGFjZW1lbnQgPT09ICdsZWZ0JylcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3QgYXhpcyA9XHJcbiAgICAgICAgICB0aGlzLm5neFBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgdGhpcy5uZ3hQbGFjZW1lbnQgPT09ICdib3R0b20nXHJcbiAgICAgICAgICAgID8gJ1knXHJcbiAgICAgICAgICAgIDogJ1gnO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmRyYXdlclJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICBgdHJhbnNsYXRlJHtheGlzfSgwcHgpYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VEcmF3ZXIoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGlzQ2xpY2tPblBhcmVudCA9IGNsaWNrZWRFbGVtZW50ID09PSB0aGlzLmJhY2tkcm9wUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBpc0NsaWNrT25DaGlsZCA9XHJcbiAgICAgIHRoaXMuZHJhd2VyUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoY2xpY2tlZEVsZW1lbnQpO1xyXG4gICAgaWYgKGlzQ2xpY2tPblBhcmVudCAmJiAhaXNDbGlja09uQ2hpbGQgJiYgdGhpcy5uZ3hCYWNrZHJvcENsb3NhYmxlKSB7XHJcbiAgICAgIHRoaXMuY2xvc2luZ0FjdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2luZ0FjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmRyYXdlclJlZikge1xyXG4gICAgICBjb25zdCB0cmFuc2Zvcm1NYXAgPSB7XHJcbiAgICAgICAgYm90dG9tOiAndHJhbnNsYXRlWSgxMDAlKScsXHJcbiAgICAgICAgdG9wOiAndHJhbnNsYXRlWSgtMTAwJSknLFxyXG4gICAgICAgIHJpZ2h0OiAndHJhbnNsYXRlWCgxMDAlKScsXHJcbiAgICAgICAgbGVmdDogJ3RyYW5zbGF0ZVgoLTEwMCUpJyxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLmRyYXdlclJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgIHRyYW5zZm9ybU1hcFt0aGlzLm5neFBsYWNlbWVudF1cclxuICAgICAgKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ3hWaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=