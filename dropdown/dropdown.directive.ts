import { Directive, HostListener, Input, TemplateRef, ViewContainerRef, ElementRef, OnDestroy, Renderer2, Output, EventEmitter, booleanAttribute } from '@angular/core';

export type PlacementType = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';

@Directive({
  selector: '[ngx-dropdown]',
  standalone: true,
  exportAs: 'ngxDropdown'
})
export class DropdownDirective implements OnDestroy {
  @Input() DropdownMenu!: TemplateRef<any>;
  @Input() placement: PlacementType = 'bottomLeft';
  @Input({ transform: booleanAttribute }) hoverEnabled: boolean = false; // Nuevo input para habilitar/deshabilitar hover
  @Output() openChange = new EventEmitter<boolean>();

  private isOpen = false;
  private dropdownContent!: HTMLElement;

  constructor(private viewContainer: ViewContainerRef, private el: ElementRef, private renderer: Renderer2) {
    this.attachScrollListener();
    this.onResize();
  }

  private createDropdownContent() {
    this.dropdownContent = this.renderer.createElement('div');
    this.renderer.addClass(this.dropdownContent, 'dropdown-content');
    this.renderer.setStyle(this.dropdownContent, 'display', 'none');
    document.body.appendChild(this.dropdownContent);

    // Agregar eventos de mouseenter y mouseleave para el dropdownContent
    this.renderer.listen(this.dropdownContent, 'mouseenter', () => {
      if (this.hoverEnabled && !this.isOpen) {
        this.toggleDropdown();
      }
    });

    this.renderer.listen(this.dropdownContent, 'mouseleave', (event: MouseEvent) => {
      if (this.hoverEnabled && !this.el.nativeElement.contains(event.relatedTarget as Node)) {
        this.close();
      }
    });
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.hoverEnabled && !this.isOpen) {
      this.toggleDropdown();
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    if (
      this.hoverEnabled &&
      !this.dropdownContent.contains(event.relatedTarget as Node) &&
      !this.el.nativeElement.contains(event.relatedTarget as Node)
    ) {
      this.close();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (this.isOpen) {
      this.updateDropdownPosition();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.el.nativeElement.contains(event.target)) {
      this.close();
      this.toggleDropdown();
    } else if (this.dropdownContent && !this.dropdownContent.contains(event.target as Node)) {
      this.close();
    }
  }

  close() {
    if (this.isOpen) {
      this.removeDropdownContent();
      this.isOpen = false;
      this.openChange.emit(this.isOpen);
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.openChange.emit(this.isOpen);
    if (this.isOpen) {
      this.createDropdownContent();
      this.viewContainer.clear();
      const view = this.viewContainer.createEmbeddedView(this.DropdownMenu);
      view.rootNodes.forEach(node => this.renderer.appendChild(this.dropdownContent, node));
      this.updateDropdownPosition();
      this.renderer.setStyle(this.dropdownContent, 'display', 'block');
      this.updateDropdownPosition();
    } else {
      this.close();
    }
  }

  private updateDropdownPosition() {
    const elPosition = this.el.nativeElement.getBoundingClientRect();
    const dropdownHeight = this.dropdownContent.offsetHeight;
    const dropdownWidth = this.dropdownContent.offsetWidth;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    let topPosition: number;
    let leftPosition: number;

    switch (this.placement) {
      case 'bottomLeft':
        topPosition = elPosition.bottom + window.scrollY;
        leftPosition = elPosition.left + window.scrollX;
        break;
      case 'bottomCenter':
        topPosition = elPosition.bottom + window.scrollY;
        leftPosition = elPosition.left + window.scrollX + (elPosition.width / 2) - (dropdownWidth / 2);
        break;
      case 'bottomRight':
        topPosition = elPosition.bottom + window.scrollY;
        leftPosition = elPosition.right + window.scrollX - dropdownWidth;
        break;
      case 'topLeft':
        topPosition = elPosition.top + window.scrollY - dropdownHeight;
        leftPosition = elPosition.left + window.scrollX;
        break;
      case 'topCenter':
        topPosition = elPosition.top + window.scrollY - dropdownHeight;
        leftPosition = elPosition.left + window.scrollX + (elPosition.width / 2) - (dropdownWidth / 2);
        break;
      case 'topRight':
        topPosition = elPosition.top + window.scrollY - dropdownHeight;
        leftPosition = elPosition.right + window.scrollX - dropdownWidth;
        break;
    }

    // Ajustar la posición para que no se salga del viewport
    if (topPosition + dropdownHeight > viewportHeight) {
      topPosition = elPosition.top + window.scrollY - dropdownHeight;
    }
    if (leftPosition + dropdownWidth > viewportWidth) {
      leftPosition = elPosition.right + window.scrollX - dropdownWidth;
    } else if (leftPosition < 0) {
      leftPosition = elPosition.left + window.scrollX;
    }

    this.renderer.setStyle(this.dropdownContent, 'position', 'absolute');
    this.renderer.setStyle(this.dropdownContent, 'top', `${topPosition}px`);
    this.renderer.setStyle(this.dropdownContent, 'left', `${leftPosition}px`);
  }

  @HostListener('window:scroll')
  handleScroll() {
    if (this.isOpen) {
      this.updateDropdownPosition();
    }
  }

  private attachScrollListener() {
    window.addEventListener('scroll', this.handleScroll.bind(this), true);
  }

  removeDropdownContent() {
    if (this.dropdownContent && document.body.contains(this.dropdownContent)) {
      document.body.removeChild(this.dropdownContent);
      this.isOpen = false;
    }
  }

  ngOnDestroy() {
    this.removeDropdownContent();
    this.viewContainer.clear();
  }
}
