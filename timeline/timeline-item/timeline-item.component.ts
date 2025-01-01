import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { NgxTimelineMode } from '../typings';

@Component({
  selector: 'ngx-timeline-item',
  template: `
    <div class="ngx-timeline-item">
      <!----------left timeline content---------->
      <div
        *ngIf="mode !== 'default'"
        [class.timeline-c-left]="oLeft === 1"
        [class.timeline-c-right]="oLeft === 3"
        [style.order]="oLeft"
        style="width: 50%;"
      >
        <span *ngIf="isString(ngxLabel)">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="isObject(ngxLabel)"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
      </div>
      <!----------timeline point---------->
      <div class="c-timeline" [style.min-width.px]="dotWidth" style="order: 2;">
        <div class="timeline">
          <ng-container *ngIf="!ngxDot; else dotTemplate">
            <div
              #timeline_dot_item
              class="ngx-timeline-item-head"
            ></div>
          </ng-container>
          <ng-template #dotTemplate>
            <span #timeline_dot_item *ngIf="isString(ngxDot)">{{ ngxDot }}</span>
            <div #timeline_dot_item *ngIf="isObject(ngxDot)">
              <ng-template [ngTemplateOutlet]="ngxDot"></ng-template>
            </div>
          </ng-template>
          <div
            #timeline_tail
            class="ngx-timeline-item-tail"
            *ngIf="!lastItem"
          ></div>
        </div>
      </div>
      <!----------right timeline content---------->
      <div
        class="ngx-timeline-item-content"
        [class.timeline-c-left]="oRight === 1"
        [class.timeline-c-right]="oRight === 3"
        [style.order]="oRight"
        [style.width.%]="mode !== 'default' ? 50 : 'auto'"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  host: {
    class: 'timeline-item',
  },
  imports: [NgIf, NgTemplateOutlet],
  standalone: true,
})
export class TimelineItemComponent implements AfterViewInit, OnChanges {
  @Input() ngxColor: string = '#1890ff';
  @Input() ngxDot!: any | TemplateRef<void>;
  @Input() ngxLabel!: any | TemplateRef<void>;
  @Input() tailColor: boolean = false;

  oLeft: number = 1;
  oRight: number = 3;
  lastItem: boolean = false;
  dotHeight: number = 0;
  dotWidth: number = 0;
  mode: NgxTimelineMode = 'default';

  @ViewChild('timeline_dot_item') timelineDotItemRef!: ElementRef;
  @ViewChild('timeline_tail') timelineTailRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDot();
  }

  ngAfterViewInit(): void {
    this.updateDot();
  }

  private updateDot(): void {
    this.setDotDimensions();
    this.setDotStyles();
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

 isObject(value: any): boolean {
    return typeof value === 'object';
  }

  private setDotDimensions(): void {
    if (!this.timelineDotItemRef) return;
    const { offsetHeight, offsetWidth } = this.timelineDotItemRef.nativeElement;
    this.dotHeight = offsetHeight;
    this.dotWidth = offsetWidth;
  }

  private setDotStyles(): void {
    if (!this.timelineDotItemRef) return;

    this.renderer.setStyle(
      this.timelineDotItemRef.nativeElement,
      'height',
      `${this.dotHeight}px`
    );
    this.renderer.setStyle(
      this.timelineDotItemRef.nativeElement,
      'width',
      `${this.dotWidth}px`
    );
    this.renderer.setStyle(
      this.timelineDotItemRef.nativeElement,
      'color',
      this.ngxColor
    );
    this.renderer.setStyle(
      this.timelineDotItemRef.nativeElement,
      'border-color',
      this.ngxColor
    );

    if (this.timelineTailRef) {
      this.renderer.setStyle(
        this.timelineTailRef.nativeElement,
        'height',
        `calc(100% - ${this.dotHeight}px)`
      );
      if (this.tailColor) {
        this.renderer.setStyle(
          this.timelineTailRef.nativeElement,
          'border-color',
          this.ngxColor
        );
      }
    }
  }
}
