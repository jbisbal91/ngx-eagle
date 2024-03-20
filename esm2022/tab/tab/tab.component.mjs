import { Component, Input, booleanAttribute } from '@angular/core';
import { NgIf } from '@angular/common';
import { Guid } from 'ngx-eagle/core/services';
import * as i0 from "@angular/core";
export class TabComponent {
    constructor() {
        this.id = Guid.create();
        this.isActive = false;
        this.disabled = false;
        this.label = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: TabComponent, isStandalone: true, selector: "ngx-tab", inputs: { disabled: ["disabled", "disabled", booleanAttribute], label: "label" }, ngImport: i0, template: `
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
        }], propDecorators: { disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1lYWdsZS90YWIvdGFiL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFZL0MsTUFBTSxPQUFPLFlBQVk7SUFWekI7UUFXUyxPQUFFLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDTyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pELFVBQUssR0FBVyxFQUFFLENBQUM7S0FDN0I7K0dBTFksWUFBWTttR0FBWixZQUFZLHdGQUdILGdCQUFnQiw2Q0FYMUI7Ozs7R0FJVCw0REFFUyxJQUFJOzs0RkFFSCxZQUFZO2tCQVZ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO2lCQUNoQjs4QkFJeUMsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDN0IsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgYm9vbGVhbkF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWIgfSBmcm9tICcuL3RhYi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJ25neC1lYWdsZS9jb3JlL3NlcnZpY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXRhYicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2lkXT1cImlkXCIgKm5nSWY9XCJpc0FjdGl2ZVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW05nSWZdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgVGFiIHtcclxuICBwdWJsaWMgaWQ6IHN0cmluZyA9IEd1aWQuY3JlYXRlKCk7XHJcbiAgcHVibGljIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG59XHJcbiJdfQ==