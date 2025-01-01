import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, booleanAttribute, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngx-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf]
})
export class SignatureComponent implements AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('canvas') public canvas!: ElementRef<HTMLCanvasElement>;
  
  @Input() pointerColors: string[] = ['#000000', '#2A7CFF'];
  @Input() pointerColor: string = '#000000';
  @Input({ transform: booleanAttribute }) showClearButton = true;
  @Input({ transform: booleanAttribute }) showPointerColors: boolean = true;

  @Output() signatureComplete = new EventEmitter<string>();

  public dirty = false;

  private ctx!: CanvasRenderingContext2D;
  private subscriptions: Subscription[] = [];

  public ngAfterViewInit() {
    this.initCanvas();
    this.captureEvents(this.canvas.nativeElement);
    this.adjustCanvasToContainer();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['pointerColor'] && this.ctx) {
      this.ctx.strokeStyle = changes['pointerColor'].currentValue;
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private initCanvas(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d')!;
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = this.pointerColor;
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    const mouseDown$ = fromEvent(canvasEl, 'mousedown');
    const mouseMove$ = fromEvent(canvasEl, 'mousemove');
    const mouseUp$ = fromEvent(window, 'mouseup');
    const mouseLeave$ = fromEvent(canvasEl, 'mouseleave');

    const touchStart$ = fromEvent(canvasEl, 'touchstart');
    const touchMove$ = fromEvent(canvasEl, 'touchmove');
    const touchEnd$ = fromEvent(window, 'touchend');
    const touchLeave$ = fromEvent(canvasEl, 'touchcancel');

    const startDrawing$ = merge(mouseDown$, touchStart$);
    const moveDrawing$ = merge(mouseMove$, touchMove$);
    const endDrawing$ = merge(mouseUp$, touchEnd$);
    const leaveDrawing$ = merge(mouseLeave$, touchLeave$);

    const drawing$ = startDrawing$.pipe(
      switchMap(() => moveDrawing$.pipe(
        takeUntil(endDrawing$),
        takeUntil(leaveDrawing$),
        pairwise()
      ))
    );

    const subscription = drawing$.subscribe(([prev, current]: [Event, Event]) => {
      const rect = canvasEl.getBoundingClientRect();
      let prevPos, currentPos;

      if (prev instanceof MouseEvent && current instanceof MouseEvent) {
        prevPos = {
          x: prev.clientX - rect.left,
          y: prev.clientY - rect.top
        };
        currentPos = {
          x: current.clientX - rect.left,
          y: current.clientY - rect.top
        };
      }

      if (prev instanceof TouchEvent && current instanceof TouchEvent) {
        prevPos = {
          x: prev.touches[0].clientX - rect.left,
          y: prev.touches[0].clientY - rect.top
        };
        currentPos = {
          x: current.touches[0].clientX - rect.left,
          y: current.touches[0].clientY - rect.top
        };
      }

      if (prevPos && currentPos) {
        this.drawOnCanvas(prevPos, currentPos);
      }
    });

    const stopDrawingSubscription = endDrawing$.subscribe(() => {
      const image = this.getImage();
      this.signatureComplete.emit(image);
    });

    this.subscriptions.push(subscription, stopDrawingSubscription);
  }

  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.ctx) { return; }
    this.ctx.beginPath();
    this.ctx.moveTo(prevPos.x, prevPos.y);
    this.ctx.lineTo(currentPos.x, currentPos.y);
    this.ctx.stroke();
    this.dirty = true;
  }

  public clean() {
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    const width = canvas.width;
    const height = canvas.height;
    this.ctx.clearRect(0, 0, width, height);
    this.dirty = false;
    const image = this.getImage();
    this.signatureComplete.emit(image);
  }

  public changeColor(color: string) {
    this.pointerColor = color;
    this.ctx.strokeStyle = color;
  }

  public getImage(): string {
    return this.canvas.nativeElement.toDataURL();
  }

  private adjustCanvasToContainer(): void {
    const resizeObserver = new ResizeObserver(() => {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      const container = canvasEl.parentElement;
      if (container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        canvasEl.width = containerWidth;
        canvasEl.height = containerHeight;

        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = this.pointerColor;
        this.dirty = false;
      }
    });

    resizeObserver.observe(this.canvas.nativeElement.parentElement!);
  }
}
