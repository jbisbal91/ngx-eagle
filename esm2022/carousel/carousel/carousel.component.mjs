import { Component, ContentChildren, HostListener, Input, QueryList, ViewChild, booleanAttribute, } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { NgForOf } from '@angular/common';
import * as i0 from "@angular/core";
export class CarouselComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.carouselItems = new QueryList();
        this.ngxAutoPlaySpeed = 3000;
        this.ngxDotPosition = 'bottom';
    }
    ngAfterContentInit() {
        this.carouselItems.first.isActive = true;
        this.currentCarouselItem = this.carouselItems.first;
        if (this.currentCarouselItem) {
            setTimeout(() => {
                this.onClick(this.currentCarouselItem);
            });
        }
        if (this.ngxAutoPlay) {
            this.autoPlay();
        }
    }
    autoPlay(index = 0) {
        setTimeout(() => {
            this.onClick(this.carouselItems.get(index));
            index = index === this.carouselItems.length - 1 ? 0 : ++index;
            this.autoPlay(index);
        }, this.ngxAutoPlaySpeed);
    }
    resize() {
        this.onClick(this.currentCarouselItem);
    }
    onClick(carouselItem) {
        let index = 0;
        this.carouselItems?.forEach((ci, i) => {
            ci.isActive = ci.id === carouselItem.id;
            if (ci.isActive) {
                this.currentCarouselItem = ci;
                index = i;
            }
        });
        const carouselRef = document.getElementById(carouselItem.id);
        const carouselProp = carouselRef.getBoundingClientRect();
        this.renderer.setStyle(this.slickTrackRef.nativeElement, 'transform', `translateX(${carouselProp.width * -index}px)`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: CarouselComponent, isStandalone: true, selector: "ngx-carousel", inputs: { ngxAutoPlay: ["ngxAutoPlay", "ngxAutoPlay", booleanAttribute], ngxAutoPlaySpeed: "ngxAutoPlaySpeed", ngxDotPosition: "ngxDotPosition" }, host: { listeners: { "window:resize": "resize($event)" }, classAttribute: "ngx-carousel" }, queries: [{ propertyName: "carouselItems", predicate: CarouselItemComponent }], viewQueries: [{ propertyName: "slickTrackRef", first: true, predicate: ["slick_track"], descendants: true }], ngImport: i0, template: `
    <div class="ngx-carousel">
      <div class="slick-list">
        <div #slick_track class="slick-track">
          <ng-content></ng-content>
        </div>
      </div>
      <ul
        class="slick-list slick-dots"
        [class.slick-dots-top]="ngxDotPosition === 'top'"
        [class.slick-dots-bottom]="ngxDotPosition === 'bottom'"
      >
        <li
          [class.slick-active]="carouselItem.isActive"
          *ngFor="let carouselItem of carouselItems"
        >
          <button (click)="onClick(carouselItem)"></button>
        </li>
      </ul>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-carousel',
                    template: `
    <div class="ngx-carousel">
      <div class="slick-list">
        <div #slick_track class="slick-track">
          <ng-content></ng-content>
        </div>
      </div>
      <ul
        class="slick-list slick-dots"
        [class.slick-dots-top]="ngxDotPosition === 'top'"
        [class.slick-dots-bottom]="ngxDotPosition === 'bottom'"
      >
        <li
          [class.slick-active]="carouselItem.isActive"
          *ngFor="let carouselItem of carouselItems"
        >
          <button (click)="onClick(carouselItem)"></button>
        </li>
      </ul>
    </div>
  `,
                    host: {
                        class: 'ngx-carousel',
                    },
                    standalone: true,
                    imports: [NgForOf],
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { carouselItems: [{
                type: ContentChildren,
                args: [CarouselItemComponent]
            }], ngxAutoPlay: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxAutoPlaySpeed: [{
                type: Input
            }], ngxDotPosition: [{
                type: Input
            }], slickTrackRef: [{
                type: ViewChild,
                args: ['slick_track']
            }], resize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL2Nhcm91c2VsL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFFZixZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFnQzFDLE1BQU0sT0FBTyxpQkFBaUI7SUFZNUIsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVZoQyxrQkFBYSxHQUNsQixJQUFJLFNBQVMsRUFBeUIsQ0FBQztRQUVoQyxxQkFBZ0IsR0FBVyxJQUFJLENBQUM7UUFDaEMsbUJBQWMsR0FBbUIsUUFBUSxDQUFDO0lBTVQsQ0FBQztJQUUzQyxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQixDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsS0FBSyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPLENBQUMsWUFBaUI7UUFDdkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUF5QixFQUFFLENBQVMsRUFBRSxFQUFFO1lBQ25FLEVBQUUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3hDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDZixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBZ0IsQ0FBQztRQUM1RSxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQ2hDLFdBQVcsRUFDWCxjQUFjLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FDL0MsQ0FBQztJQUNKLENBQUM7K0dBeERVLGlCQUFpQjttR0FBakIsaUJBQWlCLHNHQUlSLGdCQUFnQiwrTkFIbkIscUJBQXFCLDJJQTVCNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JULDREQUtTLE9BQU87OzRGQUVOLGlCQUFpQjtrQkE3QjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxjQUFjO3FCQUN0QjtvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO2lCQUNuQjtnR0FHUSxhQUFhO3NCQURuQixlQUFlO3VCQUFDLHFCQUFxQjtnQkFHRSxXQUFXO3NCQUFsRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUM3QixnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFJb0IsYUFBYTtzQkFBdEMsU0FBUzt1QkFBQyxhQUFhO2dCQTBCeEIsTUFBTTtzQkFETCxZQUFZO3VCQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhcm91c2VsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ0Zvck9mIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmd4RG90UG9zaXRpb24gfSBmcm9tICcuLi90eXBpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cIm5neC1jYXJvdXNlbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiPlxyXG4gICAgICAgIDxkaXYgI3NsaWNrX3RyYWNrIGNsYXNzPVwic2xpY2stdHJhY2tcIj5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIGNsYXNzPVwic2xpY2stbGlzdCBzbGljay1kb3RzXCJcclxuICAgICAgICBbY2xhc3Muc2xpY2stZG90cy10b3BdPVwibmd4RG90UG9zaXRpb24gPT09ICd0b3AnXCJcclxuICAgICAgICBbY2xhc3Muc2xpY2stZG90cy1ib3R0b21dPVwibmd4RG90UG9zaXRpb24gPT09ICdib3R0b20nXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgW2NsYXNzLnNsaWNrLWFjdGl2ZV09XCJjYXJvdXNlbEl0ZW0uaXNBY3RpdmVcIlxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNhcm91c2VsSXRlbSBvZiBjYXJvdXNlbEl0ZW1zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNsaWNrKGNhcm91c2VsSXRlbSlcIj48L2J1dHRvbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ25neC1jYXJvdXNlbCcsXHJcbiAgfSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ0Zvck9mXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDYXJvdXNlbEl0ZW1Db21wb25lbnQpXHJcbiAgcHVibGljIGNhcm91c2VsSXRlbXM6IFF1ZXJ5TGlzdDxDYXJvdXNlbEl0ZW1Db21wb25lbnQ+ID1cclxuICAgIG5ldyBRdWVyeUxpc3Q8Q2Fyb3VzZWxJdGVtQ29tcG9uZW50PigpO1xyXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBuZ3hBdXRvUGxheSE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbmd4QXV0b1BsYXlTcGVlZDogbnVtYmVyID0gMzAwMDtcclxuICBASW5wdXQoKSBuZ3hEb3RQb3NpdGlvbjogTmd4RG90UG9zaXRpb24gPSAnYm90dG9tJztcclxuXHJcbiAgY3VycmVudENhcm91c2VsSXRlbSE6IENhcm91c2VsSXRlbUNvbXBvbmVudDtcclxuXHJcbiAgQFZpZXdDaGlsZCgnc2xpY2tfdHJhY2snKSBzbGlja1RyYWNrUmVmITogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhcm91c2VsSXRlbXMuZmlyc3QuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5jdXJyZW50Q2Fyb3VzZWxJdGVtID0gdGhpcy5jYXJvdXNlbEl0ZW1zLmZpcnN0O1xyXG4gICAgaWYgKHRoaXMuY3VycmVudENhcm91c2VsSXRlbSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm9uQ2xpY2sodGhpcy5jdXJyZW50Q2Fyb3VzZWxJdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uZ3hBdXRvUGxheSkge1xyXG4gICAgICB0aGlzLmF1dG9QbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhdXRvUGxheShpbmRleDogbnVtYmVyID0gMCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMub25DbGljayh0aGlzLmNhcm91c2VsSXRlbXMuZ2V0KGluZGV4KSk7XHJcbiAgICAgIGluZGV4ID0gaW5kZXggPT09IHRoaXMuY2Fyb3VzZWxJdGVtcy5sZW5ndGggLSAxID8gMCA6ICsraW5kZXg7XHJcbiAgICAgIHRoaXMuYXV0b1BsYXkoaW5kZXgpO1xyXG4gICAgfSwgdGhpcy5uZ3hBdXRvUGxheVNwZWVkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIHRoaXMub25DbGljayh0aGlzLmN1cnJlbnRDYXJvdXNlbEl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhjYXJvdXNlbEl0ZW06IGFueSkge1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHRoaXMuY2Fyb3VzZWxJdGVtcz8uZm9yRWFjaCgoY2k6IENhcm91c2VsSXRlbUNvbXBvbmVudCwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNpLmlzQWN0aXZlID0gY2kuaWQgPT09IGNhcm91c2VsSXRlbS5pZDtcclxuICAgICAgaWYgKGNpLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2Fyb3VzZWxJdGVtID0gY2k7XHJcbiAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNhcm91c2VsUmVmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2Fyb3VzZWxJdGVtLmlkKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGNhcm91c2VsUHJvcCA9IGNhcm91c2VsUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5zbGlja1RyYWNrUmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICBgdHJhbnNsYXRlWCgke2Nhcm91c2VsUHJvcC53aWR0aCAqIC1pbmRleH1weClgXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=