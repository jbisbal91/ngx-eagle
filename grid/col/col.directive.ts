import {
  Directive,
  ElementRef,
  Host,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  numberAttribute,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { RowDirective } from '../row/row.directive';

@Directive({
  selector: '[ngx-col]',
  host: {
    class: 'ngx-col',
  },
  standalone: true,
})
export class ColDirective implements OnInit, OnDestroy {
  @Input({ transform: numberAttribute }) ngxSpan: number = 24;
  private subscription: Subscription = new Subscription();
  constructor(
    public elementRef: ElementRef,
    private renderer2: Renderer2,
    @Optional() @Host() public rowDirective: RowDirective
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.rowDirective?.currentSpan$.subscribe((currentSpan) => {
        this.setMaxWidthCols(currentSpan);
      })
    );
    this.subscription.add(
      this.rowDirective?.currentGutter$.subscribe((currentGutter) => {
        if (currentGutter) {
          const gutter = JSON.parse(currentGutter)
            .map((val: any) => val + 'px')
            .join(' ');
          this.setGutter(gutter);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setMaxWidthCols(totalCols: number) {
    if (this.ngxSpan === 0) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
    } else {
      const maxWidth = (Number(this.ngxSpan) / totalCols) * 100;
      this.renderer2.setStyle(
        this.elementRef.nativeElement,
        'display',
        'block'
      );
      this.renderer2.setStyle(
        this.elementRef.nativeElement,
        'max-width',
        `${maxWidth}%`
      );
      this.renderer2.setStyle(
        this.elementRef.nativeElement,
        'flex',
        `0 0 ${maxWidth}%`
      );
    }
  }

  setGutter(gutter: string) {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'margin',
      `${gutter}`
    );
  }
}
