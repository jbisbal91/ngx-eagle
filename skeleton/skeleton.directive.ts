import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { SkeletonType } from './typings';



@Directive({
  selector: '[skeleton]',
  standalone: true
})
export class SkeletonDirective implements OnInit {
  @Input('skeleton') skeletonType: SkeletonType = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'skeleton');

    if (this.skeletonType) {
      this.renderer.addClass(this.el.nativeElement, `skeleton-${this.skeletonType}`);
    }
  }
}
