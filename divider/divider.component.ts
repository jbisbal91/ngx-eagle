import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  Renderer2,
  booleanAttribute,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { NgxOrientation, NgxType } from './typings';

@Component({
  selector: 'ngx-divider',
  template: `
    <ng-container>
      <span *ngIf="ngxText && ngxType === 'horizontal'">{{ ngxText }}</span>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    class: 'ngx-divider',
    '[class.ngx-divider-orientation-left]': `ngxOrientation === 'left'`,
    '[class.ngx-divider-orientation-center]': `ngxOrientation === 'center'`,
    '[class.ngx-divider-orientation-right]': `ngxOrientation === 'right'`,
    '[class.ngx-divider-dashed]': 'ngxDashed',
    '[class.ngx-divider-vertical]': `ngxType === 'vertical'`,
  },
  imports: [NgIf],
})
export class DividerComponent implements AfterViewInit {
  @Input({ transform: booleanAttribute }) ngxDashed: boolean = false;
  @Input() ngxColor: string = '#6b727c';
  @Input() ngxOrientation: NgxOrientation = 'center';
  @Input() ngxText: string = '';
  @Input() ngxType: NgxType = 'horizontal';

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.ngxDashed = elementRef.nativeElement.hasAttribute('ngxDashed');
  }

  ngAfterViewInit(): void {
    if (this.elementRef) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-top-color',
        this.ngxColor
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'color',
        this.ngxColor
      );
    }
    this.cdr.markForCheck();
  }
}
