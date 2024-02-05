import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';

class TableDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngxScroll = null;
        this.ngxBordered = false;
    }
    ngAfterViewInit() {
        this.addScroll();
    }
    addScroll() {
        if (this.ngxScroll) {
            const { x, y } = this.ngxScroll;
            const newDiv = this.renderer2.createElement('div');
            this.renderer2.addClass(newDiv, 'table-container');
            if (x || y) {
                this.renderer2.setStyle(newDiv, 'overflow', 'scroll');
                if (x) {
                    this.renderer2.setStyle(newDiv, 'max-width', x);
                }
                if (y) {
                    this.renderer2.setStyle(newDiv, 'max-height', y);
                }
                this.renderer2.insertBefore(this.renderer2.parentNode(this.elementRef.nativeElement), newDiv, this.elementRef.nativeElement);
                this.renderer2.appendChild(newDiv, this.elementRef.nativeElement);
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TableDirective, isStandalone: true, selector: "table[ngx-table]", inputs: { ngxScroll: "ngxScroll", ngxBordered: "ngxBordered" }, host: { properties: { "class.ngx-table-bordered": "ngxBordered" }, classAttribute: "ngx-table" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'table[ngx-table]',
                    host: {
                        class: 'ngx-table',
                        '[class.ngx-table-bordered]': 'ngxBordered',
                    },
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { ngxScroll: [{
                type: Input
            }], ngxBordered: [{
                type: Input
            }] } });

class ColumnGroupDirective {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColumnGroupDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ColumnGroupDirective, isStandalone: true, selector: "tr[ngx-column-group]", host: { classAttribute: "ngx-column-group" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColumnGroupDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'tr[ngx-column-group]',
                    host: {
                        class: 'ngx-column-group',
                    },
                    standalone: true,
                }]
        }], ctorParameters: function () { return []; } });

class TableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TableModule, imports: [TableDirective, ColumnGroupDirective], exports: [TableDirective, ColumnGroupDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [TableDirective, ColumnGroupDirective],
                    imports: [TableDirective, ColumnGroupDirective],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnGroupDirective, TableDirective, TableModule };
//# sourceMappingURL=ngx-eagle-table.mjs.map
