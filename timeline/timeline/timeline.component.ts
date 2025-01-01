import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import { NgForOf } from '@angular/common';
import { NgxTimelineMode } from '../typings';

@Component({
  selector: 'ngx-timeline',
  template: `<ng-content></ng-content>`,
  standalone: true,
  imports: [NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnChanges, AfterViewInit {
  @ContentChildren(TimelineItemComponent)
  public timelineItems!: QueryList<TimelineItemComponent>;

  @Input() ngxMode: NgxTimelineMode = 'default';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxMode']) {
      this.updateModeAndSize();
    }
  }

  ngAfterViewInit(): void {
    this.timelineItems.last.lastItem = true;
    this.updateModeAndSize();
  }

  private updateModeAndSize(): void {
    this.setMode(this.ngxMode);
    this.setSizeDot();
  }

  private setMode(mode: NgxTimelineMode): void {
    if (!this.timelineItems) return;

    this.timelineItems.forEach((item) => (item.mode = mode));

    switch (mode) {
      case 'left':
        this.setModeLeftAndRight(3, 1);
        break;
      case 'right':
        this.setModeLeftAndRight(1, 3);
        break;
      case 'alternate':
        this.setModeAlternate();
        break;
    }
  }

  private setSizeDot(): void {
    if (!this.timelineItems) return;

    const { dotHeight, dotWidth } = this.buildMaxDimension();
    this.timelineItems.forEach((item) => {
      item.dotHeight = dotHeight;
      item.dotWidth = dotWidth;
    });
  }

  private buildMaxDimension() {
    let maxDotHeight = Number.MIN_VALUE;
    let maxDotWidth = Number.MIN_VALUE;

    this.timelineItems.forEach(({ dotHeight, dotWidth }) => {
      maxDotHeight = Math.max(maxDotHeight, dotHeight);
      maxDotWidth = Math.max(maxDotWidth, dotWidth);
    });

    return { dotHeight: maxDotHeight, dotWidth: maxDotWidth };
  }

  private setModeLeftAndRight(oLeft: number, oRight: number): void {
    this.timelineItems.forEach((item) => {
      item.oLeft = oLeft;
      item.oRight = oRight;
    });
  }

  private setModeAlternate(): void {
    this.timelineItems.forEach((item, index) => {
      item.oLeft = index % 2 === 0 ? 1 : 3;
      item.oRight = index % 2 === 0 ? 3 : 1;
    });
  }
}
