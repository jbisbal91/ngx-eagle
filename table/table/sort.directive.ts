import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
} from '@angular/core';
import { NgxSort } from '../typings';

@Directive({
  selector: 'th[ngxSort]',
  standalone: true,
})
export class SortDirective implements AfterViewInit {
  static activeDirective: SortDirective | null = null;

  status: NgxSort = null;
  arrowUp!: HTMLSpanElement;
  arrowDown!: HTMLSpanElement;

  private childNodes: ElementRef[] = [];

  @Output() changeSorting = new EventEmitter<NgxSort>();

  constructor(private renderer: Renderer2, public elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.findChildNodes(['csl-table-filter', 'csl-table-search']);
    this.buildSort();
    this.elementRef.nativeElement.addEventListener(
      'click',
      this.onClick.bind(this)
    );
  }

  findChildNodes(childNames: string[]): void {
    const childrenArray = Array.from(this.elementRef.nativeElement.children);

    childNames.forEach((childName) => {
      const foundChild = childrenArray.find((child: any) => child.tagName.toLowerCase() === childName);
      if (foundChild) {
        this.childNodes.push(new ElementRef(foundChild));
      }
    });
  }

  buildSort() {
    // Obtener el texto de elementRef y limpiarlo
    const columnName = this.elementRef.nativeElement.querySelector('span')?.textContent.trim() || this.elementRef.nativeElement?.textContent.trim();
    // Crear el contenedor padre con la clase especificada
    const columnSorters = this.renderer.createElement('div');
    this.renderer.addClass(columnSorters, 'csl-table-column-sorters');
    // Crear un elemento <span> y establecer el texto de columnName como su contenido
    const columnNameSpan = this.renderer.createElement('span');
    const columnNameText = this.renderer.createText(columnName);
    this.renderer.appendChild(columnNameSpan, columnNameText);

    // Añadir el elemento <span> al contenedor columnSorters
    this.renderer.appendChild(columnSorters, columnNameSpan);

    // Crear un contenedor para las acciones de la tabla
    const actions = this.renderer.createElement('div');
    this.renderer.addClass(actions, 'csl-table-actions');

    // Crear un contenedor para las flechas de ordenamiento
    const sortContainer = this.renderer.createElement('div');
    this.renderer.addClass(sortContainer, 'csl-sort-arrow');

    // Añadir las flechas al sortContainer
    this.arrowUp = this.renderer.createElement('div');
    this.arrowDown = this.renderer.createElement('div');
    this.renderer.addClass(this.arrowUp, 'csl-arrow-up');
    this.renderer.addClass(this.arrowDown, 'csl-arrow-down');
    this.renderer.appendChild(sortContainer, this.arrowUp);
    this.renderer.appendChild(sortContainer, this.arrowDown);

    this.renderer.appendChild(actions, sortContainer);
    this.childNodes.forEach((child) => {
      this.renderer.appendChild(actions, child.nativeElement);
    });

    // Añadir el sortContainer como hijo del contenedor columnSorters
    this.renderer.appendChild(columnSorters, actions);
    // Limpiar elementRef.nativeElement
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', '');

    // Añadir columnSorters al elementRef.nativeElement
    this.renderer.appendChild(this.elementRef.nativeElement, columnSorters);
  }

  onClick() {
    if (SortDirective.activeDirective && SortDirective.activeDirective !== this) {
      SortDirective.activeDirective.resetSorting();
    }

    if (this.status === null) {
      this.status = 'ascend';
      this.renderer.addClass(this.arrowUp, 'active');
      this.renderer.removeClass(this.arrowDown, 'active');
    } else if (this.status === 'ascend') {
      this.status = 'descend';
      this.renderer.removeClass(this.arrowUp, 'active');
      this.renderer.addClass(this.arrowDown, 'active');
    } else {
      this.status = null;
      this.renderer.removeClass(this.arrowUp, 'active');
      this.renderer.removeClass(this.arrowDown, 'active');
    }

    SortDirective.activeDirective = this;
    this.changeSorting.emit(this.status);
  }

  resetSorting() {
    this.status = null;
    this.renderer.removeClass(this.arrowUp, 'active');
    this.renderer.removeClass(this.arrowDown, 'active');
  }
}