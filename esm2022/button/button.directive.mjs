import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonDirective {
    constructor() {
        this.ngxSize = 'medium';
        this.ngxRounded = 'medium';
        this.ngxFillMode = 'elevated';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ButtonDirective, isStandalone: true, selector: "button[ngx-button]", inputs: { ngxSize: "ngxSize", ngxRounded: "ngxRounded", ngxFillMode: "ngxFillMode" }, host: { properties: { "class.ngx-button-sm": "ngxSize === 'small'", "class.ngx-button-md": "ngxSize === 'medium'", "class.ngx-button-lg": "ngxSize === 'large'", "class.ngx-rounded-sm": "ngxRounded === 'small'", "class.ngx-rounded-md": "ngxRounded === 'medium'", "class.ngx-rounded-lg": "ngxRounded === 'large'", "class.ngx-rounded-full": "ngxRounded === 'full'", "class.ngx-button-filled": "ngxFillMode === 'filled'", "class.ngx-button-outlined": "ngxFillMode === 'outlined'", "class.ngx-button-text": "ngxFillMode === 'text'", "class.ngx-button-elevated": "ngxFillMode === 'elevated'" }, classAttribute: "ngx-button" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[ngx-button]',
                    host: {
                        class: 'ngx-button',
                        '[class.ngx-button-sm]': `ngxSize === 'small'`,
                        '[class.ngx-button-md]': `ngxSize === 'medium'`,
                        '[class.ngx-button-lg]': `ngxSize === 'large'`,
                        '[class.ngx-rounded-sm]': `ngxRounded === 'small'`,
                        '[class.ngx-rounded-md]': `ngxRounded === 'medium'`,
                        '[class.ngx-rounded-lg]': `ngxRounded === 'large'`,
                        '[class.ngx-rounded-full]': `ngxRounded === 'full'`,
                        '[class.ngx-button-filled]': `ngxFillMode === 'filled'`,
                        '[class.ngx-button-outlined]': `ngxFillMode === 'outlined'`,
                        '[class.ngx-button-text]': `ngxFillMode === 'text'`,
                        '[class.ngx-button-elevated]': `ngxFillMode === 'elevated'`,
                    },
                    standalone: true,
                }]
        }], propDecorators: { ngxSize: [{
                type: Input
            }], ngxRounded: [{
                type: Input
            }], ngxFillMode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFxQmpELE1BQU0sT0FBTyxlQUFlO0lBbEI1QjtRQW1CVyxZQUFPLEdBQVksUUFBUSxDQUFDO1FBQzVCLGVBQVUsR0FBZSxRQUFRLENBQUM7UUFDbEMsZ0JBQVcsR0FBZ0IsVUFBVSxDQUFDO0tBQ2hEOytHQUpZLGVBQWU7bUdBQWYsZUFBZTs7NEZBQWYsZUFBZTtrQkFsQjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxZQUFZO3dCQUNuQix1QkFBdUIsRUFBRSxxQkFBcUI7d0JBQzlDLHVCQUF1QixFQUFFLHNCQUFzQjt3QkFDL0MsdUJBQXVCLEVBQUUscUJBQXFCO3dCQUM5Qyx3QkFBd0IsRUFBRSx3QkFBd0I7d0JBQ2xELHdCQUF3QixFQUFFLHlCQUF5Qjt3QkFDbkQsd0JBQXdCLEVBQUUsd0JBQXdCO3dCQUNsRCwwQkFBMEIsRUFBRSx1QkFBdUI7d0JBQ25ELDJCQUEyQixFQUFFLDBCQUEwQjt3QkFDdkQsNkJBQTZCLEVBQUUsNEJBQTRCO3dCQUMzRCx5QkFBeUIsRUFBRSx3QkFBd0I7d0JBQ25ELDZCQUE2QixFQUFFLDRCQUE0QjtxQkFDNUQ7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUVVLE9BQU87c0JBQWYsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neEZpbGxNb2RlLCBOZ3hSb3VuZGVkLCBOZ3hTaXplIH0gZnJvbSAnLi90eXBpbmdzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYnV0dG9uW25neC1idXR0b25dJyxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ25neC1idXR0b24nLFxyXG4gICAgJ1tjbGFzcy5uZ3gtYnV0dG9uLXNtXSc6IGBuZ3hTaXplID09PSAnc21hbGwnYCxcclxuICAgICdbY2xhc3Mubmd4LWJ1dHRvbi1tZF0nOiBgbmd4U2l6ZSA9PT0gJ21lZGl1bSdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtYnV0dG9uLWxnXSc6IGBuZ3hTaXplID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3Mubmd4LXJvdW5kZWQtc21dJzogYG5neFJvdW5kZWQgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm91bmRlZC1tZF0nOiBgbmd4Um91bmRlZCA9PT0gJ21lZGl1bSdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm91bmRlZC1sZ10nOiBgbmd4Um91bmRlZCA9PT0gJ2xhcmdlJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1yb3VuZGVkLWZ1bGxdJzogYG5neFJvdW5kZWQgPT09ICdmdWxsJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1idXR0b24tZmlsbGVkXSc6IGBuZ3hGaWxsTW9kZSA9PT0gJ2ZpbGxlZCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtYnV0dG9uLW91dGxpbmVkXSc6IGBuZ3hGaWxsTW9kZSA9PT0gJ291dGxpbmVkJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1idXR0b24tdGV4dF0nOiBgbmd4RmlsbE1vZGUgPT09ICd0ZXh0J2AsXHJcbiAgICAnW2NsYXNzLm5neC1idXR0b24tZWxldmF0ZWRdJzogYG5neEZpbGxNb2RlID09PSAnZWxldmF0ZWQnYCxcclxuICB9LFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25EaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIG5neFNpemU6IE5neFNpemUgPSAnbWVkaXVtJztcclxuICBASW5wdXQoKSBuZ3hSb3VuZGVkOiBOZ3hSb3VuZGVkID0gJ21lZGl1bSc7XHJcbiAgQElucHV0KCkgbmd4RmlsbE1vZGU6IE5neEZpbGxNb2RlID0gJ2VsZXZhdGVkJztcclxufVxyXG4iXX0=