import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[touch]',
  standalone: true
})
export class TouchDirective {

  private touchStartX: number = 0;
  private touchStartY: number = 0;
  private threshold: number = 30;  // Umbral de movimiento mínimo para reconocer un gesto

  @Output() swipeLeft = new EventEmitter<void>();
  @Output() swipeRight = new EventEmitter<void>();
  @Output() swipeUp = new EventEmitter<void>();
  @Output() swipeDown = new EventEmitter<void>();

  constructor(private el: ElementRef) { }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    const touch = event.touches[0];
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - this.touchStartX;
    const deltaY = touch.clientY - this.touchStartY;

    // Detectar desplazamiento horizontal
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > this.threshold) {
        this.swipeRight.emit();  // Swipe a la derecha
      } else if (deltaX < -this.threshold) {
        this.swipeLeft.emit();   // Swipe a la izquierda
      }
    }
    // Detectar desplazamiento vertical
    else {
      if (deltaY > this.threshold) {
        this.swipeDown.emit();   // Swipe hacia abajo
      } else if (deltaY < -this.threshold) {
        this.swipeUp.emit();     // Swipe hacia arriba
      }
    }
  }
}

