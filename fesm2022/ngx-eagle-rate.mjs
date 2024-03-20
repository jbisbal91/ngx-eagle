import * as i0 from '@angular/core';
import { booleanAttribute, forwardRef, Component, ChangeDetectionStrategy, Input, ViewChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class RateComponent {
    constructor(cdr, elementRef) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.ngxColor = '#FFA600';
        this.ngxAllowClear = true;
        this.context = null;
        this.disabled = false;
        this.selectedStar = -1;
        this.stars = [false, false, false, false, false]; // Estado de las estrellas (true = seleccionada, false = no seleccionada)
        this.onChange = () => { };
        this.onTouched = () => { };
        this.disabled = elementRef.nativeElement.hasAttribute('disabled');
    }
    ngOnInit() {
        this.context = this.canvas.nativeElement.getContext('2d');
        this.fillStar(this.selectedStar);
        this.canvas.nativeElement.addEventListener('mousemove', (event) => {
            if (!this.disabled) {
                this.onMouseMove(event);
            }
        });
    }
    writeValue(value) {
        if (value) {
            this.selectedStar = value - 1;
            this.onChange(value);
            this.fillStar(this.selectedStar);
        }
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
        this.cdr.markForCheck();
    }
    onMouseMove(event) {
        const rect = this.canvas.nativeElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        this.fillStar(this.findStarIndex(x, y));
    }
    findStarIndex(x, y) {
        const rect = this.canvas.nativeElement.getBoundingClientRect();
        let index = this.selectedStar;
        if (y >= 10 && y <= 27 && x <= rect.width && y <= rect.height) {
            if (x >= 10 && x <= 28) {
                index = 0;
            }
            else if (x >= 35 && x <= 54) {
                index = 1;
            }
            else if (x >= 60 && x <= 77) {
                index = 2;
            }
            else if (x >= 85 && x <= 103) {
                index = 3;
            }
            else if (x >= 110 && x <= 127) {
                index = 4;
            }
        }
        return index;
    }
    onCanvasClick(event) {
        if (!this.disabled) {
            const rect = this.canvas.nativeElement.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const index = this.findStarIndex(x, y);
            this.selectedStar = index !== this.selectedStar || !this.ngxAllowClear ? index : -1;
            this.writeValue(this.selectedStar !== -1 ? this.selectedStar + 1 : this.selectedStar);
            this.fillStar(this.selectedStar);
        }
    }
    drawStars() {
        const starRadius = 10; // Radio de las estrellas
        const spacing = 25; // Espaciado entre estrellas
        const startY = 20; // Posición Y de las estrellas
        for (let i = 0; i < 5; i++) {
            const startX = 20 + spacing * i; // Posición X de cada estrella
            this.drawStar(startX, startY, 5, starRadius, starRadius / 2, this.stars[i]); // Dibujar una estrella
        }
    }
    drawStar(cx, cy, spikes, outerRadius, innerRadius, filled) {
        let rot = (Math.PI / 2) * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;
        if (this.context) {
            this.context.beginPath();
            this.context.moveTo(cx, cy - outerRadius);
            for (let i = 0; i < spikes; i++) {
                x = cx + Math.cos(rot) * outerRadius;
                y = cy + Math.sin(rot) * outerRadius;
                this.context.lineTo(x, y);
                rot += step;
                x = cx + Math.cos(rot) * innerRadius;
                y = cy + Math.sin(rot) * innerRadius;
                this.context.lineTo(x, y);
                rot += step;
            }
            this.context.lineTo(cx, cy - outerRadius);
            this.context.closePath();
            if (filled) {
                this.context.fillStyle = this.ngxColor; // Color de la estrella seleccionada
                this.context.strokeStyle = this.ngxColor;
            }
            else {
                this.context.fillStyle = 'transparent';
                this.context.strokeStyle = this.ngxColor;
            }
            this.context.stroke();
            this.context.fill();
        }
    }
    // Método para cambiar el estado de la calificación al hacer clic en una estrella
    fillStar(index) {
        const canvasEl = this.canvas.nativeElement;
        this.context?.clearRect(0, 0, canvasEl.width, canvasEl.height);
        this.stars = this.stars.map((star, i) => i <= index);
        this.drawStars();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RateComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: RateComponent, isStandalone: true, selector: "ngx-rate", inputs: { ngxColor: "ngxColor", ngxAllowClear: ["ngxAllowClear", "ngxAllowClear", booleanAttribute] }, host: { classAttribute: "ngx-rate" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RateComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "canvas", first: true, predicate: ["rateCanvas"], descendants: true, static: true }], ngImport: i0, template: `
    <canvas
      #rateCanvas
      width="140"
      height="40"
      (click)="onCanvasClick($event)"
    ></canvas>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-rate',
                    template: `
    <canvas
      #rateCanvas
      width="140"
      height="40"
      (click)="onCanvasClick($event)"
    ></canvas>
  `,
                    host: {
                        class: 'ngx-rate',
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RateComponent),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, propDecorators: { ngxColor: [{
                type: Input
            }], ngxAllowClear: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], canvas: [{
                type: ViewChild,
                args: ['rateCanvas', { static: true }]
            }] } });

class RateModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: RateModule, imports: [RateComponent], exports: [RateComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RateModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RateModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [RateComponent],
                    imports: [RateComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { RateComponent, RateModule };
//# sourceMappingURL=ngx-eagle-rate.mjs.map
