import { NgIf, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Optional,
  Output,
  QueryList,
  Renderer2,
  Self,
  TemplateRef,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgxOptionComponent } from '../ngx-option/ngx-option.component';
import { SelectedOption } from './selected-option.interface';

@Component({
  selector: 'ngx-outlined-select-field',
  templateUrl: './ngx-outlined-select-field.component.html',
  styleUrls: ['./ngx-outlined-select-field.component.scss'],
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
})
export class NgxOutlinedSelectFieldComponent
  implements AfterViewInit, ControlValueAccessor, OnDestroy {
  @ContentChildren(NgxOptionComponent)
  public optionList!: QueryList<NgxOptionComponent>;

  @Input({ transform: booleanAttribute }) autocomplete: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) multiple: boolean = false;
  @Input() pattern!: any;
  @Input() placeholder: string = '';
  @Input({ transform: booleanAttribute }) required!: boolean;
  @Input() suffix!: any | TemplateRef<void>;

  internalValue: any = null;
  selectedOptions: SelectedOption[] = [];

  @Input()
  get value(): any {
    return this.internalValue;
  }

  set value(value: any) {
    setTimeout(() => {
      if (value) {
        if (this.multiple) {
          this.multipleInputValues(value);
        } else {
          this.singleInputValue(value);
        }
      }
    }, 100);
  }

  isSelectedOption(
    element: any
  ): element is SelectedOption | SelectedOption[] {
    if (Array.isArray(element)) {
      return element.every((item) => this.isSelectedOption(item));
    } else {
      return (
        typeof element === 'object' &&
        'label' in element &&
        'value' in element
      );
    }
  }

  @Output() onChangeValue: EventEmitter<any> = new EventEmitter<any>();




  optPos: 'bottom' | 'top' = 'bottom';


  @ViewChild('input') inputRef!: ElementRef;
  @ViewChild('options_container') optionsRef!: ElementRef;

  onChange: any = () => { };
  onTouched: any = () => { };

  private subscription: Subscription = new Subscription();

  isFocused: boolean = false;
  isOpenMultipleMode: boolean = false;

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.optionList.forEach((option) => {
      option.checked = this.multiple;
      this.subscription.add(
        option.selectedOptionOnClick.subscribe(() => {
          if (this.multiple) {
            this.multiSelectionOnClick(option.value);
            this.onChange(this.selectedOptions);
            this.onChangeValue.emit(this.selectedOptions);
          } else {
            this.singleInputValue(option.value);
            this.onChange(option.value);
            this.onChangeValue.emit(option.value);
          }
        })
      );
    });
  }

  @HostListener('document:mousedown', ['$event'])
  mousedown(event: any): void {
    this.isOpenMultipleMode =
      this.multiple && this.optionsRef.nativeElement.contains(event.target);
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.autocomplete) {
      event.preventDefault();
    }
  }

  typeOf(value: any) {
    return typeof value;
  }

  writeValue(value: any): void {
    setTimeout(() => {
      if (value) {
        if (this.multiple) {
          this.multipleInputValues(value);
        } else {
          this.singleInputValue(value);
        }
      }
    }, 100);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  singleInputValue(value: any) {
    if (typeof value !== 'string' && typeof value !== 'number') {
      throw new TypeError(
        'Invalid argument, only string and number values are allowed.'
      );
    }
    let found = false;
    this.optionList.forEach((opt) => {
      if (opt.value === value) {
        this.internalValue = opt.label;
        opt.selected = true;
        found = true;
      } else {
        opt.selected = false;
      }
    });
    if (!found) {
      this.internalValue = null;
      this.onChange(null);
      this.onChangeValue.emit(null);
    }
  }

  multipleInputValues(selectedOptions: any) {
    if (!this.isSelectedOption(selectedOptions)) {
      throw new TypeError(
        'Invalid argument, only values {label: string, value: string} or array of the same type are allowed.'
      );
    }
    if (Array.isArray(selectedOptions)) {
      this.selectedOptions = selectedOptions;
      selectedOptions.forEach((option: SelectedOption) => {
        this.optionList.forEach((opt) => {
          if (opt.value === option.value) {
            opt.selected = true;
          }
        });
      });
      this.selectMultipleOptions(this.selectedOptions);
    }
  }

  selectMultipleOptions(selectedOptions: SelectedOption[]) {
    const optionsLength = selectedOptions.length;
    const overflow = optionsLength > 1 ? `  (+${optionsLength - 1})` : '';
    this.internalValue =
      optionsLength > 0
        ? selectedOptions[optionsLength - 1].label + overflow
        : null;
  }

  multiSelectionOnClick(value: any) {
    this.optionList.forEach((opt) => {
      const isSelected = this.selectedOptions.some(
        (option) => option.value === value
      );
      if (opt.value === value) {
        if (!isSelected) {
          opt.selected = true;
          this.selectedOptions.push({ label: opt.label, value: opt.value });
        }
        if (isSelected) {
          const index = this.selectedOptions.findIndex(
            (option) => option.value === value
          );
          if (index !== -1) {
            opt.selected = false;
            this.selectedOptions.splice(index, 1);
          }
        }
      }
    });
    this.selectMultipleOptions(this.selectedOptions);
  }

  onInput(event: Event): void {
    if (this.autocomplete) {
      this.onSearch(event);
    }
  }

  onSearch(event: Event) {
    const search = (event.target as HTMLInputElement).value.toLowerCase();
    if (search === '') {
      this.internalValue = '';
    }
    this.optionList.forEach((option: NgxOptionComponent) => {
      const label = option.label.toLowerCase();
      option.isVisible = label.includes(search);
      if (option.isVisible && option.selected) {
        option.selected = false;
      }
    });
  }

  onFocus(event: FocusEvent) {
    this.isFocused = true;
    this.showBackdrop();
    this.adjustOptionsPosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustOptionsPosition();
  }

  adjustOptionsPosition() {
    const contProp = this.inputRef.nativeElement.getBoundingClientRect();
    const optionsProp = this.optionsRef.nativeElement.getBoundingClientRect();
    let top = contProp.top + contProp.height;
    const offsetTop = contProp.top;
    const offsetBottom = window.innerHeight - top;
    this.optPos = 'bottom';
    setTimeout(() => {
      if (this.optionsRef) {
        const offsetHeight = this.optionsRef.nativeElement.offsetHeight;
        if (
          offsetBottom < optionsProp.height &&
          offsetTop > offsetBottom &&
          offsetHeight <= offsetTop
        ) {
          top = top - (offsetHeight + contProp.height + 4);
          this.optPos = 'top';
        }
        this.renderer.setStyle(
          this.optionsRef.nativeElement,
          'top',
          `${top}px`
        );
      }
    });
  }

  showBackdrop() {
    const backdrop = document.createElement('div');
    backdrop.classList.add('ngx-backdrop');
    document.body.appendChild(backdrop);
  }

  hideBackdrop() {
    const backdrop = document.querySelector('.ngx-backdrop');
    backdrop?.remove();
  }

  onBlur(event: FocusEvent) {
    setTimeout(() => {
      this.isFocused = false;
      this.hideBackdrop();
    }, 100);
  }

  isValidValue(value: any): boolean {
    return value !== undefined && value !== null && value !== '';
  }

  valid() {
    return (!this.pattern && !this.ngControl && !this.required) ||
      this.ngControl?.status?.toLowerCase() === 'valid' ||
      (this.required && this.isValidValue(this.value) && !this.ngControl) ||
      (this.pattern && this.inputRef.nativeElement.validity.valid)
      ? true
      : false;
  }
}
