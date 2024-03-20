import * as i0 from '@angular/core';
import { booleanAttribute, Component, Input, EventEmitter, QueryList, ChangeDetectionStrategy, ContentChildren, Output, NgModule } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { Guid } from 'ngx-eagle/core/services';

class TabComponent {
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

class TabGroupComponent {
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

const TabGroupPosition = ['top', 'left', 'right'];
const TabGroupAlign = ['start', 'center', 'end'];
const TabGroupMode = ['default', 'closeable'];

/**
 * Generated bundle index. Do not edit.
 */

export { TabComponent, TabGroupComponent, TabModule };
//# sourceMappingURL=ngx-eagle-tab.mjs.map
