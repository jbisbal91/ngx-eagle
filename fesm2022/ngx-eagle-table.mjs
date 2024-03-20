import * as i0 from '@angular/core';
import { booleanAttribute, Directive, Input, EventEmitter, Output, HostListener, NgModule } from '@angular/core';

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
            this.renderer2.addClass(newDiv, 'ngx-table-container');
            if (x || y) {
                this.renderer2.setStyle(newDiv, 'overflow', 'auto');
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: TableDirective, isStandalone: true, selector: "table[ngx-table]", inputs: { ngxScroll: "ngxScroll", ngxBordered: ["ngxBordered", "ngxBordered", booleanAttribute] }, host: { properties: { "class.ngx-table-bordered": "ngxBordered" }, classAttribute: "ngx-table" }, ngImport: i0 }); }
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
                type: Input,
                args: [{ transform: booleanAttribute }]
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

class SortDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.status = null;
        this.sort = document.createElement('div');
        this.arrowUp = document.createElement('span');
        this.arrowDown = document.createElement('span');
        this.changeSorting = new EventEmitter();
    }
    ngOnInit() {
        this.elementRef.nativeElement.addEventListener('click', this.onClick.bind(this));
        this.buildSort();
    }
    buildSort() {
        this.renderer.addClass(this.elementRef.nativeElement, 'ngx-th-sort-arrow');
        this.renderer.addClass(this.sort, 'ngx-sort-arrow');
        this.renderer.addClass(this.arrowUp, 'ngx-arrow-up');
        this.renderer.addClass(this.arrowDown, 'ngx-arrow-down');
        this.renderer.appendChild(this.sort, this.arrowUp);
        this.renderer.appendChild(this.sort, this.arrowDown);
        this.renderer.appendChild(this.elementRef.nativeElement, this.sort);
    }
    onClick(event) {
        if (this.status === null) {
            this.status = 'ascend';
            this.renderer.addClass(this.arrowUp, 'active');
            this.renderer.removeClass(this.arrowDown, 'active');
        }
        else if (this.status === 'ascend') {
            this.status = 'descend';
            this.renderer.removeClass(this.arrowUp, 'active');
            this.renderer.addClass(this.arrowDown, 'active');
        }
        else {
            this.status = null;
            this.renderer.removeClass(this.arrowUp, 'active');
            this.renderer.removeClass(this.arrowDown, 'active');
        }
        this.changeSorting.emit(this.status);
    }
    onClick3(event) {
        const clickedElement = event.target;
        if (!this.elementRef.nativeElement.contains(clickedElement) &&
            clickedElement.hasAttribute('ngxsort')) {
            this.status = null;
            this.renderer.removeClass(this.arrowUp, 'active');
            this.renderer.removeClass(this.arrowDown, 'active');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SortDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: SortDirective, isStandalone: true, selector: "th[ngxSort]", outputs: { changeSorting: "changeSorting" }, host: { listeners: { "document:click": "onClick3($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SortDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'th[ngxSort]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { changeSorting: [{
                type: Output
            }], onClick3: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class ResizeDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.isLeftClickPressed = false;
        this.startX = 0;
        this.width = 0;
        this.mouseMovement = 0;
        this.resize = document.createElement('div');
    }
    ngOnInit() {
        this.buildResize();
        this.resize.addEventListener('mousedown', this.onMouseDown.bind(this));
    }
    buildResize() {
        this.renderer.addClass(this.resize, 'ngx-th-resize');
        this.renderer.appendChild(this.elementRef.nativeElement, this.resize);
    }
    onMouseDown(event) {
        if (event.button === 0) {
            this.isLeftClickPressed = true;
            const cellProp = this.elementRef.nativeElement.getBoundingClientRect();
            this.width = cellProp.width;
        }
        if (this.isLeftClickPressed) {
            this.startX = event.clientX;
            this.renderer.listen('document', 'mousemove', this.onMouseMove.bind(this));
        }
    }
    onMouseMove(event) {
        if (event.button === 0 && this.isLeftClickPressed) {
            this.mouseMovement = event.clientX - this.startX;
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', `${this.width + this.mouseMovement}px`);
            console.log(`${this.width + this.mouseMovement}px`);
        }
    }
    mouseup(event) {
        if (event.button === 0 && this.isLeftClickPressed) {
            this.isLeftClickPressed = false;
            this.width += this.mouseMovement;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResizeDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ResizeDirective, isStandalone: true, selector: "th[ngxResize]", host: { listeners: { "document:mouseup": "mouseup($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ResizeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'th[ngxResize]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { mouseup: [{
                type: HostListener,
                args: ['document:mouseup', ['$event']]
            }] } });

class TableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TableModule, imports: [TableDirective,
            ColumnGroupDirective,
            SortDirective,
            ResizeDirective], exports: [TableDirective,
            ColumnGroupDirective,
            SortDirective,
            ResizeDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [
                        TableDirective,
                        ColumnGroupDirective,
                        SortDirective,
                        ResizeDirective,
                    ],
                    imports: [
                        TableDirective,
                        ColumnGroupDirective,
                        SortDirective,
                        ResizeDirective,
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnGroupDirective, ResizeDirective, SortDirective, TableDirective, TableModule };
//# sourceMappingURL=ngx-eagle-table.mjs.map
