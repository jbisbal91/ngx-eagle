import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgxSize, NgxType } from './typings';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ngx-progress',
  template: `
    <ng-container *ngIf="ngxType === 'line'">
      <div
        class="ngx-progress-outer"
        [class.ngx-progress-sm]="ngxSize === 'small'"
        [class.ngx-progress-df]="ngxSize === 'default'"
        [class.ngx-progress-lg]="ngxSize === 'large'"
      >
        <div #line_progress_inner class="ngx-progress-inner"></div>
      </div>
      <span *ngIf="ngxPercent !== 100 || !template">{{ ngxPercent }}%</span>
      <span *ngIf="ngxPercent === 100">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </span>
    </ng-container>

    <ng-container *ngIf="ngxType === 'circle'">
      <div class="progress-circle">
        <svg viewBox="0 0 100 100">
          <circle class="bg-circle" cx="50" cy="50" r="45"></circle>
          <circle
            #circle_progress_inner
            class="progress-bar"
            cx="50"
            cy="50"
            r="45"
          ></circle>
        </svg>
        <span *ngIf="ngxPercent !== 100 || !template" class="progress-text"
          >{{ ngxPercent }}%</span
        >
        <div class="template-c" *ngIf="ngxPercent === 100">
          <ng-template [ngTemplateOutlet]="template"></ng-template>
        </div>
      </div>
    </ng-container>
  `,
  host: {
    class: 'ngx-progress',
  },
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
})
export class ProgressComponent implements AfterViewInit, OnChanges {
  @Input() ngxColor: string = '#1890FF';
  @Input() ngxPercent: number = 0;
  @Input() ngxSize: NgxSize = 'default';
  @Input() ngxTimer: number = 0.5;
  @Input() ngxType: NgxType = 'line';
  @Input() template!: TemplateRef<void>;

  @ViewChild('line_progress_inner') lineProgressRef!: ElementRef;
  @ViewChild('circle_progress_inner') circleProgressRef!: ElementRef;

  constructor(
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    if (this.ngxType === 'line') {
      this.updateLineProgress();
    } else {
      this.updateCircleProgress();
    }
    this.cdr.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxPercent']) {
      if (this.ngxType === 'line') {
        this.updateLineProgress();
      } else {
        this.updateCircleProgress();
      }
    }
  }

  private updateLineProgress(): void {
    setTimeout(() => {
      if (this.lineProgressRef) {
        this.renderer.setStyle(
          this.lineProgressRef.nativeElement,
          'width',
          `${this.ngxPercent}%`
        );

        this.renderer.setStyle(
          this.lineProgressRef.nativeElement,
          'background-color',
          this.ngxColor
        );
        this.renderer.setStyle(
          this.lineProgressRef.nativeElement,
          'transition',
          `width ${this.ngxTimer}s ease-in-out`
        );
      }
    });
  }

  private updateCircleProgress(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', '100px');
    const progress = Math.min(100, Math.max(0, this.ngxPercent));
    const offset = 283 - (283 * progress) / 100;
    if (this.circleProgressRef) {
      this.renderer.setStyle(
        this.circleProgressRef.nativeElement,
        'stroke-dasharray',
        '283'
      );
      this.renderer.setStyle(
        this.circleProgressRef.nativeElement,
        'stroke-dashoffset',
        '283'
      );
      this.renderer.setStyle(
        this.circleProgressRef.nativeElement,
        'stroke',
        this.ngxColor
      );
      setTimeout(() => {
        this.renderer.setStyle(
          this.circleProgressRef.nativeElement,
          'stroke-dashoffset',
          offset.toString()
        );

        this.renderer.setStyle(
          this.circleProgressRef.nativeElement,
          'transition',
          `stroke-dashoffset ${this.ngxTimer}s ease-in-out`
        );
      });
    }
  }
}
