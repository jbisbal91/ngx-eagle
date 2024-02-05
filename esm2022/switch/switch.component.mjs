import { ChangeDetectionStrategy, Component, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class SwitchComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.isChecked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.disabled = false;
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
        this.writeValue(!this.isChecked);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SwitchComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SwitchComponent, isStandalone: true, selector: "ngx-switch", host: { classAttribute: "ngx-switch" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SwitchComponent),
                multi: true,
            },
        ], ngImport: i0, template: `
    <button
      [disabled]="disabled"
      class="ngx-switch"
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
      [disabled]="disabled"
      class="ngx-switch"
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
                    },
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQTRCekUsTUFBTSxPQUFPLGVBQWU7SUFNMUIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFMMUMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBUSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUVtQixDQUFDO0lBRTlDLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQzsrR0FoQ1UsZUFBZTttR0FBZixlQUFlLGlHQWJmO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzlDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkFqQlM7Ozs7Ozs7Ozs7R0FVVDs7NEZBY1UsZUFBZTtrQkExQjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsWUFBWTtxQkFDcEI7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBmb3J3YXJkUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1zd2l0Y2gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIGNsYXNzPVwibmd4LXN3aXRjaFwiXHJcbiAgICAgIFtjbGFzcy5uZ3gtc3dpdGNoLWNoZWNrZWRdPVwiaXNDaGVja2VkXCJcclxuICAgICAgKGNsaWNrKT1cInRvZ2dsZSgpXCJcclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJuZ3gtc3dpdGNoLWtub2JcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibmd4LXN3aXRjaC1pbm5lclwiPjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTd2l0Y2hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ25neC1zd2l0Y2gnLFxyXG4gIH0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBpc0NoZWNrZWQgPSBmYWxzZTtcclxuICBvbkNoYW5nZTogYW55ID0gKCkgPT4ge307XHJcbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7fTtcclxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5pc0NoZWNrZWQpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLndyaXRlVmFsdWUoIXRoaXMuaXNDaGVja2VkKTtcclxuICB9XHJcbn1cclxuIl19