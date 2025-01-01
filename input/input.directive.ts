import { AfterViewInit, Directive, ElementRef, Input, OnInit, Optional, Renderer2 } from '@angular/core';
import { NgControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: 'input[ngx-input], select[ngx-input], textarea[ngx-input]',
  host: {
    class: 'ngx-input',
  },
  standalone: true
})
export class InputDirective implements OnInit, AfterViewInit {
  private _errors: any[] = [];
  validatorRequired = false;

  @Input()
  set errors(value: any[]) {
    this._errors = value;
    this.updateErrors();
  }

  get errors(): any[] {
    return this._errors;
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Optional() private control: NgControl
  ) { }

  ngOnInit() {
    if (this.control?.control?.validator) {
      const validationErrors = this.getValidationErrors(this.control.control.validator);
      this.validatorRequired = validationErrors?.['required'] ?? false;
    }
  }

  ngAfterViewInit() {
    const inputElement = this.el.nativeElement;
    this.addRequiredAsterisk(inputElement);
    this.renderer.listen(inputElement, 'input', () => this.clearErrors());
  }

  private getValidationErrors(validator: ValidatorFn) {
    return validator({} as any) || {};
  }

  private addRequiredAsterisk(inputElement: HTMLInputElement) {
    const label = inputElement.labels?.[0];
    if (label && (inputElement.required || this.validatorRequired) && inputElement.id === label.htmlFor) {
      this.appendRequiredAsterisk(label);
    }
  }

  private appendRequiredAsterisk(label: HTMLLabelElement) {
    if (!label.querySelector('.required-asterisk')) {
      const span = this.renderer.createElement('span');
      this.renderer.addClass(span, 'required-asterisk');
      this.renderer.appendChild(span, this.renderer.createText(' *'));
      this.renderer.appendChild(label, span);
    }
  }

  private updateErrors(): void {
    this.clearErrors();
    if (this._errors?.length > 0) {
      this.showErrors();
    }
  }

  private showErrors(): void {
    const inputElement = this.el.nativeElement;
    let errorsContainer = inputElement.nextSibling as HTMLElement;

    if (!errorsContainer?.classList.contains('errors-container')) {
      errorsContainer = this.renderer.createElement('div');
      this.renderer.addClass(errorsContainer, 'errors-container');
      this.renderer.addClass(inputElement, 'ngx-input-invalid');
      this.renderer.insertBefore(inputElement.parentNode, errorsContainer, inputElement.nextSibling);
    }

    this.renderer.setProperty(errorsContainer, 'innerHTML', '');
    this._errors.forEach(error => this.appendError(errorsContainer, error));
  }

  private appendError(container: HTMLElement, error: any) {
    const errorSpan = this.renderer.createElement('span');
    this.renderer.addClass(errorSpan, 'error');
    this.renderer.appendChild(errorSpan, this.renderer.createText(error));
    this.renderer.appendChild(container, errorSpan);
  }

  private clearErrors(): void {
    const inputElement = this.el.nativeElement;
    const errorsContainer = inputElement.nextSibling as HTMLElement;
    if (errorsContainer?.classList.contains('errors-container')) {
      this.renderer.removeChild(inputElement.parentNode, errorsContainer);
      this.renderer.removeClass(inputElement, 'ngx-input-invalid');
    }
  }
}
