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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: RowDirective, selector: "[ngx-row]", inputs: { ngxAlign: "ngxAlign", ngxGutter: "ngxGutter", ngxJustify: "ngxJustify", ngxSpan: ["ngxSpan", "ngxSpan", numberAttribute] }, host: { properties: { "class.ngx-row-top": "ngxAlign === 'top'", "class.ngx-row-middle": "ngxAlign === 'middle'", "class.ngx-row-bottom": "ngxAlign === 'bottom'", "class.ngx-row-start": "ngxJustify === 'start'", "class.ngx-row-end": "ngxJustify === 'end'", "class.ngx-row-center": "ngxJustify === 'center'", "class.ngx-row-space-around": "ngxJustify === 'space-around'", "class.ngx-row-space-between": "ngxJustify === 'space-between'", "class.ngx-row-space-evenly": "ngxJustify === 'space-evenly'" }, classAttribute: "ngx-row" }, ngImport: i0 }); }
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
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { ngxAlign: [{
                type: Input
            }], ngxGutter: [{
                type: Input
            }], ngxJustify: [{
                type: Input
            }], ngxSpan: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1lYWdsZS9ncmlkL3Jvdy9yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGVBQWUsR0FDaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUEwQnJDLE1BQU0sT0FBTyxZQUFZO0lBVXZCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTkgsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVuRCxpQkFBWSxHQUFHLElBQUksYUFBYSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLG1CQUFjLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7SUFFVixDQUFDO0lBRTlDLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzsrR0FoQlUsWUFBWTttR0FBWixZQUFZLDJJQUlILGVBQWU7OzRGQUp4QixZQUFZO2tCQWZ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLHFCQUFxQixFQUFFLG9CQUFvQjt3QkFDM0Msd0JBQXdCLEVBQUUsdUJBQXVCO3dCQUNqRCx3QkFBd0IsRUFBRSx1QkFBdUI7d0JBQ2pELHVCQUF1QixFQUFFLHdCQUF3Qjt3QkFDakQscUJBQXFCLEVBQUUsc0JBQXNCO3dCQUM3Qyx3QkFBd0IsRUFBRSx5QkFBeUI7d0JBQ25ELDhCQUE4QixFQUFFLCtCQUErQjt3QkFDL0QsK0JBQStCLEVBQUUsZ0NBQWdDO3dCQUNqRSw4QkFBOEIsRUFBRSwrQkFBK0I7cUJBQ2hFO2lCQUNGO3dHQUVVLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNpQyxPQUFPO3NCQUE3QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgbnVtYmVyQXR0cmlidXRlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgdHlwZSBOZ3hKdXN0aWZ5ID1cclxuICB8ICdzdGFydCdcclxuICB8ICdlbmQnXHJcbiAgfCAnY2VudGVyJ1xyXG4gIHwgJ3NwYWNlLWFyb3VuZCdcclxuICB8ICdzcGFjZS1iZXR3ZWVuJ1xyXG4gIHwgJ3NwYWNlLWV2ZW5seSc7XHJcbmV4cG9ydCB0eXBlIE5neEFsaWduID0gJ3RvcCcgfCAnbWlkZGxlJyB8ICdib3R0b20nO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4LXJvd10nLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LXJvdycsXHJcbiAgICAnW2NsYXNzLm5neC1yb3ctdG9wXSc6IGBuZ3hBbGlnbiA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm93LW1pZGRsZV0nOiBgbmd4QWxpZ24gPT09ICdtaWRkbGUnYCxcclxuICAgICdbY2xhc3Mubmd4LXJvdy1ib3R0b21dJzogYG5neEFsaWduID09PSAnYm90dG9tJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1yb3ctc3RhcnRdJzogYG5neEp1c3RpZnkgPT09ICdzdGFydCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm93LWVuZF0nOiBgbmd4SnVzdGlmeSA9PT0gJ2VuZCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm93LWNlbnRlcl0nOiBgbmd4SnVzdGlmeSA9PT0gJ2NlbnRlcidgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm93LXNwYWNlLWFyb3VuZF0nOiBgbmd4SnVzdGlmeSA9PT0gJ3NwYWNlLWFyb3VuZCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm93LXNwYWNlLWJldHdlZW5dJzogYG5neEp1c3RpZnkgPT09ICdzcGFjZS1iZXR3ZWVuJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1yb3ctc3BhY2UtZXZlbmx5XSc6IGBuZ3hKdXN0aWZ5ID09PSAnc3BhY2UtZXZlbmx5J2AsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBJbnB1dCgpIG5neEFsaWduITogTmd4QWxpZ247XHJcbiAgQElucHV0KCkgbmd4R3V0dGVyITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG5neEp1c3RpZnkhOiBOZ3hKdXN0aWZ5O1xyXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIG5neFNwYW46IG51bWJlciA9IDI0O1xyXG5cclxuICByZWFkb25seSBjdXJyZW50U3BhbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxudW1iZXI+KDI0KTtcclxuXHJcbiAgcmVhZG9ubHkgY3VycmVudEd1dHRlciQgPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KDEpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudFNwYW4kLm5leHQodGhpcy5uZ3hTcGFuKTtcclxuICAgIHRoaXMuY3VycmVudEd1dHRlciQubmV4dCh0aGlzLm5neEd1dHRlcik7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19