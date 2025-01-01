import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { Guid } from 'ngx-eagle/core/services';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxSize } from './typings';

@Component({
  selector: 'ngx-checkbox',
  template: `
    <input
      #input_checkbox
      [id]="id"
      type="checkbox"
      [indeterminate]="indeterminate"
      [checked]="checked"
      [disabled]="disabled"
      (change)="eventChecked($event)"
    />
    <label [for]="id"><ng-content></ng-content></label>
  `,
  host: {
    class: 'ngx-checkbox',
    '[class.ngx-checkbox-sm]': `ngxSize === 'small'`,
    '[class.ngx-checkbox-df]': `ngxSize === 'default'`,
    '[class.ngx-checkbox-lg]': `ngxSize === 'large'`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CheckboxComponent
  implements AfterViewChecked, AfterViewInit, ControlValueAccessor
{
  @Input() checked: boolean = false;
  @Input() indeterminate: boolean = false;
  @Input() ngxColor: string | undefined | null = '#1890FF';
  @Input() ngxSize: NgxSize | number = 'default';

  @ViewChild('input_checkbox') inputCheckboxRef!: ElementRef;

  disabled: boolean = false;

  @Output() onChecked = new EventEmitter<boolean>();
  onChange: any = () => {
    this.onChecked.emit(this.checked);
  };
  onTouched: any = () => {};

  public id: string = Guid.create();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.disabled = elementRef.nativeElement.hasAttribute('disabled');
  }

  ngAfterViewChecked(): void {
    this.setColor();
  }

  ngAfterViewInit(): void {
    this.setColor();
    if (typeof this.ngxSize === 'number') {
      this.setSizeInNumber();
    }
  }

  setSizeInNumber() {
    const size = Number(this.ngxSize) / 16 + 'rem';
    this.renderer.setStyle(this.inputCheckboxRef.nativeElement, 'width', size);
    this.renderer.setStyle(this.inputCheckboxRef.nativeElement, 'height', size);
  }

  eventChecked(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!this.disabled) {
      this.checked = target.checked;
      this.writeValue(this.checked);
    }
  }

  setColor() {
    if (!this.ngxColor) {
      this.ngxColor = '#1890FF';
    }
    if (
      this.inputCheckboxRef &&
      (this.inputCheckboxRef.nativeElement.indeterminate ||
        this.inputCheckboxRef.nativeElement.checked)
    ) {
      this.renderer.setStyle(
        this.inputCheckboxRef.nativeElement,
        'background-color',
        this.disabled ? '#9E9E9E' : this.ngxColor
      );
    } else {
      this.renderer.setStyle(
        this.inputCheckboxRef.nativeElement,
        'background-color',
        'transparent'
      );
    }
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
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
}
