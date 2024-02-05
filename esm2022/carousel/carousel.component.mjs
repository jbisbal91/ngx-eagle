import { ChangeDetectionStrategy, Component, ContentChildren, Input, booleanAttribute, } from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { NgForOf } from '@angular/common';
import * as i0 from "@angular/core";
export class CarouselComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.ngxAutoPlaySpeed = 3000;
    }
    ngAfterContentInit() {
        this.carouselItems.first.isActive = true;
        this.currentItem = this.carouselItems.first;
        this.cdr.markForCheck();
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
    onClick(carouselItem) {
        this.carouselItems?.forEach((ci) => {
            ci.isActive = ci.id === carouselItem.id ? true : false;
        });
        const element = document.getElementById(carouselItem.id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: CarouselComponent, isStandalone: true, selector: "ngx-carousel", inputs: { ngxAutoPlay: ["ngxAutoPlay", "ngxAutoPlay", booleanAttribute], ngxAutoPlaySpeed: "ngxAutoPlaySpeed" }, host: { classAttribute: "ngx-carousel" }, queries: [{ propertyName: "carouselItems", predicate: CarouselItemComponent }], ngImport: i0, template: `
    <div class="ngx-carousel">
      <div class="slick-initialized slick-slider">
        <div class="slick-list">
          <div class="slick-track">
            <ng-content></ng-content>
          </div>
        </div>

        <ul class="slick-list slick-dots slick-dots-bottom">
          <li
            [class.slick-active]="carouselItem.isActive"
            *ngFor="let carouselItem of carouselItems"
            (click)="onClick(carouselItem)"
          >
            <button>{{ carouselItem.id }}</button>
          </li>
        </ul>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-carousel',
                    template: `
    <div class="ngx-carousel">
      <div class="slick-initialized slick-slider">
        <div class="slick-list">
          <div class="slick-track">
            <ng-content></ng-content>
          </div>
        </div>

        <ul class="slick-list slick-dots slick-dots-bottom">
          <li
            [class.slick-active]="carouselItem.isActive"
            *ngFor="let carouselItem of carouselItems"
            (click)="onClick(carouselItem)"
          >
            <button>{{ carouselItem.id }}</button>
          </li>
        </ul>
      </div>
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'ngx-carousel',
                    },
                    standalone: true,
                    imports: [NgForOf],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { carouselItems: [{
                type: ContentChildren,
                args: [CarouselItemComponent]
            }], ngxAutoPlay: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxAutoPlaySpeed: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVhZ2xlL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUVMLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBZ0MxQyxNQUFNLE9BQU8saUJBQWlCO0lBUTVCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBSmpDLHFCQUFnQixHQUFXLElBQUksQ0FBQztJQUlJLENBQUM7SUFFOUMsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLFFBQWdCLENBQUM7UUFDeEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxLQUFLLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTyxDQUFDLFlBQWlCO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQUU7WUFDdEMsRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsT0FBTyxFQUFFLGNBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7K0dBakNVLGlCQUFpQjttR0FBakIsaUJBQWlCLHNHQUdSLGdCQUFnQiwySUFGbkIscUJBQXFCLDZCQTdCNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JULDREQU1TLE9BQU87OzRGQUVOLGlCQUFpQjtrQkE5QjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsY0FBYztxQkFDdEI7b0JBQ0QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztpQkFDbkI7d0dBR1EsYUFBYTtzQkFEbkIsZUFBZTt1QkFBQyxxQkFBcUI7Z0JBRUUsV0FBVztzQkFBbEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDN0IsZ0JBQWdCO3NCQUF4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSW5wdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhcm91c2VsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtaXRlbS9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nRm9yT2YgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtY2Fyb3VzZWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWNhcm91c2VsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzbGljay1pbml0aWFsaXplZCBzbGljay1zbGlkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8dWwgY2xhc3M9XCJzbGljay1saXN0IHNsaWNrLWRvdHMgc2xpY2stZG90cy1ib3R0b21cIj5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBbY2xhc3Muc2xpY2stYWN0aXZlXT1cImNhcm91c2VsSXRlbS5pc0FjdGl2ZVwiXHJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXJvdXNlbEl0ZW0gb2YgY2Fyb3VzZWxJdGVtc1wiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKGNhcm91c2VsSXRlbSlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uPnt7IGNhcm91c2VsSXRlbS5pZCB9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICduZ3gtY2Fyb3VzZWwnLFxyXG4gIH0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmdGb3JPZl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2Fyb3VzZWxJdGVtQ29tcG9uZW50KVxyXG4gIHB1YmxpYyBjYXJvdXNlbEl0ZW1zITogUXVlcnlMaXN0PENhcm91c2VsSXRlbUNvbXBvbmVudD47XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIG5neEF1dG9QbGF5ITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBuZ3hBdXRvUGxheVNwZWVkOiBudW1iZXIgPSAzMDAwO1xyXG5cclxuICBjdXJyZW50SXRlbSE6IENhcm91c2VsSXRlbUNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhcm91c2VsSXRlbXMuZmlyc3QuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5jdXJyZW50SXRlbSA9IHRoaXMuY2Fyb3VzZWxJdGVtcy5maXJzdDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgaWYgKHRoaXMubmd4QXV0b1BsYXkpIHtcclxuICAgICAgdGhpcy5hdXRvUGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXV0b1BsYXkoaW5kZXg6IG51bWJlciA9IDApIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uQ2xpY2sodGhpcy5jYXJvdXNlbEl0ZW1zLmdldChpbmRleCkpO1xyXG4gICAgICBpbmRleCA9IGluZGV4ID09PSB0aGlzLmNhcm91c2VsSXRlbXMubGVuZ3RoIC0gMSA/IDAgOiArK2luZGV4O1xyXG4gICAgICB0aGlzLmF1dG9QbGF5KGluZGV4KTtcclxuICAgIH0sIHRoaXMubmd4QXV0b1BsYXlTcGVlZCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKGNhcm91c2VsSXRlbTogYW55KSB7XHJcbiAgICB0aGlzLmNhcm91c2VsSXRlbXM/LmZvckVhY2goKGNpOiBhbnkpID0+IHtcclxuICAgICAgY2kuaXNBY3RpdmUgPSBjaS5pZCA9PT0gY2Fyb3VzZWxJdGVtLmlkID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2Fyb3VzZWxJdGVtLmlkKTtcclxuICAgIGVsZW1lbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=