import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { ColorContrast } from 'ngx-eagle/core/types';
import { NgxPosition, NgxSize, nodeNameForText } from './typings';
import { ColorConverter } from 'ngx-eagle/core/services';

@Directive({
  selector: '[ngxBadge]',
  host: {
    class: 'ngx-badge',
  },
  standalone: true,
})
export class BadgeDirective implements AfterViewInit, OnChanges {
  @Input({ transform: numberAttribute }) ngxBadge!: number;
  @Input() ngxBadgeColor!: ColorContrast | string;
  @Input({ transform: booleanAttribute }) ngxBadgeHidden: boolean = false;
  @Input() ngxBadgePosition: NgxPosition = 'after';
  @Input() ngxBadgeSize: NgxSize = 'small';
  @Input({ transform: numberAttribute }) ngxOverflowCount: number = 99;

  newSpan = document.createElement('span');

  constructor(
    public elementRef: ElementRef,
    private renderer2: Renderer2,
    private colorConverter: ColorConverter
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ngxBadgeHidden']?.currentValue) {
      this.renderer2.addClass(this.newSpan, 'ngx-badge-hidden');
    } else {
      this.renderer2.removeClass(this.newSpan, 'ngx-badge-hidden');
    }

    if (changes.hasOwnProperty('ngxBadgeColor')) {
      this.setColor(this.ngxBadgeColor);
    }

    if (changes.hasOwnProperty('ngxBadgeSize')) {
      this.setSize();
    }

    if (changes.hasOwnProperty('ngxBadge')) {
      this.setTextContent();
    }

    if (changes.hasOwnProperty('ngxOverflowCount')) {
      this.setTextContent();
    }

    if (changes.hasOwnProperty('ngxBadgePosition')) {
      this.setPosition();
    }
  }

  ngAfterViewInit(): void {
    this.buildBadge();
    if (!this.ngxBadgeColor) {
      this.setColor('#FF4D4F');
    }
    this.setTextContent();
    this.setPosition();
    this.setSize();
  }

  buildBadge() {
    this.renderer2.addClass(this.newSpan, 'ngx-badge-content');
    this.renderer2.appendChild(this.elementRef.nativeElement, this.newSpan);
    this.setMaxWidth();
  }

  setPosition() {
    if (this.ngxBadgePosition === 'before') {
      this.renderer2.addClass(this.newSpan, 'ngx-badge-before');
    } else {
      this.renderer2.removeClass(this.newSpan, 'ngx-badge-before');
    }
  }

  setMaxWidth() {
    const nodeName = this.elementRef.nativeElement.nodeName;
    if (nodeNameForText[nodeName]) {
      this.renderer2.setStyle(
        this.elementRef.nativeElement,
        'width',
        'fit-content'
      );
    }
  }

  setSize() {
    this.renderer2.addClass(this.newSpan, `ngx-badge-${this.ngxBadgeSize}`);
  }

  setTextContent() {
    this.newSpan.textContent =
      this.ngxBadge > this.ngxOverflowCount
        ? `${this.ngxOverflowCount}+`
        : `${this.ngxBadge}`;
  }

  setColor(color: ColorContrast | string) {
    var colorContrast!: ColorContrast;
    if (typeof color === 'string') {
      colorContrast =
        color !== '#FF4D4F'
          ? this.colorConverter.contrastingColors(color)
          : { backgroundColor: '#FF4D4F', overlayColor: '#ffffff' };
    }

    if (typeof color === 'object') {
      colorContrast = color;
    }

    this.renderer2.setStyle(
      this.newSpan,
      'background-color',
      colorContrast.backgroundColor
    );
    this.renderer2.setStyle(this.newSpan, 'color', colorContrast.overlayColor);
  }
}
