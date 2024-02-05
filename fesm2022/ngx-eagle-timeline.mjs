import * as i0 from '@angular/core';
import { Component, Input, ChangeDetectionStrategy, ContentChildren, NgModule } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';

class TimelineItemComponent {
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

class TimelineComponent {
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

class TimelineModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimelineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TimelineModule, imports: [TimelineComponent, TimelineItemComponent], exports: [TimelineComponent, TimelineItemComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimelineModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimelineModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [TimelineComponent, TimelineItemComponent],
                    exports: [TimelineComponent, TimelineItemComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TimelineComponent, TimelineItemComponent, TimelineModule };
//# sourceMappingURL=ngx-eagle-timeline.mjs.map
