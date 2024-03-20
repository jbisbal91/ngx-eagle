import { ChangeDetectionStrategy, Component, Input, booleanAttribute, } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class DividerComponent {
    constructor(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngxDashed = false;
        this.ngxColor = '#6b727c';
        this.ngxOrientation = 'center';
        this.ngxText = '';
        this.ngxType = 'horizontal';
        this.ngxDashed = elementRef.nativeElement.hasAttribute('ngxDashed');
    }
    ngAfterViewInit() {
        if (this.elementRef) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'border-top-color', this.ngxColor);
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.ngxColor);
        }
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: DividerComponent, isStandalone: true, selector: "ngx-divider", inputs: { ngxDashed: ["ngxDashed", "ngxDashed", booleanAttribute], ngxColor: "ngxColor", ngxOrientation: "ngxOrientation", ngxText: "ngxText", ngxType: "ngxType" }, host: { properties: { "class.ngx-divider-orientation-left": "ngxOrientation === 'left'", "class.ngx-divider-orientation-center": "ngxOrientation === 'center'", "class.ngx-divider-orientation-right": "ngxOrientation === 'right'", "class.ngx-divider-dashed": "ngxDashed", "class.ngx-divider-vertical": "ngxType === 'vertical'" }, classAttribute: "ngx-divider" }, ngImport: i0, template: `
    <ng-container>
      <span *ngIf="ngxText && ngxType === 'horizontal'">{{ ngxText }}</span>
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-divider',
                    template: `
    <ng-container>
      <span *ngIf="ngxText && ngxType === 'horizontal'">{{ ngxText }}</span>
    </ng-container>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    host: {
                        class: 'ngx-divider',
                        '[class.ngx-divider-orientation-left]': `ngxOrientation === 'left'`,
                        '[class.ngx-divider-orientation-center]': `ngxOrientation === 'center'`,
                        '[class.ngx-divider-orientation-right]': `ngxOrientation === 'right'`,
                        '[class.ngx-divider-dashed]': 'ngxDashed',
                        '[class.ngx-divider-vertical]': `ngxType === 'vertical'`,
                    },
                    imports: [NgIf],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { ngxDashed: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxColor: [{
                type: Input
            }], ngxOrientation: [{
                type: Input
            }], ngxText: [{
                type: Input
            }], ngxType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9uZ3gtZWFnbGUvZGl2aWRlci9kaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxLQUFLLEVBRUwsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFzQnZDLE1BQU0sT0FBTyxnQkFBZ0I7SUFPM0IsWUFDVSxHQUFzQixFQUN0QixVQUFzQixFQUN0QixRQUFtQjtRQUZuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFUVyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzFELGFBQVEsR0FBVyxTQUFTLENBQUM7UUFDN0IsbUJBQWMsR0FBbUIsUUFBUSxDQUFDO1FBQzFDLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFZLFlBQVksQ0FBQztRQU92QyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0Isa0JBQWtCLEVBQ2xCLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsT0FBTyxFQUNQLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOytHQTdCVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQiwrRkFDUCxnQkFBZ0Isc2VBbEIxQjs7OztHQUlULDREQVdTLElBQUk7OzRGQUVILGdCQUFnQjtrQkFuQjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRTs7OztHQUlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxhQUFhO3dCQUNwQixzQ0FBc0MsRUFBRSwyQkFBMkI7d0JBQ25FLHdDQUF3QyxFQUFFLDZCQUE2Qjt3QkFDdkUsdUNBQXVDLEVBQUUsNEJBQTRCO3dCQUNyRSw0QkFBNEIsRUFBRSxXQUFXO3dCQUN6Qyw4QkFBOEIsRUFBRSx3QkFBd0I7cUJBQ3pEO29CQUNELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztpQkFDaEI7eUpBRXlDLFNBQVM7c0JBQWhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQzdCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBib29sZWFuQXR0cmlidXRlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmd4T3JpZW50YXRpb24sIE5neFR5cGUgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGl2aWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXI+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwibmd4VGV4dCAmJiBuZ3hUeXBlID09PSAnaG9yaXpvbnRhbCdcIj57eyBuZ3hUZXh0IH19PC9zcGFuPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LWRpdmlkZXInLFxyXG4gICAgJ1tjbGFzcy5uZ3gtZGl2aWRlci1vcmllbnRhdGlvbi1sZWZ0XSc6IGBuZ3hPcmllbnRhdGlvbiA9PT0gJ2xlZnQnYCxcclxuICAgICdbY2xhc3Mubmd4LWRpdmlkZXItb3JpZW50YXRpb24tY2VudGVyXSc6IGBuZ3hPcmllbnRhdGlvbiA9PT0gJ2NlbnRlcidgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtZGl2aWRlci1vcmllbnRhdGlvbi1yaWdodF0nOiBgbmd4T3JpZW50YXRpb24gPT09ICdyaWdodCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtZGl2aWRlci1kYXNoZWRdJzogJ25neERhc2hlZCcsXHJcbiAgICAnW2NsYXNzLm5neC1kaXZpZGVyLXZlcnRpY2FsXSc6IGBuZ3hUeXBlID09PSAndmVydGljYWwnYCxcclxuICB9LFxyXG4gIGltcG9ydHM6IFtOZ0lmXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERpdmlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgbmd4RGFzaGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbmd4Q29sb3I6IHN0cmluZyA9ICcjNmI3MjdjJztcclxuICBASW5wdXQoKSBuZ3hPcmllbnRhdGlvbjogTmd4T3JpZW50YXRpb24gPSAnY2VudGVyJztcclxuICBASW5wdXQoKSBuZ3hUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBuZ3hUeXBlOiBOZ3hUeXBlID0gJ2hvcml6b250YWwnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgdGhpcy5uZ3hEYXNoZWQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKCduZ3hEYXNoZWQnKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRSZWYpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnYm9yZGVyLXRvcC1jb2xvcicsXHJcbiAgICAgICAgdGhpcy5uZ3hDb2xvclxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdjb2xvcicsXHJcbiAgICAgICAgdGhpcy5uZ3hDb2xvclxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==