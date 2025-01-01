import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Host,
  Input,
  OnDestroy,
  Optional,
  Output,
  Renderer2,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButton } from './radio-button.interface';
import { RadioGroupComponent } from './radio-group.component';
import { Subscription } from 'rxjs';
import { NgxSize } from './typings';
import { Guid } from 'ngx-eagle/core/services';

@Component({
  selector: 'ngx-radio-button',
  template: `
    <input
      #input_radio_button
      [id]="id"
      type="radio"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `,
  host: {
    class: 'ngx-radio-button',
    '[class.ngx-radio-button-sm]': `ngxSize === 'small'`,
    '[class.ngx-radio-button-df]': `ngxSize === 'default'`,
    '[class.ngx-radio-button-lg]': `ngxSize === 'large'`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
  standalone: true,
})
export class RadioButtonComponent
  implements
    RadioButton,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy,
    ControlValueAccessor
{
  public id: string = Guid.create();
  @Input() public checked: boolean = false;
  disabled: boolean = false;
  @Input() ngxColor: string = '#1890FF';
  @Input() public ngxValue: string = '';
  @Input() ngxSize: NgxSize | number = 'default';
  @Output() onclick: EventEmitter<RadioButton> =
    new EventEmitter<RadioButton>();

  @ViewChild('input_radio_button') inputRadioRef!: ElementRef;

  private subscription: Subscription = new Subscription();

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Optional() @Host() public radioGroupComp: RadioGroupComponent
  ) {
    this.disabled = elementRef.nativeElement.hasAttribute('disabled');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eventChecked(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!this.disabled) {
      this.checked = target.checked;
      this.writeValue(this.checked);
      this.onClick();
    }
  }

  onClick() {
    let rb = {
      id: this.id,
      checked: this.checked,
      disabled: this.disabled,
      ngxColor: this.ngxColor,
      ngxValue: this.ngxValue,
    };
    this.onclick.emit(rb);
  }

  ngAfterViewChecked(): void {
    this.setAccentColor();
  }

  ngAfterViewInit(): void {
    this.setAccentColor();
    if (typeof this.ngxSize === 'number') {
      this.setSizeInNumber();
    }
    this.subscription.add(
      this.radioGroupComp?.currentRadioChecked$.subscribe(
        (currentRadioChecked) => {
          this.onChange(currentRadioChecked.id === this.id ? true : false);
        }
      )
    );
  }

  setSizeInNumber() {
    const size = Number(this.ngxSize) / 16 + 'rem';
    this.renderer.setStyle(this.inputRadioRef.nativeElement, 'width', size);
    this.renderer.setStyle(this.inputRadioRef.nativeElement, 'height', size);
  }

  writeValue(value: boolean): void {
    this.checked = value;
    this.onChange(this.checked);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  setAccentColor() {
    this.renderer.setStyle(
      this.inputRadioRef.nativeElement,
      'accent-color',
      this.disabled ? '#9E9E9E' : this.ngxColor
    );
  }
}
