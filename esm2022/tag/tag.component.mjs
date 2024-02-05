import { NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
export class TagComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngxMode = 'default';
        this.ngxChecked = false;
        this.ngxOnClose = new EventEmitter();
        this.ngxCheckedChange = new EventEmitter();
    }
    updateCheckedStatus() {
        if (this.ngxMode === 'checkable') {
            this.ngxChecked = !this.ngxChecked;
            this.ngxCheckedChange.emit(this.ngxChecked);
        }
    }
    closeTag(e) {
        this.ngxOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TagComponent, isStandalone: true, selector: "ngx-tag", inputs: { ngxMode: "ngxMode", ngxColor: "ngxColor", ngxChecked: "ngxChecked" }, outputs: { ngxOnClose: "ngxOnClose", ngxCheckedChange: "ngxCheckedChange" }, host: { listeners: { "click": "updateCheckedStatus()" }, properties: { "style.background-color": "ngxColor", "class.ngx-tag-has-color": "ngxColor? true : false", "class.ngx-tag-default": "ngxMode === 'default'", "class.ngx-tag-checkable": "ngxMode === 'checkable'", "class.ngx-tag-sync": "ngxMode === 'sync'", "class.ngx-tag-checkable-checked": "ngxChecked" }, classAttribute: "ngx-tag" }, ngImport: i0, template: `
    <svg
      *ngIf="ngxMode === 'sync'"
      style="
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(113deg)
      brightness(110%) contrast(109%);
  "
      class="ngx-tag-icon-sync"
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"
      />
    </svg>

    <ng-content></ng-content>

    <svg
      [ngStyle]="{
        filter: ngxColor
          ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(113deg) brightness(110%) contrast(109%)'
          : ''
      }"
      class="ngx-tag-close"
      *ngIf="ngxMode === 'closeable'"
      (click)="closeTag($event)"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 -960 960 960"
      width="14"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-tag',
                    template: `
    <svg
      *ngIf="ngxMode === 'sync'"
      style="
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(113deg)
      brightness(110%) contrast(109%);
  "
      class="ngx-tag-icon-sync"
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"
      />
    </svg>

    <ng-content></ng-content>

    <svg
      [ngStyle]="{
        filter: ngxColor
          ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(113deg) brightness(110%) contrast(109%)'
          : ''
      }"
      class="ngx-tag-close"
      *ngIf="ngxMode === 'closeable'"
      (click)="closeTag($event)"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 -960 960 960"
      width="14"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  `,
                    host: {
                        class: 'ngx-tag',
                        '[style.background-color]': 'ngxColor',
                        '[class.ngx-tag-has-color]': 'ngxColor? true : false',
                        '[class.ngx-tag-default]': `ngxMode === 'default'`,
                        '[class.ngx-tag-checkable]': `ngxMode === 'checkable'`,
                        '[class.ngx-tag-sync]': `ngxMode === 'sync'`,
                        '[class.ngx-tag-checkable-checked]': `ngxChecked`,
                        '(click)': 'updateCheckedStatus()',
                    },
                    standalone: true,
                    imports: [NgStyle, NgIf],
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { ngxMode: [{
                type: Input
            }], ngxColor: [{
                type: Input
            }], ngxChecked: [{
                type: Input
            }], ngxOnClose: [{
                type: Output
            }], ngxCheckedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS90YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7O0FBeUR2QixNQUFNLE9BQU8sWUFBWTtJQVF2QixZQUFvQixRQUFtQixFQUFVLFVBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBUDlELFlBQU8sR0FBWSxTQUFTLENBQUM7UUFFN0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUVsQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRVEsQ0FBQztJQUUzRSxtQkFBbUI7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBYTtRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FDOUIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzsrR0F6QlUsWUFBWTttR0FBWixZQUFZLHNtQkFwRGI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0NULDREQVlTLE9BQU8sMkVBQUUsSUFBSTs7NEZBRVosWUFBWTtrQkF0RHhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxTQUFTO3dCQUNoQiwwQkFBMEIsRUFBRSxVQUFVO3dCQUN0QywyQkFBMkIsRUFBRSx3QkFBd0I7d0JBQ3JELHlCQUF5QixFQUFFLHVCQUF1Qjt3QkFDbEQsMkJBQTJCLEVBQUUseUJBQXlCO3dCQUN0RCxzQkFBc0IsRUFBRSxvQkFBb0I7d0JBQzVDLG1DQUFtQyxFQUFFLFlBQVk7d0JBQ2pELFNBQVMsRUFBRSx1QkFBdUI7cUJBQ25DO29CQUNELFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2lCQUN6Qjt5SEFFVSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUVhLFVBQVU7c0JBQTVCLE1BQU07Z0JBQ1ksZ0JBQWdCO3NCQUFsQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiwgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neE1vZGUgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtdGFnJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHN2Z1xyXG4gICAgICAqbmdJZj1cIm5neE1vZGUgPT09ICdzeW5jJ1wiXHJcbiAgICAgIHN0eWxlPVwiXHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMTEzZGVnKVxyXG4gICAgICBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwOSUpO1xyXG4gIFwiXHJcbiAgICAgIGNsYXNzPVwibmd4LXRhZy1pY29uLXN5bmNcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAtOTYwIDk2MCA5NjBcIlxyXG4gICAgICB3aWR0aD1cIjI0XCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTE2MC0xNjB2LTgwaDExMGwtMTYtMTRxLTUyLTQ2LTczLTEwNXQtMjEtMTE5cTAtMTExIDY2LjUtMTk3LjVUNDAwLTc5MHY4NHEtNzIgMjYtMTE2IDg4LjVUMjQwLTQ3OHEwIDQ1IDE3IDg3LjV0NTMgNzguNWwxMCAxMHYtOThoODB2MjQwSDE2MFptNDAwLTEwdi04NHE3Mi0yNiAxMTYtODguNVQ3MjAtNDgycTAtNDUtMTctODcuNVQ2NTAtNjQ4bC0xMC0xMHY5OGgtODB2LTI0MGgyNDB2ODBINjkwbDE2IDE0cTQ5IDQ5IDcxLjUgMTA2LjVUODAwLTQ4MnEwIDExMS02Ni41IDE5Ny41VDU2MC0xNzBaXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuXHJcbiAgICA8c3ZnXHJcbiAgICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICBmaWx0ZXI6IG5neENvbG9yXHJcbiAgICAgICAgICA/ICdpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc1MDAlKSBodWUtcm90YXRlKDExM2RlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMDklKSdcclxuICAgICAgICAgIDogJydcclxuICAgICAgfVwiXHJcbiAgICAgIGNsYXNzPVwibmd4LXRhZy1jbG9zZVwiXHJcbiAgICAgICpuZ0lmPVwibmd4TW9kZSA9PT0gJ2Nsb3NlYWJsZSdcIlxyXG4gICAgICAoY2xpY2spPVwiY2xvc2VUYWcoJGV2ZW50KVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICBoZWlnaHQ9XCIxNFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiXHJcbiAgICAgIHdpZHRoPVwiMTRcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJtMjU2LTIwMC01Ni01NiAyMjQtMjI0LTIyNC0yMjQgNTYtNTYgMjI0IDIyNCAyMjQtMjI0IDU2IDU2LTIyNCAyMjQgMjI0IDIyNC01NiA1Ni0yMjQtMjI0LTIyNCAyMjRaXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICduZ3gtdGFnJyxcclxuICAgICdbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl0nOiAnbmd4Q29sb3InLFxyXG4gICAgJ1tjbGFzcy5uZ3gtdGFnLWhhcy1jb2xvcl0nOiAnbmd4Q29sb3I/IHRydWUgOiBmYWxzZScsXHJcbiAgICAnW2NsYXNzLm5neC10YWctZGVmYXVsdF0nOiBgbmd4TW9kZSA9PT0gJ2RlZmF1bHQnYCxcclxuICAgICdbY2xhc3Mubmd4LXRhZy1jaGVja2FibGVdJzogYG5neE1vZGUgPT09ICdjaGVja2FibGUnYCxcclxuICAgICdbY2xhc3Mubmd4LXRhZy1zeW5jXSc6IGBuZ3hNb2RlID09PSAnc3luYydgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtdGFnLWNoZWNrYWJsZS1jaGVja2VkXSc6IGBuZ3hDaGVja2VkYCxcclxuICAgICcoY2xpY2spJzogJ3VwZGF0ZUNoZWNrZWRTdGF0dXMoKScsXHJcbiAgfSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ1N0eWxlLCBOZ0lmXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbmd4TW9kZTogTmd4TW9kZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuZ3hDb2xvcj86IHN0cmluZztcclxuICBASW5wdXQoKSBuZ3hDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuZ3hPbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuZ3hDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgdXBkYXRlQ2hlY2tlZFN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm5neE1vZGUgPT09ICdjaGVja2FibGUnKSB7XHJcbiAgICAgIHRoaXMubmd4Q2hlY2tlZCA9ICF0aGlzLm5neENoZWNrZWQ7XHJcbiAgICAgIHRoaXMubmd4Q2hlY2tlZENoYW5nZS5lbWl0KHRoaXMubmd4Q2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm5neE9uQ2xvc2UuZW1pdChlKTtcclxuICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=