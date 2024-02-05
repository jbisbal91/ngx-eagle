import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { NgStyle, NgIf } from '@angular/common';

class TagComponent {
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

class TagModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TagModule, imports: [TagComponent], exports: [TagComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [TagComponent],
                    imports: [TagComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TagComponent, TagModule };
//# sourceMappingURL=ngx-eagle-tag.mjs.map
