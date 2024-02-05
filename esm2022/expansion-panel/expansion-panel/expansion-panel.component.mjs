import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class ExpansionPanelComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.id = '';
        this.disabled = false;
        this.expanded = false;
        this.label = '';
        this.ngxType = 'normal';
    }
    ngOnInit() {
        this.id = this.guid();
    }
    expand() {
        const expansionPanel = new ExpansionPanelComponent();
        expansionPanel.expanded = this.expanded;
        expansionPanel.label = this.label;
        expansionPanel.disabled = this.disabled;
        expansionPanel.id = this.id;
        this.onClick.emit(expansionPanel);
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ExpansionPanelComponent, isStandalone: true, selector: "ngx-expansion-panel", inputs: { disabled: "disabled", label: "label", ngxType: "ngxType" }, outputs: { onClick: "onClick" }, host: { classAttribute: "ngx-expansion-panel" }, ngImport: i0, template: `
    <div
      class="card-epanel mb-4 p-4"
      [class.card-bg]="ngxType === 'card'"
      [ngClass]="{ 'rounded-lg box-shadow': ngxType === 'card' }"
    >
      <div (click)="expand()" class="card-header">
        <span>{{ label }}</span>
        <span class="arrow flex" [ngClass]="expanded ? 'rotate' : 'no-rotate'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <ng-content *ngIf="expanded"></ng-content>
      <div class="divider mt-4" *ngIf="ngxType === 'normal'"></div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-expansion-panel',
                    template: `
    <div
      class="card-epanel mb-4 p-4"
      [class.card-bg]="ngxType === 'card'"
      [ngClass]="{ 'rounded-lg box-shadow': ngxType === 'card' }"
    >
      <div (click)="expand()" class="card-header">
        <span>{{ label }}</span>
        <span class="arrow flex" [ngClass]="expanded ? 'rotate' : 'no-rotate'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <ng-content *ngIf="expanded"></ng-content>
      <div class="divider mt-4" *ngIf="ngxType === 'normal'"></div>
    </div>
  `,
                    standalone: true,
                    host: {
                        class: 'ngx-expansion-panel',
                    },
                    imports: [NgClass, NgIf],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { onClick: [{
                type: Output
            }], disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], ngxType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBVyxNQUFNLGlCQUFpQixDQUFDOztBQWlDekQsTUFBTSxPQUFPLHVCQUF1QjtJQVVsQztRQVRVLFlBQU8sR0FDZixJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUV2QyxPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2QsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUM1QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFzQixRQUFRLENBQUM7SUFFaEMsQ0FBQztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLGNBQWMsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFDckQsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsQyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsY0FBYyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJO1FBQ0YsT0FBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQ25ELE9BQU8sRUFDUCxVQUFVLENBQUM7WUFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ2hDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNyQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOytHQWxDVSx1QkFBdUI7bUdBQXZCLHVCQUF1Qix1T0E3QnhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JULDREQUtTLE9BQU8sb0ZBQUMsSUFBSTs7NEZBRVgsdUJBQXVCO2tCQS9CbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQlQ7b0JBQ0QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUscUJBQXFCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDO2lCQUN4QjswRUFFVyxPQUFPO3NCQUFoQixNQUFNO2dCQUlFLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXhwYW5zaW9uUGFuZWwgfSBmcm9tICcuLi9leHBhbnNpb24tcGFuZWwuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTmdDbGFzcywgTmdJZiwgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1leHBhbnNpb24tcGFuZWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiY2FyZC1lcGFuZWwgbWItNCBwLTRcIlxyXG4gICAgICBbY2xhc3MuY2FyZC1iZ109XCJuZ3hUeXBlID09PSAnY2FyZCdcIlxyXG4gICAgICBbbmdDbGFzc109XCJ7ICdyb3VuZGVkLWxnIGJveC1zaGFkb3cnOiBuZ3hUeXBlID09PSAnY2FyZCcgfVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgKGNsaWNrKT1cImV4cGFuZCgpXCIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgIDxzcGFuPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXJyb3cgZmxleFwiIFtuZ0NsYXNzXT1cImV4cGFuZGVkID8gJ3JvdGF0ZScgOiAnbm8tcm90YXRlJ1wiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk00ODAtMzQ0IDI0MC01ODRsNTYtNTYgMTg0IDE4NCAxODQtMTg0IDU2IDU2LTI0MCAyNDBaXCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiZXhwYW5kZWRcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyIG10LTRcIiAqbmdJZj1cIm5neFR5cGUgPT09ICdub3JtYWwnXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICduZ3gtZXhwYW5zaW9uLXBhbmVsJyxcclxuICB9LFxyXG4gIGltcG9ydHM6IFtOZ0NsYXNzLE5nSWZdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBFeHBhbnNpb25QYW5lbCwgT25Jbml0IHtcclxuICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPEV4cGFuc2lvblBhbmVsQ29tcG9uZW50PiA9XHJcbiAgICBuZXcgRXZlbnRFbWl0dGVyPEV4cGFuc2lvblBhbmVsQ29tcG9uZW50PigpO1xyXG5cclxuICBwdWJsaWMgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG5neFR5cGU6ICdjYXJkJyB8ICdub3JtYWwnID0gJ25vcm1hbCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5ndWlkKCk7XHJcbiAgfVxyXG5cclxuICBleHBhbmQoKSB7XHJcbiAgICBjb25zdCBleHBhbnNpb25QYW5lbCA9IG5ldyBFeHBhbnNpb25QYW5lbENvbXBvbmVudCgpO1xyXG4gICAgZXhwYW5zaW9uUGFuZWwuZXhwYW5kZWQgPSB0aGlzLmV4cGFuZGVkO1xyXG4gICAgZXhwYW5zaW9uUGFuZWwubGFiZWwgPSB0aGlzLmxhYmVsO1xyXG4gICAgZXhwYW5zaW9uUGFuZWwuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgZXhwYW5zaW9uUGFuZWwuaWQgPSB0aGlzLmlkO1xyXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoZXhwYW5zaW9uUGFuZWwpO1xyXG4gIH1cclxuXHJcbiAgZ3VpZCgpIHtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKFxyXG4gICAgICAvW3h5XS9nLFxyXG4gICAgICBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXHJcbiAgICAgICAgICB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xyXG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19