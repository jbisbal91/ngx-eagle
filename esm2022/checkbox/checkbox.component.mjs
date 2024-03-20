import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, forwardRef, } from '@angular/core';
import { Guid } from 'ngx-eagle/core/services';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class CheckboxComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.checked = false;
        this.indeterminate = false;
        this.ngxColor = '#1890FF';
        this.ngxSize = 'default';
        this.disabled = false;
        this.onChecked = new EventEmitter();
        this.onChange = () => {
            this.onChecked.emit(this.checked);
        };
        this.onTouched = () => { };
        this.id = Guid.create();
        this.disabled = elementRef.nativeElement.hasAttribute('disabled');
    }
    ngAfterViewChecked() {
        this.setColor();
    }
    ngAfterViewInit() {
        this.setColor();
        if (typeof this.ngxSize === 'number') {
            this.setSizeInNumber();
        }
    }
    setSizeInNumber() {
        const size = Number(this.ngxSize) / 16 + 'rem';
        this.renderer.setStyle(this.inputCheckboxRef.nativeElement, 'width', size);
        this.renderer.setStyle(this.inputCheckboxRef.nativeElement, 'height', size);
    }
    eventChecked(event) {
        const target = event.target;
        if (!this.disabled) {
            this.checked = target.checked;
            this.writeValue(this.checked);
        }
    }
    setColor() {
        if (!this.ngxColor) {
            this.ngxColor = '#1890FF';
        }
        if (this.inputCheckboxRef &&
            (this.inputCheckboxRef.nativeElement.indeterminate ||
                this.inputCheckboxRef.nativeElement.checked)) {
            this.renderer.setStyle(this.inputCheckboxRef.nativeElement, 'background-color', this.disabled ? '#9E9E9E' : this.ngxColor);
        }
        else {
            this.renderer.setStyle(this.inputCheckboxRef.nativeElement, 'background-color', 'transparent');
        }
    }
    writeValue(checked) {
        this.checked = checked;
        this.onChange(this.checked);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CheckboxComponent, isStandalone: true, selector: "ngx-checkbox", inputs: { checked: "checked", indeterminate: "indeterminate", ngxColor: "ngxColor", ngxSize: "ngxSize" }, outputs: { onChecked: "onChecked" }, host: { properties: { "class.ngx-checkbox-sm": "ngxSize === 'small'", "class.ngx-checkbox-df": "ngxSize === 'default'", "class.ngx-checkbox-lg": "ngxSize === 'large'" }, classAttribute: "ngx-checkbox" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CheckboxComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "inputCheckboxRef", first: true, predicate: ["input_checkbox"], descendants: true }], ngImport: i0, template: `
    <input
      #input_checkbox
      [id]="id"
      type="checkbox"
      [indeterminate]="indeterminate"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-checkbox',
                    template: `
    <input
      #input_checkbox
      [id]="id"
      type="checkbox"
      [indeterminate]="indeterminate"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `,
                    host: {
                        class: 'ngx-checkbox',
                        '[class.ngx-checkbox-sm]': `ngxSize === 'small'`,
                        '[class.ngx-checkbox-df]': `ngxSize === 'default'`,
                        '[class.ngx-checkbox-lg]': `ngxSize === 'large'`,
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CheckboxComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { checked: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], ngxColor: [{
                type: Input
            }], ngxSize: [{
                type: Input
            }], inputCheckboxRef: [{
                type: ViewChild,
                args: ['input_checkbox']
            }], onChecked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvQyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBaUN6RSxNQUFNLE9BQU8saUJBQWlCO0lBb0I1QixZQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBakI5RCxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGFBQVEsR0FBOEIsU0FBUyxDQUFDO1FBQ2hELFlBQU8sR0FBcUIsU0FBUyxDQUFDO1FBSS9DLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFaEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDbEQsYUFBUSxHQUFRLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO1FBQ0YsY0FBUyxHQUFRLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUVuQixPQUFFLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBR2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELGtCQUFrQjtRQUNo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RSxxQkFBcUI7d0JBQ2hELHlCQUF5QixFQUFFLHVCQUF1Qjt3QkFDbEQseUJBQXlCLEVBQUUscUJBQXFCO3FCQUNqRDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUM7NEJBQ2hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7eUhBSVUsT0FBTztzQkFBZixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBRXVCLGdCQUFnQjtzQkFBNUMsU0FBUzt1QkFBQyxnQkFBZ0I7Z0JBSWpCLFNBQVM7c0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbiAgZm9yd2FyZFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJ25neC1lYWdsZS9jb3JlL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ3hTaXplIH0gZnJvbSAnLi90eXBpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0XHJcbiAgICAgICNpbnB1dF9jaGVja2JveFxyXG4gICAgICBbaWRdPVwiaWRcIlxyXG4gICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIChjaGFuZ2UpPVwiZXZlbnRDaGVja2VkKCRldmVudClcIlxyXG4gICAgLz5cclxuICAgIDxsYWJlbCBbZm9yXT1cImlkXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbGFiZWw+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ25neC1jaGVja2JveCcsXHJcbiAgICAnW2NsYXNzLm5neC1jaGVja2JveC1zbV0nOiBgbmd4U2l6ZSA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1jaGVja2JveC1kZl0nOiBgbmd4U2l6ZSA9PT0gJ2RlZmF1bHQnYCxcclxuICAgICdbY2xhc3Mubmd4LWNoZWNrYm94LWxnXSc6IGBuZ3hTaXplID09PSAnbGFyZ2UnYCxcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbntcclxuICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG5neENvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsID0gJyMxODkwRkYnO1xyXG4gIEBJbnB1dCgpIG5neFNpemU6IE5neFNpemUgfCBudW1iZXIgPSAnZGVmYXVsdCc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0X2NoZWNrYm94JykgaW5wdXRDaGVja2JveFJlZiE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBvbkNoZWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHtcclxuICAgIHRoaXMub25DaGVja2VkLmVtaXQodGhpcy5jaGVja2VkKTtcclxuICB9O1xyXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge307XHJcblxyXG4gIHB1YmxpYyBpZDogc3RyaW5nID0gR3VpZC5jcmVhdGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDb2xvcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDb2xvcigpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm5neFNpemUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMuc2V0U2l6ZUluTnVtYmVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTaXplSW5OdW1iZXIoKSB7XHJcbiAgICBjb25zdCBzaXplID0gTnVtYmVyKHRoaXMubmd4U2l6ZSkgLyAxNiArICdyZW0nO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmlucHV0Q2hlY2tib3hSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgc2l6ZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5wdXRDaGVja2JveFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jywgc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBldmVudENoZWNrZWQoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZDtcclxuICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuY2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDb2xvcigpIHtcclxuICAgIGlmICghdGhpcy5uZ3hDb2xvcikge1xyXG4gICAgICB0aGlzLm5neENvbG9yID0gJyMxODkwRkYnO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlucHV0Q2hlY2tib3hSZWYgJiZcclxuICAgICAgKHRoaXMuaW5wdXRDaGVja2JveFJlZi5uYXRpdmVFbGVtZW50LmluZGV0ZXJtaW5hdGUgfHxcclxuICAgICAgICB0aGlzLmlucHV0Q2hlY2tib3hSZWYubmF0aXZlRWxlbWVudC5jaGVja2VkKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5pbnB1dENoZWNrYm94UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPyAnIzlFOUU5RScgOiB0aGlzLm5neENvbG9yXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuaW5wdXRDaGVja2JveFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJyxcclxuICAgICAgICAndHJhbnNwYXJlbnQnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gIH1cclxufVxyXG4iXX0=