import * as i0 from '@angular/core';
import { numberAttribute, booleanAttribute, Directive, Input, NgModule } from '@angular/core';
import * as i1 from 'ngx-eagle/core/services';

const BadgeSize = ['small', 'medium', 'large'];
const BadgePosition = ['before', 'after'];
const nodeNameForText = {
    P: 'p',
    SPAN: 'span',
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    A: 'a',
    STRONG: 'strong',
    EM: 'em',
    B: 'b',
    I: 'i',
    U: 'u',
    S: 's',
    SUP: 'sup',
    SUB: 'sub',
    BLOCKQUOTE: 'blockquote',
    Q: 'q',
    CITE: 'cite',
    CODE: 'code',
    PRE: 'pre',
    ABBR: 'abbr',
    TIME: 'time',
};

class BadgeDirective {
    constructor(elementRef, renderer2, colorConverter) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.colorConverter = colorConverter;
        this.ngxBadgeHidden = false;
        this.ngxBadgePosition = 'after';
        this.ngxBadgeSize = 'small';
        this.ngxOverflowCount = 99;
        this.newSpan = document.createElement('span');
    }
    ngOnChanges(changes) {
        if (changes['ngxBadgeHidden']?.currentValue) {
            this.renderer2.addClass(this.newSpan, 'ngx-badge-hidden');
        }
        else {
            this.renderer2.removeClass(this.newSpan, 'ngx-badge-hidden');
        }
        if (changes.hasOwnProperty('ngxBadgeColor')) {
            this.setColor(this.ngxBadgeColor);
        }
        if (changes.hasOwnProperty('ngxBadgeSize')) {
            this.setSize();
        }
        if (changes.hasOwnProperty('ngxBadge')) {
            this.setTextContent();
        }
        if (changes.hasOwnProperty('ngxOverflowCount')) {
            this.setTextContent();
        }
        if (changes.hasOwnProperty('ngxBadgePosition')) {
            this.setPosition();
        }
    }
    ngAfterViewInit() {
        this.buildBadge();
        if (!this.ngxBadgeColor) {
            this.setColor('#FF4D4F');
        }
        this.setTextContent();
        this.setPosition();
        this.setSize();
    }
    buildBadge() {
        this.renderer2.addClass(this.newSpan, 'ngx-badge-content');
        this.renderer2.appendChild(this.elementRef.nativeElement, this.newSpan);
        this.setMaxWidth();
    }
    setPosition() {
        if (this.ngxBadgePosition === 'before') {
            this.renderer2.addClass(this.newSpan, 'ngx-badge-before');
        }
        else {
            this.renderer2.removeClass(this.newSpan, 'ngx-badge-before');
        }
    }
    setMaxWidth() {
        const nodeName = this.elementRef.nativeElement.nodeName;
        if (nodeNameForText[nodeName]) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'width', 'fit-content');
        }
    }
    setSize() {
        this.renderer2.addClass(this.newSpan, `ngx-badge-${this.ngxBadgeSize}`);
    }
    setTextContent() {
        this.newSpan.textContent =
            this.ngxBadge > this.ngxOverflowCount
                ? `${this.ngxOverflowCount}+`
                : `${this.ngxBadge}`;
    }
    setColor(color) {
        var colorContrast;
        if (typeof color === 'string') {
            colorContrast =
                color !== '#FF4D4F'
                    ? this.colorConverter.contrastingColors(color)
                    : { backgroundColor: '#FF4D4F', overlayColor: '#ffffff' };
        }
        if (typeof color === 'object') {
            colorContrast = color;
        }
        this.renderer2.setStyle(this.newSpan, 'background-color', colorContrast.backgroundColor);
        this.renderer2.setStyle(this.newSpan, 'color', colorContrast.overlayColor);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.ColorConverter }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: BadgeDirective, isStandalone: true, selector: "[ngxBadge]", inputs: { ngxBadge: ["ngxBadge", "ngxBadge", numberAttribute], ngxBadgeColor: "ngxBadgeColor", ngxBadgeHidden: ["ngxBadgeHidden", "ngxBadgeHidden", booleanAttribute], ngxBadgePosition: "ngxBadgePosition", ngxBadgeSize: "ngxBadgeSize", ngxOverflowCount: ["ngxOverflowCount", "ngxOverflowCount", numberAttribute] }, host: { classAttribute: "ngx-badge" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxBadge]',
                    host: {
                        class: 'ngx-badge',
                    },
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ColorConverter }]; }, propDecorators: { ngxBadge: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], ngxBadgeColor: [{
                type: Input
            }], ngxBadgeHidden: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxBadgePosition: [{
                type: Input
            }], ngxBadgeSize: [{
                type: Input
            }], ngxOverflowCount: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }] } });

class BadgeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: BadgeModule, imports: [BadgeDirective], exports: [BadgeDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BadgeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [BadgeDirective],
                    exports: [BadgeDirective],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeDirective, BadgeModule, nodeNameForText };
//# sourceMappingURL=ngx-eagle-badge.mjs.map
