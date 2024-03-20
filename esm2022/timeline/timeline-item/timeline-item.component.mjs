import { Component, Input, ViewChild, } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from "@angular/core";
export class TimelineItemComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZ3gtZWFnbGUvdGltZWxpbmUvdGltZWxpbmUtaXRlbS90aW1lbGluZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULEtBQUssRUFLTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQTREekQsTUFBTSxPQUFPLHFCQUFxQjtJQWdCaEMsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWY5QixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBSXRDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixTQUFJLEdBQW9CLFNBQVMsQ0FBQztJQUtRLENBQUM7SUFFM0MsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsT0FBTyxPQUFPLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7WUFDcEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztTQUNuRTtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQ3JDLFFBQVEsRUFDUixHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FDdEIsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUNyQyxPQUFPLEVBQ1AsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQ3JCLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFDbEMsUUFBUSxFQUNSLGVBQWUsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUNuQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUNyQyxPQUFPLEVBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQ3JDLGNBQWMsRUFDZCxJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7U0FDSDtJQUNILENBQUM7K0dBaEZVLHFCQUFxQjttR0FBckIscUJBQXFCLG1iQXZEdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdEVCw0REFJUyxJQUFJLDZGQUFFLGdCQUFnQjs7NEZBR3JCLHFCQUFxQjtrQkF6RGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRFQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxlQUFlO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ2pDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjtnR0FFVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQVUwQixrQkFBa0I7c0JBQWpELFNBQVM7dUJBQUMsbUJBQW1CO2dCQUNGLGVBQWU7c0JBQTFDLFNBQVM7dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0lmLCBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmd4VGltZWxpbmVNb2RlIH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC10aW1lbGluZS1pdGVtJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cIm5neC10aW1lbGluZS1pdGVtXCI+XHJcbiAgICAgIDwhLS0tLS0tLS0tLWxlZnQgdGltZWxpbmUgY29udGVudC0tLS0tLS0tLS0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAqbmdJZj1cIm1vZGUgIT09ICdkZWZhdWx0J1wiXHJcbiAgICAgICAgW2NsYXNzLnRpbWVsaW5lLWMtbGVmdF09XCJvTGVmdCA9PT0gMVwiXHJcbiAgICAgICAgW2NsYXNzLnRpbWVsaW5lLWMtcmlnaHRdPVwib0xlZnQgPT09IDNcIlxyXG4gICAgICAgIFtzdHlsZS5vcmRlcl09XCJvTGVmdFwiXHJcbiAgICAgICAgW3N0eWxlLndpZHRoXT1cIic1MCUnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwidHlwZU9mKG5neExhYmVsKSA9PT0gJ3N0cmluZydcIj57eyBuZ3hMYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICpuZ0lmPVwidHlwZU9mKG5neExhYmVsKSA9PT0gJ29iamVjdCdcIlxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibmd4TGFiZWxcIlxyXG4gICAgICAgID48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLS0tLS0tLS0tdGltZWxpbmUgcG9pbnQtLS0tLS0tLS0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYy10aW1lbGluZVwiIFtzdHlsZS5taW4td2lkdGgucHhdPVwiZG90V2lkdGhcIiBbc3R5bGUub3JkZXJdPVwiMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZVwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAqbmdJZj1cIiFuZ3hEb3RcIlxyXG4gICAgICAgICAgICAjdGltZWxpbmVfZG90X2l0ZW1cclxuICAgICAgICAgICAgY2xhc3M9XCJuZ3gtdGltZWxpbmUtaXRlbS1oZWFkXCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxzcGFuICN0aW1lbGluZV9kb3RfaXRlbSAqbmdJZj1cInR5cGVPZihuZ3hEb3QpID09PSAnc3RyaW5nJ1wiPnt7XHJcbiAgICAgICAgICAgIG5neERvdFxyXG4gICAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2ICN0aW1lbGluZV9kb3RfaXRlbSAqbmdJZj1cInR5cGVPZihuZ3hEb3QpID09PSAnb2JqZWN0J1wiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibmd4RG90XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAjdGltZWxpbmVfdGFpbFxyXG4gICAgICAgICAgICBjbGFzcz1cIm5neC10aW1lbGluZS1pdGVtLXRhaWxcIlxyXG4gICAgICAgICAgICAqbmdJZj1cIiFsYXN0SXRlbVwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tLS0tLS0tLS1yaWdodCB0aW1lbGluZSBjb250ZW50LS0tLS0tLS0tLT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwibmd4LXRpbWVsaW5lLWl0ZW0tY29udGVudFwiXHJcbiAgICAgICAgW2NsYXNzLnRpbWVsaW5lLWMtbGVmdF09XCJvUmlnaHQgPT09IDFcIlxyXG4gICAgICAgIFtjbGFzcy50aW1lbGluZS1jLXJpZ2h0XT1cIm9SaWdodCA9PT0gM1wiXHJcbiAgICAgICAgW3N0eWxlLm9yZGVyXT1cIm9SaWdodFwiXHJcbiAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwibW9kZSAhPT0gJ2RlZmF1bHQnID8gNTAgOiAnYXV0bydcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICd0aW1lbGluZS1pdGVtJyxcclxuICB9LFxyXG4gIGltcG9ydHM6IFtOZ0lmLCBOZ1RlbXBsYXRlT3V0bGV0XSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZWxpbmVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuZ3hDb2xvcjogc3RyaW5nID0gJyMxODkwZmYnO1xyXG4gIEBJbnB1dCgpIG5neERvdCE6IGFueSB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5neExhYmVsITogYW55IHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIG9MZWZ0OiBudW1iZXIgPSAxO1xyXG4gIG9SaWdodDogbnVtYmVyID0gMztcclxuICBsYXN0SXRlbTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGRvdEhlaWdodDogbnVtYmVyID0gMDtcclxuICBkb3RXaWR0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgbW9kZTogTmd4VGltZWxpbmVNb2RlID0gJ2RlZmF1bHQnO1xyXG5cclxuICBAVmlld0NoaWxkKCd0aW1lbGluZV9kb3RfaXRlbScpIHRpbWVsaW5lRG90SXRlbVJlZiE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndGltZWxpbmVfdGFpbCcpIHRpbWVsaW5lVGFpbFJlZiE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0aWFsRG90RGltZW5zaW9ucygpO1xyXG4gICAgdGhpcy5zZXRTaXplRG90KCk7XHJcbiAgICB0aGlzLnNldERvdENvbG9yKCk7XHJcbiAgICB0aGlzLnNldFRhaWxIZWlnaHQoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdGlhbERvdERpbWVuc2lvbnMoKTtcclxuICAgIHRoaXMuc2V0U2l6ZURvdCgpO1xyXG4gICAgdGhpcy5zZXREb3RDb2xvcigpO1xyXG4gICAgdGhpcy5zZXRUYWlsSGVpZ2h0KCk7XHJcbiAgfVxyXG4gIHR5cGVPZih2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbERvdERpbWVuc2lvbnMoKSB7XHJcbiAgICBpZiAodGhpcy50aW1lbGluZURvdEl0ZW1SZWYpIHtcclxuICAgICAgdGhpcy5kb3RIZWlnaHQgPSB0aGlzLnRpbWVsaW5lRG90SXRlbVJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgdGhpcy5kb3RXaWR0aCA9IHRoaXMudGltZWxpbmVEb3RJdGVtUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTaXplRG90KCkge1xyXG4gICAgaWYgKHRoaXMudGltZWxpbmVEb3RJdGVtUmVmKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy50aW1lbGluZURvdEl0ZW1SZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnaGVpZ2h0JyxcclxuICAgICAgICBgJHt0aGlzLmRvdEhlaWdodH1weGBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLnRpbWVsaW5lRG90SXRlbVJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgYCR7dGhpcy5kb3RXaWR0aH1weGBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFRhaWxIZWlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy50aW1lbGluZVRhaWxSZWYpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLnRpbWVsaW5lVGFpbFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdoZWlnaHQnLFxyXG4gICAgICAgIGBjYWxjKDEwMCUgLSAke3RoaXMuZG90SGVpZ2h0fXB4KWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERvdENvbG9yKCkge1xyXG4gICAgaWYgKHRoaXMudGltZWxpbmVEb3RJdGVtUmVmKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy50aW1lbGluZURvdEl0ZW1SZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnY29sb3InLFxyXG4gICAgICAgIHRoaXMubmd4Q29sb3JcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLnRpbWVsaW5lRG90SXRlbVJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdib3JkZXItY29sb3InLFxyXG4gICAgICAgIHRoaXMubmd4Q29sb3JcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19