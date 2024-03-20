import { Component, EventEmitter, Input, Output, ViewChild, booleanAttribute, } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class NgxOptionComponent {
    constructor() {
        this.disabled = false;
        this.selected = false;
        this.value = '';
        this.label = '';
        this.selectedOptionOnClick = new EventEmitter();
        this.checked = false;
        this.isVisible = true;
    }
    selectedOption(opt) {
        if (!opt.disabled) {
            this.selectedOptionOnClick.emit({
                disabled: opt.disabled,
                selected: opt.selected,
                value: opt.value,
                label: opt.label,
            });
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.label = this.contentRef?.nativeElement.textContent.trim();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxOptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: NgxOptionComponent, isStandalone: true, selector: "ngx-option", inputs: { disabled: ["disabled", "disabled", booleanAttribute], selected: ["selected", "selected", booleanAttribute], value: "value" }, outputs: { selectedOptionOnClick: "selectedOptionOnClick" }, host: { classAttribute: "ngx-option" }, viewQueries: [{ propertyName: "contentRef", first: true, predicate: ["content"], descendants: true }], ngImport: i0, template: "<div\r\n  *ngIf=\"isVisible\"\r\n  (click)=\"selectedOption(this)\"\r\n  #content\r\n  class=\"ngx-option\"\r\n  [class.ngx-option-selected]=\"selected\"\r\n  [class.ngx-option-disabled]=\"disabled\"\r\n>\r\n  <input\r\n    *ngIf=\"checked\"\r\n    type=\"checkbox\"\r\n    [checked]=\"selected\"\r\n    [disabled]=\"disabled\"\r\n  />\r\n  <div class=\"content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [":host{background-color:#fff}:host:hover{background-color:#f5f5f5}.ngx-option{display:flex;align-items:center;height:2rem;width:100%;background-color:inherit;transition:background-color .3s ease;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-option-disabled{color:#9e9e9e;pointer-events:none}.ngx-option-selected{background-color:#f5f5f5;color:#1890ff}.content{padding:0 .75rem}.ngx-option:hover{cursor:pointer;background-color:inherit}.ngx-option input[type=checkbox]:checked{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0zODItMjQwIDE1NC00NjhsNTctNTcgMTcxIDE3MSAzNjctMzY3IDU3IDU3LTQyNCA0MjRaIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+) no-repeat center;border:none}.ngx-option input[type=checkbox]{margin-left:.75rem;height:1.125rem;width:1.125rem;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxOptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-option', standalone: true, host: {
                        class: 'ngx-option',
                    }, imports: [NgIf], template: "<div\r\n  *ngIf=\"isVisible\"\r\n  (click)=\"selectedOption(this)\"\r\n  #content\r\n  class=\"ngx-option\"\r\n  [class.ngx-option-selected]=\"selected\"\r\n  [class.ngx-option-disabled]=\"disabled\"\r\n>\r\n  <input\r\n    *ngIf=\"checked\"\r\n    type=\"checkbox\"\r\n    [checked]=\"selected\"\r\n    [disabled]=\"disabled\"\r\n  />\r\n  <div class=\"content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [":host{background-color:#fff}:host:hover{background-color:#f5f5f5}.ngx-option{display:flex;align-items:center;height:2rem;width:100%;background-color:inherit;transition:background-color .3s ease;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-option-disabled{color:#9e9e9e;pointer-events:none}.ngx-option-selected{background-color:#f5f5f5;color:#1890ff}.content{padding:0 .75rem}.ngx-option:hover{cursor:pointer;background-color:inherit}.ngx-option input[type=checkbox]:checked{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik0zODItMjQwIDE1NC00NjhsNTctNTcgMTcxIDE3MSAzNjctMzY3IDU3IDU3LTQyNCA0MjRaIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+) no-repeat center;border:none}.ngx-option input[type=checkbox]{margin-left:.75rem;height:1.125rem;width:1.125rem;cursor:pointer}\n"] }]
        }], propDecorators: { disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], selected: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], value: [{
                type: Input
            }], selectedOptionOnClick: [{
                type: Output
            }], contentRef: [{
                type: ViewChild,
                args: ['content']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZ3gtZWFnbGUvc2VsZWN0L25neC1vcHRpb24vbmd4LW9wdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9uZ3gtZWFnbGUvc2VsZWN0L25neC1vcHRpb24vbmd4LW9wdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQVd2QyxNQUFNLE9BQU8sa0JBQWtCO0lBVi9CO1FBVzBDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN6RCxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFFYiwwQkFBcUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU1RSxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGNBQVMsR0FBWSxJQUFJLENBQUM7S0FvQmxDO0lBaEJDLGNBQWMsQ0FBQyxHQUFzQjtRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO2dCQUM5QixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7Z0JBQ3RCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtnQkFDdEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO2dCQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBNUJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLDJGQUNULGdCQUFnQixzQ0FDaEIsZ0JBQWdCLHlQQ3hCdEMseWFBa0JBLDQ3QkRFWSxJQUFJOzs0RkFFSCxrQkFBa0I7a0JBVjlCLFNBQVM7K0JBQ0UsWUFBWSxjQUdWLElBQUksUUFDVjt3QkFDSixLQUFLLEVBQUUsWUFBWTtxQkFDcEIsV0FDUSxDQUFDLElBQUksQ0FBQzs4QkFHeUIsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUM3QixLQUFLO3NCQUFiLEtBQUs7Z0JBR0kscUJBQXFCO3NCQUE5QixNQUFNO2dCQUtlLFVBQVU7c0JBQS9CLFNBQVM7dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBib29sZWFuQXR0cmlidXRlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuL25neC1vcHRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LW9wdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25neC1vcHRpb24uY29tcG9uZW50LnNjc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LW9wdGlvbicsXHJcbiAgfSxcclxuICBpbXBvcnRzOiBbTmdJZl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPcHRpb24sIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgbGFiZWw6IGFueSA9ICcnO1xyXG5cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRPcHRpb25PbkNsaWNrOiBFdmVudEVtaXR0ZXI8T3B0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8T3B0aW9uPigpO1xyXG5cclxuICBwdWJsaWMgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudFJlZiE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHNlbGVjdGVkT3B0aW9uKG9wdDpOZ3hPcHRpb25Db21wb25lbnQpIHtcclxuICAgIGlmICghb3B0LmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25PbkNsaWNrLmVtaXQoe1xyXG4gICAgICAgIGRpc2FibGVkOiBvcHQuZGlzYWJsZWQsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IG9wdC5zZWxlY3RlZCxcclxuICAgICAgICB2YWx1ZTogb3B0LnZhbHVlLFxyXG4gICAgICAgIGxhYmVsOiBvcHQubGFiZWwsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubGFiZWwgPSB0aGlzLmNvbnRlbnRSZWY/Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXZcclxuICAqbmdJZj1cImlzVmlzaWJsZVwiXHJcbiAgKGNsaWNrKT1cInNlbGVjdGVkT3B0aW9uKHRoaXMpXCJcclxuICAjY29udGVudFxyXG4gIGNsYXNzPVwibmd4LW9wdGlvblwiXHJcbiAgW2NsYXNzLm5neC1vcHRpb24tc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxyXG4gIFtjbGFzcy5uZ3gtb3B0aW9uLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuPlxyXG4gIDxpbnB1dFxyXG4gICAgKm5nSWY9XCJjaGVja2VkXCJcclxuICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICBbY2hlY2tlZF09XCJzZWxlY3RlZFwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIC8+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==