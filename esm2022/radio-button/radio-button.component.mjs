import { Component, EventEmitter, Host, Input, Optional, Output, ViewChild, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Guid } from 'ngx-eagle/core/services';
import * as i0 from "@angular/core";
import * as i1 from "./radio-group.component";
export class RadioButtonComponent {
    constructor(elementRef, renderer, radioGroupComp) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.radioGroupComp = radioGroupComp;
        this.id = Guid.create();
        this.checked = false;
        this.disabled = false;
        this.ngxColor = '#1890FF';
        this.ngxValue = '';
        this.ngxSize = 'default';
        this.onclick = new EventEmitter();
        this.subscription = new Subscription();
        this.onChange = () => { };
        this.onTouched = () => { };
        this.disabled = elementRef.nativeElement.hasAttribute('disabled');
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    eventChecked(event) {
        const target = event.target;
        if (!this.disabled) {
            this.checked = target.checked;
            this.writeValue(this.checked);
            this.onClick();
        }
    }
    onClick() {
        let rb = {
            id: this.id,
            checked: this.checked,
            disabled: this.disabled,
            ngxColor: this.ngxColor,
            ngxValue: this.ngxValue,
        };
        this.onclick.emit(rb);
    }
    ngAfterViewChecked() {
        this.setAccentColor();
    }
    ngAfterViewInit() {
        this.setAccentColor();
        if (typeof this.ngxSize === 'number') {
            this.setSizeInNumber();
        }
        this.subscription.add(this.radioGroupComp?.currentRadioChecked$.subscribe((currentRadioChecked) => {
            this.onChange(currentRadioChecked.id === this.id ? true : false);
        }));
    }
    setSizeInNumber() {
        const size = Number(this.ngxSize) / 16 + 'rem';
        this.renderer.setStyle(this.inputRadioRef.nativeElement, 'width', size);
        this.renderer.setStyle(this.inputRadioRef.nativeElement, 'height', size);
    }
    writeValue(value) {
        this.checked = value;
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
    setAccentColor() {
        this.renderer.setStyle(this.inputRadioRef.nativeElement, 'accent-color', this.disabled ? '#9E9E9E' : this.ngxColor);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.RadioGroupComponent, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RadioButtonComponent, isStandalone: true, selector: "ngx-radio-button", inputs: { checked: "checked", ngxColor: "ngxColor", ngxValue: "ngxValue", ngxSize: "ngxSize" }, outputs: { onclick: "onclick" }, host: { properties: { "class.ngx-radio-button-sm": "ngxSize === 'small'", "class.ngx-radio-button-df": "ngxSize === 'default'", "class.ngx-radio-button-lg": "ngxSize === 'large'" }, classAttribute: "ngx-radio-button" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioButtonComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "inputRadioRef", first: true, predicate: ["input_radio_button"], descendants: true }], ngImport: i0, template: `
    <input
      #input_radio_button
      [id]="id"
      type="radio"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-radio-button',
                    template: `
    <input
      #input_radio_button
      [id]="id"
      type="radio"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `,
                    host: {
                        class: 'ngx-radio-button',
                        '[class.ngx-radio-button-sm]': `ngxSize === 'small'`,
                        '[class.ngx-radio-button-df]': `ngxSize === 'default'`,
                        '[class.ngx-radio-button-lg]': `ngxSize === 'large'`,
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioButtonComponent),
                            multi: true,
                        },
                    ],
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.RadioGroupComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }]; }, propDecorators: { checked: [{
                type: Input
            }], ngxColor: [{
                type: Input
            }], ngxValue: [{
                type: Input
            }], ngxSize: [{
                type: Input
            }], onclick: [{
                type: Output
            }], inputRadioRef: [{
                type: ViewChild,
                args: ['input_radio_button']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25neC1lYWdsZS9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBRU4sU0FBUyxFQUNULFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQThCL0MsTUFBTSxPQUFPLG9CQUFvQjtJQXdCL0IsWUFDVSxVQUFzQixFQUN0QixRQUFtQixFQUNBLGNBQW1DO1FBRnRELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNBLG1CQUFjLEdBQWQsY0FBYyxDQUFxQjtRQW5CekQsT0FBRSxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUN0QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBcUIsU0FBUyxDQUFDO1FBQ3JDLFlBQU8sR0FDZixJQUFJLFlBQVksRUFBZSxDQUFDO1FBSTFCLGlCQUFZLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEQsYUFBUSxHQUFRLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBT3hCLElBQUksQ0FBQyxRQUFRLEdB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Q0FDMUMsQ0FBQztJQUNKLENBQUM7K0dBdkdVLG9CQUFvQjttR0FBcEIsb0JBQW9CLDRaQVRwQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ25ELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwrSUF2QlM7Ozs7Ozs7Ozs7R0FVVDs7NEZBZ0JVLG9CQUFvQjtrQkE1QmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxrQkFBa0I7d0JBQ3pCLDZCQUE2QixFQUFFLHFCQUFxQjt3QkFDcEQsNkJBQTZCLEVBQUUsdUJBQXVCO3dCQUN0RCw2QkFBNkIsRUFBRSxxQkFBcUI7cUJBQ3JEO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQzs0QkFDbkQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkE0QkksUUFBUTs7MEJBQUksSUFBSTs0Q0FsQkgsT0FBTztzQkFBdEIsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNJLE9BQU87c0JBQWhCLE1BQU07Z0JBRzBCLGFBQWE7c0JBQTdDLFNBQVM7dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIGZvcndhcmRSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b24gfSBmcm9tICcuL3JhZGlvLWJ1dHRvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBSYWRpb0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTmd4U2l6ZSB9IGZyb20gJy4vdHlwaW5ncyc7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tICduZ3gtZWFnbGUvY29yZS9zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1yYWRpby1idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aW5wdXRcclxuICAgICAgI2lucHV0X3JhZGlvX2J1dHRvblxyXG4gICAgICBbaWRdPVwiaWRcIlxyXG4gICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgKGNoYW5nZSk9XCJldmVudENoZWNrZWQoJGV2ZW50KVwiXHJcbiAgICAvPlxyXG4gICAgPGxhYmVsIFtmb3JdPVwiaWRcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9sYWJlbD5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LXJhZGlvLWJ1dHRvbicsXHJcbiAgICAnW2NsYXNzLm5neC1yYWRpby1idXR0b24tc21dJzogYG5neFNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcmFkaW8tYnV0dG9uLWRmXSc6IGBuZ3hTaXplID09PSAnZGVmYXVsdCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcmFkaW8tYnV0dG9uLWxnXSc6IGBuZ3hTaXplID09PSAnbGFyZ2UnYCxcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFkaW9CdXR0b25Db21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b25Db21wb25lbnRcclxuICBpbXBsZW1lbnRzXHJcbiAgICBSYWRpb0J1dHRvbixcclxuICAgIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgQ29udHJvbFZhbHVlQWNjZXNzb3Jcclxue1xyXG4gIHB1YmxpYyBpZDogc3RyaW5nID0gR3VpZC5jcmVhdGUoKTtcclxuICBASW5wdXQoKSBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbmd4Q29sb3I6IHN0cmluZyA9ICcjMTg5MEZGJztcclxuICBASW5wdXQoKSBwdWJsaWMgbmd4VmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG5neFNpemU6IE5neFNpemUgfCBudW1iZXIgPSAnZGVmYXVsdCc7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2s6IEV2ZW50RW1pdHRlcjxSYWRpb0J1dHRvbj4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxSYWRpb0J1dHRvbj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRfcmFkaW9fYnV0dG9uJykgaW5wdXRSYWRpb1JlZiE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7fTtcclxuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIHJhZGlvR3JvdXBDb21wOiBSYWRpb0dyb3VwQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGV2ZW50Q2hlY2tlZChldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRhcmdldC5jaGVja2VkO1xyXG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5jaGVja2VkKTtcclxuICAgICAgdGhpcy5vbkNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKCkge1xyXG4gICAgbGV0IHJiID0ge1xyXG4gICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkLFxyXG4gICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcclxuICAgICAgbmd4Q29sb3I6IHRoaXMubmd4Q29sb3IsXHJcbiAgICAgIG5neFZhbHVlOiB0aGlzLm5neFZhbHVlLFxyXG4gICAgfTtcclxuICAgIHRoaXMub25jbGljay5lbWl0KHJiKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0QWNjZW50Q29sb3IoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0QWNjZW50Q29sb3IoKTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5uZ3hTaXplID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0aGlzLnNldFNpemVJbk51bWJlcigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxyXG4gICAgICB0aGlzLnJhZGlvR3JvdXBDb21wPy5jdXJyZW50UmFkaW9DaGVja2VkJC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKGN1cnJlbnRSYWRpb0NoZWNrZWQpID0+IHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2UoY3VycmVudFJhZGlvQ2hlY2tlZC5pZCA9PT0gdGhpcy5pZCA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0U2l6ZUluTnVtYmVyKCkge1xyXG4gICAgY29uc3Qgc2l6ZSA9IE51bWJlcih0aGlzLm5neFNpemUpIC8gMTYgKyAncmVtJztcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pbnB1dFJhZGlvUmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHNpemUpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmlucHV0UmFkaW9SZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHNpemUpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0QWNjZW50Q29sb3IoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmlucHV0UmFkaW9SZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2FjY2VudC1jb2xvcicsXHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPyAnIzlFOUU5RScgOiB0aGlzLm5neENvbG9yXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=