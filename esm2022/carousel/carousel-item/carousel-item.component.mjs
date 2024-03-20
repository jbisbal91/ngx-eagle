import { Component, Input } from '@angular/core';
import { Guid } from 'ngx-eagle/core/services';
import * as i0 from "@angular/core";
export class CarouselItemComponent {
    constructor() {
        this.id = Guid.create();
        this.isActive = false;
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CarouselItemComponent, isStandalone: true, selector: "ngx-carousel-item", inputs: { disabled: "disabled" }, host: { classAttribute: "ngx-carousel-item" }, ngImport: i0, template: `
    <div class="ngx-carousel-item" [id]="id">
      <ng-content></ng-content>
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-carousel-item',
                    template: `
    <div class="ngx-carousel-item" [id]="id">
      <ng-content></ng-content>
    </div>
  `,
                    host: {
                        class: 'ngx-carousel-item',
                    },
                    standalone: true,
                }]
        }], propDecorators: { disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZ3gtZWFnbGUvY2Fyb3VzZWwvY2Fyb3VzZWwtaXRlbS9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBYS9DLE1BQU0sT0FBTyxxQkFBcUI7SUFabEM7UUFhUyxPQUFFLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDeEIsYUFBUSxHQUFZLEtBQUssQ0FBQztLQUNwQzsrR0FKWSxxQkFBcUI7bUdBQXJCLHFCQUFxQiw4SkFWdEI7Ozs7R0FJVDs7NEZBTVUscUJBQXFCO2tCQVpqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRTs7OztHQUlUO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsbUJBQW1CO3FCQUMzQjtvQkFDRCxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBSVUsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICduZ3gtZWFnbGUvY29yZS9zZXJ2aWNlcyc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWNhcm91c2VsLWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWNhcm91c2VsLWl0ZW1cIiBbaWRdPVwiaWRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ25neC1jYXJvdXNlbC1pdGVtJyxcclxuICB9LFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBDYXJvdXNlbCB7XHJcbiAgcHVibGljIGlkOiBzdHJpbmcgPSBHdWlkLmNyZWF0ZSgpO1xyXG4gIHB1YmxpYyBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuIl19