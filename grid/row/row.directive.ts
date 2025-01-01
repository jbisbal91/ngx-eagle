import {
  AfterContentInit,
  ChangeDetectorRef,
  Directive,
  Input,
  numberAttribute,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';

export type NgxJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
export type NgxAlign = 'top' | 'middle' | 'bottom';

@Directive({
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
  standalone: true,
})
export class RowDirective implements AfterContentInit {
  @Input() ngxAlign!: NgxAlign;
  @Input() ngxGutter!: string;
  @Input() ngxJustify!: NgxJustify;
  @Input({ transform: numberAttribute }) ngxSpan: number = 24;

  readonly currentSpan$ = new ReplaySubject<number>(24);

  readonly currentGutter$ = new ReplaySubject<string>(1);

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.currentSpan$.next(this.ngxSpan);
    this.currentGutter$.next(this.ngxGutter);
    this.cdr.markForCheck();
  }
}
