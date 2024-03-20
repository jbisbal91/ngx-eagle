import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, numberAttribute, } from '@angular/core';
import { NgForOf, NgStyle } from '@angular/common';
import * as i0 from "@angular/core";
export class PieChartComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.context = null;
        this.height = 300;
        this.width = 300;
        this.ngxGutter = 0;
        this.ngxPosition = 'right';
        this.value = [];
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: PieChartComponent, isStandalone: true, selector: "ngx-pie-chart", inputs: { height: "height", width: "width", ngxGutter: ["ngxGutter", "ngxGutter", numberAttribute], ngxPosition: "ngxPosition", value: "value" }, outputs: { partChartIndex: "partChartIndex" }, host: { properties: { "class.ngx-pie-chart-position-right": "ngxPosition === 'right'", "class.ngx-pie-chart-position-bottom": "ngxPosition === 'bottom'" }, classAttribute: "ngx-pie-chart" }, viewQueries: [{ propertyName: "canvas", first: true, predicate: ["pieChartCanvas"], descendants: true, static: true }], ngImport: i0, template: `
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
            }], height: [{
                type: Input
            }], width: [{
                type: Input
            }], ngxGutter: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], ngxPosition: [{
                type: Input
            }], value: [{
                type: Input
            }], partChartIndex: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1lYWdsZS9waWUtY2hhcnQvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULGVBQWUsR0FDaEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFnQ25ELE1BQU0sT0FBTyxpQkFBaUI7SUFZNUIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFUMUMsWUFBTyxHQUFvQyxJQUFJLENBQUM7UUFDdkMsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLFVBQUssR0FBRyxHQUFHLENBQUM7UUFDa0IsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUNwRCxnQkFBVyxHQUFnQixPQUFPLENBQUM7UUFDbkMsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUV0QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFFVCxDQUFDO0lBRTlDLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ2hFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLHFCQUFx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O2dCQUM1QixXQUFXO3NCQUFuQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFSSxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgbnVtYmVyQXR0cmlidXRlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaWVDaGFydCB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IE5nRm9yT2YsIE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuZXhwb3J0IHR5cGUgTmd4UG9zaXRpb24gPSAnbGVmdCcgfCAncmlnaHQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtcGllLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGNhbnZhcyAjcGllQ2hhcnRDYW52YXMgW3dpZHRoXT1cIndpZHRoXCIgW2hlaWdodF09XCJoZWlnaHRcIj48L2NhbnZhcz5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImxlZ2VuZC1pdGVtXCJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgdmFsIG9mIHZhbHVlXCJcclxuICAgICAgICAobW91c2VlbnRlcik9XCJtb3VzZWVudGVyKHZhbClcIlxyXG4gICAgICAgIChtb3VzZWxlYXZlKT1cIm1vdXNlbGVhdmUoKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cImxlZ2VuZC1jb2xvclwiXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogdmFsLmNvbG9yIH1cIlxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImxlZ2VuZC1sYWJlbFwiPnt7IHZhbC5sYWJlbCB9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICduZ3gtcGllLWNoYXJ0JyxcclxuICAgICdbY2xhc3Mubmd4LXBpZS1jaGFydC1wb3NpdGlvbi1yaWdodF0nOiBgbmd4UG9zaXRpb24gPT09ICdyaWdodCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtcGllLWNoYXJ0LXBvc2l0aW9uLWJvdHRvbV0nOiBgbmd4UG9zaXRpb24gPT09ICdib3R0b20nYCxcclxuICB9LFxyXG4gIGltcG9ydHM6IFtOZ0Zvck9mLCBOZ1N0eWxlXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBpZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdwaWVDaGFydENhbnZhcycsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgY2FudmFzITogRWxlbWVudFJlZjxIVE1MQ2FudmFzRWxlbWVudD47XHJcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgaGVpZ2h0ID0gMzAwO1xyXG4gIEBJbnB1dCgpIHdpZHRoID0gMzAwO1xyXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIG5neEd1dHRlcjogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBuZ3hQb3NpdGlvbjogTmd4UG9zaXRpb24gPSAncmlnaHQnO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBQaWVDaGFydFtdID0gW107XHJcblxyXG4gIEBPdXRwdXQoKSBwYXJ0Q2hhcnRJbmRleCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZHJhd1BpZUNoYXJ0KHRoaXMudmFsdWUpO1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBtb3VzZVggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IG1vdXNlWSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuXHJcbiAgICAgICAgLy8gTG9naWMgdG8gZGV0ZXJtaW5lIHdoaWNoIHBhcnQgb2YgdGhlIGdyYXBoIHRoZSBtb3VzZSBjb3JyZXNwb25kcyB0b1xyXG4gICAgICAgIGNvbnN0IHBhcnRDaGFydElkID0gdGhpcy5kZXRlY3RQYXJ0KG1vdXNlWCwgbW91c2VZKTtcclxuICAgICAgICB0aGlzLnBhcnRDaGFydEluZGV4LmVtaXQocGFydENoYXJ0SWQpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3Vyc29yID1cclxuICAgICAgICAgIHBhcnRDaGFydElkICE9PSAtMSA/ICdwb2ludGVyJyA6ICdkZWZhdWx0JztcclxuICAgICAgICB0aGlzLmRyYXdQaWVDaGFydCh0aGlzLnZhbHVlLCBwYXJ0Q2hhcnRJZCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBtb3VzZWVudGVyKHZhbDogUGllQ2hhcnQpIHtcclxuICAgIGNvbnN0IHBhcnRDaGFydElkID0gdGhpcy52YWx1ZS5maW5kSW5kZXgoKHYpID0+IHYgPT09IHZhbCk7XHJcbiAgICB0aGlzLnBhcnRDaGFydEluZGV4LmVtaXQocGFydENoYXJ0SWQpO1xyXG4gICAgdGhpcy5kcmF3UGllQ2hhcnQodGhpcy52YWx1ZSwgcGFydENoYXJ0SWQpO1xyXG4gIH1cclxuXHJcbiAgbW91c2VsZWF2ZSgpIHtcclxuICAgIHRoaXMucGFydENoYXJ0SW5kZXguZW1pdCgtMSk7XHJcbiAgICB0aGlzLmRyYXdQaWVDaGFydCh0aGlzLnZhbHVlLCAtMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgdGhlIGdyYXBoXHJcbiAgICogQHBhcmFtIHZhbHVlIGlzIG9mIHR5cGUgUGllQ2hhcnRbXSwgcGFydEdyYXBoSWQgd2lsbCBiZSB0aGUgaWQgb2J0YWluZWQgYnkgaG92ZXJpbmcgdGhlIG1vdXNlXHJcbiAgICogb3ZlciBlYWNoIHBhcnQgb2YgdGhlIGdyYXBoLlxyXG4gICAqL1xyXG4gIGRyYXdQaWVDaGFydCh2YWx1ZTogUGllQ2hhcnRbXSwgcGFydEdyYXBoSWQ6IG51bWJlciA9IC0xKSB7XHJcbiAgICBjb25zdCBjdHggPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBpZiAoY3R4KSB7XHJcbiAgICAgIGNvbnN0IGNhbnZhc0VsOiBIVE1MQ2FudmFzRWxlbWVudCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCk7XHJcbiAgICAgIGNvbnN0IGNlbnRlclggPSBjYW52YXNFbC53aWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGNlbnRlclkgPSBjYW52YXNFbC5oZWlnaHQgLyAyO1xyXG4gICAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbihjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0KSAvIDIgLSAxMDtcclxuICAgICAgY29uc3QgdG90YWwgPSB0aGlzLnZhbHVlLnJlZHVjZShcclxuICAgICAgICAodG90YWwsIGN1cnJlbnRWYWx1ZSkgPT4gdG90YWwgKyBjdXJyZW50VmFsdWUudmFsdWUsXHJcbiAgICAgICAgMFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgaW5pdEFuZ2xlID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSB2YWx1ZVtpXS52YWx1ZSAvIHRvdGFsO1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5QSSAqIDIgKiBwZXJjZW50O1xyXG4gICAgICAgIGNvbnN0IF9yYWRpdXMgPVxyXG4gICAgICAgICAgcGFydEdyYXBoSWQgIT09IC0xICYmIHBhcnRHcmFwaElkID09PSBpID8gcmFkaXVzICogMS4wNjUgOiByYWRpdXM7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8oY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICAgICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCBfcmFkaXVzLCBpbml0QW5nbGUsIGluaXRBbmdsZSArIGFuZ2xlKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHZhbHVlW2ldLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuc2V0U2hhZG93KGN0eCwgcGFydEdyYXBoSWQsIGkpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgaW5pdEFuZ2xlICs9IGFuZ2xlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZHJhd1JpbmcoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzKTtcclxuICAgICAgdGhpcy5idWlsZENlbnRlcmVkVGV4dCh2YWx1ZSwgdG90YWwsIHBhcnRHcmFwaElkLCBjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ051bGwgMkQgY29udGV4dC4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNoYWRvdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcGFydEdyYXBoSWQ6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKGN0eCAmJiBwYXJ0R3JhcGhJZCAhPT0gLTEgJiYgcGFydEdyYXBoSWQgPT09IGluZGV4KSB7XHJcbiAgICAgIGN0eC5zaGFkb3dDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDAuOCknO1xyXG4gICAgICBjdHguc2hhZG93Qmx1ciA9IDY7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XHJcbiAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gMDtcclxuICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnVpbGQgdGhlIHRleHQgdGhhdCB3aWxsIGJlIGNlbnRlcmVkIGluIHRoZSBncmFwaGljXHJcbiAgICogQHBhcmFtIFRoZSB2YWx1ZSBpcyBvZiB0eXBlIFBpZUNoYXJ0W10sIHRvdGFsIGlzIHRoZSBzdW0gb2YgYWxsIHRoZSB2YWx1ZXMgb2YgUGllQ2hhcnRbXSxcclxuICAgKiBwYXJ0R3JhcGhJZCB3aWxsIGJlIHRoZSBpZCBvYnRhaW5lZCBieSBob3ZlcmluZyB0aGUgbW91c2UsIGNlbnRlclggYW5kIGNlbnRlclkgaXMgdGhlIGNlbnRlciBvZiB0aGUgZ3JhcGhcclxuICAgKi9cclxuICBidWlsZENlbnRlcmVkVGV4dChcclxuICAgIHZhbHVlOiBQaWVDaGFydFtdLFxyXG4gICAgdG90YWw6IG51bWJlcixcclxuICAgIHBhcnRHcmFwaElkOiBudW1iZXIgPSAtMSxcclxuICAgIGNlbnRlclg6IG51bWJlcixcclxuICAgIGNlbnRlclk6IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3QgY3R4ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgLy9DaGVjayBpZiB0aGUgZ3JhcGggY2FuIGhhdmUgc3BhY2UgaW4gdGhlIGNlbnRlclxyXG4gICAgaWYgKGN0eCAmJiBwYXJ0R3JhcGhJZCAhPT0gLTEgJiYgdGhpcy5uZ3hHdXR0ZXIgPiAwICYmIHRoaXMubmd4R3V0dGVyIDwgMSkge1xyXG4gICAgICBjb25zdCBwZXJjZW50ID0gKHZhbHVlW3BhcnRHcmFwaElkXS52YWx1ZSAvIHRvdGFsKSAqIDEwMDtcclxuICAgICAgY29uc3QgdGV4dCA9IHZhbHVlW3BhcnRHcmFwaElkXS5sYWJlbCArICdcXG4nICsgcGVyY2VudC50b0ZpeGVkKDIpICsgJyUnO1xyXG4gICAgICBjb25zdCBmb250ID0gYDE0cHggQXJpYWxgO1xyXG4gICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XHJcbiAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gMDtcclxuICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSAwO1xyXG4gICAgICAvL0FkZCB0ZXh0IGluIHRoZSBjZW50ZXIgb2YgdGhlIGdyYXBoXHJcbiAgICAgIHRoaXMuZHJhd0NlbnRlcmVkVGV4dChcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGNlbnRlclgsXHJcbiAgICAgICAgY2VudGVyWSxcclxuICAgICAgICBmb250LFxyXG4gICAgICAgIHZhbHVlW3BhcnRHcmFwaElkXS5jb2xvclxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHJpbmcgaW4gdGhlIGNlbnRlciBvZiB0aGUgZ3JhcGggdGhlIHZhbHVlIGRlcGVuZHMgb24gbmdHdXR0ZXIgWzAtMV1cclxuICAgKiBAcGFyYW0gUmFkaXVzIG9mIHRoZSBncmFwaCwgY2VudGVyWCBhbmQgY2VudGVyWSBpcyB0aGUgY2VudGVyIG9mIHRoZSBncmFwaFxyXG4gICAqL1xyXG4gIGRyYXdSaW5nKGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlcikge1xyXG4gICAgY29uc3QgY3R4ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgaWYgKGN0eCkge1xyXG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMgKiB0aGlzLm5neEd1dHRlciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyB0aGUgdGV4dCBhbmQgY2VudGVycyBpdCBpbiB0aGUgZW1wdHkgc3BhY2UgaW4gdGhlIGNlbnRlciBvZiB0aGUgZ3JhcGhpY1xyXG4gICAqIEBwYXJhbSB0ZXh0IHRoYXQgd2lsbCBiZSBhZGRlZCBpbiB0aGUgY2VudGVyIG9mIHRoZSBncmFwaCwgY29sb3IgaXMgdGhlIGNvbG9yIG9mXHJcbiAgICogdGhlIHRleHQgdGhhdCBtYXRjaGVzIHRoZSBjb2xvciBvZiB0aGUgcGFydCBvZiB0aGUgZ3JhcGggdGhhdCBpcyBzZWxlY3RlZCxcclxuICAgKiBjZW50ZXJYIGFuZCBjZW50ZXJZIGlzIHRoZSBjZW50ZXIgb2YgdGhlIGdyYXBoXHJcbiAgICovXHJcbiAgZHJhd0NlbnRlcmVkVGV4dChcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIGNlbnRlclg6IG51bWJlcixcclxuICAgIGNlbnRlclk6IG51bWJlcixcclxuICAgIGZvbnQ6IHN0cmluZyxcclxuICAgIGNvbG9yID0gJ2JsYWNrJ1xyXG4gICkge1xyXG4gICAgY29uc3QgY3R4ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgaWYgKGN0eCkge1xyXG4gICAgICBjb25zdCBhbGxUZXh0ID0gdGV4dC5zcGxpdCgnXFxuJyk7XHJcbiAgICAgIGN0eC5mb250ID0gZm9udDtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICBhbGxUZXh0LmZvckVhY2goKHR4dCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB0ZXh0TGVuZ3RoID0gY3R4Lm1lYXN1cmVUZXh0KHR4dCk7XHJcbiAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gdGV4dExlbmd0aC53aWR0aDtcclxuICAgICAgICBjb25zdCB4UG9zID0gY2VudGVyWCAtIHRleHRXaWR0aCAvIDI7IC8vQWRqdXN0IHRvIGNlbnRlciBob3Jpem9udGFsbHlcclxuICAgICAgICBjdHguZmlsbFRleHQodHh0LCB4UG9zLCBjZW50ZXJZIC0gKHR4dC5sZW5ndGggLSAxKSAvIDIgKyBpbmRleCAqIDE1KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0RldGVybWluZXMgaWYgdGhlIG1vdXNlIHBvaW50ZXIgaXMgb24gdG9wIG9mIHRoZSBncmFwaFxyXG4gIGRldGVjdFBhcnQobW91c2VYOiBudW1iZXIsIG1vdXNlWTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGNhbnZhc0VsOiBIVE1MQ2FudmFzRWxlbWVudCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBjZW50cm9YID0gY2FudmFzRWwud2lkdGggLyAyIC0gMTA7XHJcbiAgICBjb25zdCBjZW50cm9ZID0gY2FudmFzRWwuaGVpZ2h0IC8gMiAtIDEwO1xyXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4oY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCkgLyAyIC0gMTA7XHJcbiAgICBjb25zdCB0b3RhbCA9IHRoaXMudmFsdWUucmVkdWNlKFxyXG4gICAgICAodG90YWwsIGN1cnJlbnRWYWx1ZSkgPT4gdG90YWwgKyBjdXJyZW50VmFsdWUudmFsdWUsXHJcbiAgICAgIDBcclxuICAgICk7XHJcbiAgICAvL2NhbGN1bGF0ZXMgdGhlIGNlbnRyYWwgYW5nbGUgZm9ybWVkIHdpdGggdGhlIG1vdXNlIHBvaW50ZXJcclxuICAgIGNvbnN0IGFuZ2xlRXh0ID0gTWF0aC5hdGFuMihtb3VzZVkgLSBjZW50cm9ZLCBtb3VzZVggLSBjZW50cm9YKTtcclxuICAgIC8vY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBwb2ludGVyIGFuZCB0aGUgY2VudGVyIG9mIHRoZSBjaXJjbGVcclxuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxyXG4gICAgICAobW91c2VYIC0gY2VudHJvWCkgKiogMiArIChtb3VzZVkgLSBjZW50cm9ZKSAqKiAyXHJcbiAgICApO1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBvaW50ZXIgaXMgaW5zaWRlIHRoZSBjaXJjbGVcclxuICAgIGlmIChkaXN0YW5jZSA8PSByYWRpdXMgJiYgdGhpcy5kZXRlY3RGaWxsKG1vdXNlWCwgbW91c2VZKSkge1xyXG4gICAgICBsZXQgaW5pdEFuZ2xlID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IHRoaXMudmFsdWVbaV0udmFsdWUgLyB0b3RhbDtcclxuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguUEkgKiAyICogcGVyY2VudDtcclxuICAgICAgICBpbml0QW5nbGUgKz0gYW5nbGU7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGFuZ2xlIG9mIHRoZSBwb2ludGVyIGlzIGluIHRoaXMgcG9ydGlvblxyXG4gICAgICAgIGlmICh0aGlzLnJhZGlhblRvRGVncmVlKGluaXRBbmdsZSkgPj0gdGhpcy5yYWRpYW5Ub0RlZ3JlZShhbmdsZUV4dCkpIHtcclxuICAgICAgICAgIHJldHVybiBpOyAvLyBSZXR1cm5zIHRoZSBwYXJ0IG9mIHRoZSBncmFwaFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xOyAvLyBJZiBpdCBpcyBub3Qgd2l0aGluIHRoZSBncmFwaFxyXG4gIH1cclxuXHJcbiAgcmFkaWFuVG9EZWdyZWUocmFkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiByYWQgPj0gMCA/IHJhZCAqICgxODAgLyBNYXRoLlBJKSA6IDM2MCArIHJhZCAqICgxODAgLyBNYXRoLlBJKTtcclxuICB9XHJcblxyXG4gIGRldGVjdEZpbGwobW91c2VYOiBudW1iZXIsIG1vdXNlWTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjdHggPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBpZiAoY3R4KSB7XHJcbiAgICAgIC8vIEdldCB0aGUgaW1hZ2UgZGF0YSBpbiBhIHNtYWxsIGFyZWEgYXJvdW5kIHRoZSBtb3VzZSBwb2ludFxyXG4gICAgICBjb25zdCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKG1vdXNlWCAtIDEsIG1vdXNlWSAtIDEsIDIsIDIpOyAvLyBTbWFsbCBhcmVhIGFyb3VuZCB0aGUgbW91c2UgcG9pbnRlclxyXG4gICAgICAvLyBDaGVjayBpZiBhbnkgcGl4ZWwgaW4gdGhlIGFyZWEgaGFzIGEgY29sb3Igb3RoZXIgdGhhbiB0cmFuc3BhcmVudFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlRGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgY2hhbm5lbHMgUiwgRywgQiBhcmUgZGlmZmVyZW50IGZyb20gMCAodHJhbnNwYXJlbnQpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaV0gIT09IDAgfHxcclxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAxXSAhPT0gMCB8fFxyXG4gICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaSArIDJdICE9PSAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gQXJlYSBoYXMgY29sb3JlZCBwaXhlbHMsIGl0IGlzIGZpbGxlZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBUaGUgYXJlYSBpcyBlbXB0eSBvciB0cmFuc3BhcmVudFxyXG4gIH1cclxufVxyXG4iXX0=