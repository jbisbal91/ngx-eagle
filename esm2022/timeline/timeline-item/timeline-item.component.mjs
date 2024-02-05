import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class TimelineItemComponent {
    constructor() {
        this.ngxColor = 'blue';
        this.first = false;
        this.last = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimelineItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TimelineItemComponent, isStandalone: true, selector: "ngx-timeline-item", inputs: { ngxPosition: "ngxPosition", ngxColor: "ngxColor", ngxDot: "ngxDot", ngxLabel: "ngxLabel" }, host: { classAttribute: "timeline-item" }, ngImport: i0, template: `
    <div class="ngx-timeline-item">
      <div class="timeline">
        <div
          class="ngx-timeline-item-head"
          [class.ngx-timeline-item-head-blue]="ngxColor === 'blue'"
          [class.ngx-timeline-item-head-red]="ngxColor === 'red'"
          [class.ngx-timeline-item-head-green]="ngxColor === 'green'"
          [class.ngx-timeline-item-head-gray]="ngxColor === 'gray'"
          [class.ngx-timeline-item-head-grey]="ngxColor === 'grey'"
        ></div>
        <div class="ngx-timeline-item-tail"></div>
        <div class="ngx-timeline-arrow" *ngIf="!last"></div>
        <div class="ngx-timeline-end" *ngIf="last"></div>
      </div>
      <div class="ngx-timeline-item-content">
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimelineItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-timeline-item',
                    template: `
    <div class="ngx-timeline-item">
      <div class="timeline">
        <div
          class="ngx-timeline-item-head"
          [class.ngx-timeline-item-head-blue]="ngxColor === 'blue'"
          [class.ngx-timeline-item-head-red]="ngxColor === 'red'"
          [class.ngx-timeline-item-head-green]="ngxColor === 'green'"
          [class.ngx-timeline-item-head-gray]="ngxColor === 'gray'"
          [class.ngx-timeline-item-head-grey]="ngxColor === 'grey'"
        ></div>
        <div class="ngx-timeline-item-tail"></div>
        <div class="ngx-timeline-arrow" *ngIf="!last"></div>
        <div class="ngx-timeline-end" *ngIf="last"></div>
      </div>
      <div class="ngx-timeline-item-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                    host: {
                        class: 'timeline-item',
                    },
                    imports: [NgIf],
                    standalone: true,
                }]
        }], propDecorators: { ngxPosition: [{
                type: Input
            }], ngxColor: [{
                type: Input
            }], ngxDot: [{
                type: Input
            }], ngxLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWFnbGUvdGltZWxpbmUvdGltZWxpbmUtaXRlbS90aW1lbGluZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBOEJ2QyxNQUFNLE9BQU8scUJBQXFCO0lBNUJsQztRQThCVyxhQUFRLEdBQXlCLE1BQU0sQ0FBQztRQUdqRCxVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFNBQUksR0FBWSxLQUFLLENBQUM7S0FDdkI7K0dBUFkscUJBQXFCO21HQUFyQixxQkFBcUIsOE5BMUJ0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVCw0REFJUyxJQUFJOzs0RkFHSCxxQkFBcUI7a0JBNUJqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGVBQWU7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDZixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBRVUsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4VGltZWxpbmVJdGVtQ29sb3IsIE5neFRpbWVsaW5lUG9zaXRpb24gfSBmcm9tICcuLi90eXBpbmdzJztcclxuaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC10aW1lbGluZS1pdGVtJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cIm5neC10aW1lbGluZS1pdGVtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwibmd4LXRpbWVsaW5lLWl0ZW0taGVhZFwiXHJcbiAgICAgICAgICBbY2xhc3Mubmd4LXRpbWVsaW5lLWl0ZW0taGVhZC1ibHVlXT1cIm5neENvbG9yID09PSAnYmx1ZSdcIlxyXG4gICAgICAgICAgW2NsYXNzLm5neC10aW1lbGluZS1pdGVtLWhlYWQtcmVkXT1cIm5neENvbG9yID09PSAncmVkJ1wiXHJcbiAgICAgICAgICBbY2xhc3Mubmd4LXRpbWVsaW5lLWl0ZW0taGVhZC1ncmVlbl09XCJuZ3hDb2xvciA9PT0gJ2dyZWVuJ1wiXHJcbiAgICAgICAgICBbY2xhc3Mubmd4LXRpbWVsaW5lLWl0ZW0taGVhZC1ncmF5XT1cIm5neENvbG9yID09PSAnZ3JheSdcIlxyXG4gICAgICAgICAgW2NsYXNzLm5neC10aW1lbGluZS1pdGVtLWhlYWQtZ3JleV09XCJuZ3hDb2xvciA9PT0gJ2dyZXknXCJcclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5neC10aW1lbGluZS1pdGVtLXRhaWxcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmd4LXRpbWVsaW5lLWFycm93XCIgKm5nSWY9XCIhbGFzdFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtdGltZWxpbmUtZW5kXCIgKm5nSWY9XCJsYXN0XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmd4LXRpbWVsaW5lLWl0ZW0tY29udGVudFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAndGltZWxpbmUtaXRlbScsXHJcbiAgfSxcclxuICBpbXBvcnRzOiBbTmdJZl0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lSXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbmd4UG9zaXRpb24/OiBOZ3hUaW1lbGluZVBvc2l0aW9uO1xyXG4gIEBJbnB1dCgpIG5neENvbG9yOiBOZ3hUaW1lbGluZUl0ZW1Db2xvciA9ICdibHVlJztcclxuICBASW5wdXQoKSBuZ3hEb3Q/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuZ3hMYWJlbD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIGZpcnN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgbGFzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcbiJdfQ==