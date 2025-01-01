import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  QueryList,
  Renderer2,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { NgForOf } from '@angular/common';
import { NgxDotPosition } from '../typings';

@Component({
  selector: 'ngx-carousel',
  template: `
    <div class="ngx-carousel">
      <div class="slick-list">
        <div #slick_track class="slick-track">
          <ng-content></ng-content>
        </div>
      </div>
      <ul
        class="slick-list slick-dots"
        [class.slick-dots-top]="ngxDotPosition === 'top'"
        [class.slick-dots-bottom]="ngxDotPosition === 'bottom'"
      >
        <li
          [class.slick-active]="carouselItem.isActive"
          *ngFor="let carouselItem of carouselItems"
        >
          <button (click)="onClick(carouselItem)"></button>
        </li>
      </ul>
    </div>
  `,
  host: {
    class: 'ngx-carousel',
  },
  standalone: true,
  imports: [NgForOf],
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemComponent)
  public carouselItems: QueryList<CarouselItemComponent> =
    new QueryList<CarouselItemComponent>();
  @Input({ transform: booleanAttribute }) ngxAutoPlay!: boolean;
  @Input() ngxAutoPlaySpeed: number = 3000;
  @Input() ngxDotPosition: NgxDotPosition = 'bottom';

  currentCarouselItem!: CarouselItemComponent;

  @ViewChild('slick_track') slickTrackRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit(): void {
    this.carouselItems.first.isActive = true;
    this.currentCarouselItem = this.carouselItems.first;
    if (this.currentCarouselItem) {
      setTimeout(() => {
        this.onClick(this.currentCarouselItem);
      });
    }
    if (this.ngxAutoPlay) {
      this.autoPlay();
    }
  }

  autoPlay(index: number = 0) {
    setTimeout(() => {
      this.onClick(this.carouselItems.get(index));
      index = index === this.carouselItems.length - 1 ? 0 : ++index;
      this.autoPlay(index);
    }, this.ngxAutoPlaySpeed);
  }

  @HostListener('window:resize', ['$event'])
  resize() {
    this.onClick(this.currentCarouselItem);
  }

  onClick(carouselItem: any) {
    let index = 0;
    this.carouselItems?.forEach((ci: CarouselItemComponent, i: number) => {
      ci.isActive = ci.id === carouselItem.id;
      if (ci.isActive) {
        this.currentCarouselItem = ci;
        index = i;
      }
    });
    const carouselRef = document.getElementById(carouselItem.id) as HTMLElement;
    const carouselProp = carouselRef.getBoundingClientRect();
    this.renderer.setStyle(
      this.slickTrackRef.nativeElement,
      'transform',
      `translateX(${carouselProp.width * -index}px)`
    );
  }
}
