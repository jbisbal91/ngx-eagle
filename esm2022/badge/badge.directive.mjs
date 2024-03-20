import { Directive, Input, booleanAttribute, numberAttribute, } from '@angular/core';
import { nodeNameForText } from './typings';
import * as i0 from "@angular/core";
import * as i1 from "ngx-eagle/core/services";
export class BadgeDirective {
    constructor(elementRef, renderer2, colorConverter) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.colorConverter = colorConverter;
        this.ngxBadgeHidden = false;
        this.ngxBadgePosition = 'after';
        this.ngxBadgeSize = 'small';
        this.ngxOverflowCount = 99;
        this.newSpan = document.createElement('span');
    }
    ngOnChanges(changes) {
        if (changes['ngxBadgeHidden']?.currentValue) {
            this.renderer2.addClass(this.newSpan, 'ngx-badge-hidden');
        }
        else {
            this.renderer2.removeClass(this.newSpan, 'ngx-badge-hidden');
        }
        if (changes.hasOwnProperty('ngxBadgeColor')) {
            this.setColor(this.ngxBadgeColor);
        }
        if (changes.hasOwnProperty('ngxBadgeSize')) {
            this.setSize();
        }
        if (changes.hasOwnProperty('ngxBadge')) {
            this.setTextContent();
        }
        if (changes.hasOwnProperty('ngxOverflowCount')) {
            this.setTextContent();
        }
        if (changes.hasOwnProperty('ngxBadgePosition')) {
            this.setPosition();
        }
    }
    ngAfterViewInit() {
        this.buildBadge();
        if (!this.ngxBadgeColor) {
            this.setColor('#FF4D4F');
        }
        this.setTextContent();
        this.setPosition();
        this.setSize();
    }
    buildBadge() {
        this.renderer2.addClass(this.newSpan, 'ngx-badge-content');
        this.renderer2.appendChild(this.elementRef.nativeElement, this.newSpan);
        this.setMaxWidth();
    }
    setPosition() {
        if (this.ngxBadgePosition === 'before') {
            this.renderer2.addClass(this.newSpan, 'ngx-badge-before');
        }
        else {
            this.renderer2.removeClass(this.newSpan, 'ngx-badge-before');
        }
    }
    setMaxWidth() {
        const nodeName = this.elementRef.nativeElement.nodeName;
        if (nodeNameForText[nodeName]) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'width', 'fit-content');
        }
    }
    setSize() {
        this.renderer2.addClass(this.newSpan, `ngx-badge-${this.ngxBadgeSize}`);
    }
    setTextContent() {
        this.newSpan.textContent =
            this.ngxBadge > this.ngxOverflowCount
                ? `${this.ngxOverflowCount}+`
                : `${this.ngxBadge}`;
    }
    setColor(color) {
        var colorContrast;
        if (typeof color === 'string') {
            colorContrast =
                color !== '#FF4D4F'
                    ? this.colorConverter.contrastingColors(color)
                    : { backgroundColor: '#FF4D4F', overlayColor: '#ffffff' };
        }
        if (typeof color === 'object') {
            colorContrast = color;
        }
        this.renderer2.setStyle(this.newSpan, 'background-color', colorContrast.backgroundColor);
        this.renderer2.setStyle(this.newSpan, 'color', colorContrast.overlayColor);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.ColorConverter }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: BadgeDirective, isStandalone: true, selector: "[ngxBadge]", inputs: { ngxBadge: ["ngxBadge", "ngxBadge", numberAttribute], ngxBadgeColor: "ngxBadgeColor", ngxBadgeHidden: ["ngxBadgeHidden", "ngxBadgeHidden", booleanAttribute], ngxBadgePosition: "ngxBadgePosition", ngxBadgeSize: "ngxBadgeSize", ngxOverflowCount: ["ngxOverflowCount", "ngxOverflowCount", numberAttribute] }, host: { classAttribute: "ngx-badge" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxBadge]',
                    host: {
                        class: 'ngx-badge',
                    },
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ColorConverter }]; }, propDecorators: { ngxBadge: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], ngxBadgeColor: [{
                type: Input
            }], ngxBadgeHidden: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxBadgePosition: [{
                type: Input
            }], ngxBadgeSize: [{
                type: Input
            }], ngxOverflowCount: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL2JhZGdlL2JhZGdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULEtBQUssRUFJTCxnQkFBZ0IsRUFDaEIsZUFBZSxHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQXdCLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBVWxFLE1BQU0sT0FBTyxjQUFjO0lBVXpCLFlBQ1MsVUFBc0IsRUFDckIsU0FBb0IsRUFDcEIsY0FBOEI7UUFGL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVZBLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQy9ELHFCQUFnQixHQUFnQixPQUFPLENBQUM7UUFDeEMsaUJBQVksR0FBWSxPQUFPLENBQUM7UUFDRixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFFckUsWUFBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFNdEMsQ0FBQztJQUVKLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFlBQVksRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDM0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztT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WUFDN0IsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsT0FBTyxFQUNaLGtCQUFrQixFQUNsQixhQUFhLENBQUMsZUFBZSxDQUM5QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdFLENBQUM7K0dBN0dVLGNBQWM7bUdBQWQsY0FBYywyRkFDTCxlQUFlLHdGQUVmLGdCQUFnQixrSUFHaEIsZUFBZTs7NEZBTnhCLGNBQWM7a0JBUDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsV0FBVztxQkFDbkI7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO3NKQUV3QyxRQUFRO3NCQUE5QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFDNUIsYUFBYTtzQkFBckIsS0FBSztnQkFDa0MsY0FBYztzQkFBckQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDN0IsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ2lDLGdCQUFnQjtzQkFBdEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXHJcbiAgbnVtYmVyQXR0cmlidXRlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvckNvbnRyYXN0IH0gZnJvbSAnbmd4LWVhZ2xlL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBOZ3hQb3NpdGlvbiwgTmd4U2l6ZSwgbm9kZU5hbWVGb3JUZXh0IH0gZnJvbSAnLi90eXBpbmdzJztcclxuaW1wb3J0IHsgQ29sb3JDb252ZXJ0ZXIgfSBmcm9tICduZ3gtZWFnbGUvY29yZS9zZXJ2aWNlcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hCYWRnZV0nLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LWJhZGdlJyxcclxuICB9LFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYWRnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgbmd4QmFkZ2UhOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbmd4QmFkZ2VDb2xvciE6IENvbG9yQ29udHJhc3QgfCBzdHJpbmc7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIG5neEJhZGdlSGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbmd4QmFkZ2VQb3NpdGlvbjogTmd4UG9zaXRpb24gPSAnYWZ0ZXInO1xyXG4gIEBJbnB1dCgpIG5neEJhZGdlU2l6ZTogTmd4U2l6ZSA9ICdzbWFsbCc7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgbmd4T3ZlcmZsb3dDb3VudDogbnVtYmVyID0gOTk7XHJcblxyXG4gIG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjb2xvckNvbnZlcnRlcjogQ29sb3JDb252ZXJ0ZXJcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzWyduZ3hCYWRnZUhpZGRlbiddPy5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5uZXdTcGFuLCAnbmd4LWJhZGdlLWhpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5uZXdTcGFuLCAnbmd4LWJhZGdlLWhpZGRlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduZ3hCYWRnZUNvbG9yJykpIHtcclxuICAgICAgdGhpcy5zZXRDb2xvcih0aGlzLm5neEJhZGdlQ29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduZ3hCYWRnZVNpemUnKSkge1xyXG4gICAgICB0aGlzLnNldFNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbmd4QmFkZ2UnKSkge1xyXG4gICAgICB0aGlzLnNldFRleHRDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ25neE92ZXJmbG93Q291bnQnKSkge1xyXG4gICAgICB0aGlzLnNldFRleHRDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ25neEJhZGdlUG9zaXRpb24nKSkge1xyXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1aWxkQmFkZ2UoKTtcclxuICAgIGlmICghdGhpcy5uZ3hCYWRnZUNvbG9yKSB7XHJcbiAgICAgIHRoaXMuc2V0Q29sb3IoJyNGRjRENEYnKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0VGV4dENvbnRlbnQoKTtcclxuICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcclxuICAgIHRoaXMuc2V0U2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRCYWRnZSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMubmV3U3BhbiwgJ25neC1iYWRnZS1jb250ZW50Jyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyMi5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5uZXdTcGFuKTtcclxuICAgIHRoaXMuc2V0TWF4V2lkdGgoKTtcclxuICB9XHJcblxyXG4gIHNldFBvc2l0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMubmd4QmFkZ2VQb3NpdGlvbiA9PT0gJ2JlZm9yZScpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5uZXdTcGFuLCAnbmd4LWJhZGdlLWJlZm9yZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5uZXdTcGFuLCAnbmd4LWJhZGdlLWJlZm9yZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TWF4V2lkdGgoKSB7XHJcbiAgICBjb25zdCBub2RlTmFtZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm5vZGVOYW1lO1xyXG4gICAgaWYgKG5vZGVOYW1lRm9yVGV4dFtub2RlTmFtZV0pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAnZml0LWNvbnRlbnQnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTaXplKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5uZXdTcGFuLCBgbmd4LWJhZGdlLSR7dGhpcy5uZ3hCYWRnZVNpemV9YCk7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0Q29udGVudCgpIHtcclxuICAgIHRoaXMubmV3U3Bhbi50ZXh0Q29udGVudCA9XHJcbiAgICAgIHRoaXMubmd4QmFkZ2UgPiB0aGlzLm5neE92ZXJmbG93Q291bnRcclxuICAgICAgICA/IGAke3RoaXMubmd4T3ZlcmZsb3dDb3VudH0rYFxyXG4gICAgICAgIDogYCR7dGhpcy5uZ3hCYWRnZX1gO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29sb3IoY29sb3I6IENvbG9yQ29udHJhc3QgfCBzdHJpbmcpIHtcclxuICAgIHZhciBjb2xvckNvbnRyYXN0ITogQ29sb3JDb250cmFzdDtcclxuICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbG9yQ29udHJhc3QgPVxyXG4gICAgICAgIGNvbG9yICE9PSAnI0ZGNEQ0RidcclxuICAgICAgICAgID8gdGhpcy5jb2xvckNvbnZlcnRlci5jb250cmFzdGluZ0NvbG9ycyhjb2xvcilcclxuICAgICAgICAgIDogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjRkY0RDRGJywgb3ZlcmxheUNvbG9yOiAnI2ZmZmZmZicgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBjb2xvckNvbnRyYXN0ID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMubmV3U3BhbixcclxuICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxyXG4gICAgICBjb2xvckNvbnRyYXN0LmJhY2tncm91bmRDb2xvclxyXG4gICAgKTtcclxuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMubmV3U3BhbiwgJ2NvbG9yJywgY29sb3JDb250cmFzdC5vdmVybGF5Q29sb3IpO1xyXG4gIH1cclxufVxyXG4iXX0=