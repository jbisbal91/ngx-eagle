import * as i0 from '@angular/core';
import { Component, Input, ViewChild, ChangeDetectionStrategy, ContentChildren, NgModule } from '@angular/core';
import { NgIf, NgTemplateOutlet, NgForOf } from '@angular/common';

class TimelineItemComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.ngxColor = '#1890ff';
        this.oLeft = 1;
        this.oRight = 3;
        this.lastItem = false;
        this.dotHeight = 0;
        this.dotWidth = 0;
        this.mode = 'default';
    }
    ngOnChanges(changes) {
        this.initialDotDimensions();
        this.setSizeDot();
        this.setDotColor();
        this.setTailHeight();
    }
    ngAfterViewInit() {
        this.initialDotDimensions();
        this.setSizeDot();
        this.setDotColor();
        this.setTailHeight();
    }
    typeOf(value) {
        return typeof value;
    }
    initialDotDimensions() {
        if (this.timelineDotItemRef) {
            this.dotHeight = this.timelineDotItemRef.nativeElement.offsetHeight;
            this.dotWidth = this.timelineDotItemRef.nativeElement.offsetWidth;
        }
    }
    setSizeDot() {
        if (this.timelineDotItemRef) {
            this.renderer.setStyle(this.timelineDotItemRef.nativeElement, 'height', `${this.dotHeight}px`);
            this.renderer.setStyle(this.timelineDotItemRef.nativeElement, 'width', `${this.dotWidth}px`);
        }
    }
    setTailHeight() {
        if (this.timelineTailRef) {
            this.renderer.setStyle(this.timelineTailRef.nativeElement, 'height', `calc(100% - ${this.dotHeight}px)`);
        }
    }
    setDotColor() {
        if (this.timelineDotItemRef) {
            this.renderer.setStyle(this.timelineDotItemRef.nativeElement, 'color', this.ngxColor);
            this.renderer.setStyle(this.timelineDotItemRef.nativeElement, 'border-color', this.ngxColor);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimelineItemComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TimelineItemComponent, isStandalone: true, selector: "ngx-timeline-item", inputs: { ngxColor: "ngxColor", ngxDot: "ngxDot", ngxLabel: "ngxLabel" }, host: { classAttribute: "timeline-item" }, viewQueries: [{ propertyName: "timelineDotItemRef", first: true, predicate: ["timeline_dot_item"], descendants: true }, { propertyName: "timelineTailRef", first: true, predicate: ["timeline_tail"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <div class="ngx-timeline-item">
      <!----------left timeline content---------->
      <div
        *ngIf="mode !== 'default'"
        [class.timeline-c-left]="oLeft === 1"
        [class.timeline-c-right]="oLeft === 3"
        [style.order]="oLeft"
        [style.width]="'50%'"
      >
        <span *ngIf="typeOf(ngxLabel) === 'string'">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="typeOf(ngxLabel) === 'object'"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
      </div>
      <!----------timeline point---------->
      <div class="c-timeline" [style.min-width.px]="dotWidth" [style.order]="2">
        <div class="timeline">
          <div
            *ngIf="!ngxDot"
            #timeline_dot_item
            class="ngx-timeline-item-head"
          ></div>
          <span #timeline_dot_item *ngIf="typeOf(ngxDot) === 'string'">{{
            ngxDot
          }}</span>
          <div #timeline_dot_item *ngIf="typeOf(ngxDot) === 'object'">
            <ng-template [ngTemplateOutlet]="ngxDot"></ng-template>
          </div>
          <div
            #timeline_tail
            class="ngx-timeline-item-tail"
            *ngIf="!lastItem"
          ></div>
        </div>
      </div>
      <!----------right timeline content---------->
      <div
        class="ngx-timeline-item-content"
        [class.timeline-c-left]="oRight === 1"
        [class.timeline-c-right]="oRight === 3"
        [style.order]="oRight"
        [style.width.%]="mode !== 'default' ? 50 : 'auto'"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TimelineItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-timeline-item',
                    template: `
    <div class="ngx-timeline-item">
      <!----------left timeline content---------->
      <div
        *ngIf="mode !== 'default'"
        [class.timeline-c-left]="oLeft === 1"
        [class.timeline-c-right]="oLeft === 3"
        [style.order]="oLeft"
        [style.width]="'50%'"
      >
        <span *ngIf="typeOf(ngxLabel) === 'string'">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="typeOf(ngxLabel) === 'object'"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
      </div>
      <!----------timeline point---------->
      <div class="c-timeline" [style.min-width.px]="dotWidth" [style.order]="2">
        <div class="timeline">
          <div
            *ngIf="!ngxDot"
            #timeline_dot_item
            class="ngx-timeline-item-head"
          ></div>
          <span #timeline_dot_item *ngIf="typeOf(ngxDot) === 'string'">{{
            ngxDot
          }}</span>
          <div #timeline_dot_item *ngIf="typeOf(ngxDot) === 'object'">
            <ng-template [ngTemplateOutlet]="ngxDot"></ng-template>
          </div>
          <div
            #timeline_tail
            class="ngx-timeline-item-tail"
            *ngIf="!lastItem"
          ></div>
        </div>
      </div>
      <!----------right timeline content---------->
      <div
        class="ngx-timeline-item-content"
        [class.timeline-c-left]="oRight === 1"
        [class.timeline-c-right]="oRight === 3"
        [style.order]="oRight"
        [style.width.%]="mode !== 'default' ? 50 : 'auto'"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
                    host: {
                        class: 'timeline-item',
                    },
                    imports: [NgIf, NgTemplateOutlet],
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { ngxColor: [{
                type: Input
            }], ngxDot: [{
                type: Input
            }], ngxLabel: [{
                type: Input
            }], timelineDotItemRef: [{
                type: ViewChild,
                args: ['timeline_dot_item']
            }], timelineTailRef: [{
                type: ViewChild,
                args: ['timeline_tail']
            }] } });

class TimelineComponent {
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
