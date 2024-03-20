import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, QueryList, } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { NgForOf, NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class TabGroupComponent {
    get ngxSelectedIndex() {
        return this.internalSelectedIndex;
    }
    set ngxSelectedIndex(index) {
        if (this.internalSelectedIndex !== index) {
            this.internalSelectedIndex = index;
            this.ngxSelectedIndexChange.emit(index);
        }
    }
    constructor(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.ngxAlignTabs = 'start';
        this.ngxMode = 'default';
        this.ngxTabPosition = 'top';
        this.internalSelectedIndex = 0;
        this.ngxSelectedIndexChange = new EventEmitter();
    }
    ngAfterContentInit() {
        this.selectTab(this.internalSelectedIndex);
    }
    findTabByIndex(index) {
        const tabs = this.tabs.toArray();
        return tabs[index];
    }
    selectTab(index) {
        let tab = this.findTabByIndex(index);
        if (tab?.disabled) {
            return;
        }
        this.tabs?.forEach((tab) => (tab.isActive = false));
        if (tab) {
            tab.isActive = true;
        }
        this.ngxSelectedIndexChange.emit(index);
        this.cdr.markForCheck();
    }
    closeTab(tab) {
        if (tab?.disabled) {
            return;
        }
        const tabs = this.tabs.toArray();
        let index = tabs.findIndex((tb) => tb.id === tab.id);
        tabs.splice(index, 1);
        this.tabs = new QueryList();
        this.tabs.reset(tabs);
        const tabContent = document.getElementById(tab.id);
        this.renderer.removeChild(tabContent?.parentNode, tabContent);
        if (tab.isActive) {
            this.selectTab(0);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabGroupComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TabGroupComponent, isStandalone: true, selector: "ngx-tab-group", inputs: { ngxAlignTabs: "ngxAlignTabs", ngxMode: "ngxMode", ngxTabPosition: "ngxTabPosition", ngxSelectedIndex: "ngxSelectedIndex" }, outputs: { ngxSelectedIndexChange: "ngxSelectedIndexChange" }, host: { properties: { "class.ngx-tab-position-top": "ngxTabPosition === 'top'", "class.ngx-tab-position-left": "ngxTabPosition === 'left'", "class.ngx-tab-position-right": "ngxTabPosition === 'right'" }, classAttribute: "ngx-tab-group" }, queries: [{ propertyName: "tabs", predicate: TabComponent }], ngImport: i0, template: `
    <ul
      [class.ngx-tab-group-start]="ngxAlignTabs === 'start'"
      [class.ngx-tab-group-end]="ngxAlignTabs === 'end'"
      [class.ngx-tab-group-center]="ngxAlignTabs === 'center'"
      [class.ngx-tab-position-top]="ngxTabPosition === 'top'"
      [class.ngx-tab-position-left]="ngxTabPosition === 'left'"
      [class.ngx-tab-position-right]="ngxTabPosition === 'right'"
      *ngIf="tabs.length > 0"
    >
      <li
        [class.ngx-tab-position-top]="ngxTabPosition === 'top'"
        [class.ngx-tab-position-left]="ngxTabPosition === 'left'"
        [class.ngx-tab-position-right]="ngxTabPosition === 'right'"
        *ngFor="let tab of tabs; let ind = index"
        [class.active]="tab.isActive"
        [class.disabled]="tab.disabled"
        (click)="selectTab(ind)"
      >
        <span
          [class.ml-4]="ngxTabPosition === 'left'"
          [class.mr-2]="ngxTabPosition === 'left'"
          [class.ml-2]="ngxTabPosition === 'right'"
          >{{ tab.label }}</span
        >
        <svg
          class="ngx-tab-close"
          [class.ngx-tab-position-left]="ngxTabPosition === 'left'"
          [class.ngx-tab-position-right]="ngxTabPosition === 'right'"
          *ngIf="ngxMode === 'closeable'"
          (click)="closeTab(tab)"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 -960 960 960"
          width="1em"
        >
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
          />
        </svg>
      </li>
    </ul>

    <div
      class="ngx-tab-content-holder"
      [class.ml-4]="ngxTabPosition === 'left'"
      [class.mr-4]="ngxTabPosition === 'right'"
    >
      <ng-content></ng-content>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-tab-group',
                    template: `
    <ul
      [class.ngx-tab-group-start]="ngxAlignTabs === 'start'"
      [class.ngx-tab-group-end]="ngxAlignTabs === 'end'"
      [class.ngx-tab-group-center]="ngxAlignTabs === 'center'"
      [class.ngx-tab-position-top]="ngxTabPosition === 'top'"
      [class.ngx-tab-position-left]="ngxTabPosition === 'left'"
      [class.ngx-tab-position-right]="ngxTabPosition === 'right'"
      *ngIf="tabs.length > 0"
    >
      <li
        [class.ngx-tab-position-top]="ngxTabPosition === 'top'"
        [class.ngx-tab-position-left]="ngxTabPosition === 'left'"
        [class.ngx-tab-position-right]="ngxTabPosition === 'right'"
        *ngFor="let tab of tabs; let ind = index"
        [class.active]="tab.isActive"
        [class.disabled]="tab.disabled"
        (click)="selectTab(ind)"
      >
        <span
          [class.ml-4]="ngxTabPosition === 'left'"
          [class.mr-2]="ngxTabPosition === 'left'"
          [class.ml-2]="ngxTabPosition === 'right'"
          >{{ tab.label }}</span
        >
        <svg
          class="ngx-tab-close"
          [class.ngx-tab-position-left]="ngxTabPosition === 'left'"
          [class.ngx-tab-position-right]="ngxTabPosition === 'right'"
          *ngIf="ngxMode === 'closeable'"
          (click)="closeTab(tab)"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 -960 960 960"
          width="1em"
        >
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
          />
        </svg>
      </li>
    </ul>

    <div
      class="ngx-tab-content-holder"
      [class.ml-4]="ngxTabPosition === 'left'"
      [class.mr-4]="ngxTabPosition === 'right'"
    >
      <ng-content></ng-content>
    </div>
  `,
                    host: {
                        class: 'ngx-tab-group',
                        '[class.ngx-tab-position-top]': `ngxTabPosition === 'top'`,
                        '[class.ngx-tab-position-left]': `ngxTabPosition === 'left'`,
                        '[class.ngx-tab-position-right]': `ngxTabPosition === 'right'`,
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [NgForOf, NgIf],
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { tabs: [{
                type: ContentChildren,
                args: [TabComponent]
            }], ngxAlignTabs: [{
                type: Input
            }], ngxMode: [{
                type: Input
            }], ngxTabPosition: [{
                type: Input
            }], ngxSelectedIndex: [{
                type: Input
            }], ngxSelectedIndexChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1lYWdsZS90YWIvdGFiLWdyb3VwL3RhYi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFrRWhELE1BQU0sT0FBTyxpQkFBaUI7SUFTNUIsSUFDSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksZ0JBQWdCLENBQUMsS0FBYTtRQUNoQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsS0FBSyxLQUFLLEVBQUU7WUFDeEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUtELFlBQW9CLFFBQW1CLEVBQVUsR0FBc0I7UUFBbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBckI5RCxpQkFBWSxHQUFpQixPQUFPLENBQUM7UUFDckMsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUM3QixtQkFBYyxHQUFtQixLQUFLLENBQUM7UUFFaEQsMEJBQXFCLEdBQVcsQ0FBQyxDQUFDO1FBY3hCLDJCQUFzQixHQUM5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBRTZDLENBQUM7SUFFM0Usa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuLi90YWIvdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYiB9IGZyb20gJy4uL3RhYi90YWIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTmdGb3JPZiwgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5neEFsaWduVGFicywgTmd4TW9kZSwgTmd4VGFiUG9zaXRpb24gfSBmcm9tICcuLi90eXBpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXRhYi1ncm91cCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx1bFxyXG4gICAgICBbY2xhc3Mubmd4LXRhYi1ncm91cC1zdGFydF09XCJuZ3hBbGlnblRhYnMgPT09ICdzdGFydCdcIlxyXG4gICAgICBbY2xhc3Mubmd4LXRhYi1ncm91cC1lbmRdPVwibmd4QWxpZ25UYWJzID09PSAnZW5kJ1wiXHJcbiAgICAgIFtjbGFzcy5uZ3gtdGFiLWdyb3VwLWNlbnRlcl09XCJuZ3hBbGlnblRhYnMgPT09ICdjZW50ZXInXCJcclxuICAgICAgW2NsYXNzLm5neC10YWItcG9zaXRpb24tdG9wXT1cIm5neFRhYlBvc2l0aW9uID09PSAndG9wJ1wiXHJcbiAgICAgIFtjbGFzcy5uZ3gtdGFiLXBvc2l0aW9uLWxlZnRdPVwibmd4VGFiUG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICAgIFtjbGFzcy5uZ3gtdGFiLXBvc2l0aW9uLXJpZ2h0XT1cIm5neFRhYlBvc2l0aW9uID09PSAncmlnaHQnXCJcclxuICAgICAgKm5nSWY9XCJ0YWJzLmxlbmd0aCA+IDBcIlxyXG4gICAgPlxyXG4gICAgICA8bGlcclxuICAgICAgICBbY2xhc3Mubmd4LXRhYi1wb3NpdGlvbi10b3BdPVwibmd4VGFiUG9zaXRpb24gPT09ICd0b3AnXCJcclxuICAgICAgICBbY2xhc3Mubmd4LXRhYi1wb3NpdGlvbi1sZWZ0XT1cIm5neFRhYlBvc2l0aW9uID09PSAnbGVmdCdcIlxyXG4gICAgICAgIFtjbGFzcy5uZ3gtdGFiLXBvc2l0aW9uLXJpZ2h0XT1cIm5neFRhYlBvc2l0aW9uID09PSAncmlnaHQnXCJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpbmQgPSBpbmRleFwiXHJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWIuaXNBY3RpdmVcIlxyXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxyXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RUYWIoaW5kKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgW2NsYXNzLm1sLTRdPVwibmd4VGFiUG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICAgICAgICBbY2xhc3MubXItMl09XCJuZ3hUYWJQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgICAgICAgIFtjbGFzcy5tbC0yXT1cIm5neFRhYlBvc2l0aW9uID09PSAncmlnaHQnXCJcclxuICAgICAgICAgID57eyB0YWIubGFiZWwgfX08L3NwYW5cclxuICAgICAgICA+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgY2xhc3M9XCJuZ3gtdGFiLWNsb3NlXCJcclxuICAgICAgICAgIFtjbGFzcy5uZ3gtdGFiLXBvc2l0aW9uLWxlZnRdPVwibmd4VGFiUG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICAgICAgICBbY2xhc3Mubmd4LXRhYi1wb3NpdGlvbi1yaWdodF09XCJuZ3hUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICAgICAqbmdJZj1cIm5neE1vZGUgPT09ICdjbG9zZWFibGUnXCJcclxuICAgICAgICAgIChjbGljayk9XCJjbG9zZVRhYih0YWIpXCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIm0yNTYtMjAwLTU2LTU2IDIyNC0yMjQtMjI0LTIyNCA1Ni01NiAyMjQgMjI0IDIyNC0yMjQgNTYgNTYtMjI0IDIyNCAyMjQgMjI0LTU2IDU2LTIyNC0yMjQtMjI0IDIyNFpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcblxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cIm5neC10YWItY29udGVudC1ob2xkZXJcIlxyXG4gICAgICBbY2xhc3MubWwtNF09XCJuZ3hUYWJQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgICAgW2NsYXNzLm1yLTRdPVwibmd4VGFiUG9zaXRpb24gPT09ICdyaWdodCdcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LXRhYi1ncm91cCcsXHJcbiAgICAnW2NsYXNzLm5neC10YWItcG9zaXRpb24tdG9wXSc6IGBuZ3hUYWJQb3NpdGlvbiA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtdGFiLXBvc2l0aW9uLWxlZnRdJzogYG5neFRhYlBvc2l0aW9uID09PSAnbGVmdCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtdGFiLXBvc2l0aW9uLXJpZ2h0XSc6IGBuZ3hUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0J2AsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ0Zvck9mLCBOZ0lmXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHB1YmxpYyB0YWJzITogUXVlcnlMaXN0PFRhYkNvbXBvbmVudD47XHJcbiBcclxuICBASW5wdXQoKSBuZ3hBbGlnblRhYnM6IE5neEFsaWduVGFicyA9ICdzdGFydCc7XHJcbiAgQElucHV0KCkgbmd4TW9kZTogTmd4TW9kZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuZ3hUYWJQb3NpdGlvbjogTmd4VGFiUG9zaXRpb24gPSAndG9wJztcclxuIFxyXG4gIGludGVybmFsU2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbmd4U2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuXHJcbiAgc2V0IG5neFNlbGVjdGVkSW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJuYWxTZWxlY3RlZEluZGV4ICE9PSBpbmRleCkge1xyXG4gICAgICB0aGlzLmludGVybmFsU2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzLm5neFNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgbmd4U2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPVxyXG4gICAgbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdFRhYih0aGlzLmludGVybmFsU2VsZWN0ZWRJbmRleCk7XHJcbiAgfVxyXG5cclxuICBmaW5kVGFiQnlJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiB0YWJzW2luZGV4XTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFRhYihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgdGFiOiBUYWIgPSB0aGlzLmZpbmRUYWJCeUluZGV4KGluZGV4KTtcclxuICAgIGlmICh0YWI/LmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudGFicz8uZm9yRWFjaCgodGFiKSA9PiAodGFiLmlzQWN0aXZlID0gZmFsc2UpKTtcclxuICAgIGlmICh0YWIpIHtcclxuICAgICAgdGFiLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMubmd4U2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VUYWIodGFiOiBUYWIpOiB2b2lkIHtcclxuICAgIGlmICh0YWI/LmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG4gICAgbGV0IGluZGV4ID0gdGFicy5maW5kSW5kZXgoKHRiKSA9PiB0Yi5pZCA9PT0gdGFiLmlkKTtcclxuICAgIHRhYnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHRoaXMudGFicyA9IG5ldyBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PigpO1xyXG4gICAgdGhpcy50YWJzLnJlc2V0KHRhYnMpO1xyXG4gICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYi5pZCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRhYkNvbnRlbnQ/LnBhcmVudE5vZGUsIHRhYkNvbnRlbnQpO1xyXG4gICAgaWYgKHRhYi5pc0FjdGl2ZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdFRhYigwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19