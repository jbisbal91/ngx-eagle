import { NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-eagle/core/services";
export class TagComponent {
    constructor(renderer, elementRef, colorConverter) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colorConverter = colorConverter;
        this.ngxBordered = true;
        this.ngxChecked = false;
        this.ngxMode = 'default';
        this.ngxOnClose = new EventEmitter();
        this.ngxCheckedChange = new EventEmitter();
        this.backgroundColor = '#1890FF';
        this.color = '#ffffff';
    }
    ngOnInit() {
        this.setTagColor();
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('ngxColor')) {
            const newColor = changes['ngxColor'].currentValue;
            if (typeof newColor === 'string') {
                const { backgroundColor, overlayColor } = this.colorConverter.contrastingColors(newColor);
                this.backgroundColor = backgroundColor;
                this.color = overlayColor;
                this.setTagColor();
            }
            if (typeof newColor === 'object') {
                this.backgroundColor = newColor.backgroundColor;
                this.color = newColor.overlayColor;
                this.setTagColor();
            }
        }
    }
    updateCheckedStatus() {
        if (this.ngxMode === 'checkable') {
            this.ngxChecked = !this.ngxChecked;
            this.setTagColor();
            this.ngxCheckedChange.emit(this.ngxChecked);
        }
    }
    setTagColor() {
        let bgColor = '';
        let color = '';
        let borderColor = '';
        switch (this.ngxMode) {
            case 'default':
                bgColor = this.backgroundColor;
                color = this.color;
                break;
            case 'checkable':
                bgColor = this.ngxChecked ? this.backgroundColor : 'transparent';
                color = this.ngxChecked ? this.color : 'currentColor';
                break;
            case 'closeable':
                bgColor = this.backgroundColor;
                color = this.color;
                break;
        }
        borderColor = this.color === '#ffffff' ? 'currentColor' : this.color;
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', bgColor);
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', this.ngxBordered ? borderColor : 'transparent');
    }
    closeTag(e) {
        this.ngxOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.ColorConverter }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: TagComponent, isStandalone: true, selector: "ngx-tag", inputs: { ngxBordered: ["ngxBordered", "ngxBordered", booleanAttribute], ngxColor: "ngxColor", ngxChecked: ["ngxChecked", "ngxChecked", booleanAttribute], ngxMode: "ngxMode" }, outputs: { ngxOnClose: "ngxOnClose", ngxCheckedChange: "ngxCheckedChange" }, host: { listeners: { "click": "updateCheckedStatus()" }, properties: { "class.ngx-tag-checkable": "ngxMode === 'checkable'" }, classAttribute: "ngx-tag" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
    <svg
      class="ngx-tag-close"
      *ngIf="ngxMode === 'closeable'"
      (click)="closeTag($event)"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 -960 960 960"
      width="14"
      fill="currentColor"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-tag',
                    template: `
    <ng-content></ng-content>
    <svg
      class="ngx-tag-close"
      *ngIf="ngxMode === 'closeable'"
      (click)="closeTag($event)"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 -960 960 960"
      width="14"
      fill="currentColor"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  `,
                    host: {
                        class: 'ngx-tag',
                        '[class.ngx-tag-checkable]': `ngxMode === 'checkable'`,
                        '(click)': 'updateCheckedStatus()',
                    },
                    standalone: true,
                    imports: [NgStyle, NgIf],
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.ColorConverter }]; }, propDecorators: { ngxBordered: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxColor: [{
                type: Input
            }], ngxChecked: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxMode: [{
                type: Input
            }], ngxOnClose: [{
                type: Output
            }], ngxCheckedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25neC1lYWdsZS90YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBR04sZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDOzs7QUFnQ3ZCLE1BQU0sT0FBTyxZQUFZO0lBWXZCLFlBQ1UsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsY0FBOEI7UUFGOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWRBLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDM0QsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUVuQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWxFLG9CQUFlLEdBQVcsU0FBUyxDQUFDO1FBQ3BDLFVBQUssR0FBVyxTQUFTLENBQUM7SUFNdkIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUNsRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsTUFBTSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsR0FDckMsSUFBSSxDQUFDLGNBQWMs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R0FDSCxnQkFBZ0Isa0VBRWhCLGdCQUFnQiwrU0E1QjFCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JULDREQU9rQixJQUFJOzs0RkFFWixZQUFZO2tCQTNCeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JUO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsMkJBQTJCLEVBQUUseUJBQXlCO3dCQUN0RCxTQUFTLEVBQUUsdUJBQXVCO3FCQUNuQztvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFDekI7c0pBRXlDLFdBQVc7c0JBQWxELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQzdCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ2tDLFVBQVU7c0JBQWpELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQzdCLE9BQU87c0JBQWYsS0FBSztnQkFFYSxVQUFVO3NCQUE1QixNQUFNO2dCQUNZLGdCQUFnQjtzQkFBbEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYsIE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBib29sZWFuQXR0cmlidXRlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hNb2RlIH0gZnJvbSAnLi90eXBpbmdzJztcclxuaW1wb3J0IHsgQ29sb3JDb252ZXJ0ZXIgfSBmcm9tICduZ3gtZWFnbGUvY29yZS9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IENvbG9yQ29udHJhc3QgfSBmcm9tICduZ3gtZWFnbGUvY29yZS90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC10YWcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8c3ZnXHJcbiAgICAgIGNsYXNzPVwibmd4LXRhZy1jbG9zZVwiXHJcbiAgICAgICpuZ0lmPVwibmd4TW9kZSA9PT0gJ2Nsb3NlYWJsZSdcIlxyXG4gICAgICAoY2xpY2spPVwiY2xvc2VUYWcoJGV2ZW50KVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICBoZWlnaHQ9XCIxNFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiXHJcbiAgICAgIHdpZHRoPVwiMTRcIlxyXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwibTI1Ni0yMDAtNTYtNTYgMjI0LTIyNC0yMjQtMjI0IDU2LTU2IDIyNCAyMjQgMjI0LTIyNCA1NiA1Ni0yMjQgMjI0IDIyNCAyMjQtNTYgNTYtMjI0LTIyNC0yMjQgMjI0WlwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LXRhZycsXHJcbiAgICAnW2NsYXNzLm5neC10YWctY2hlY2thYmxlXSc6IGBuZ3hNb2RlID09PSAnY2hlY2thYmxlJ2AsXHJcbiAgICAnKGNsaWNrKSc6ICd1cGRhdGVDaGVja2VkU3RhdHVzKCknLFxyXG4gIH0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmdTdHlsZSwgTmdJZl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIG5neEJvcmRlcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuZ3hDb2xvciE6IENvbG9yQ29udHJhc3QgfCBzdHJpbmc7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIG5neENoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBuZ3hNb2RlOiBOZ3hNb2RlID0gJ2RlZmF1bHQnO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbmd4T25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbmd4Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAnIzE4OTBGRic7XHJcbiAgY29sb3I6IHN0cmluZyA9ICcjZmZmZmZmJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNvbG9yQ29udmVydGVyOiBDb2xvckNvbnZlcnRlclxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFRhZ0NvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbmd4Q29sb3InKSkge1xyXG4gICAgICBjb25zdCBuZXdDb2xvciA9IGNoYW5nZXNbJ25neENvbG9yJ10uY3VycmVudFZhbHVlO1xyXG4gICAgICBpZiAodHlwZW9mIG5ld0NvbG9yID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNvbnN0IHsgYmFja2dyb3VuZENvbG9yLCBvdmVybGF5Q29sb3IgfSA9XHJcbiAgICAgICAgICB0aGlzLmNvbG9yQ29udmVydGVyLmNvbnRyYXN0aW5nQ29sb3JzKG5ld0NvbG9yKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gb3ZlcmxheUNvbG9yO1xyXG4gICAgICAgIHRoaXMuc2V0VGFnQ29sb3IoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIG5ld0NvbG9yID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gbmV3Q29sb3IuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXdDb2xvci5vdmVybGF5Q29sb3I7XHJcbiAgICAgICAgdGhpcy5zZXRUYWdDb2xvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2VkU3RhdHVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubmd4TW9kZSA9PT0gJ2NoZWNrYWJsZScpIHtcclxuICAgICAgdGhpcy5uZ3hDaGVja2VkID0gIXRoaXMubmd4Q2hlY2tlZDtcclxuICAgICAgdGhpcy5zZXRUYWdDb2xvcigpO1xyXG4gICAgICB0aGlzLm5neENoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLm5neENoZWNrZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VGFnQ29sb3IoKSB7XHJcbiAgICBsZXQgYmdDb2xvciA9ICcnO1xyXG4gICAgbGV0IGNvbG9yID0gJyc7XHJcbiAgICBsZXQgYm9yZGVyQ29sb3IgPSAnJztcclxuICAgIHN3aXRjaCAodGhpcy5uZ3hNb2RlKSB7XHJcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxyXG4gICAgICAgIGJnQ29sb3IgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICBjb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NoZWNrYWJsZSc6XHJcbiAgICAgICAgYmdDb2xvciA9IHRoaXMubmd4Q2hlY2tlZCA/IHRoaXMuYmFja2dyb3VuZENvbG9yIDogJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBjb2xvciA9IHRoaXMubmd4Q2hlY2tlZCA/IHRoaXMuY29sb3IgOiAnY3VycmVudENvbG9yJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xvc2VhYmxlJzpcclxuICAgICAgICBiZ0NvbG9yID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgYm9yZGVyQ29sb3IgPSB0aGlzLmNvbG9yID09PSAnI2ZmZmZmZicgPyAnY3VycmVudENvbG9yJyA6IHRoaXMuY29sb3I7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxyXG4gICAgICBiZ0NvbG9yXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbG9yJywgY29sb3IpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdib3JkZXItY29sb3InLFxyXG4gICAgICB0aGlzLm5neEJvcmRlcmVkID8gYm9yZGVyQ29sb3IgOiAndHJhbnNwYXJlbnQnXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VUYWcoZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ3hPbkNsb3NlLmVtaXQoZSk7XHJcbiAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19