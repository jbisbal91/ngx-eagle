import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { Option } from './ngx-option.interface';
import { NgIf } from '@angular/common';
@Component({
  selector: 'ngx-option',
  templateUrl: './ngx-option.component.html',
  styleUrls: ['./ngx-option.component.scss'],
  standalone: true,
  host: {
    class: 'ngx-option',
  },
  imports: [NgIf],
})
export class NgxOptionComponent implements Option, AfterViewInit {
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) selected: boolean = false;
  @Input() value: any = '';
  public label: any = '';

  @Output() selectedOptionOnClick: EventEmitter<Option> = new EventEmitter<Option>();

  public checked: boolean = false;
  public isVisible: boolean = true;

  @ViewChild('content') contentRef!: ElementRef;

  selectedOption(opt:NgxOptionComponent) {
    if (!opt.disabled) {
      this.selectedOptionOnClick.emit({
        disabled: opt.disabled,
        selected: opt.selected,
        value: opt.value,
        label: opt.label,
      });
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.label = this.contentRef?.nativeElement.textContent.trim();
    });
  }
}
