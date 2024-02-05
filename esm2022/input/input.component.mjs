import { Component, Input, Optional, Self, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const ngxSizeMap = {
    small: '2.5rem',
    medium: '3rem',
    large: '3.5rem',
};
const ngxRoundedOutlinedMap = {
    small: '2px',
    medium: '4px',
    large: '6px',
};
const ngxRoundedfilledMap = {
    small: '2px 2px 0px 0px',
    medium: '4px 4px 0px 0px',
    large: '6px 6px 0px 0px',
};
export class InputComponent {
    constructor(elementRef, cdr, ngControl) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.ngControl = ngControl;
        this.ngxSize = 'medium';
        this.ngxRounded = 'medium';
        this.ngxFillMode = 'filled';
        this.label = '';
        this.placeholder = '';
        this.onChange = () => { };
        this.onTouched = () => { };
        this.valStatus = true;
        this.disabled = false;
        this.inputFocus = false;
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    ngAfterViewInit() {
        this.initialize();
        //Se lanza el evento cuando se esta haciendo focus en el input
        this.inputRef.nativeElement.addEventListener('focus', () => {
            this.inputFocus = true;
            this.moveLabel();
        });
        //Se lanza el evento cuando se desenfoca del input
        this.inputRef.nativeElement.addEventListener('blur', () => {
            this.inputFocus = false;
            this.moveLabel();
            this.validate();
        });
    }
    ngOnChanges() {
        this.initialize();
        this.cdr.markForCheck();
    }
    initialize() {
        setTimeout(() => {
            this.ngControl.control?.setValue(this.value);
            this.containerRef.nativeElement.style.height = ngxSizeMap[this.ngxSize];
            this.containerRef.nativeElement.style.borderRadius =
                this.ngxFillMode === 'outlined'
                    ? ngxRoundedOutlinedMap[this.ngxRounded]
                    : ngxRoundedfilledMap[this.ngxRounded];
            this.labelRef.nativeElement.style.position = 'absolute';
            this.placeholder = this.inputRef.nativeElement.placeholder;
            this.moveLabel();
        });
    }
    writeValue(value) {
        this.value = value;
        this.moveLabel();
        this.onChange(this.value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    moveLabel() {
        if (this.labelRef) {
            const containerHeight = this.containerRef.nativeElement.offsetHeight;
            if (this.inputFocus || this.value) {
                const top = this.ngxFillMode === 'outlined' ? '-0.375rem ' : '0px';
                this.labelRef.nativeElement.style.top = top;
                this.labelRef.nativeElement.style.fontSize = '0.75rem';
                this.inputRef.nativeElement.placeholder = this.placeholder;
                this.buildBorderOutlined();
            }
            else {
                const top = `${(containerHeight * 0.3333) / 16}rem`;
                this.labelRef.nativeElement.style.top = top;
                this.labelRef.nativeElement.style.fontSize = '0.875rem';
                this.inputRef.nativeElement.placeholder = '';
                this.drawLineTopBorder();
            }
        }
    }
    onInputChange(event) {
        this.value = event.target.value;
        this.ngControl.control?.setValue(this.value);
        this.validate();
        this.buildBorderOutlined();
    }
    buildBorderOutlined() {
        if (this.ngxFillMode === 'outlined') {
            const containerWidth = this.containerRef.nativeElement.offsetWidth;
            const labelWidth = this.labelRef.nativeElement.offsetWidth;
            const percent = ((labelWidth + 10) / containerWidth) * 100;
            let color = this.valStatus // validacion
                ? this.inputFocus // si esta el input con el focus activo coloca el color que le corresponde
                    ? 'var(--ngx-comp-form-field-filled-border-color)'
                    : 'currentColor'
                : '#F44336';
            const background = `linear-gradient(to right, ${color} 5px, transparent 5px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
            const borderColor = `transparent ${color} ${color}`;
            this.containerRef.nativeElement.style.borderColor = borderColor;
            this.containerRef.nativeElement.style.background = background;
        }
    }
    drawLineTopBorder() {
        const background = this.ngxFillMode === 'outlined'
            ? 'linear-gradient(to right, transparent 0%, currentColor 0%) no-repeat top/100% 1px'
            : 'none';
        const borderColor = `transparent currentColor currentColor`;
        this.containerRef.nativeElement.style.borderColor = borderColor;
        this.containerRef.nativeElement.style.background = background;
    }
    validate() {
        this.valStatus =
            this.ngControl.status?.toLowerCase() === 'valid' ? true : false;
        this.containerRef.nativeElement.style.color = this.valStatus
            ? 'currentColor'
            : '#F44336';
        this.inputRef.nativeElement.style.color = this.valStatus
            ? 'var(--ngx-comp-form-field-filled-border-color)'
            : '#F44336';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InputComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: InputComponent, isStandalone: true, selector: "ngx-input", inputs: { ngxSize: "ngxSize", ngxRounded: "ngxRounded", ngxFillMode: "ngxFillMode", label: "label", placeholder: "placeholder" }, viewQueries: [{ propertyName: "containerRef", first: true, predicate: ["input_container"], descendants: true }, { propertyName: "labelRef", first: true, predicate: ["input_label"], descendants: true }, { propertyName: "inputRef", first: true, predicate: ["input"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <div
      #input_container
      class="ngx-input"
      [class.ngx-input-filled]="ngxFillMode === 'filled'"
      [class.ngx-input-outlined]="ngxFillMode === 'outlined'"
    >
      <label #input_label class="ngx-input-label">{{ label }}</label>
      <input
        #input
        class="ngx-nat-input"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        (input)="onInputChange($event)"
      />
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-input',
                    template: `
    <div
      #input_container
      class="ngx-input"
      [class.ngx-input-filled]="ngxFillMode === 'filled'"
      [class.ngx-input-outlined]="ngxFillMode === 'outlined'"
    >
      <label #input_label class="ngx-input-label">{{ label }}</label>
      <input
        #input
        class="ngx-nat-input"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        (input)="onInputChange($event)"
      />
    </div>
  `,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { ngxSize: [{
                type: Input
            }], ngxRounded: [{
                type: Input
            }], ngxFillMode: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], containerRef: [{
                type: ViewChild,
                args: ['input_container']
            }], labelRef: [{
                type: ViewChild,
                args: ['input_label']
            }], inputRef: [{
                type: ViewChild,
                args: ['input']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVhZ2xlL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUVULEtBQUssRUFFTCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQzs7O0FBSXZCLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLEtBQUssRUFBRSxRQUFRO0lBQ2YsTUFBTSxFQUFFLE1BQU07SUFDZCxLQUFLLEVBQUUsUUFBUTtDQUNoQixDQUFDO0FBRUYsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsS0FBSztJQUNaLE1BQU0sRUFBRSxLQUFLO0lBQ2IsS0FBSyxFQUFFLEtBQUs7Q0FDYixDQUFDO0FBRUYsTUFBTSxtQkFBbUIsR0FBRztJQUMxQixLQUFLLEVBQUUsaUJBQWlCO0lBQ3hCLE1BQU0sRUFBRSxpQkFBaUI7SUFDekIsS0FBSyxFQUFFLGlCQUFpQjtDQUN6QixDQUFDO0FBd0JGLE1BQU0sT0FBTyxjQUFjO0lBb0J6QixZQUNTLFVBQXNCLEVBQ3JCLEdBQXNCLEVBQ0gsU0FBb0I7UUFGeEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNILGNBQVMsR0FBVCxTQUFTLENBQVc7UUFwQnhDLFlBQU8sR0FBWSxRQUFRLENBQUM7UUFDNUIsZUFBVSxHQUFlLFFBQVEsQ0FBQztRQUNsQyxnQkFBVyxHQUFnQixRQUFRLENBQUM7UUFDcEMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQU1sQyxhQUFRLEdBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBUSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFFMUIsY0FBUyxHQUFZLElBQUksQ0FB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LFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUztZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUztZQUMxRCxDQUFDLENBQUMsY0FBYztZQUNoQixDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUztZQUN0RCxDQUFDLENBQUMsZ0RBQWdEO1lBQ2xELENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEIsQ0FBQzsrR0FqSlUsY0FBYzttR0FBZCxjQUFjLDJmQXBCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7OzRGQUdVLGNBQWM7a0JBdEIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBd0JJLFFBQVE7OzBCQUFJLElBQUk7NENBcEJWLE9BQU87c0JBQWYsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRXdCLFlBQVk7c0JBQXpDLFNBQVM7dUJBQUMsaUJBQWlCO2dCQUNGLFFBQVE7c0JBQWpDLFNBQVM7dUJBQUMsYUFBYTtnQkFDSixRQUFRO3NCQUEzQixTQUFTO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNlbGYsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hGaWxsTW9kZSwgTmd4Um91bmRlZCwgTmd4U2l6ZSB9IGZyb20gJy4vdHlwaW5ncyc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5jb25zdCBuZ3hTaXplTWFwID0ge1xyXG4gIHNtYWxsOiAnMi41cmVtJyxcclxuICBtZWRpdW06ICczcmVtJyxcclxuICBsYXJnZTogJzMuNXJlbScsXHJcbn07XHJcblxyXG5jb25zdCBuZ3hSb3VuZGVkT3V0bGluZWRNYXAgPSB7XHJcbiAgc21hbGw6ICcycHgnLFxyXG4gIG1lZGl1bTogJzRweCcsXHJcbiAgbGFyZ2U6ICc2cHgnLFxyXG59O1xyXG5cclxuY29uc3Qgbmd4Um91bmRlZGZpbGxlZE1hcCA9IHtcclxuICBzbWFsbDogJzJweCAycHggMHB4IDBweCcsXHJcbiAgbWVkaXVtOiAnNHB4IDRweCAwcHggMHB4JyxcclxuICBsYXJnZTogJzZweCA2cHggMHB4IDBweCcsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1pbnB1dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXZcclxuICAgICAgI2lucHV0X2NvbnRhaW5lclxyXG4gICAgICBjbGFzcz1cIm5neC1pbnB1dFwiXHJcbiAgICAgIFtjbGFzcy5uZ3gtaW5wdXQtZmlsbGVkXT1cIm5neEZpbGxNb2RlID09PSAnZmlsbGVkJ1wiXHJcbiAgICAgIFtjbGFzcy5uZ3gtaW5wdXQtb3V0bGluZWRdPVwibmd4RmlsbE1vZGUgPT09ICdvdXRsaW5lZCdcIlxyXG4gICAgPlxyXG4gICAgICA8bGFiZWwgI2lucHV0X2xhYmVsIGNsYXNzPVwibmd4LWlucHV0LWxhYmVsXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICAjaW5wdXRcclxuICAgICAgICBjbGFzcz1cIm5neC1uYXQtaW5wdXRcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIChpbnB1dCk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXNcclxue1xyXG4gIEBJbnB1dCgpIG5neFNpemU6IE5neFNpemUgPSAnbWVkaXVtJztcclxuICBASW5wdXQoKSBuZ3hSb3VuZGVkOiBOZ3hSb3VuZGVkID0gJ21lZGl1bSc7XHJcbiAgQElucHV0KCkgbmd4RmlsbE1vZGU6IE5neEZpbGxNb2RlID0gJ2ZpbGxlZCc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRfY29udGFpbmVyJykgY29udGFpbmVyUmVmITogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdpbnB1dF9sYWJlbCcpIGxhYmVsUmVmITogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0UmVmITogRWxlbWVudFJlZjtcclxuXHJcbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHt9O1xyXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge307XHJcbiAgdmFsdWU6IGFueTtcclxuICB2YWxTdGF0dXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaW5wdXRGb2N1cyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2xcclxuICApIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgLy9TZSBsYW56YSBlbCBldmVudG8gY3VhbmRvIHNlIGVzdGEgaGFjaWVuZG8gZm9jdXMgZW4gZWwgaW5wdXRcclxuICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgdGhpcy5pbnB1dEZvY3VzID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tb3ZlTGFiZWwoKTtcclxuICAgIH0pO1xyXG4gICAgLy9TZSBsYW56YSBlbCBldmVudG8gY3VhbmRvIHNlIGRlc2VuZm9jYSBkZWwgaW5wdXRcclxuICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmlucHV0Rm9jdXMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5tb3ZlTGFiZWwoKTtcclxuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2w/LnNldFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IG5neFNpemVNYXBbdGhpcy5uZ3hTaXplXTtcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPVxyXG4gICAgICAgIHRoaXMubmd4RmlsbE1vZGUgPT09ICdvdXRsaW5lZCdcclxuICAgICAgICAgID8gbmd4Um91bmRlZE91dGxpbmVkTWFwW3RoaXMubmd4Um91bmRlZF1cclxuICAgICAgICAgIDogbmd4Um91bmRlZGZpbGxlZE1hcFt0aGlzLm5neFJvdW5kZWRdO1xyXG4gICAgICB0aGlzLmxhYmVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyO1xyXG4gICAgICB0aGlzLm1vdmVMYWJlbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMubW92ZUxhYmVsKCk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIG1vdmVMYWJlbCgpIHtcclxuICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBpZiAodGhpcy5pbnB1dEZvY3VzIHx8IHRoaXMudmFsdWUpIHtcclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLm5neEZpbGxNb2RlID09PSAnb3V0bGluZWQnID8gJy0wLjM3NXJlbSAnIDogJzBweCc7XHJcbiAgICAgICAgdGhpcy5sYWJlbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHRvcDtcclxuICAgICAgICB0aGlzLmxhYmVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMC43NXJlbSc7XHJcbiAgICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcclxuICAgICAgICB0aGlzLmJ1aWxkQm9yZGVyT3V0bGluZWQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB0b3AgPSBgJHsoY29udGFpbmVySGVpZ2h0ICogMC4zMzMzKSAvIDE2fXJlbWA7XHJcbiAgICAgICAgdGhpcy5sYWJlbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHRvcDtcclxuICAgICAgICB0aGlzLmxhYmVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMC44NzVyZW0nO1xyXG4gICAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgICAgIHRoaXMuZHJhd0xpbmVUb3BCb3JkZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbD8uc2V0VmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB0aGlzLmJ1aWxkQm9yZGVyT3V0bGluZWQoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkQm9yZGVyT3V0bGluZWQoKSB7XHJcbiAgICBpZiAodGhpcy5uZ3hGaWxsTW9kZSA9PT0gJ291dGxpbmVkJykge1xyXG4gICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmxhYmVsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSAoKGxhYmVsV2lkdGggKyAxMCkgLyBjb250YWluZXJXaWR0aCkgKiAxMDA7XHJcbiAgICAgIGxldCBjb2xvciA9IHRoaXMudmFsU3RhdHVzIC8vIHZhbGlkYWNpb25cclxuICAgICAgICA/IHRoaXMuaW5wdXRGb2N1cyAvLyBzaSBlc3RhIGVsIGlucHV0IGNvbiBlbCBmb2N1cyBhY3Rpdm8gY29sb2NhIGVsIGNvbG9yIHF1ZSBsZSBjb3JyZXNwb25kZVxyXG4gICAgICAgICAgPyAndmFyKC0tbmd4LWNvbXAtZm9ybS1maWVsZC1maWxsZWQtYm9yZGVyLWNvbG9yKSdcclxuICAgICAgICAgIDogJ2N1cnJlbnRDb2xvcidcclxuICAgICAgICA6ICcjRjQ0MzM2JztcclxuICAgICAgY29uc3QgYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7Y29sb3J9IDVweCwgdHJhbnNwYXJlbnQgNXB4LCB0cmFuc3BhcmVudCAke3BlcmNlbnR9JSwgJHtjb2xvcn0gJHtwZXJjZW50fSUpIG5vLXJlcGVhdCB0b3AvMTAwJSAxcHhgO1xyXG4gICAgICBjb25zdCBib3JkZXJDb2xvciA9IGB0cmFuc3BhcmVudCAke2NvbG9yfSAke2NvbG9yfWA7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdMaW5lVG9wQm9yZGVyKCkge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9XHJcbiAgICAgIHRoaXMubmd4RmlsbE1vZGUgPT09ICdvdXRsaW5lZCdcclxuICAgICAgICA/ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAlLCBjdXJyZW50Q29sb3IgMCUpIG5vLXJlcGVhdCB0b3AvMTAwJSAxcHgnXHJcbiAgICAgICAgOiAnbm9uZSc7XHJcbiAgICBjb25zdCBib3JkZXJDb2xvciA9IGB0cmFuc3BhcmVudCBjdXJyZW50Q29sb3IgY3VycmVudENvbG9yYDtcclxuICAgIHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcclxuICAgIHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZSgpIHtcclxuICAgIHRoaXMudmFsU3RhdHVzID1cclxuICAgICAgdGhpcy5uZ0NvbnRyb2wuc3RhdHVzPy50b0xvd2VyQ2FzZSgpID09PSAndmFsaWQnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMudmFsU3RhdHVzXHJcbiAgICAgID8gJ2N1cnJlbnRDb2xvcidcclxuICAgICAgOiAnI0Y0NDMzNic7XHJcblxyXG4gICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy52YWxTdGF0dXNcclxuICAgICAgPyAndmFyKC0tbmd4LWNvbXAtZm9ybS1maWVsZC1maWxsZWQtYm9yZGVyLWNvbG9yKSdcclxuICAgICAgOiAnI0Y0NDMzNic7XHJcbiAgfVxyXG59XHJcbiJdfQ==