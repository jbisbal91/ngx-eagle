import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  QueryList,
  forwardRef,
} from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subscription } from 'rxjs';
import { RadioButton } from './radio-button.interface';

@Component({
  selector: 'ngx-radio-group',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-radio-group',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RadioGroupComponent
  implements AfterContentInit, OnDestroy, ControlValueAccessor
{
  @ContentChildren(RadioButtonComponent)
  public radioButtons!: QueryList<RadioButtonComponent>;

  private subscription: Subscription = new Subscription();

  readonly currentRadioChecked$ = new ReplaySubject<RadioButton>();
  @Output() currentRadioChecked: EventEmitter<RadioButton> =
    new EventEmitter<RadioButton>();

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private elementRef: ElementRef) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterContentInit(): void {
    const disabled = this.elementRef.nativeElement.hasAttribute('disabled');
    this.setDisabledState(disabled);
    this.radioButtons.forEach((rb) => {
      this.subscription.add(
        rb.onclick.subscribe(() => {
          this.setValue(rb.ngxValue);
          this.onChange(rb.ngxValue);
          this.currentRadioChecked$.next(rb);
        })
      );
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.setValue(value);
      this.onChange(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.radioButtons?.forEach((rb) => (rb.disabled = disabled));
  }

  setValue(ngxValue: any) {
    this.radioButtons.forEach((rb) => {
      rb.checked = rb.ngxValue === ngxValue ? true : false;
    });
  }
}
