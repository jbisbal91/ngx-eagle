import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class TabComponent {
    constructor() {
        this.id = '';
        this.isActive = false;
        this.label = '';
        this.disabled = false;
    }
    ngOnInit() {
        this.id = this.guid();
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TabComponent, isStandalone: true, selector: "ngx-tab", inputs: { label: "label", disabled: "disabled" }, ngImport: i0, template: `
    <div [id]="id" *ngIf="isActive">
      <ng-content></ng-content>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-tab',
                    template: `
    <div [id]="id" *ngIf="isActive">
      <ng-content></ng-content>
    </div>
  `,
                    standalone: true,
                    imports: [NgIf],
                }]
        }], propDecorators: { label: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS90YWIvdGFiL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQVl2QyxNQUFNLE9BQU8sWUFBWTtJQVZ6QjtRQVdTLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN4QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBWSxLQUFLLENBQUM7S0FnQnBDO0lBZEMsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJO1FBQ0YsT0FBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQ25ELE9BQU8sRUFDUCxVQUFVLENBQUM7WUFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ2hDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNyQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOytHQW5CVSxZQUFZO21HQUFaLFlBQVkscUhBUmI7Ozs7R0FJVCw0REFFUyxJQUFJOzs0RkFFSCxZQUFZO2tCQVZ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO2lCQUNoQjs4QkFJVSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWIgfSBmcm9tICcuL3RhYi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXRhYicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2lkXT1cImlkXCIgKm5nSWY9XCJpc0FjdGl2ZVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW05nSWZdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgVGFiLCBPbkluaXQge1xyXG4gIHB1YmxpYyBpZDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pZCA9IHRoaXMuZ3VpZCgpO1xyXG4gIH1cclxuXHJcbiAgZ3VpZCgpIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKFxyXG4gICAgICAvW3h5XS9nLFxyXG4gICAgICBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXHJcbiAgICAgICAgICB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19