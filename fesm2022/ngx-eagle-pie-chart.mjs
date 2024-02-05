import * as i0 from '@angular/core';
import { EventEmitter, numberAttribute, Component, ChangeDetectionStrategy, ViewChild, Input, Output, NgModule } from '@angular/core';
import { NgForOf, NgStyle } from '@angular/common';

class PieChartComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.context = null;
        this.width = 300;
        this.height = 300;
        this.value = [];
        this.ngxPosition = 'right';
        this.ngxGutter = 0;
        this.partChartIndex = new EventEmitter();
    }
    ngOnInit() {
        this.context = this.canvas.nativeElement.getContext('2d');
        setTimeout(() => {
            this.drawPieChart(this.value);
            this.canvas.nativeElement.addEventListener('mousemove', (event) => {
                const rect = this.canvas.nativeElement.getBoundingClientRect();
                const mouseX = event.clientX - rect.left;
                const mouseY = event.clientY - rect.top;
                // Logic to determine which part of the graph the mouse corresponds to
                const partChartId = this.detectPart(mouseX, mouseY);
                this.partChartIndex.emit(partChartId);
                this.canvas.nativeElement.style.cursor =
                    partChartId !== -1 ? 'pointer' : 'default';
                this.drawPieChart(this.value, partChartId);
            });
            this.cdr.detectChanges();
        });
    }
    mouseenter(val) {
        const partChartId = this.value.findIndex((v) => v === val);
        this.partChartIndex.emit(partChartId);
        this.drawPieChart(this.value, partChartId);
    }
    mouseleave() {
        this.partChartIndex.emit(-1);
        this.drawPieChart(this.value, -1);
    }
    /**
     * Create the graph
     * @param value is of type PieChart[], partGraphId will be the id obtained by hovering the mouse
     * over each part of the graph.
     */
    drawPieChart(value, partGraphId = -1) {
        const ctx = this.context;
        if (ctx) {
            const canvasEl = this.canvas.nativeElement;
            ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
            const centerX = canvasEl.width / 2;
            const centerY = canvasEl.height / 2;
            const radius = Math.min(canvasEl.width, canvasEl.height) / 2 - 10;
            const total = this.value.reduce((total, currentValue) => total + currentValue.value, 0);
            let initAngle = 0;
            for (let i = 0; i < value.length; ++i) {
                const percent = value[i].value / total;
                const angle = Math.PI * 2 * percent;
                const _radius = partGraphId !== -1 && partGraphId === i ? radius * 1.065 : radius;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, _radius, initAngle, initAngle + angle);
                ctx.closePath();
                ctx.fillStyle = value[i].color;
                this.setShadow(ctx, partGraphId, i);
                ctx.fill();
                initAngle += angle;
            }
            this.drawRing(centerX, centerY, radius);
            this.buildCenteredText(value, total, partGraphId, centerX, centerY);
        }
        else {
            console.error('Null 2D context.');
        }
    }
    setShadow(ctx, partGraphId, index) {
        if (ctx && partGraphId !== -1 && partGraphId === index) {
            ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
            ctx.shadowBlur = 6;
        }
        else {
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
        }
    }
    /**
     * Build the text that will be centered in the graphic
     * @param The value is of type PieChart[], total is the sum of all the values of PieChart[],
     * partGraphId will be the id obtained by hovering the mouse, centerX and centerY is the center of the graph
     */
    buildCenteredText(value, total, partGraphId = -1, centerX, centerY) {
        const ctx = this.context;
        //Check if the graph can have space in the center
        if (ctx && partGraphId !== -1 && this.ngxGutter > 0 && this.ngxGutter < 1) {
            const percent = (value[partGraphId].value / total) * 100;
            const text = value[partGraphId].label + '\n' + percent.toFixed(2) + '%';
            const font = `14px Arial`;
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            //Add text in the center of the graph
            this.drawCenteredText(text, centerX, centerY, font, value[partGraphId].color);
        }
    }
    /**
     * Adds a ring in the center of the graph the value depends on ngGutter [0-1]
     * @param Radius of the graph, centerX and centerY is the center of the graph
     */
    drawRing(centerX, centerY, radius) {
        const ctx = this.context;
        if (ctx) {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius * this.ngxGutter, 0, 2 * Math.PI);
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
        }
    }
    /**
     * Builds the text and centers it in the empty space in the center of the graphic
     * @param text that will be added in the center of the graph, color is the color of
     * the text that matches the color of the part of the graph that is selected,
     * centerX and centerY is the center of the graph
     */
    drawCenteredText(text, centerX, centerY, font, color = 'black') {
        const ctx = this.context;
        if (ctx) {
            const allText = text.split('\n');
            ctx.font = font;
            ctx.fillStyle = color;
            allText.forEach((txt, index) => {
                const textLength = ctx.measureText(txt);
                const textWidth = textLength.width;
                const xPos = centerX - textWidth / 2; //Adjust to center horizontally
                ctx.fillText(txt, xPos, centerY - (txt.length - 1) / 2 + index * 15);
            });
        }
    }
    //Determines if the mouse pointer is on top of the graph
    detectPart(mouseX, mouseY) {
        const canvasEl = this.canvas.nativeElement;
        const centroX = canvasEl.width / 2 - 10;
        const centroY = canvasEl.height / 2 - 10;
        const radius = Math.min(canvasEl.width, canvasEl.height) / 2 - 10;
        const total = this.value.reduce((total, currentValue) => total + currentValue.value, 0);
        //calculates the central angle formed with the mouse pointer
        const angleExt = Math.atan2(mouseY - centroY, mouseX - centroX);
        //calculate the distance between the pointer and the center of the circle
        const distance = Math.sqrt((mouseX - centroX) ** 2 + (mouseY - centroY) ** 2);
        // Check if the pointer is inside the circle
        if (distance <= radius && this.detectFill(mouseX, mouseY)) {
            let initAngle = 0;
            for (let i = 0; i < this.value.length; i++) {
                const percent = this.value[i].value / total;
                const angle = Math.PI * 2 * percent;
                initAngle += angle;
                // Check if the angle of the pointer is in this portion
                if (this.radianToDegree(initAngle) >= this.radianToDegree(angleExt)) {
                    return i; // Returns the part of the graph
                }
            }
        }
        return -1; // If it is not within the graph
    }
    radianToDegree(rad) {
        return rad >= 0 ? rad * (180 / Math.PI) : 360 + rad * (180 / Math.PI);
    }
    detectFill(mouseX, mouseY) {
        const ctx = this.context;
        if (ctx) {
            // Get the image data in a small area around the mouse point
            const imageData = ctx.getImageData(mouseX - 1, mouseY - 1, 2, 2); // Small area around the mouse pointer
            // Check if any pixel in the area has a color other than transparent
            for (let i = 0; i < imageData.data.length; i += 4) {
                // Check if channels R, G, B are different from 0 (transparent)
                if (imageData.data[i] !== 0 ||
                    imageData.data[i + 1] !== 0 ||
                    imageData.data[i + 2] !== 0) {
                    return true; // Area has colored pixels, it is filled
                }
            }
        }
        return false; // The area is empty or transparent
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PieChartComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: PieChartComponent, isStandalone: true, selector: "ngx-pie-chart", inputs: { width: "width", height: "height", value: "value", ngxPosition: "ngxPosition", ngxGutter: ["ngxGutter", "ngxGutter", numberAttribute] }, outputs: { partChartIndex: "partChartIndex" }, host: { properties: { "class.ngx-pie-chart-position-right": "ngxPosition === 'right'", "class.ngx-pie-chart-position-bottom": "ngxPosition === 'bottom'" }, classAttribute: "ngx-pie-chart" }, viewQueries: [{ propertyName: "canvas", first: true, predicate: ["pieChartCanvas"], descendants: true, static: true }], ngImport: i0, template: `
    <canvas #pieChartCanvas [width]="width" [height]="height"></canvas>
    <div>
      <div
        class="legend-item"
        *ngFor="let val of value"
        (mouseenter)="mouseenter(val)"
        (mouseleave)="mouseleave()"
      >
        <div
          class="legend-color"
          [ngStyle]="{ 'background-color': val.color }"
        ></div>
        <p class="legend-label">{{ val.label }}</p>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PieChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-pie-chart',
                    template: `
    <canvas #pieChartCanvas [width]="width" [height]="height"></canvas>
    <div>
      <div
        class="legend-item"
        *ngFor="let val of value"
        (mouseenter)="mouseenter(val)"
        (mouseleave)="mouseleave()"
      >
        <div
          class="legend-color"
          [ngStyle]="{ 'background-color': val.color }"
        ></div>
        <p class="legend-label">{{ val.label }}</p>
      </div>
    </div>
  `,
                    standalone: true,
                    host: {
                        class: 'ngx-pie-chart',
                        '[class.ngx-pie-chart-position-right]': `ngxPosition === 'right'`,
                        '[class.ngx-pie-chart-position-bottom]': `ngxPosition === 'bottom'`,
                    },
                    imports: [NgForOf, NgStyle],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { canvas: [{
                type: ViewChild,
                args: ['pieChartCanvas', { static: true }]
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], value: [{
                type: Input
            }], ngxPosition: [{
                type: Input
            }], ngxGutter: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], partChartIndex: [{
                type: Output
            }] } });

class PieChartModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PieChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PieChartModule, imports: [PieChartComponent], exports: [PieChartComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PieChartModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PieChartModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PieChartComponent],
                    exports: [PieChartComponent],
                }]
        }] });

class PieChart {
    constructor() {
        this.label = '';
        this.value = 0;
        this.color = '';
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { PieChart, PieChartComponent, PieChartModule };
//# sourceMappingURL=ngx-eagle-pie-chart.mjs.map
