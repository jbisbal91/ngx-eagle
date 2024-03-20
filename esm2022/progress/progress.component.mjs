import { ChangeDetectionStrategy, Component, Input, ViewChild, } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from "@angular/core";
export class ProgressComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxLQUFLLEVBS0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFpRHpELE1BQU0sT0FBTyxpQkFBaUI7SUFXNUIsWUFDVSxHQUFzQixFQUN0QixRQUFtQixFQUNuQixVQUFzQjtRQUZ0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFidkIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUM3QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLFlBQU8sR0FBWSxTQUFTLENBQUM7UUFDN0IsYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUN2QixZQUFPLEdBQVksTUFBTSxDQUFDO0lBVWhDLENBQUM7SUFFSixlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtnQkFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFB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QVE7c0JBQWhCLEtBQUs7Z0JBRTRCLGVBQWU7c0JBQWhELFNBQVM7dUJBQUMscUJBQXFCO2dCQUNJLGlCQUFpQjtzQkFBcEQsU0FBUzt1QkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4U2l6ZSwgTmd4VHlwZSB9IGZyb20gJy4vdHlwaW5ncyc7XHJcbmltcG9ydCB7IE5nSWYsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtcHJvZ3Jlc3MnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmd4VHlwZSA9PT0gJ2xpbmUnXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cIm5neC1wcm9ncmVzcy1vdXRlclwiXHJcbiAgICAgICAgW2NsYXNzLm5neC1wcm9ncmVzcy1zbV09XCJuZ3hTaXplID09PSAnc21hbGwnXCJcclxuICAgICAgICBbY2xhc3Mubmd4LXByb2dyZXNzLWRmXT1cIm5neFNpemUgPT09ICdkZWZhdWx0J1wiXHJcbiAgICAgICAgW2NsYXNzLm5neC1wcm9ncmVzcy1sZ109XCJuZ3hTaXplID09PSAnbGFyZ2UnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgI2xpbmVfcHJvZ3Jlc3NfaW5uZXIgY2xhc3M9XCJuZ3gtcHJvZ3Jlc3MtaW5uZXJcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwibmd4UGVyY2VudCAhPT0gMTAwIHx8ICF0ZW1wbGF0ZVwiPnt7IG5neFBlcmNlbnQgfX0lPC9zcGFuPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cIm5neFBlcmNlbnQgPT09IDEwMFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuZ3hUeXBlID09PSAnY2lyY2xlJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtY2lyY2xlXCI+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJiZy1jaXJjbGVcIiBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI0NVwiPjwvY2lyY2xlPlxyXG4gICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAjY2lyY2xlX3Byb2dyZXNzX2lubmVyXHJcbiAgICAgICAgICAgIGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCJcclxuICAgICAgICAgICAgY3g9XCI1MFwiXHJcbiAgICAgICAgICAgIGN5PVwiNTBcIlxyXG4gICAgICAgICAgICByPVwiNDVcIlxyXG4gICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibmd4UGVyY2VudCAhPT0gMTAwIHx8ICF0ZW1wbGF0ZVwiIGNsYXNzPVwicHJvZ3Jlc3MtdGV4dFwiXHJcbiAgICAgICAgICA+e3sgbmd4UGVyY2VudCB9fSU8L3NwYW5cclxuICAgICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlLWNcIiAqbmdJZj1cIm5neFBlcmNlbnQgPT09IDEwMFwiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LXByb2dyZXNzJyxcclxuICB9LFxyXG4gIHN0eWxlczogW10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmdJZiwgTmdUZW1wbGF0ZU91dGxldF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbmd4Q29sb3I6IHN0cmluZyA9ICcjMTg5MEZGJztcclxuICBASW5wdXQoKSBuZ3hQZXJjZW50OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIG5neFNpemU6IE5neFNpemUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbmd4VGltZXI6IG51bWJlciA9IDAuNTtcclxuICBASW5wdXQoKSBuZ3hUeXBlOiBOZ3hUeXBlID0gJ2xpbmUnO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlITogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2xpbmVfcHJvZ3Jlc3NfaW5uZXInKSBsaW5lUHJvZ3Jlc3NSZWYhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2NpcmNsZV9wcm9ncmVzc19pbm5lcicpIGNpcmNsZVByb2dyZXNzUmVmITogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm5neFR5cGUgPT09ICdsaW5lJykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpbmVQcm9ncmVzcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGRhdGVDaXJjbGVQcm9ncmVzcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlc1snbmd4UGVyY2VudCddKSB7XHJcbiAgICAgIGlmICh0aGlzLm5neFR5cGUgPT09ICdsaW5lJykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGluZVByb2dyZXNzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaXJjbGVQcm9ncmVzcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUxpbmVQcm9ncmVzcygpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saW5lUHJvZ3Jlc3NSZWYpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5saW5lUHJvZ3Jlc3NSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgICBgJHt0aGlzLm5neFBlcmNlbnR9JWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5saW5lUHJvZ3Jlc3NSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJyxcclxuICAgICAgICAgIHRoaXMubmd4Q29sb3JcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmxpbmVQcm9ncmVzc1JlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgICAgYHdpZHRoICR7dGhpcy5uZ3hUaW1lcn1zIGVhc2UtaW4tb3V0YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDaXJjbGVQcm9ncmVzcygpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsICcxMDBweCcpO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigxMDAsIE1hdGgubWF4KDAsIHRoaXMubmd4UGVyY2VudCkpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gMjgzIC0gKDI4MyAqIHByb2dyZXNzKSAvIDEwMDtcclxuICAgIGlmICh0aGlzLmNpcmNsZVByb2dyZXNzUmVmKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5jaXJjbGVQcm9ncmVzc1JlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdzdHJva2UtZGFzaGFycmF5JyxcclxuICAgICAgICAnMjgzJ1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuY2lyY2xlUHJvZ3Jlc3NSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnLFxyXG4gICAgICAgICcyODMnXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5jaXJjbGVQcm9ncmVzc1JlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdzdHJva2UnLFxyXG4gICAgICAgIHRoaXMubmd4Q29sb3JcclxuICAgICAgKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuY2lyY2xlUHJvZ3Jlc3NSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCcsXHJcbiAgICAgICAgICBvZmZzZXQudG9TdHJpbmcoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmNpcmNsZVByb2dyZXNzUmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAndHJhbnNpdGlvbicsXHJcbiAgICAgICAgICBgc3Ryb2tlLWRhc2hvZmZzZXQgJHt0aGlzLm5neFRpbWVyfXMgZWFzZS1pbi1vdXRgXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==