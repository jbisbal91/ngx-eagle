import { Component, ContentChildren, Input, } from '@angular/core';
import { AvatarComponent } from './avatar.component';
import * as i0 from "@angular/core";
export class AvatarGroupComponent {
    constructor(renderer, elementRef, cdr) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.maxVisibleAvatars = null;
    }
    ngAfterContentInit() {
        this.updateVisibleAvatars();
        this.cdr.markForCheck();
    }
    updateVisibleAvatars() {
        const avatarArray = this.avatars.toArray();
        avatarArray.forEach((avatar, index) => {
            if (this.maxVisibleAvatars && index >= this.maxVisibleAvatars) {
                this.renderer.removeChild(this.elementRef.nativeElement, avatar.elementRef.nativeElement);
            }
        });
        if (this.maxVisibleAvatars &&
            this.avatars.length - this.maxVisibleAvatars > 0) {
            this.createNodeOverflow(this.avatars.length - this.maxVisibleAvatars);
        }
    }
    createNodeOverflow(overflow) {
        const ngxSize = this.avatars.first.ngxSize;
        const nodeOverflow = document.createElement('div');
        nodeOverflow.classList.add('ngx-avatar');
        nodeOverflow.classList.add('ngx-avatar-circle');
        nodeOverflow.innerText = `+${overflow}`;
        this.setSizeNodeOverflow(nodeOverflow, ngxSize);
        this.elementRef.nativeElement.appendChild(nodeOverflow);
    }
    setSizeNodeOverflow(nodeOverflow, ngxSize) {
        if (typeof ngxSize === 'string') {
            switch (ngxSize) {
                case 'small':
                    nodeOverflow.classList.add('ngx-avatar-sm');
                    break;
                case 'default':
                    nodeOverflow.classList.add('ngx-avatar-df');
                    break;
                case 'large':
                    nodeOverflow.classList.add('ngx-avatar-lg');
                    break;
            }
        }
        if (typeof ngxSize === 'number') {
            const size = Number(ngxSize) / 16 + 'rem';
            this.renderer.setStyle(nodeOverflow, 'width', size);
            this.renderer.setStyle(nodeOverflow, 'height', size);
            this.renderer.setStyle(nodeOverflow, 'line-height', size);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AvatarGroupComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AvatarGroupComponent, isStandalone: true, selector: "ngx-avatar-group", inputs: { maxVisibleAvatars: "maxVisibleAvatars" }, host: { classAttribute: "ngx-avatar-group" }, queries: [{ propertyName: "avatars", predicate: AvatarComponent }], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AvatarGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-avatar-group',
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'ngx-avatar-group',
                    },
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { maxVisibleAvatars: [{
                type: Input
            }], avatars: [{
                type: ContentChildren,
                args: [AvatarComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25neC1lYWdsZS9hdmF0YXIvYXZhdGFyLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULGVBQWUsRUFFZixLQUFLLEdBS04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQVVyRCxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CLFlBQ1UsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsR0FBc0I7UUFGdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBUnZCLHNCQUFpQixHQUFrQixJQUFJLENBQUM7SUFTOUMsQ0FBQztJQUVKLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BDLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQ2hDLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFDRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQ2hEO1lBQ0EsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixDQUFDLFFBQWdCO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUMzQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEQsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxZQUFpQixFQUFFLE9BQVk7UUFDakQsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsUUFBUSxPQUFPLEVBQUU7Z0JBQ2YsS0FBSyxPQUFPO29CQUNWLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM1QyxNQUFNO2dCQUNSLEtBQUssU0FBUztvQkFDWixZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzVDLE1BQU07YUFDVDtTQUNGO1FBRUQsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOytHQW5FVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixzTUFHZCxlQUFlLDZCQVR0QiwyQkFBMkI7OzRGQU0xQixvQkFBb0I7a0JBUmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxrQkFBa0I7cUJBQzFCO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNqQjt5SkFFVSxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBR0MsT0FBTztzQkFEYixlQUFlO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF2YXRhckNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1hdmF0YXItZ3JvdXAnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICduZ3gtYXZhdGFyLWdyb3VwJyxcclxuICB9LFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdmF0YXJHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBJbnB1dCgpIG1heFZpc2libGVBdmF0YXJzOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihBdmF0YXJDb21wb25lbnQpXHJcbiAgcHVibGljIGF2YXRhcnMhOiBRdWVyeUxpc3Q8QXZhdGFyQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlVmlzaWJsZUF2YXRhcnMoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVWaXNpYmxlQXZhdGFycygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGF2YXRhckFycmF5ID0gdGhpcy5hdmF0YXJzLnRvQXJyYXkoKTtcclxuICAgIGF2YXRhckFycmF5LmZvckVhY2goKGF2YXRhciwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubWF4VmlzaWJsZUF2YXRhcnMgJiYgaW5kZXggPj0gdGhpcy5tYXhWaXNpYmxlQXZhdGFycykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgIGF2YXRhci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMubWF4VmlzaWJsZUF2YXRhcnMgJiZcclxuICAgICAgdGhpcy5hdmF0YXJzLmxlbmd0aCAtIHRoaXMubWF4VmlzaWJsZUF2YXRhcnMgPiAwXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jcmVhdGVOb2RlT3ZlcmZsb3codGhpcy5hdmF0YXJzLmxlbmd0aCAtIHRoaXMubWF4VmlzaWJsZUF2YXRhcnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTm9kZU92ZXJmbG93KG92ZXJmbG93OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG5neFNpemUgPSB0aGlzLmF2YXRhcnMuZmlyc3Qubmd4U2l6ZTtcclxuICAgIGNvbnN0IG5vZGVPdmVyZmxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm9kZU92ZXJmbG93LmNsYXNzTGlzdC5hZGQoJ25neC1hdmF0YXInKTtcclxuICAgIG5vZGVPdmVyZmxvdy5jbGFzc0xpc3QuYWRkKCduZ3gtYXZhdGFyLWNpcmNsZScpO1xyXG4gICAgbm9kZU92ZXJmbG93LmlubmVyVGV4dCA9IGArJHtvdmVyZmxvd31gO1xyXG4gICAgdGhpcy5zZXRTaXplTm9kZU92ZXJmbG93KG5vZGVPdmVyZmxvdywgbmd4U2l6ZSk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChub2RlT3ZlcmZsb3cpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2l6ZU5vZGVPdmVyZmxvdyhub2RlT3ZlcmZsb3c6IGFueSwgbmd4U2l6ZTogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIG5neFNpemUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHN3aXRjaCAobmd4U2l6ZSkge1xyXG4gICAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgICAgIG5vZGVPdmVyZmxvdy5jbGFzc0xpc3QuYWRkKCduZ3gtYXZhdGFyLXNtJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkZWZhdWx0JzpcclxuICAgICAgICAgIG5vZGVPdmVyZmxvdy5jbGFzc0xpc3QuYWRkKCduZ3gtYXZhdGFyLWRmJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdsYXJnZSc6XHJcbiAgICAgICAgICBub2RlT3ZlcmZsb3cuY2xhc3NMaXN0LmFkZCgnbmd4LWF2YXRhci1sZycpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG5neFNpemUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGNvbnN0IHNpemUgPSBOdW1iZXIobmd4U2l6ZSkgLyAxNiArICdyZW0nO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5vZGVPdmVyZmxvdywgJ3dpZHRoJywgc2l6ZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobm9kZU92ZXJmbG93LCAnaGVpZ2h0Jywgc2l6ZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobm9kZU92ZXJmbG93LCAnbGluZS1oZWlnaHQnLCBzaXplKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19