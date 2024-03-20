import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, ViewChild, NgModule } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

class ProgressComponent {
    constructor(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngxColor = '#1890FF';
        this.ngxPercent = 0;
        this.ngxSize = 'default';
        this.ngxTimer = 0.5;
        this.ngxType = 'line';
    }
    ngAfterViewInit() {
        if (this.ngxType === 'line') {
            this.updateLineProgress();
        }
        else {
            this.updateCircleProgress();
        }
        this.cdr.markForCheck();
    }
    ngOnChanges(changes) {
        if (changes['ngxPercent']) {
            if (this.ngxType === 'line') {
                this.updateLineProgress();
            }
            else {
                this.updateCircleProgress();
            }
        }
    }
    updateLineProgress() {
        setTimeout(() => {
            if (this.lineProgressRef) {
                this.renderer.setStyle(this.lineProgressRef.nativeElement, 'width', `${this.ngxPercent}%`);
                this.renderer.setStyle(this.lineProgressRef.nativeElement, 'background-color', this.ngxColor);
                this.renderer.setStyle(this.lineProgressRef.nativeElement, 'transition', `width ${this.ngxTimer}s ease-in-out`);
            }
        });
    }
    updateCircleProgress() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', '100px');
        const progress = Math.min(100, Math.max(0, this.ngxPercent));
        const offset = 283 - (283 * progress) / 100;
        if (this.circleProgressRef) {
            this.renderer.setStyle(this.circleProgressRef.nativeElement, 'stroke-dasharray', '283');
            this.renderer.setStyle(this.circleProgressRef.nativeElement, 'stroke-dashoffset', '283');
            this.renderer.setStyle(this.circleProgressRef.nativeElement, 'stroke', this.ngxColor);
            setTimeout(() => {
                this.renderer.setStyle(this.circleProgressRef.nativeElement, 'stroke-dashoffset', offset.toString());
                this.renderer.setStyle(this.circleProgressRef.nativeElement, 'transition', `stroke-dashoffset ${this.ngxTimer}s ease-in-out`);
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProgressComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ProgressComponent, isStandalone: true, selector: "ngx-progress", inputs: { ngxColor: "ngxColor", ngxPercent: "ngxPercent", ngxSize: "ngxSize", ngxTimer: "ngxTimer", ngxType: "ngxType", template: "template" }, host: { classAttribute: "ngx-progress" }, viewQueries: [{ propertyName: "lineProgressRef", first: true, predicate: ["line_progress_inner"], descendants: true }, { propertyName: "circleProgressRef", first: true, predicate: ["circle_progress_inner"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <ng-container *ngIf="ngxType === 'line'">
      <div
        class="ngx-progress-outer"
        [class.ngx-progress-sm]="ngxSize === 'small'"
        [class.ngx-progress-df]="ngxSize === 'default'"
        [class.ngx-progress-lg]="ngxSize === 'large'"
      >
        <div #line_progress_inner class="ngx-progress-inner"></div>
      </div>
      <span *ngIf="ngxPercent !== 100 || !template">{{ ngxPercent }}%</span>
      <span *ngIf="ngxPercent === 100">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </span>
    </ng-container>

    <ng-container *ngIf="ngxType === 'circle'">
      <div class="progress-circle">
        <svg viewBox="0 0 100 100">
          <circle class="bg-circle" cx="50" cy="50" r="45"></circle>
          <circle
            #circle_progress_inner
            class="progress-bar"
            cx="50"
            cy="50"
            r="45"
          ></circle>
        </svg>
        <span *ngIf="ngxPercent !== 100 || !template" class="progress-text"
          >{{ ngxPercent }}%</span
        >
        <div class="template-c" *ngIf="ngxPercent === 100">
          <ng-template [ngTemplateOutlet]="template"></ng-template>
        </div>
      </div>
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProgressComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-progress', template: `
    <ng-container *ngIf="ngxType === 'line'">
      <div
        class="ngx-progress-outer"
        [class.ngx-progress-sm]="ngxSize === 'small'"
        [class.ngx-progress-df]="ngxSize === 'default'"
        [class.ngx-progress-lg]="ngxSize === 'large'"
      >
        <div #line_progress_inner class="ngx-progress-inner"></div>
      </div>
      <span *ngIf="ngxPercent !== 100 || !template">{{ ngxPercent }}%</span>
      <span *ngIf="ngxPercent === 100">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </span>
    </ng-container>

    <ng-container *ngIf="ngxType === 'circle'">
      <div class="progress-circle">
        <svg viewBox="0 0 100 100">
          <circle class="bg-circle" cx="50" cy="50" r="45"></circle>
          <circle
            #circle_progress_inner
            class="progress-bar"
            cx="50"
            cy="50"
            r="45"
          ></circle>
        </svg>
        <span *ngIf="ngxPercent !== 100 || !template" class="progress-text"
          >{{ ngxPercent }}%</span
        >
        <div class="template-c" *ngIf="ngxPercent === 100">
          <ng-template [ngTemplateOutlet]="template"></ng-template>
        </div>
      </div>
    </ng-container>
  `, host: {
                        class: 'ngx-progress',
                    }, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [NgIf, NgTemplateOutlet] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { ngxColor: [{
                type: Input
            }], ngxPercent: [{
                type: Input
            }], ngxSize: [{
                type: Input
            }], ngxTimer: [{
                type: Input
            }], ngxType: [{
                type: Input
            }], template: [{
                type: Input
            }], lineProgressRef: [{
                type: ViewChild,
                args: ['line_progress_inner']
            }], circleProgressRef: [{
                type: ViewChild,
                args: ['circle_progress_inner']
            }] } });

class ProgressModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProgressModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ProgressModule, imports: [ProgressComponent], exports: [ProgressComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProgressModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ProgressModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [ProgressComponent],
                    imports: [ProgressComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressComponent, ProgressModule };
//# sourceMappingURL=ngx-eagle-progress.mjs.map
