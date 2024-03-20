import { ChangeDetectionStrategy, Component, Input, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class SwitchComponent {
    constructor(cdr, elementRef) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.isChecked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.disabled = false;
        this.ngxSize = 'default';
        this.disabled = this.elementRef.nativeElement.hasAttribute('disabled');
    }
    ngAfterContentInit() {
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.isChecked = value;
        this.onChange(this.isChecked);
        this.cdr.markForCheck();
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
    toggle() {
        if (!this.disabled) {
            this.writeValue(!this.isChecked);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SwitchComponent, isStandalone: true, selector: "ngx-switch", inputs: { ngxSize: "ngxSize" }, host: { properties: { "class.ngx-switch-sm": "ngxSize === 'small'", "class.ngx-switch-df": "ngxSize === 'default'", "class.ngx-switch-lg": "ngxSize === 'large'" }, classAttribute: "ngx-switch" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SwitchComponent),
                multi: true,
            },
        ], ngImport: i0, template: `
    <button
      class="ngx-switch"
      [class.ngx-switch-sm]="ngxSize === 'small'"
      [class.ngx-switch-df]="ngxSize === 'default'"
      [class.ngx-switch-lg]="ngxSize === 'large'"
      [disabled]="disabled"
      [class.ngx-switch-checked]="isChecked"
      (click)="toggle()"
    >
      <span class="ngx-switch-knob"></span>
      <span class="ngx-switch-inner"></span>
    </button>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-switch',
                    template: `
    <button
      class="ngx-switch"
      [class.ngx-switch-sm]="ngxSize === 'small'"
      [class.ngx-switch-df]="ngxSize === 'default'"
      [class.ngx-switch-lg]="ngxSize === 'large'"
      [disabled]="disabled"
      [class.ngx-switch-checked]="isChecked"
      (click)="toggle()"
    >
      <span class="ngx-switch-knob"></span>
      <span class="ngx-switch-inner"></span>
    </button>
  `,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SwitchComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'ngx-switch',
                        '[class.ngx-switch-sm]': `ngxSize === 'small'`,
                        '[class.ngx-switch-df]': `ngxSize === 'default'`,
                        '[class.ngx-switch-lg]': `ngxSize === 'large'`,
                    },
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, propDecorators: { ngxSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25neC1lYWdsZS9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxLQUFLLEVBQ0wsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFtQ3pFLE1BQU0sT0FBTyxlQUFlO0lBUTFCLFlBQW9CLEdBQXNCLEVBQVUsVUFBc0I7UUFBdEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBUDFFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFRLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFakIsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUdwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7K0dBdENVLGVBQWU7bUdBQWYsZUFBZSw2UkFoQmY7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDOUMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGLDBCQXBCUzs7Ozs7Ozs7Ozs7OztHQWFUOzs0RkFpQlUsZUFBZTtrQkFoQzNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsWUFBWTt3QkFDbkIsdUJBQXVCLEVBQUUscUJBQXFCO3dCQUM5Qyx1QkFBdUIsRUFBRSx1QkFBdUI7d0JBQ2hELHVCQUF1QixFQUFFLHFCQUFxQjtxQkFDL0M7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO2lJQU9VLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBmb3J3YXJkUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5neFNpemUgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtc3dpdGNoJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzcz1cIm5neC1zd2l0Y2hcIlxyXG4gICAgICBbY2xhc3Mubmd4LXN3aXRjaC1zbV09XCJuZ3hTaXplID09PSAnc21hbGwnXCJcclxuICAgICAgW2NsYXNzLm5neC1zd2l0Y2gtZGZdPVwibmd4U2l6ZSA9PT0gJ2RlZmF1bHQnXCJcclxuICAgICAgW2NsYXNzLm5neC1zd2l0Y2gtbGddPVwibmd4U2l6ZSA9PT0gJ2xhcmdlJ1wiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5uZ3gtc3dpdGNoLWNoZWNrZWRdPVwiaXNDaGVja2VkXCJcclxuICAgICAgKGNsaWNrKT1cInRvZ2dsZSgpXCJcclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuZ3gtc3dpdGNoLWtub2JcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmd4LXN3aXRjaC1pbm5lclwiPjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTd2l0Y2hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ25neC1zd2l0Y2gnLFxyXG4gICAgJ1tjbGFzcy5uZ3gtc3dpdGNoLXNtXSc6IGBuZ3hTaXplID09PSAnc21hbGwnYCxcclxuICAgICdbY2xhc3Mubmd4LXN3aXRjaC1kZl0nOiBgbmd4U2l6ZSA9PT0gJ2RlZmF1bHQnYCxcclxuICAgICdbY2xhc3Mubmd4LXN3aXRjaC1sZ10nOiBgbmd4U2l6ZSA9PT0gJ2xhcmdlJ2AsXHJcbiAgfSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyQ29udGVudEluaXQge1xyXG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7fTtcclxuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHt9O1xyXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG5neFNpemU6IE5neFNpemUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmlzQ2hlY2tlZCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLndyaXRlVmFsdWUoIXRoaXMuaXNDaGVja2VkKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19