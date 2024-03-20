import * as i0 from '@angular/core';
import { numberAttribute, Directive, Input, Optional, Host, NgModule } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

class RowDirective {
    constructor(cdr) {
        this.cdr = cdr;
        this.ngxSpan = 24;
        this.currentSpan$ = new ReplaySubject(24);
        this.currentGutter$ = new ReplaySubject(1);
    }
    ngAfterContentInit() {
        this.currentSpan$.next(this.ngxSpan);
        this.currentGutter$.next(this.ngxGutter);
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RowDirective, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: RowDirective, selector: "[ngx-row]", inputs: { ngxAlign: "ngxAlign", ngxGutter: "ngxGutter", ngxJustify: "ngxJustify", ngxSpan: ["ngxSpan", "ngxSpan", numberAttribute] }, host: { properties: { "class.ngx-row-top": "ngxAlign === 'top'", "class.ngx-row-middle": "ngxAlign === 'middle'", "class.ngx-row-bottom": "ngxAlign === 'bottom'", "class.ngx-row-start": "ngxJustify === 'start'", "class.ngx-row-end": "ngxJustify === 'end'", "class.ngx-row-center": "ngxJustify === 'center'", "class.ngx-row-space-around": "ngxJustify === 'space-around'", "class.ngx-row-space-between": "ngxJustify === 'space-between'", "class.ngx-row-space-evenly": "ngxJustify === 'space-evenly'" }, classAttribute: "ngx-row" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-row]',
                    host: {
                        class: 'ngx-row',
                        '[class.ngx-row-top]': `ngxAlign === 'top'`,
                        '[class.ngx-row-middle]': `ngxAlign === 'middle'`,
                        '[class.ngx-row-bottom]': `ngxAlign === 'bottom'`,
                        '[class.ngx-row-start]': `ngxJustify === 'start'`,
                        '[class.ngx-row-end]': `ngxJustify === 'end'`,
                        '[class.ngx-row-center]': `ngxJustify === 'center'`,
                        '[class.ngx-row-space-around]': `ngxJustify === 'space-around'`,
                        '[class.ngx-row-space-between]': `ngxJustify === 'space-between'`,
                        '[class.ngx-row-space-evenly]': `ngxJustify === 'space-evenly'`,
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { ngxAlign: [{
                type: Input
            }], ngxGutter: [{
                type: Input
            }], ngxJustify: [{
                type: Input
            }], ngxSpan: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }] } });

class ColDirective {
    constructor(elementRef, renderer2, rowDirective) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.rowDirective = rowDirective;
        this.ngxSpan = 24;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.rowDirective?.currentSpan$.subscribe((currentSpan) => {
            this.setMaxWidthCols(currentSpan);
        }));
        this.subscription.add(this.rowDirective?.currentGutter$.subscribe((currentGutter) => {
            if (currentGutter) {
                const gutter = JSON.parse(currentGutter)
                    .map((val) => val + 'px')
                    .join(' ');
                this.setGutter(gutter);
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    setMaxWidthCols(totalCols) {
        if (this.ngxSpan === 0) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
        }
        else {
            const maxWidth = (Number(this.ngxSpan) / totalCols) * 100;
            this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'block');
            this.renderer2.setStyle(this.elementRef.nativeElement, 'max-width', `${maxWidth}%`);
            this.renderer2.setStyle(this.elementRef.nativeElement, 'flex', `0 0 ${maxWidth}%`);
        }
    }
    setGutter(gutter) {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'margin', `${gutter}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: RowDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: ColDirective, selector: "[ngx-col]", inputs: { ngxSpan: ["ngxSpan", "ngxSpan", numberAttribute] }, host: { classAttribute: "ngx-col" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-col]',
                    host: {
                        class: 'ngx-col',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: RowDirective, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }]; }, propDecorators: { ngxSpan: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }] } });

const directives = [RowDirective, ColDirective];
class GridModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: GridModule, declarations: [RowDirective, ColDirective], imports: [CommonModule], exports: [RowDirective, ColDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [directives],
                    exports: [directives],
                    imports: [CommonModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColDirective, GridModule, RowDirective };
//# sourceMappingURL=ngx-eagle-grid.mjs.map
