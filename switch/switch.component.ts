import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  booleanAttribute,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LabelPosition, NgxSize } from './typings';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-switch',
  template: `
    <button
      class="ngx-switch"
      [class.ngx-switch-sm]="ngxSize === 'small'"
      [class.ngx-switch-df]="ngxSize === 'default'"
      [class.ngx-switch-lg]="ngxSize === 'large'"
      [disabled]="disabled"
      [class.ngx-switch-checked]="isChecked"
      (click)="toggle()"
    >
      <span class="ngx-switch-knob"></span>
      <span class="ngx-switch-inner"></span>
    </button>
    <label class="ngx-switch-label" (click)="toggle()"
      ><ng-content></ng-content
    ></label>
  `,
  host: {
    '[class.ngx-switch-label-position-after]': `labelPosition === 'after'`,
    '[class.ngx-switch-label-position-before]': `labelPosition === 'before'`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf],
})
export class SwitchComponent implements ControlValueAccessor, AfterContentInit {
  isChecked = false;
  onChange: any = () => {};
  onTouched: any = () => {};
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input() labelPosition: LabelPosition = 'after';
  @Input() ngxSize: NgxSize = 'default';

  constructor(private cdr: ChangeDetectorRef, private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    this.cdr.markForCheck();
  }

  writeValue(value: boolean): void {
    this.isChecked = value;
    this.onChange(this.isChecked);
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  toggle(): void {
    if (!this.disabled) {
      this.writeValue(!this.isChecked);
    }
  }
}
