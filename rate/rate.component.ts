import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  booleanAttribute,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
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
})
export class RateComponent implements OnInit, ControlValueAccessor {
  @Input() ngxColor: string = '#FFA600';
  @Input({ transform: booleanAttribute }) ngxAllowClear: boolean = true;
  @ViewChild('rateCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  context: CanvasRenderingContext2D | null = null;
  disabled: boolean = false;
  selectedStar: number = -1;
  stars: boolean[] = [false, false, false, false, false]; // Estado de las estrellas (true = seleccionada, false = no seleccionada)

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private cdr: ChangeDetectorRef, private elementRef: ElementRef) {
    this.disabled = elementRef.nativeElement.hasAttribute('disabled');
  }

  ngOnInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.fillStar(this.selectedStar);
    this.canvas.nativeElement.addEventListener('mousemove', (event) => {
      if (!this.disabled) {
        this.onMouseMove(event);
      }
    });
  }

  writeValue(value: number): void {
    if (value) {
      this.selectedStar = value - 1;
      this.onChange(value);
      this.fillStar(this.selectedStar);
    }
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
    this.cdr.markForCheck();
  }

  onMouseMove(event: MouseEvent) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    this.fillStar(this.findStarIndex(x, y));
  }

  findStarIndex(x: number, y: number) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    let index = this.selectedStar;
    if (y >= 10 && y <= 27 && x <= rect.width && y <= rect.height) {
      if (x >= 10 && x <= 28) {
        index = 0;
      } else if (x >= 35 && x <= 54) {
        index = 1;
      } else if (x >= 60 && x <= 77) {
        index = 2;
      } else if (x >= 85 && x <= 103) {
        index = 3;
      } else if (x >= 110 && x <= 127) {
        index = 4;
      }
    }
    return index;
  }

  onCanvasClick(event: MouseEvent) {
    if (!this.disabled) {
      const rect = this.canvas.nativeElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const index = this.findStarIndex(x, y);
      this.selectedStar = index !== this.selectedStar || !this.ngxAllowClear ? index : -1;
      this.writeValue(
        this.selectedStar !== -1 ? this.selectedStar + 1 : this.selectedStar
      );
      this.fillStar(this.selectedStar);
    }
  }

  drawStars() {
    const starRadius = 10; // Radio de las estrellas
    const spacing = 25; // Espaciado entre estrellas
    const startY = 20; // Posición Y de las estrellas

    for (let i = 0; i < 5; i++) {
      const startX = 20 + spacing * i; // Posición X de cada estrella
      this.drawStar(
        startX,
        startY,
        5,
        starRadius,
        starRadius / 2,
        this.stars[i]
      ); // Dibujar una estrella
    }
  }

  drawStar(
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number,
    filled: boolean
  ) {
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
      } else {
        this.context.fillStyle = 'transparent';
        this.context.strokeStyle = this.ngxColor;
      }
      this.context.stroke();
      this.context.fill();
    }
  }

  // Método para cambiar el estado de la calificación al hacer clic en una estrella
  fillStar(index: number) {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.context?.clearRect(0, 0, canvasEl.width, canvasEl.height);
    this.stars = this.stars.map((star, i) => i <= index);
    this.drawStars();
  }
}
