import { ChangeDetectionStrategy, Component, ContentChildren, Input, } from '@angular/core';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import { NgForOf } from '@angular/common';
import * as i0 from "@angular/core";
export class TimelineComponent {
    constructor() {
        this.ngxMode = 'default';
    }
    ngOnChanges(changes) {
        if (changes['ngxMode']) {
            this.setMode(this.ngxMode);
        }
        this.setSizeDot();
    }
    ngAfterViewInit() {
        this.timelineItems.last.lastItem = true;
        this.setSizeDot();
        this.setMode(this.ngxMode);
    }
    buildMaxDimension() {
        let maxDotHeight = Number.MIN_VALUE;
        let maxDotWidth = Number.MIN_VALUE;
        this.timelineItems.forEach((tl) => {
            maxDotHeight = Math.max(maxDotHeight, tl.dotHeight);
            maxDotWidth = Math.max(maxDotWidth, tl.dotWidth);
        });
        return {
            dotHeight: maxDotHeight,
            dotWidth: maxDotWidth,
        };
    }
    setMode(mode) {
        if (this.timelineItems) {
            this.timelineItems.forEach((item) => {
                item.mode = this.ngxMode;
            });
        }
        switch (mode) {
            case 'left':
                this.setModeLeftAndRight(3, 1);
                break;
            case 'right':
                this.setModeLeftAndRight(1, 3);
                break;
            case 'alternate':
                this.setModeAlternate();
                break;
        }
    }
    setSizeDot() {
        if (this.timelineItems) {
            const maxProp = this.buildMaxDimension();
            this.timelineItems.forEach((item) => {
                item.dotHeight = maxProp.dotHeight;
                item.dotWidth = maxProp.dotWidth;
            });
        }
    }
    setModeLeftAndRight(oLeft, oRight) {
        if (this.timelineItems) {
            this.timelineItems.forEach((item) => {
                item.oLeft = oLeft;
                item.oRight = oRight;
            });
        }
    }
    setModeAlternate() {
        if (this.timelineItems) {
            this.timelineItems.forEach((item, index) => {
                item.oLeft = index % 2 === 0 ? 1 : 3;
                item.oRight = index % 2 === 0 ? 3 : 1;
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimelineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TimelineComponent, isStandalone: true, selector: "ngx-timeline", inputs: { ngxMode: "ngxMode" }, queries: [{ propertyName: "timelineItems", predicate: TimelineItemComponent }], usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL3RpbWVsaW5lL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFVMUMsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQVdXLFlBQU8sR0FBb0IsU0FBUyxDQUFDO0tBMEUvQztJQXhFQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDaEMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUUs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ICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRpbWVsaW5lSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL3RpbWVsaW5lLWl0ZW0vdGltZWxpbmUtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ0Zvck9mIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmd4VGltZWxpbmVNb2RlIH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC10aW1lbGluZScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ0Zvck9mXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKFRpbWVsaW5lSXRlbUNvbXBvbmVudClcclxuICBwdWJsaWMgdGltZWxpbmVJdGVtcyE6IFF1ZXJ5TGlzdDxUaW1lbGluZUl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBuZ3hNb2RlOiBOZ3hUaW1lbGluZU1vZGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzWyduZ3hNb2RlJ10pIHtcclxuICAgICAgdGhpcy5zZXRNb2RlKHRoaXMubmd4TW9kZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFNpemVEb3QoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZWxpbmVJdGVtcy5sYXN0Lmxhc3RJdGVtID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0U2l6ZURvdCgpO1xyXG4gICAgdGhpcy5zZXRNb2RlKHRoaXMubmd4TW9kZSk7XHJcbiAgfVxyXG5cclxuICBidWlsZE1heERpbWVuc2lvbigpIHtcclxuICAgIGxldCBtYXhEb3RIZWlnaHQgPSBOdW1iZXIuTUlOX1ZBTFVFO1xyXG4gICAgbGV0IG1heERvdFdpZHRoID0gTnVtYmVyLk1JTl9WQUxVRTtcclxuICAgIHRoaXMudGltZWxpbmVJdGVtcy5mb3JFYWNoKCh0bCkgPT4ge1xyXG4gICAgICBtYXhEb3RIZWlnaHQgPSBNYXRoLm1heChtYXhEb3RIZWlnaHQsIHRsLmRvdEhlaWdodCk7XHJcbiAgICAgIG1heERvdFdpZHRoID0gTWF0aC5tYXgobWF4RG90V2lkdGgsIHRsLmRvdFdpZHRoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZG90SGVpZ2h0OiBtYXhEb3RIZWlnaHQsXHJcbiAgICAgIGRvdFdpZHRoOiBtYXhEb3RXaWR0aCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRNb2RlKG1vZGU6IE5neFRpbWVsaW5lTW9kZSkge1xyXG4gICAgaWYgKHRoaXMudGltZWxpbmVJdGVtcykge1xyXG4gICAgICB0aGlzLnRpbWVsaW5lSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0ubW9kZSA9IHRoaXMubmd4TW9kZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgdGhpcy5zZXRNb2RlTGVmdEFuZFJpZ2h0KDMsIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgdGhpcy5zZXRNb2RlTGVmdEFuZFJpZ2h0KDEsIDMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdhbHRlcm5hdGUnOlxyXG4gICAgICAgIHRoaXMuc2V0TW9kZUFsdGVybmF0ZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U2l6ZURvdCgpIHtcclxuICAgIGlmICh0aGlzLnRpbWVsaW5lSXRlbXMpIHtcclxuICAgICAgY29uc3QgbWF4UHJvcCA9IHRoaXMuYnVpbGRNYXhEaW1lbnNpb24oKTtcclxuICAgICAgdGhpcy50aW1lbGluZUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmRvdEhlaWdodCA9IG1heFByb3AuZG90SGVpZ2h0O1xyXG4gICAgICAgIGl0ZW0uZG90V2lkdGggPSBtYXhQcm9wLmRvdFdpZHRoO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE1vZGVMZWZ0QW5kUmlnaHQob0xlZnQ6IG51bWJlciwgb1JpZ2h0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnRpbWVsaW5lSXRlbXMpIHtcclxuICAgICAgdGhpcy50aW1lbGluZUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLm9MZWZ0ID0gb0xlZnQ7XHJcbiAgICAgICAgaXRlbS5vUmlnaHQgPSBvUmlnaHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TW9kZUFsdGVybmF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnRpbWVsaW5lSXRlbXMpIHtcclxuICAgICAgdGhpcy50aW1lbGluZUl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaXRlbS5vTGVmdCA9IGluZGV4ICUgMiA9PT0gMCA/IDEgOiAzO1xyXG4gICAgICAgIGl0ZW0ub1JpZ2h0ID0gaW5kZXggJSAyID09PSAwID8gMyA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=