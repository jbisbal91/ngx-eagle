import { NgIf, NgStyle } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  booleanAttribute,
} from '@angular/core';
import { NgxMode } from './typings';

@Component({
  selector: 'ngx-tag',
  template: `
    <ng-content></ng-content>
    <svg
      class="ngx-tag-close"
      *ngIf="ngxMode === 'closeable'"
      (click)="closeTag($event)"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 -960 960 960"
      width="14"
      fill="currentColor"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  `,
  host: {
    class: 'ngx-tag',
    '[class.ngx-tag-checkable]': `ngxMode === 'checkable'`,
    '(click)': 'updateCheckedStatus()',
  },
  standalone: true,
  imports: [NgStyle, NgIf],
})
export class TagComponent implements OnInit {
  @Input({ transform: booleanAttribute }) ngxBordered: boolean = true;
  @Input({ transform: booleanAttribute }) ngxChecked: boolean = false;
  @Input() ngxMode: NgxMode = 'default';

  @Output() readonly ngxOnClose = new EventEmitter<MouseEvent>();
  @Output() readonly ngxCheckedChange = new EventEmitter<boolean>();

  backgroundColor: string = '#1890FF';
  color: string = '#ffffff';

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) { 
    this.backgroundColor = this.elementRef.nativeElement.style.backgroundColor;
  }

  ngOnInit(): void {
    this.setTagColor();
  }

  updateCheckedStatus(): void {
    if (this.ngxMode === 'checkable') {
      this.ngxChecked = !this.ngxChecked;
      this.setTagColor();
      this.ngxCheckedChange.emit(this.ngxChecked);
    }
  }

  setTagColor() {
    let bgColor = '';
    let color = '';
    let borderColor = '';
    switch (this.ngxMode) {
      case 'default':
        bgColor = this.backgroundColor;
        color = this.color;
        break;
      case 'checkable':
        bgColor = this.ngxChecked ? this.backgroundColor : 'transparent';
        color = this.ngxChecked ? this.color : 'currentColor';
        break;
      case 'closeable':
        bgColor = this.backgroundColor;
        color = this.color;
        break;
    }
    borderColor = this.color === '#ffffff' ? 'currentColor' : this.color;
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      bgColor
    );
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-color',
      this.ngxBordered ? borderColor : 'transparent'
    );
  }

  closeTag(e: MouseEvent): void {
    this.ngxOnClose.emit(e);
    if (!e.defaultPrevented) {
      this.renderer.removeChild(
        this.renderer.parentNode(this.elementRef.nativeElement),
        this.elementRef.nativeElement
      );
    }
  }
}
