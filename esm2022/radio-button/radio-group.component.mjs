import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Output, forwardRef, } from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export class RadioGroupComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.subscription = new Subscription();
        this.currentRadioChecked$ = new ReplaySubject();
        this.currentRadioChecked = new EventEmitter();
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterContentInit() {
        const disabled = this.elementRef.nativeElement.hasAttribute('disabled');
        this.setDisabledState(disabled);
        this.radioButtons.forEach((rb) => {
            this.subscription.add(rb.onclick.subscribe(() => {
                this.setValue(rb.ngxValue);
                this.onChange(rb.ngxValue);
                this.currentRadioChecked$.next(rb);
            }));
        });
    }
    writeValue(value) {
        if (value) {
            this.setValue(value);
            this.onChange(value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.radioButtons?.forEach((rb) => (rb.disabled = disabled));
    }
    setValue(ngxValue) {
        this.radioButtons.forEach((rb) => {
            rb.checked = rb.ngxValue === ngxValue ? true : false;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioGroupComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RadioGroupComponent, isStandalone: true, selector: "ngx-radio-group", outputs: { currentRadioChecked: "currentRadioChecked" }, host: { classAttribute: "ngx-radio-group" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioGroupComponent),
                multi: true,
            },
        ], queries: [{ propertyName: "radioButtons", predicate: RadioButtonComponent }], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RadioGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-radio-group',
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'ngx-radio-group',
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioGroupComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { radioButtons: [{
                type: ContentChildren,
                args: [RadioButtonComponent]
            }], currentRadioChecked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL3JhZGlvLWJ1dHRvbi9yYWRpby1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUVmLFlBQVksRUFFWixNQUFNLEVBRU4sVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFtQm5ELE1BQU0sT0FBTyxtQkFBbUI7SUFlOUIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVRsQyxpQkFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLHlCQUFvQixHQUFHLElBQUksYUFBYSxFQUFlLENBQUM7UUFDdkQsd0JBQW1CLEdBQzNCLElBQUksWUFBWSxFQUFlLENBQUM7UUFFbEMsYUFBUSxHQUFRLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBRW1CLENBQUM7SUFFOUMsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFhO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDL0IsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQTFEVSxtQkFBbUI7bUdBQW5CLG1CQUFtQixvS0FWbkI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNsRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsdURBT2dCLG9CQUFvQiw2QkFqQjNCLDJCQUEyQjs7NEZBYzFCLG1CQUFtQjtrQkFoQi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxpQkFBaUI7cUJBQ3pCO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQzs0QkFDbEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjtpR0FLUSxZQUFZO3NCQURsQixlQUFlO3VCQUFDLG9CQUFvQjtnQkFNM0IsbUJBQW1CO3NCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgZm9yd2FyZFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSYWRpb0J1dHRvbiB9IGZyb20gJy4vcmFkaW8tYnV0dG9uLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1yYWRpby1ncm91cCcsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ25neC1yYWRpby1ncm91cCcsXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhZGlvR3JvdXBDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9Hcm91cENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG57XHJcbiAgQENvbnRlbnRDaGlsZHJlbihSYWRpb0J1dHRvbkNvbXBvbmVudClcclxuICBwdWJsaWMgcmFkaW9CdXR0b25zITogUXVlcnlMaXN0PFJhZGlvQnV0dG9uQ29tcG9uZW50PjtcclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgcmVhZG9ubHkgY3VycmVudFJhZGlvQ2hlY2tlZCQgPSBuZXcgUmVwbGF5U3ViamVjdDxSYWRpb0J1dHRvbj4oKTtcclxuICBAT3V0cHV0KCkgY3VycmVudFJhZGlvQ2hlY2tlZDogRXZlbnRFbWl0dGVyPFJhZGlvQnV0dG9uPiA9XHJcbiAgICBuZXcgRXZlbnRFbWl0dGVyPFJhZGlvQnV0dG9uPigpO1xyXG5cclxuICBvbkNoYW5nZTogYW55ID0gKCkgPT4ge307XHJcbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZCk7XHJcbiAgICB0aGlzLnJhZGlvQnV0dG9ucy5mb3JFYWNoKChyYikgPT4ge1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXHJcbiAgICAgICAgcmIub25jbGljay5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZShyYi5uZ3hWYWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHJiLm5neFZhbHVlKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFJhZGlvQ2hlY2tlZCQubmV4dChyYik7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5yYWRpb0J1dHRvbnM/LmZvckVhY2goKHJiKSA9PiAocmIuZGlzYWJsZWQgPSBkaXNhYmxlZCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUobmd4VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5yYWRpb0J1dHRvbnMuZm9yRWFjaCgocmIpID0+IHtcclxuICAgICAgcmIuY2hlY2tlZCA9IHJiLm5neFZhbHVlID09PSBuZ3hWYWx1ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=