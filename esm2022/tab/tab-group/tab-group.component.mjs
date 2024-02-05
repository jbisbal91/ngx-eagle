import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { NgForOf, NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class TabGroupComponent {
    constructor(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.ngxTabPosition = 'top';
        this.ngxMode = 'default';
        this.ngxAlignTabs = 'start';
    }
    ngOnInit() {
        setTimeout(() => {
            this.selectTab(this.tabs?.first);
            this.cdr.detectChanges();
        });
    }
    selectTab(tab) {
        if (tab?.disabled) {
            return;
        }
        this.tabs?.forEach((tab) => (tab.isActive = false));
        if (tab) {
            tab.isActive = true;
        }
        this.cdr.markForCheck();
    }
    closeTab(tab) {
        const tabs = this.tabs.toArray();
        let index = tabs.findIndex((tb) => tb.id === tab.id);
        tabs.splice(index, 1);
        this.tabs = new QueryList();
        this.tabs.reset(tabs);
        const tabContent = document.getElementById(tab.id);
        this.renderer.removeChild(tabContent?.parentNode, tabContent);
        if (tab.isActive) {
            this.selectTab(this.tabs.first);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabGroupComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TabGroupComponent, isStandalone: true, selector: "ngx-tab-group", inputs: { ngxTabPosition: "ngxTabPosition", ngxMode: "ngxMode", ngxAlignTabs: "ngxAlignTabs" }, host: { properties: { "class.ngx-tab-position-top": "ngxTabPosition === 'top'", "class.ngx-tab-position-left": "ngxTabPosition === 'left'", "class.ngx-tab-position-right": "ngxTabPosition === 'right'" }, classAttribute: "ngx-tab-group" }, queries: [{ propertyName: "tabs", predicate: TabComponent }], ngImport: i0, template: `
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
        *ngFor="let tab of tabs"
        [class.active]="tab.isActive"
        [class.disabled]="tab.disabled"
        (click)="selectTab(tab)"
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
      class="mt-2"
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
        *ngFor="let tab of tabs"
        [class.active]="tab.isActive"
        [class.disabled]="tab.disabled"
        (click)="selectTab(tab)"
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
      class="mt-2"
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
            }], ngxTabPosition: [{
                type: Input
            }], ngxMode: [{
                type: Input
            }], ngxAlignTabs: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS90YWIvdGFiLWdyb3VwL3RhYi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFFTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBc0VoRCxNQUFNLE9BQU8saUJBQWlCO0lBTzVCLFlBQW9CLFFBQW1CLEVBQVUsR0FBc0I7UUFBbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBSjlELG1CQUFjLEdBQW1CLEtBQUssQ0FBQztRQUN2QyxZQUFPLEdBQVksU0FBUyxDQUFDO1FBQzdCLGlCQUFZLEdBQWlCLE9BQU8sQ0FBQztJQUU0QixDQUFDO0lBRTNFLFFBQVE7UUFDTixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVE7UUFDaEIsSUFBSSxHQUFHLEVBQUUsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVE7UUFDZixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQWdCLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzsrR0F0Q1UsaUJBQWlCO21HQUFqQixpQkFBaUIsNmFBQ1gsWUFBWSw2QkEvRG5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtRFQsNERBU1MsT0FBTyxtSEFBQyxJQUFJOzs0RkFFWCxpQkFBaUI7a0JBaEU3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1EVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGVBQWU7d0JBQ3RCLDhCQUE4QixFQUFFLDBCQUEwQjt3QkFDMUQsK0JBQStCLEVBQUUsMkJBQTJCO3dCQUM1RCxnQ0FBZ0MsRUFBRSw0QkFBNEI7cUJBQy9EO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQztpQkFDeEI7Z0lBRXVDLElBQUk7c0JBQXpDLGVBQWU7dUJBQUMsWUFBWTtnQkFFcEIsY0FBYztzQkFBdEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiL3RhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWIgfSBmcm9tICcuLi90YWIvdGFiLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE5nRm9yT2YsIE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuZXhwb3J0IHR5cGUgTmd4VGFiUG9zaXRpb24gPSAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCc7XHJcbmV4cG9ydCB0eXBlIE5neEFsaWduVGFicyA9ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInO1xyXG5leHBvcnQgdHlwZSBOZ3hNb2RlID0gJ2RlZmF1bHQnIHwgJ2Nsb3NlYWJsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC10YWItZ3JvdXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8dWxcclxuICAgICAgW2NsYXNzLm5neC10YWItZ3JvdXAtc3RhcnRdPVwibmd4QWxpZ25UYWJzID09PSAnc3RhcnQnXCJcclxuICAgICAgW2NsYXNzLm5neC10YWItZ3JvdXAtZW5kXT1cIm5neEFsaWduVGFicyA9PT0gJ2VuZCdcIlxyXG4gICAgICBbY2xhc3Mubmd4LXRhYi1ncm91cC1jZW50ZXJdPVwibmd4QWxpZ25UYWJzID09PSAnY2VudGVyJ1wiXHJcbiAgICAgIFtjbGFzcy5uZ3gtdGFiLXBvc2l0aW9uLXRvcF09XCJuZ3hUYWJQb3NpdGlvbiA9PT0gJ3RvcCdcIlxyXG4gICAgICBbY2xhc3Mubmd4LXRhYi1wb3NpdGlvbi1sZWZ0XT1cIm5neFRhYlBvc2l0aW9uID09PSAnbGVmdCdcIlxyXG4gICAgICBbY2xhc3Mubmd4LXRhYi1wb3NpdGlvbi1yaWdodF09XCJuZ3hUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICpuZ0lmPVwidGFicy5sZW5ndGggPiAwXCJcclxuICAgID5cclxuICAgICAgPGxpXHJcbiAgICAgICAgW2NsYXNzLm5neC10YWItcG9zaXRpb24tdG9wXT1cIm5neFRhYlBvc2l0aW9uID09PSAndG9wJ1wiXHJcbiAgICAgICAgW2NsYXNzLm5neC10YWItcG9zaXRpb24tbGVmdF09XCJuZ3hUYWJQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgICAgICBbY2xhc3Mubmd4LXRhYi1wb3NpdGlvbi1yaWdodF09XCJuZ3hUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcclxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5pc0FjdGl2ZVwiXHJcbiAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdFRhYih0YWIpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBbY2xhc3MubWwtNF09XCJuZ3hUYWJQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgICAgICAgIFtjbGFzcy5tci0yXT1cIm5neFRhYlBvc2l0aW9uID09PSAnbGVmdCdcIlxyXG4gICAgICAgICAgW2NsYXNzLm1sLTJdPVwibmd4VGFiUG9zaXRpb24gPT09ICdyaWdodCdcIlxyXG4gICAgICAgICAgPnt7IHRhYi5sYWJlbCB9fTwvc3BhblxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgY2xhc3M9XCJuZ3gtdGFiLWNsb3NlXCJcclxuICAgICAgICAgIFtjbGFzcy5uZ3gtdGFiLXBvc2l0aW9uLWxlZnRdPVwibmd4VGFiUG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICAgICAgICBbY2xhc3Mubmd4LXRhYi1wb3NpdGlvbi1yaWdodF09XCJuZ3hUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICAgICAqbmdJZj1cIm5neE1vZGUgPT09ICdjbG9zZWFibGUnXCJcclxuICAgICAgICAgIChjbGljayk9XCJjbG9zZVRhYih0YWIpXCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIm0yNTYtMjAwLTU2LTU2IDIyNC0yMjQtMjI0LTIyNCA1Ni01NiAyMjQgMjI0IDIyNC0yMjQgNTYgNTYtMjI0IDIyNCAyMjQgMjI0LTU2IDU2LTIyNC0yMjQtMjI0IDIyNFpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcblxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cIm10LTJcIlxyXG4gICAgICBbY2xhc3MubWwtNF09XCJuZ3hUYWJQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcclxuICAgICAgW2NsYXNzLm1yLTRdPVwibmd4VGFiUG9zaXRpb24gPT09ICdyaWdodCdcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LXRhYi1ncm91cCcsXHJcbiAgICAnW2NsYXNzLm5neC10YWItcG9zaXRpb24tdG9wXSc6IGBuZ3hUYWJQb3NpdGlvbiA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtdGFiLXBvc2l0aW9uLWxlZnRdJzogYG5neFRhYlBvc2l0aW9uID09PSAnbGVmdCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtdGFiLXBvc2l0aW9uLXJpZ2h0XSc6IGBuZ3hUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0J2AsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ0Zvck9mLE5nSWZdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQ29tcG9uZW50KSBwdWJsaWMgdGFicyE6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBuZ3hUYWJQb3NpdGlvbjogTmd4VGFiUG9zaXRpb24gPSAndG9wJztcclxuICBASW5wdXQoKSBuZ3hNb2RlOiBOZ3hNb2RlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG5neEFsaWduVGFiczogTmd4QWxpZ25UYWJzID0gJ3N0YXJ0JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMudGFicz8uZmlyc3QpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFRhYih0YWI6IFRhYikge1xyXG4gICAgaWYgKHRhYj8uZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJzPy5mb3JFYWNoKCh0YWIpID0+ICh0YWIuaXNBY3RpdmUgPSBmYWxzZSkpO1xyXG4gICAgaWYgKHRhYikge1xyXG4gICAgICB0YWIuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZVRhYih0YWI6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XHJcbiAgICBsZXQgaW5kZXggPSB0YWJzLmZpbmRJbmRleCgodGIpID0+IHRiLmlkID09PSB0YWIuaWQpO1xyXG4gICAgdGFicy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy50YWJzID0gbmV3IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+KCk7XHJcbiAgICB0aGlzLnRhYnMucmVzZXQodGFicyk7XHJcbiAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiLmlkKTtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGFiQ29udGVudD8ucGFyZW50Tm9kZSwgdGFiQ29udGVudCk7XHJcbiAgICBpZiAodGFiLmlzQWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMudGFicy5maXJzdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==