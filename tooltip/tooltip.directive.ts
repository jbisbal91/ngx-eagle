import { Directive, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Position } from './typings';

@Directive({
  selector: '[ngxTooltip]',
  standalone: true,
})
export class TooltipDirective implements OnInit, OnDestroy, OnChanges {
  @Input('ngxTooltip') tooltipText: string = '';
  @Input() tooltipPosition: Position = 'top';

  private tooltipElement: HTMLElement | null = null;
  private readonly tooltipClass = 'tooltiptext';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.tooltipText) {
      this.init();
    };
  }

  ngOnDestroy(): void {
    this.removeTooltip();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tooltipElement) {
      if (changes['tooltipPosition'] && !changes['tooltipPosition'].isFirstChange()) {
        this.setPosition();
      }
      if (changes['tooltipText'] && !changes['tooltipText'].isFirstChange()) {
        this.removeTooltip();
        this.init();
      }
    }
  }

  init(): void {
    this.createTooltip();
    this.setPosition();
    this.addEventListeners();
  }

  private createTooltip(): void {
    const hostElement = this.el.nativeElement;

    // Create tooltip container
    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.addClass(this.tooltipElement, this.tooltipClass);
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'opacity', '0');
    this.renderer.setStyle(this.tooltipElement, 'visibility', 'hidden');
    this.renderer.setStyle(this.tooltipElement, 'transition', 'opacity 0.3s ease, visibility 0.3s ease');
    this.renderer.setProperty(this.tooltipElement, 'innerText', this.tooltipText);

    // Append tooltip to host element
    this.renderer.addClass(hostElement, 'tooltip');
    this.renderer.addClass(hostElement, `tooltip-${this.tooltipPosition}`);
    this.renderer.appendChild(hostElement, this.tooltipElement);
  }

  private setPosition(): void {
    if (!this.tooltipElement) return;

    // Remove any previous position classes
    ['tooltip-top', 'tooltip-bottom', 'tooltip-left', 'tooltip-right'].forEach(pos => {
      this.renderer.removeClass(this.el.nativeElement, pos);
    });

    // Add new position class
    this.renderer.addClass(this.el.nativeElement, `tooltip-${this.tooltipPosition}`);
  }

  private addEventListeners(): void {
    const hostElement = this.el.nativeElement;

    // Show tooltip on hover and focus
    this.renderer.listen(hostElement, 'mouseenter', () => this.showTooltip());
    this.renderer.listen(hostElement, 'focusin', () => this.showTooltip());

    // Hide tooltip on mouse leave and blur
    this.renderer.listen(hostElement, 'mouseleave', () => this.hideTooltip());
    this.renderer.listen(hostElement, 'focusout', () => this.hideTooltip());
  }

  private showTooltip(): void {
    if (this.tooltipElement) {
      this.renderer.setStyle(this.tooltipElement, 'opacity', '1');
      this.renderer.setStyle(this.tooltipElement, 'visibility', 'visible');
    }
  }

  private hideTooltip(): void {
    if (this.tooltipElement) {
      this.renderer.setStyle(this.tooltipElement, 'opacity', '0');
      this.renderer.setStyle(this.tooltipElement, 'visibility', 'hidden');
    }
  }

  private removeTooltip(): void {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
    }
  }
}
