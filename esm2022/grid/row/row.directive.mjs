import { Directive, Input, numberAttribute, } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export class RowDirective {
    constructor(cdr) {
        this.cdr = cdr;
        this.ngxSpan = 24;
        this.currentSpan$ = new ReplaySubject(24);
        this.currentGutter$ = new ReplaySubject(1);
    }
    ngAfterContentInit() {
        this.currentSpan$.next(this.ngxSpan);
        this.currentGutter$.next(this.ngxGutter);
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RowDirective, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: RowDirective, selector: "[ngx-row]", inputs: { ngxSpan: ["ngxSpan", "ngxSpan", numberAttribute], ngxGutter: "ngxGutter", ngxAlign: "ngxAlign", ngxJustify: "ngxJustify" }, host: { properties: { "class.ngx-row-top": "ngxAlign === 'top'", "class.ngx-row-middle": "ngxAlign === 'middle'", "class.ngx-row-bottom": "ngxAlign === 'bottom'", "class.ngx-row-start": "ngxJustify === 'start'", "class.ngx-row-end": "ngxJustify === 'end'", "class.ngx-row-center": "ngxJustify === 'center'", "class.ngx-row-space-around": "ngxJustify === 'space-around'", "class.ngx-row-space-between": "ngxJustify === 'space-between'", "class.ngx-row-space-evenly": "ngxJustify === 'space-evenly'" }, classAttribute: "ngx-row" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-row]',
                    host: {
                        class: 'ngx-row',
                        '[class.ngx-row-top]': `ngxAlign === 'top'`,
                        '[class.ngx-row-middle]': `ngxAlign === 'middle'`,
                        '[class.ngx-row-bottom]': `ngxAlign === 'bottom'`,
                        '[class.ngx-row-start]': `ngxJustify === 'start'`,
                        '[class.ngx-row-end]': `ngxJustify === 'end'`,
                        '[class.ngx-row-center]': `ngxJustify === 'center'`,
                        '[class.ngx-row-space-around]': `ngxJustify === 'space-around'`,
                        '[class.ngx-row-space-between]': `ngxJustify === 'space-between'`,
                        '[class.ngx-row-space-evenly]': `ngxJustify === 'space-evenly'`,
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { ngxSpan: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], ngxGutter: [{
                type: Input
            }], ngxAlign: [{
                type: Input
            }], ngxJustify: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS9ncmlkL3Jvdy9yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGVBQWUsR0FDaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUEwQnJDLE1BQU0sT0FBTyxZQUFZO0lBVXZCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVEgsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUtuRCxpQkFBWSxHQUFHLElBQUksYUFBYSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLG1CQUFjLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7SUFFVixDQUFDO0lBRTlDLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzsrR0FoQlUsWUFBWTttR0FBWixZQUFZLG1FQUNILGVBQWU7OzRGQUR4QixZQUFZO2tCQWZ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLHFCQUFxQixFQUFFLG9CQUFvQjt3QkFDM0Msd0JBQXdCLEVBQUUsdUJBQXVCO3dCQUNqRCx3QkFBd0IsRUFBRSx1QkFBdUI7d0JBQ2pELHVCQUF1QixFQUFFLHdCQUF3Qjt3QkFDakQscUJBQXFCLEVBQUUsc0JBQXNCO3dCQUM3Qyx3QkFBd0IsRUFBRSx5QkFBeUI7d0JBQ25ELDhCQUE4QixFQUFFLCtCQUErQjt3QkFDL0QsK0JBQStCLEVBQUUsZ0NBQWdDO3dCQUNqRSw4QkFBOEIsRUFBRSwrQkFBK0I7cUJBQ2hFO2lCQUNGO3dHQUV3QyxPQUFPO3NCQUE3QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFDNUIsU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIG51bWJlckF0dHJpYnV0ZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTmd4SnVzdGlmeSA9XHJcbiAgfCAnc3RhcnQnXHJcbiAgfCAnZW5kJ1xyXG4gIHwgJ2NlbnRlcidcclxuICB8ICdzcGFjZS1hcm91bmQnXHJcbiAgfCAnc3BhY2UtYmV0d2VlbidcclxuICB8ICdzcGFjZS1ldmVubHknO1xyXG5leHBvcnQgdHlwZSBOZ3hBbGlnbiA9ICd0b3AnIHwgJ21pZGRsZScgfCAnYm90dG9tJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neC1yb3ddJyxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ25neC1yb3cnLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm93LXRvcF0nOiBgbmd4QWxpZ24gPT09ICd0b3AnYCxcclxuICAgICdbY2xhc3Mubmd4LXJvdy1taWRkbGVdJzogYG5neEFsaWduID09PSAnbWlkZGxlJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1yb3ctYm90dG9tXSc6IGBuZ3hBbGlnbiA9PT0gJ2JvdHRvbSdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm93LXN0YXJ0XSc6IGBuZ3hKdXN0aWZ5ID09PSAnc3RhcnQnYCxcclxuICAgICdbY2xhc3Mubmd4LXJvdy1lbmRdJzogYG5neEp1c3RpZnkgPT09ICdlbmQnYCxcclxuICAgICdbY2xhc3Mubmd4LXJvdy1jZW50ZXJdJzogYG5neEp1c3RpZnkgPT09ICdjZW50ZXInYCxcclxuICAgICdbY2xhc3Mubmd4LXJvdy1zcGFjZS1hcm91bmRdJzogYG5neEp1c3RpZnkgPT09ICdzcGFjZS1hcm91bmQnYCxcclxuICAgICdbY2xhc3Mubmd4LXJvdy1zcGFjZS1iZXR3ZWVuXSc6IGBuZ3hKdXN0aWZ5ID09PSAnc3BhY2UtYmV0d2VlbidgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm93LXNwYWNlLWV2ZW5seV0nOiBgbmd4SnVzdGlmeSA9PT0gJ3NwYWNlLWV2ZW5seSdgLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBuZ3hTcGFuOiBudW1iZXIgPSAyNDtcclxuICBASW5wdXQoKSBuZ3hHdXR0ZXIhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbmd4QWxpZ24hOiBOZ3hBbGlnbjtcclxuICBASW5wdXQoKSBuZ3hKdXN0aWZ5ITogTmd4SnVzdGlmeTtcclxuXHJcbiAgcmVhZG9ubHkgY3VycmVudFNwYW4kID0gbmV3IFJlcGxheVN1YmplY3Q8bnVtYmVyPigyNCk7XHJcblxyXG4gIHJlYWRvbmx5IGN1cnJlbnRHdXR0ZXIkID0gbmV3IFJlcGxheVN1YmplY3Q8c3RyaW5nPigxKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRTcGFuJC5uZXh0KHRoaXMubmd4U3Bhbik7XHJcbiAgICB0aGlzLmN1cnJlbnRHdXR0ZXIkLm5leHQodGhpcy5uZ3hHdXR0ZXIpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==