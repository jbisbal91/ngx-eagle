import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxPrefix]',
  host: {
    class: 'ngx-prefix'
  },
  standalone: true
})
export class PrefixDirective implements AfterViewInit {



  constructor(private prefixElement: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    
  }

}
