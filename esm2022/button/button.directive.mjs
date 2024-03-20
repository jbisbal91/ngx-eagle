import { Directive, Input, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-eagle/core/services";
export class ButtonDirective {
    constructor(renderer, elementRef, colorConverter) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colorConverter = colorConverter;
        this.ngxFillMode = 'filled';
        this.ngxRounded = 'medium';
        this.ngxSize = 'medium';
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('ngxFillMode')) {
            this.setColorByMode(this.ngxColor ? this.ngxColor : '#1890FF');
        }
        if (changes.hasOwnProperty('ngxColor')) {
            this.setColorByMode(this.ngxColor);
        }
    }
    ngOnInit() {
        if (!this.ngxColor) {
            this.setColorByMode('#1890FF');
        }
    }
    setColorByMode(color) {
        var colorContrast;
        if (typeof color === 'string') {
            colorContrast =
                color !== '#1890FF'
                    ? this.colorConverter.contrastingColors(color)
                    : { backgroundColor: '#1890FF', overlayColor: '#ffffff' };
        }
        if (typeof color === 'object') {
            colorContrast = color;
        }
        switch (this.ngxFillMode) {
            case 'filled':
                this.setColor(colorContrast.backgroundColor, colorContrast.overlayColor, 'transparent');
                break;
            case 'outlined':
                this.setColor('transparent', colorContrast.backgroundColor, colorContrast.backgroundColor);
                break;
            case 'elevated':
                this.setColor(colorContrast.backgroundColor, colorContrast.overlayColor, 'transparent');
                break;
            case 'text':
                this.setColor('transparent', colorContrast.backgroundColor, 'transparent');
                break;
        }
    }
    setColor(backgroundColor, color, borderColor) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', backgroundColor);
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', borderColor);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ButtonDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.ColorConverter }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ButtonDirective, isStandalone: true, selector: "button[ngx-button]", inputs: { ngxColor: "ngxColor", ngxFillMode: "ngxFillMode", ngxRounded: "ngxRounded", ngxSize: "ngxSize" }, host: { properties: { "class.ngx-button-sm": "ngxSize === 'small'", "class.ngx-button-md": "ngxSize === 'medium'", "class.ngx-button-lg": "ngxSize === 'large'", "class.ngx-rounded-sm": "ngxRounded === 'small'", "class.ngx-rounded-md": "ngxRounded === 'medium'", "class.ngx-rounded-lg": "ngxRounded === 'large'", "class.ngx-rounded-full": "ngxRounded === 'full'", "class.ngx-button-filled": "ngxFillMode === 'filled'", "class.ngx-button-outlined": "ngxFillMode === 'outlined'", "class.ngx-button-text": "ngxFillMode === 'text'", "class.ngx-button-elevated": "ngxFillMode === 'elevated'" }, classAttribute: "ngx-button" }, usesOnChanges: true, ngImport: i0 }); }
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
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.ColorConverter }]; }, propDecorators: { ngxColor: [{
                type: Input
            }], ngxFillMode: [{
                type: Input
            }], ngxRounded: [{
                type: Input
            }], ngxSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25neC1lYWdsZS9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FLTixNQUFNLGVBQWUsQ0FBQzs7O0FBdUJ2QixNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUNVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLGNBQThCO1FBRjlCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFQL0IsZ0JBQVcsR0FBZ0IsUUFBUSxDQUFDO1FBQ3BDLGVBQVUsR0FBZSxRQUFRLENBQUM7UUFDbEMsWUFBTyxHQUFZLFFBQVEsQ0FBQztJQU1sQyxDQUFDO0lBRUosV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUE2QjtRQUMxQyxJQUFJLGFBQTZCLENBQUM7UUFDbEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsYUFBYTtnQkFDWCxLQUFLLEtBQUssU0FBUztvQkFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO29CQUM5QyxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsQ0FBQztTQUMvRDtRQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFFRCxRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxRQUFRLENBQ1gsYUFBYSxDQUFDLGVBQWUsRUFDN0IsYUFBYSxDQUFDLFlBQVksRUFDMUIsYUFBYSxDQUNkLENBQUM7Z0JBQ0YsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsUUFBUSxDQUNYLGFBQWEsRUFDYixhQUFhLENBQUMsZUFBZSxFQUM3QixhQUFhLENBQUMsZUFBZSxDQUM5QixDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FDWCxhQUFhLENBQUMsZUFBZSxFQUM3QixhQUFhLENBQUMsWUFBWSxFQUMxQixhQUFhLENBQ2QsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxRQUFRLENBQ1gsYUFBYSxFQUNiLGFBQWEsQ0FBQyxlQUFlLEVBQzdCLGFBQWEsQ0FDZCxDQUFDO2dCQUNGLE1BQU07U0FDVDtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsZUFBdUIsRUFBRSxLQUFhLEVBQUUsV0FBbUI7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixrQkFBa0IsRUFDbEIsZUFBZSxDQUNoQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsY0FBYyxFQUNkLFdBQVcsQ0FDWixDQUFDO0lBQ0osQ0FBQzsrR0FyRlUsZUFBZTttR0FBZixlQUFlOzs0RkFBZixlQUFlO2tCQWxCM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFlBQVk7d0JBQ25CLHVCQUF1QixFQUFFLHFCQUFxQjt3QkFDOUMsdUJBQXVCLEVBQUUsc0JBQXNCO3dCQUMvQyx1QkFBdUIsRUFBRSxxQkFBcUI7d0JBQzlDLHdCQUF3QixFQUFFLHdCQUF3Qjt3QkFDbEQsd0JBQXdCLEVBQUUseUJBQXlCO3dCQUNuRCx3QkFBd0IsRUFBRSx3QkFBd0I7d0JBQ2xELDBCQUEwQixFQUFFLHVCQUF1Qjt3QkFDbkQsMkJBQTJCLEVBQUUsMEJBQTBCO3dCQUN2RCw2QkFBNkIsRUFBRSw0QkFBNEI7d0JBQzNELHlCQUF5QixFQUFFLHdCQUF3Qjt3QkFDbkQsNkJBQTZCLEVBQUUsNEJBQTRCO3FCQUM1RDtvQkFDRCxVQUFVLEVBQUUsSUFBSTtpQkFDakI7c0pBRVUsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hGaWxsTW9kZSwgTmd4Um91bmRlZCwgTmd4U2l6ZSB9IGZyb20gJy4vdHlwaW5ncyc7XHJcbmltcG9ydCB7IENvbG9yQ29udmVydGVyIH0gZnJvbSAnbmd4LWVhZ2xlL2NvcmUvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBDb2xvckNvbnRyYXN0IH0gZnJvbSAnbmd4LWVhZ2xlL2NvcmUvdHlwZXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdidXR0b25bbmd4LWJ1dHRvbl0nLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LWJ1dHRvbicsXHJcbiAgICAnW2NsYXNzLm5neC1idXR0b24tc21dJzogYG5neFNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtYnV0dG9uLW1kXSc6IGBuZ3hTaXplID09PSAnbWVkaXVtJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1idXR0b24tbGddJzogYG5neFNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcm91bmRlZC1zbV0nOiBgbmd4Um91bmRlZCA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1yb3VuZGVkLW1kXSc6IGBuZ3hSb3VuZGVkID09PSAnbWVkaXVtJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1yb3VuZGVkLWxnXSc6IGBuZ3hSb3VuZGVkID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3Mubmd4LXJvdW5kZWQtZnVsbF0nOiBgbmd4Um91bmRlZCA9PT0gJ2Z1bGwnYCxcclxuICAgICdbY2xhc3Mubmd4LWJ1dHRvbi1maWxsZWRdJzogYG5neEZpbGxNb2RlID09PSAnZmlsbGVkJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1idXR0b24tb3V0bGluZWRdJzogYG5neEZpbGxNb2RlID09PSAnb3V0bGluZWQnYCxcclxuICAgICdbY2xhc3Mubmd4LWJ1dHRvbi10ZXh0XSc6IGBuZ3hGaWxsTW9kZSA9PT0gJ3RleHQnYCxcclxuICAgICdbY2xhc3Mubmd4LWJ1dHRvbi1lbGV2YXRlZF0nOiBgbmd4RmlsbE1vZGUgPT09ICdlbGV2YXRlZCdgLFxyXG4gIH0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuZ3hDb2xvciE6IENvbG9yQ29udHJhc3QgfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgbmd4RmlsbE1vZGU6IE5neEZpbGxNb2RlID0gJ2ZpbGxlZCc7XHJcbiAgQElucHV0KCkgbmd4Um91bmRlZDogTmd4Um91bmRlZCA9ICdtZWRpdW0nO1xyXG4gIEBJbnB1dCgpIG5neFNpemU6IE5neFNpemUgPSAnbWVkaXVtJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNvbG9yQ29udmVydGVyOiBDb2xvckNvbnZlcnRlclxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ25neEZpbGxNb2RlJykpIHtcclxuICAgICAgdGhpcy5zZXRDb2xvckJ5TW9kZSh0aGlzLm5neENvbG9yID8gdGhpcy5uZ3hDb2xvciA6ICcjMTg5MEZGJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ25neENvbG9yJykpIHtcclxuICAgICAgdGhpcy5zZXRDb2xvckJ5TW9kZSh0aGlzLm5neENvbG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm5neENvbG9yKSB7XHJcbiAgICAgIHRoaXMuc2V0Q29sb3JCeU1vZGUoJyMxODkwRkYnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENvbG9yQnlNb2RlKGNvbG9yOiBDb2xvckNvbnRyYXN0IHwgc3RyaW5nKSB7XHJcbiAgICB2YXIgY29sb3JDb250cmFzdCE6IENvbG9yQ29udHJhc3Q7XHJcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb2xvckNvbnRyYXN0ID1cclxuICAgICAgICBjb2xvciAhPT0gJyMxODkwRkYnXHJcbiAgICAgICAgICA/IHRoaXMuY29sb3JDb252ZXJ0ZXIuY29udHJhc3RpbmdDb2xvcnMoY29sb3IpXHJcbiAgICAgICAgICA6IHsgYmFja2dyb3VuZENvbG9yOiAnIzE4OTBGRicsIG92ZXJsYXlDb2xvcjogJyNmZmZmZmYnIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgY29sb3JDb250cmFzdCA9IGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodGhpcy5uZ3hGaWxsTW9kZSkge1xyXG4gICAgICBjYXNlICdmaWxsZWQnOlxyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IoXHJcbiAgICAgICAgICBjb2xvckNvbnRyYXN0LmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgIGNvbG9yQ29udHJhc3Qub3ZlcmxheUNvbG9yLFxyXG4gICAgICAgICAgJ3RyYW5zcGFyZW50J1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ291dGxpbmVkJzpcclxuICAgICAgICB0aGlzLnNldENvbG9yKFxyXG4gICAgICAgICAgJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIGNvbG9yQ29udHJhc3QuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgY29sb3JDb250cmFzdC5iYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdlbGV2YXRlZCc6XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcihcclxuICAgICAgICAgIGNvbG9yQ29udHJhc3QuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgY29sb3JDb250cmFzdC5vdmVybGF5Q29sb3IsXHJcbiAgICAgICAgICAndHJhbnNwYXJlbnQnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcihcclxuICAgICAgICAgICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICBjb2xvckNvbnRyYXN0LmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICd0cmFuc3BhcmVudCdcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q29sb3IoYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGJvcmRlckNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvclxyXG4gICAgKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjb2xvcicsIGNvbG9yKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnYm9yZGVyLWNvbG9yJyxcclxuICAgICAgYm9yZGVyQ29sb3JcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==