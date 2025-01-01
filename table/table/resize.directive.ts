import {
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'th[ngxResize]',
  standalone: true,
})
export class ResizeDirective implements AfterViewInit {
  private isResizing = false;
  private resizeHandle: HTMLElement;
  private startX = 0;
  private initialWidth = 0;

  private mouseMoveListener: (event: MouseEvent) => void;
  private mouseUpListener: () => void;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.resizeHandle = this.renderer.createElement('div');
    this.mouseMoveListener = this.onMouseMove.bind(this);
    this.mouseUpListener = this.onMouseUp.bind(this);
  }

  ngAfterViewInit(): void {
    this.createResizeHandle();
    this.renderer.listen(this.resizeHandle, 'mousedown', this.onMouseDown.bind(this));

    // Ensure table layout is fixed initially
    const table = this.elementRef.nativeElement.closest('table');
    if (table) {
      this.renderer.setStyle(table, 'table-layout', 'fixed');
      this.renderer.setStyle(table, 'width', '100%'); // Ensure table takes full width
    }

    // Apply initial styles to all cells
    this.applyCellStyles();
  }

  private createResizeHandle() {
    this.renderer.addClass(this.resizeHandle, 'resize-handle');
    this.renderer.appendChild(this.elementRef.nativeElement, this.resizeHandle);
    this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.resizeHandle, 'width', '5px'); // Width of the resize handle
    this.renderer.setStyle(this.resizeHandle, 'right', '0'); // Position of the handle
    this.renderer.setStyle(this.resizeHandle, 'top', '0');
    this.renderer.setStyle(this.resizeHandle, 'bottom', '0');
    this.renderer.setStyle(this.resizeHandle, 'cursor', 'col-resize');
  }

  private onMouseDown(event: MouseEvent) {
    if (event.button === 0) { // Left mouse button
      this.isResizing = true;
      this.startX = event.clientX;
      this.initialWidth = this.elementRef.nativeElement.clientWidth;

      // Attach mousemove and mouseup event listeners to the document
      this.renderer.listen('document', 'mousemove', this.mouseMoveListener);
      this.renderer.listen('document', 'mouseup', this.mouseUpListener);
    }
  }

  private onMouseMove(event: MouseEvent) {
    if (this.isResizing) {
      let newWidth = this.initialWidth + (event.clientX - this.startX);

      // Prevent the width from being too small (e.g., less than 80px)
      newWidth = Math.max(newWidth, 80);

      this.setColumnWidth(newWidth);
    }
  }

  private onMouseUp() {
    if (this.isResizing) {
      this.isResizing = false;

      // Remove the mousemove and mouseup event listeners from the document
      this.renderer.listen('document', 'mousemove', this.mouseMoveListener)();
      this.renderer.listen('document', 'mouseup', this.mouseUpListener)();
    }
  }

  private setColumnWidth(newWidth: number) {
    // Update the width of the column header
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${newWidth}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', `${newWidth}px`);
  
    // Find the index of the column
    const columnIndex = Array.from((this.elementRef.nativeElement.parentElement as Element).children)
      .indexOf(this.elementRef.nativeElement);
  
    // Update the width of the cells in the column
    const tableBodyRows = this.elementRef.nativeElement.closest('table').querySelectorAll('tbody tr');
    tableBodyRows.forEach((row: Node) => {
      const cell = (row as Element).children[columnIndex];
      if (cell) {
        this.renderer.setStyle(cell, 'width', `${newWidth}px`);
        this.renderer.setStyle(cell, 'min-width', `${newWidth}px`);
      }
    });
  
    // Ensure any newly added rows will also have the correct width
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          const newRow = mutation.addedNodes[0];
          if (newRow.nodeType === 1) { // Ensure it's an element node
            const newCell = (newRow as Element).children[columnIndex];
            if (newCell) {
              this.renderer.setStyle(newCell, 'width', `${newWidth}px`);
              this.renderer.setStyle(newCell, 'min-width', `${newWidth}px`);
            }
          }
        }
      });
    });
  
    const tbody = this.elementRef.nativeElement.closest('table').querySelector('tbody');
    mutationObserver.observe(tbody, { childList: true });
  
    // Apply the width to the header cell
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${newWidth}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', `${newWidth}px`);
  
    // Force the table layout to update
    const table = this.elementRef.nativeElement.closest('table');
    if (table) {
      this.renderer.setStyle(table, 'table-layout', 'fixed');
      // Ensure the table is responsive
      this.renderer.setStyle(table, 'overflow-x', 'auto');
    }
  }

  private applyCellStyles() {
    // Apply styles to header cells
    const headerCells = this.elementRef.nativeElement.closest('thead').querySelectorAll('span');
    headerCells.forEach((cell: any) => {
      this.renderer.setStyle(cell, 'overflow', 'hidden'); // Hide overflow
      this.renderer.setStyle(cell, 'text-overflow', 'ellipsis'); // Ellipsis for overflowing text
      this.renderer.setStyle(cell, 'white-space', 'nowrap'); // Prevent text wrapping
    });

    // Apply styles to body cells
    const bodyCells = this.elementRef.nativeElement.closest('table').querySelectorAll('td');
    bodyCells.forEach((cell: any) => {
      this.renderer.setStyle(cell, 'overflow', 'hidden'); // Hide overflow
      this.renderer.setStyle(cell, 'text-overflow', 'ellipsis'); // Ellipsis for overflowing text
      this.renderer.setStyle(cell, 'white-space', 'nowrap'); // Prevent text wrapping
    });
  }
}
