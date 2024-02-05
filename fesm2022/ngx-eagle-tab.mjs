import * as i0 from '@angular/core';
import { Component, Input, QueryList, ChangeDetectionStrategy, ContentChildren, NgModule } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';

class TabComponent {
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

class TabGroupComponent {
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

const COMPONENTS = [TabComponent, TabGroupComponent];
class TabModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TabModule, imports: [TabComponent, TabGroupComponent], exports: [TabComponent, TabGroupComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TabModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [COMPONENTS],
                    exports: [COMPONENTS],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TabComponent, TabGroupComponent, TabModule };
//# sourceMappingURL=ngx-eagle-tab.mjs.map
