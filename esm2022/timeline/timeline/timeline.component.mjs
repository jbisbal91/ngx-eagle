import { ChangeDetectionStrategy, Component, ContentChildren, Input, } from '@angular/core';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import { NgForOf } from '@angular/common';
import * as i0 from "@angular/core";
export class TimelineComponent {
    constructor() {
        this.ngxMode = 'left';
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.timelineItems.forEach((tl) => {
                if (this.timelineItems.first === tl) {
                    tl.first = true;
                }
                if (this.timelineItems.last === tl) {
                    tl.last = true;
                }
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimelineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TimelineComponent, isStandalone: true, selector: "ngx-timeline", inputs: { ngxMode: "ngxMode" }, queries: [{ propertyName: "timelineItems", predicate: TimelineItemComponent }], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimelineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-timeline',
                    template: `<ng-content></ng-content>`,
                    standalone: true,
                    imports: [NgForOf],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { timelineItems: [{
                type: ContentChildren,
                args: [TimelineItemComponent]
            }], ngxMode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVhZ2xlL3RpbWVsaW5lL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQVdXLFlBQU8sR0FBb0IsTUFBTSxDQUFDO0tBYzVDO0lBWkMsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtvQkFDbkMsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2pCO2dCQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFO29CQUNsQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDaEI7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0FqQlUsaUJBQWlCO21HQUFqQixpQkFBaUIsc0lBQ1gscUJBQXFCLDZCQU41QiwyQkFBMkI7OzRGQUsxQixpQkFBaUI7a0JBUDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ2xCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs4QkFHUSxhQUFhO3NCQURuQixlQUFlO3VCQUFDLHFCQUFxQjtnQkFHN0IsT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSW5wdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaW1lbGluZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi90aW1lbGluZS1pdGVtL3RpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmdGb3JPZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5neFRpbWVsaW5lTW9kZSB9IGZyb20gJy4uL3R5cGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtdGltZWxpbmUnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmdGb3JPZl0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGltZWxpbmVJdGVtQ29tcG9uZW50KVxyXG4gIHB1YmxpYyB0aW1lbGluZUl0ZW1zITogUXVlcnlMaXN0PFRpbWVsaW5lSXRlbUNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpIG5neE1vZGU6IE5neFRpbWVsaW5lTW9kZSA9ICdsZWZ0JztcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudGltZWxpbmVJdGVtcy5mb3JFYWNoKCh0bCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVsaW5lSXRlbXMuZmlyc3QgPT09IHRsKSB7XHJcbiAgICAgICAgICB0bC5maXJzdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVsaW5lSXRlbXMubGFzdCA9PT0gdGwpIHtcclxuICAgICAgICAgIHRsLmxhc3QgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19