import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngx-form-field',
  template: `<ng-content></ng-content>`,
  standalone: true,
  host: {
    class: 'ngx-form-field'
  }
})
export class FormFieldComponent implements AfterViewInit {

  private childNodes: ElementRef[] = [];

  constructor(private formFieldElement: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.findChildNodes(['ngxprefix', 'ngxsuffix', 'ngx-input']);
  }

  findChildNodes(attributes: string[]): void {
    var inputPaddingLeft: number = 0;
    var inputPaddingRight: number = 0;
  
    attributes.forEach(attr => {
      const selector = `[${attr}]`;
      const matchingElements = this.formFieldElement.nativeElement.querySelectorAll(selector);
  
      matchingElements.forEach((_element: any) => {
        const elementRef = new ElementRef(_element);
        this.childNodes.push(elementRef);
  
        if (_element.hasAttribute('ngxprefix')) {
          inputPaddingLeft += _element.offsetWidth;
        }
  
        if (_element.hasAttribute('ngxsuffix')) {
          inputPaddingRight += _element.offsetWidth;
        }
  
        if (_element.hasAttribute('ngx-input')) {
          const paddingLeft = Math.min(inputPaddingLeft + 8, 32);
          this.renderer.setStyle(_element, 'padding-left', `${paddingLeft}px`);
          this.renderer.setStyle(_element, 'padding-right', `${inputPaddingRight + 8}px`);
        }
      });
    });
  }
}
