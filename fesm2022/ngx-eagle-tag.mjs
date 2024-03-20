import * as i0 from '@angular/core';
import { EventEmitter, booleanAttribute, Component, Input, Output, NgModule } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import * as i1 from 'ngx-eagle/core/services';

class TagComponent {
    constructor(renderer, elementRef, colorConverter) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colorConverter = colorConverter;
        this.ngxBordered = true;
        this.ngxChecked = false;
        this.ngxMode = 'default';
        this.ngxOnClose = new EventEmitter();
        this.ngxCheckedChange = new EventEmitter();
        this.backgroundColor = '#1890FF';
        this.color = '#ffffff';
    }
    ngOnInit() {
        this.setTagColor();
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('ngxColor')) {
            const newColor = changes['ngxColor'].currentValue;
            if (typeof newColor === 'string') {
                const { backgroundColor, overlayColor } = this.colorConverter.contrastingColors(newColor);
                this.backgroundColor = backgroundColor;
                this.color = overlayColor;
                this.setTagColor();
            }
            if (typeof newColor === 'object') {
                this.backgroundColor = newColor.backgroundColor;
                this.color = newColor.overlayColor;
                this.setTagColor();
            }
        }
    }
    updateCheckedStatus() {
        if (this.ngxMode === 'checkable') {
            this.ngxChecked = !this.ngxChecked;
            this.setTagColor();
            this.ngxCheckedChange.emit(this.ngxChecked);
        }
    }
    setTagColor() {
        let bgColor = '';
        let color = '';
        let borderColor = '';
        switch (this.ngxMode) {
            case 'default':
                bgColor = this.backgroundColor;
                color = this.color;
                break;
            case 'checkable':
                bgColor = this.ngxChecked ? this.backgroundColor : 'transparent';
                color = this.ngxChecked ? this.color : 'currentColor';
                break;
            case 'closeable':
                bgColor = this.backgroundColor;
                color = this.color;
                break;
        }
        borderColor = this.color === '#ffffff' ? 'currentColor' : this.color;
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', bgColor);
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', this.ngxBordered ? borderColor : 'transparent');
    }
    closeTag(e) {
        this.ngxOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.ColorConverter }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: TagComponent, isStandalone: true, selector: "ngx-tag", inputs: { ngxBordered: ["ngxBordered", "ngxBordered", booleanAttribute], ngxColor: "ngxColor", ngxChecked: ["ngxChecked", "ngxChecked", booleanAttribute], ngxMode: "ngxMode" }, outputs: { ngxOnClose: "ngxOnClose", ngxCheckedChange: "ngxCheckedChange" }, host: { listeners: { "click": "updateCheckedStatus()" }, properties: { "class.ngx-tag-checkable": "ngxMode === 'checkable'" }, classAttribute: "ngx-tag" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
    <svg
      class="ngx-tag-close"
      *ngIf="ngxMode === 'closeable'"
      (click)="closeTag($event)"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 -960 960 960"
      width="14"
      fill="currentColor"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-tag',
                    template: `
    <ng-content></ng-content>
    <svg
      class="ngx-tag-close"
      *ngIf="ngxMode === 'closeable'"
      (click)="closeTag($event)"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 -960 960 960"
      width="14"
      fill="currentColor"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  `,
                    host: {
                        class: 'ngx-tag',
                        '[class.ngx-tag-checkable]': `ngxMode === 'checkable'`,
                        '(click)': 'updateCheckedStatus()',
                    },
                    standalone: true,
                    imports: [NgStyle, NgIf],
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.ColorConverter }]; }, propDecorators: { ngxBordered: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxColor: [{
                type: Input
            }], ngxChecked: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxMode: [{
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
