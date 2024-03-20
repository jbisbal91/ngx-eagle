import { Component, EventEmitter, Input, Output, booleanAttribute, } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Guid } from 'ngx-eagle/core/services';
import * as i0 from "@angular/core";
export class ExpansionPanelComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.ngxActiveChange = new EventEmitter();
        this.id = Guid.create();
        this.disabled = false;
        this.expanded = false;
        this.hideToggle = false;
        this.ngxColor = '';
        this.lastExP = false;
        this.disabled = this.elementRef?.nativeElement.hasAttribute('disabled');
        this.hideToggle = this.elementRef?.nativeElement.hasAttribute('hideToggle');
    }
    expand() {
        if (this.disabled) {
            return;
        }
        const expansionPanel = new ExpansionPanelComponent();
        expansionPanel.expanded = !this.expanded;
        expansionPanel.ngxLabel = this.ngxLabel;
        expansionPanel.disabled = this.disabled;
        expansionPanel.id = this.id;
        this.ngxActiveChange.emit(expansionPanel);
    }
    typeOf(value) {
        return typeof value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: ExpansionPanelComponent, isStandalone: true, selector: "ngx-expansion-panel", inputs: { disabled: ["disabled", "disabled", booleanAttribute], expanded: ["expanded", "expanded", booleanAttribute], hideToggle: ["hideToggle", "hideToggle", booleanAttribute], ngxLabel: "ngxLabel" }, outputs: { ngxActiveChange: "ngxActiveChange" }, host: { classAttribute: "ngx-expansion-panel" }, ngImport: i0, template: `
    <div
      class="exp-panel"
      [class.card-type]="ngxType && ngxType === 'card'"
      [class.bordered-type]="ngxType && ngxType === 'bordered'"
      [class.border-bottom-exp-item]="ngxType === 'bordered' && lastExP"
      [style.backgroundColor]="ngxColor"
    >
      <div
        (click)="expand()"
        class="header"
        [class.border-bottom-header]="expanded && ngxType !== 'default'"
        [class.expand-icon-position]="ngxExpandIconPosition === 'left'"
        [class.disabled]="disabled"
      >
        <span *ngIf="typeOf(ngxLabel) === 'string'">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="typeOf(ngxLabel) === 'object'"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
        <span
          *ngIf="!hideToggle"
          class="arrow flex"
          [ngClass]="
            expanded
              ? ngxExpandIconPosition == 'left'
                ? 'rotate-left'
                : 'rotate-right'
              : ngxExpandIconPosition == 'left'
              ? 'no-rotate-left'
              : 'no-rotate-right'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <div
        [class.content]="ngxType !== 'default'"
        [class.content-default]="ngxType === 'default'"
        *ngIf="expanded"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-expansion-panel',
                    template: `
    <div
      class="exp-panel"
      [class.card-type]="ngxType && ngxType === 'card'"
      [class.bordered-type]="ngxType && ngxType === 'bordered'"
      [class.border-bottom-exp-item]="ngxType === 'bordered' && lastExP"
      [style.backgroundColor]="ngxColor"
    >
      <div
        (click)="expand()"
        class="header"
        [class.border-bottom-header]="expanded && ngxType !== 'default'"
        [class.expand-icon-position]="ngxExpandIconPosition === 'left'"
        [class.disabled]="disabled"
      >
        <span *ngIf="typeOf(ngxLabel) === 'string'">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="typeOf(ngxLabel) === 'object'"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
        <span
          *ngIf="!hideToggle"
          class="arrow flex"
          [ngClass]="
            expanded
              ? ngxExpandIconPosition == 'left'
                ? 'rotate-left'
                : 'rotate-right'
              : ngxExpandIconPosition == 'left'
              ? 'no-rotate-left'
              : 'no-rotate-right'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <div
        [class.content]="ngxType !== 'default'"
        [class.content-default]="ngxType === 'default'"
        *ngIf="expanded"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
                    standalone: true,
                    host: {
                        class: 'ngx-expansion-panel',
                    },
                    imports: [NgClass, NgIf, NgTemplateOutlet],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { ngxActiveChange: [{
                type: Output
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], expanded: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hideToggle: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1lYWdsZS9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBZ0UvQyxNQUFNLE9BQU8sdUJBQXVCO0lBaUJsQyxZQUFvQixVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBaEJqQyxvQkFBZSxHQUN2QixJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUV2QyxPQUFFLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRU0sYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHcEUsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUl0QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBR3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELE1BQU0sY0FBYyxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUNyRCxjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDZixPQUFPLE9BQU8sS0FBSyxDQUFDO0lBQ3RCLENBQUM7K0dBcENVLHVCQUF1QjttR0FBdkIsdUJBQXVCLG9HQU1kLGdCQUFnQixzQ0FDaEIsZ0JBQWdCLDRDQUNoQixnQkFBZ0IscUpBbkUxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9EVCw0REFLUyxPQUFPLG9GQUFFLElBQUksNkZBQUUsZ0JBQWdCOzs0RkFFOUIsdUJBQXVCO2tCQTdEbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvRFQ7b0JBQ0QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUscUJBQXFCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDO2lCQUMzQztpR0FFVyxlQUFlO3NCQUF4QixNQUFNO2dCQUtpQyxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUNFLFFBQVE7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ0UsVUFBVTtzQkFBakQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDN0IsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBib29sZWFuQXR0cmlidXRlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFeHBhbnNpb25QYW5lbCB9IGZyb20gJy4uL2V4cGFuc2lvbi1wYW5lbC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBOZ0NsYXNzLCBOZ0lmLCBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJ25neC1lYWdsZS9jb3JlL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgTmd4RXhwYW5kSWNvblBvc2l0aW9uLCBOZ3hUeXBlIH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1leHBhbnNpb24tcGFuZWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiZXhwLXBhbmVsXCJcclxuICAgICAgW2NsYXNzLmNhcmQtdHlwZV09XCJuZ3hUeXBlICYmIG5neFR5cGUgPT09ICdjYXJkJ1wiXHJcbiAgICAgIFtjbGFzcy5ib3JkZXJlZC10eXBlXT1cIm5neFR5cGUgJiYgbmd4VHlwZSA9PT0gJ2JvcmRlcmVkJ1wiXHJcbiAgICAgIFtjbGFzcy5ib3JkZXItYm90dG9tLWV4cC1pdGVtXT1cIm5neFR5cGUgPT09ICdib3JkZXJlZCcgJiYgbGFzdEV4UFwiXHJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwibmd4Q29sb3JcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgKGNsaWNrKT1cImV4cGFuZCgpXCJcclxuICAgICAgICBjbGFzcz1cImhlYWRlclwiXHJcbiAgICAgICAgW2NsYXNzLmJvcmRlci1ib3R0b20taGVhZGVyXT1cImV4cGFuZGVkICYmIG5neFR5cGUgIT09ICdkZWZhdWx0J1wiXHJcbiAgICAgICAgW2NsYXNzLmV4cGFuZC1pY29uLXBvc2l0aW9uXT1cIm5neEV4cGFuZEljb25Qb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0eXBlT2Yobmd4TGFiZWwpID09PSAnc3RyaW5nJ1wiPnt7IG5neExhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgKm5nSWY9XCJ0eXBlT2Yobmd4TGFiZWwpID09PSAnb2JqZWN0J1wiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJuZ3hMYWJlbFwiXHJcbiAgICAgICAgPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgICpuZ0lmPVwiIWhpZGVUb2dnbGVcIlxyXG4gICAgICAgICAgY2xhc3M9XCJhcnJvdyBmbGV4XCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIlxyXG4gICAgICAgICAgICBleHBhbmRlZFxyXG4gICAgICAgICAgICAgID8gbmd4RXhwYW5kSWNvblBvc2l0aW9uID09ICdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgPyAncm90YXRlLWxlZnQnXHJcbiAgICAgICAgICAgICAgICA6ICdyb3RhdGUtcmlnaHQnXHJcbiAgICAgICAgICAgICAgOiBuZ3hFeHBhbmRJY29uUG9zaXRpb24gPT0gJ2xlZnQnXHJcbiAgICAgICAgICAgICAgPyAnbm8tcm90YXRlLWxlZnQnXHJcbiAgICAgICAgICAgICAgOiAnbm8tcm90YXRlLXJpZ2h0J1xyXG4gICAgICAgICAgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk00ODAtMzQ0IDI0MC01ODRsNTYtNTYgMTg0IDE4NCAxODQtMTg0IDU2IDU2LTI0MCAyNDBaXCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBbY2xhc3MuY29udGVudF09XCJuZ3hUeXBlICE9PSAnZGVmYXVsdCdcIlxyXG4gICAgICAgIFtjbGFzcy5jb250ZW50LWRlZmF1bHRdPVwibmd4VHlwZSA9PT0gJ2RlZmF1bHQnXCJcclxuICAgICAgICAqbmdJZj1cImV4cGFuZGVkXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICduZ3gtZXhwYW5zaW9uLXBhbmVsJyxcclxuICB9LFxyXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ0lmLCBOZ1RlbXBsYXRlT3V0bGV0XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgRXhwYW5zaW9uUGFuZWwge1xyXG4gIEBPdXRwdXQoKSBuZ3hBY3RpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxFeHBhbnNpb25QYW5lbENvbXBvbmVudD4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxFeHBhbnNpb25QYW5lbENvbXBvbmVudD4oKTtcclxuXHJcbiAgcHVibGljIGlkOiBzdHJpbmcgPSBHdWlkLmNyZWF0ZSgpO1xyXG5cclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgaGlkZVRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG5neExhYmVsOiBhbnkgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgbmd4Q29sb3I6IHN0cmluZyA9ICcnO1xyXG4gIG5neFR5cGUhOiBOZ3hUeXBlO1xyXG4gIG5neEV4cGFuZEljb25Qb3NpdGlvbiE6IE5neEV4cGFuZEljb25Qb3NpdGlvbjtcclxuXHJcbiAgbGFzdEV4UDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY/OiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5lbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgIHRoaXMuaGlkZVRvZ2dsZSA9IHRoaXMuZWxlbWVudFJlZj8ubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2hpZGVUb2dnbGUnKTtcclxuICB9XHJcblxyXG4gIGV4cGFuZCgpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGV4cGFuc2lvblBhbmVsID0gbmV3IEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KCk7XHJcbiAgICBleHBhbnNpb25QYW5lbC5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xyXG4gICAgZXhwYW5zaW9uUGFuZWwubmd4TGFiZWwgPSB0aGlzLm5neExhYmVsO1xyXG4gICAgZXhwYW5zaW9uUGFuZWwuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgZXhwYW5zaW9uUGFuZWwuaWQgPSB0aGlzLmlkO1xyXG4gICAgdGhpcy5uZ3hBY3RpdmVDaGFuZ2UuZW1pdChleHBhbnNpb25QYW5lbCk7XHJcbiAgfVxyXG5cclxuICB0eXBlT2YodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19