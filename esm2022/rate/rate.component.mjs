import { ChangeDetectionStrategy, Component, Input, ViewChild, booleanAttribute, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class RateComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9uZ3gtZWFnbGUvcmF0ZS9yYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxLQUFLLEVBRUwsU0FBUyxFQUNULGdCQUFnQixFQUNoQixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQXlCekUsTUFBTSxPQUFPLGFBQWE7SUFheEIsWUFBb0IsR0FBc0IsRUFBVSxVQUFzQjtRQUF0RCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFaakUsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUNFLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBR3RFLFlBQU8sR0FBb0MsSUFBSSxDQUFDO1FBQ2hELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsaUJBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixVQUFLLEdBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyx5RUFBeUU7UUFFakksYUFBUSxHQUFRLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUN6QixjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBR3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZ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QUM7SUFDbkIsQ0FBQzsrR0F4SlUsYUFBYTttR0FBYixhQUFhLDhIQUVKLGdCQUFnQixzREFaekI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDNUMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGLDhJQWpCUzs7Ozs7OztHQU9UOzs0RkFjVSxhQUFhO2tCQXZCekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxVQUFVO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDOzRCQUM1QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO2lJQUVVLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ2tDLGFBQWE7c0JBQXBELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBRXRDLE1BQU07c0JBREwsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXHJcbiAgZm9yd2FyZFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtcmF0ZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxjYW52YXNcclxuICAgICAgI3JhdGVDYW52YXNcclxuICAgICAgd2lkdGg9XCIxNDBcIlxyXG4gICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgIChjbGljayk9XCJvbkNhbnZhc0NsaWNrKCRldmVudClcIlxyXG4gICAgPjwvY2FudmFzPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICduZ3gtcmF0ZScsXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhdGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIG5neENvbG9yOiBzdHJpbmcgPSAnI0ZGQTYwMCc7XHJcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIG5neEFsbG93Q2xlYXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBWaWV3Q2hpbGQoJ3JhdGVDYW52YXMnLCB7IHN0YXRpYzogdHJ1ZSB9KVxyXG4gIGNhbnZhcyE6IEVsZW1lbnRSZWY8SFRNTENhbnZhc0VsZW1lbnQ+O1xyXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBudWxsO1xyXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2VsZWN0ZWRTdGFyOiBudW1iZXIgPSAtMTtcclxuICBzdGFyczogYm9vbGVhbltdID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07IC8vIEVzdGFkbyBkZSBsYXMgZXN0cmVsbGFzICh0cnVlID0gc2VsZWNjaW9uYWRhLCBmYWxzZSA9IG5vIHNlbGVjY2lvbmFkYSlcclxuXHJcbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHt9O1xyXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5maWxsU3Rhcih0aGlzLnNlbGVjdGVkU3Rhcik7XHJcbiAgICB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkU3RhciA9IHZhbHVlIC0gMTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuZmlsbFN0YXIodGhpcy5zZWxlY3RlZFN0YXIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgIHRoaXMuZmlsbFN0YXIodGhpcy5maW5kU3RhckluZGV4KHgsIHkpKTtcclxuICB9XHJcblxyXG4gIGZpbmRTdGFySW5kZXgoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5zZWxlY3RlZFN0YXI7XHJcbiAgICBpZiAoeSA+PSAxMCAmJiB5IDw9IDI3ICYmIHggPD0gcmVjdC53aWR0aCAmJiB5IDw9IHJlY3QuaGVpZ2h0KSB7XHJcbiAgICAgIGlmICh4ID49IDEwICYmIHggPD0gMjgpIHtcclxuICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAoeCA+PSAzNSAmJiB4IDw9IDU0KSB7XHJcbiAgICAgICAgaW5kZXggPSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKHggPj0gNjAgJiYgeCA8PSA3Nykge1xyXG4gICAgICAgIGluZGV4ID0gMjtcclxuICAgICAgfSBlbHNlIGlmICh4ID49IDg1ICYmIHggPD0gMTAzKSB7XHJcbiAgICAgICAgaW5kZXggPSAzO1xyXG4gICAgICB9IGVsc2UgaWYgKHggPj0gMTEwICYmIHggPD0gMTI3KSB7XHJcbiAgICAgICAgaW5kZXggPSA0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfVxyXG5cclxuICBvbkNhbnZhc0NsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFN0YXJJbmRleCh4LCB5KTtcclxuICAgICAgdGhpcy5zZWxlY3RlZFN0YXIgPSBpbmRleCAhPT0gdGhpcy5zZWxlY3RlZFN0YXIgfHwgIXRoaXMubmd4QWxsb3dDbGVhciA/IGluZGV4IDogLTE7XHJcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RhciAhPT0gLTEgPyB0aGlzLnNlbGVjdGVkU3RhciArIDEgOiB0aGlzLnNlbGVjdGVkU3RhclxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmZpbGxTdGFyKHRoaXMuc2VsZWN0ZWRTdGFyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdTdGFycygpIHtcclxuICAgIGNvbnN0IHN0YXJSYWRpdXMgPSAxMDsgLy8gUmFkaW8gZGUgbGFzIGVzdHJlbGxhc1xyXG4gICAgY29uc3Qgc3BhY2luZyA9IDI1OyAvLyBFc3BhY2lhZG8gZW50cmUgZXN0cmVsbGFzXHJcbiAgICBjb25zdCBzdGFydFkgPSAyMDsgLy8gUG9zaWNpw7NuIFkgZGUgbGFzIGVzdHJlbGxhc1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0WCA9IDIwICsgc3BhY2luZyAqIGk7IC8vIFBvc2ljacOzbiBYIGRlIGNhZGEgZXN0cmVsbGFcclxuICAgICAgdGhpcy5kcmF3U3RhcihcclxuICAgICAgICBzdGFydFgsXHJcbiAgICAgICAgc3RhcnRZLFxyXG4gICAgICAgIDUsXHJcbiAgICAgICAgc3RhclJhZGl1cyxcclxuICAgICAgICBzdGFyUmFkaXVzIC8gMixcclxuICAgICAgICB0aGlzLnN0YXJzW2ldXHJcbiAgICAgICk7IC8vIERpYnVqYXIgdW5hIGVzdHJlbGxhXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3U3RhcihcclxuICAgIGN4OiBudW1iZXIsXHJcbiAgICBjeTogbnVtYmVyLFxyXG4gICAgc3Bpa2VzOiBudW1iZXIsXHJcbiAgICBvdXRlclJhZGl1czogbnVtYmVyLFxyXG4gICAgaW5uZXJSYWRpdXM6IG51bWJlcixcclxuICAgIGZpbGxlZDogYm9vbGVhblxyXG4gICkge1xyXG4gICAgbGV0IHJvdCA9IChNYXRoLlBJIC8gMikgKiAzO1xyXG4gICAgbGV0IHggPSBjeDtcclxuICAgIGxldCB5ID0gY3k7XHJcbiAgICBsZXQgc3RlcCA9IE1hdGguUEkgLyBzcGlrZXM7XHJcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhjeCwgY3kgLSBvdXRlclJhZGl1cyk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Bpa2VzOyBpKyspIHtcclxuICAgICAgICB4ID0gY3ggKyBNYXRoLmNvcyhyb3QpICogb3V0ZXJSYWRpdXM7XHJcbiAgICAgICAgeSA9IGN5ICsgTWF0aC5zaW4ocm90KSAqIG91dGVyUmFkaXVzO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCwgeSk7XHJcbiAgICAgICAgcm90ICs9IHN0ZXA7XHJcbiAgICAgICAgeCA9IGN4ICsgTWF0aC5jb3Mocm90KSAqIGlubmVyUmFkaXVzO1xyXG4gICAgICAgIHkgPSBjeSArIE1hdGguc2luKHJvdCkgKiBpbm5lclJhZGl1cztcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHgsIHkpO1xyXG4gICAgICAgIHJvdCArPSBzdGVwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oY3gsIGN5IC0gb3V0ZXJSYWRpdXMpO1xyXG4gICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgIGlmIChmaWxsZWQpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5uZ3hDb2xvcjsgLy8gQ29sb3IgZGUgbGEgZXN0cmVsbGEgc2VsZWNjaW9uYWRhXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5uZ3hDb2xvcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLm5neENvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE3DqXRvZG8gcGFyYSBjYW1iaWFyIGVsIGVzdGFkbyBkZSBsYSBjYWxpZmljYWNpw7NuIGFsIGhhY2VyIGNsaWMgZW4gdW5hIGVzdHJlbGxhXHJcbiAgZmlsbFN0YXIoaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgY2FudmFzRWw6IEhUTUxDYW52YXNFbGVtZW50ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuY29udGV4dD8uY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpO1xyXG4gICAgdGhpcy5zdGFycyA9IHRoaXMuc3RhcnMubWFwKChzdGFyLCBpKSA9PiBpIDw9IGluZGV4KTtcclxuICAgIHRoaXMuZHJhd1N0YXJzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==