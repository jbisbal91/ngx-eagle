import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  booleanAttribute,
} from '@angular/core';

interface ScrollOptions {
  x?: string;
  y?: string;
}

@Directive({
  selector: 'table[ngx-table]',
  host: {
    class: 'ngx-table',
    '[class.ngx-table-bordered]': 'bordered',
  },
  standalone: true,
})
export class TableDirective implements AfterViewInit, OnDestroy {
  
  @Input() scroll: ScrollOptions | null = null;
  @Input({ transform: booleanAttribute }) bordered = false;
  private tableWrapper: HTMLElement | null = null;
  private tbody: HTMLElement | null = null;
  constructor(public elementRef: ElementRef, private renderer2: Renderer2) {}
 
  ngAfterViewInit(): void {
    this.addScroll();
  }

  private addScroll(): void {
    if (this.scroll) {
      const { x, y } = this.scroll;
      const table = this.elementRef.nativeElement;
      this.tbody = table.querySelector('tbody');

      if (this.tbody) {
        // Create a wrapper for the tbody
        this.tableWrapper = this.renderer2.createElement('div');
        this.renderer2.addClass(this.tableWrapper, 'ngx-table-container');
        
        // Wrap the tbody inside the wrapper
        this.renderer2.insertBefore(table.parentNode, this.tableWrapper, table);
        this.renderer2.appendChild(this.tableWrapper, table);

        // Apply the scroll styles
        if (x) {
          this.renderer2.setStyle(this.tableWrapper, 'overflow-x', 'auto');
          this.renderer2.setStyle(this.tableWrapper, 'max-width', x);
        }
        if (y) {
          this.renderer2.setStyle(this.tableWrapper, 'overflow-y', 'auto');
          this.renderer2.setStyle(this.tableWrapper, 'max-height', y);
        }
      }
    }
  }

  ngOnDestroy(): void {
    if (this.tableWrapper) {
      this.renderer2.removeChild(this.tableWrapper.parentNode, this.tableWrapper);
    }
  }
}
