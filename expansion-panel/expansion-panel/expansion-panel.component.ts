import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  TemplateRef,
  booleanAttribute,
} from '@angular/core';
import { ExpansionPanel } from '../expansion-panel.interface';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Guid } from 'ngx-eagle/core/services';
import { NgxExpandIconPosition, NgxType } from '../typings';

@Component({
  selector: 'ngx-expansion-panel',
  template: `
    <div
      class="exp-panel"
      [class.card-type]="ngxType && ngxType === 'card'"
      [class.bordered-type]="ngxType && ngxType === 'bordered'"
      [class.border-bottom-exp-item]="ngxType === 'bordered' && lastExP"
    >
      <div
        (click)="expand()"
        class="header"
        [class.border-bottom-header]="expanded && ngxType !== 'default'"
        [class.expand-icon-position]="ngxExpandIconPosition === 'left'"
        [class.disabled]="disabled"
      >
        <span *ngIf="typeOf(ngxLabel) === 'string'">{{ ngxLabel }}</span>
        <ng-template
          *ngIf="typeOf(ngxLabel) === 'object'"
          [ngTemplateOutlet]="ngxLabel"
        ></ng-template>
        <span
          *ngIf="!hideToggle"
          class="arrow flex"
          [ngClass]="
            expanded
              ? ngxExpandIconPosition == 'left'
                ? 'rotate-left'
                : 'rotate-right'
              : ngxExpandIconPosition == 'left'
              ? 'no-rotate-left'
              : 'no-rotate-right'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </div>
      <div
        [class.content]="ngxType !== 'default'"
        [class.content-default]="ngxType === 'default'"
        *ngIf="expanded"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  standalone: true,
  host: {
    class: 'ngx-expansion-panel',
  },
  imports: [NgClass, NgIf, NgTemplateOutlet],
})
export class ExpansionPanelComponent implements ExpansionPanel {
  @Output() ngxActiveChange: EventEmitter<ExpansionPanelComponent> =
    new EventEmitter<ExpansionPanelComponent>();

  public id: string = Guid.create();

  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) expanded: boolean = false;
  @Input({ transform: booleanAttribute }) hideToggle: boolean = false;
  @Input() ngxLabel: any | TemplateRef<void>;

  ngxType!: NgxType;
  ngxExpandIconPosition!: NgxExpandIconPosition;

  lastExP: boolean = false;

  constructor(private elementRef?: ElementRef) {
    this.disabled = this.elementRef?.nativeElement.hasAttribute('disabled');
    this.hideToggle = this.elementRef?.nativeElement.hasAttribute('hideToggle');
  }

  expand() {
    if (this.disabled) {
      return;
    }
    const expansionPanel = new ExpansionPanelComponent();
    expansionPanel.expanded = !this.expanded;
    expansionPanel.ngxLabel = this.ngxLabel;
    expansionPanel.disabled = this.disabled;
    expansionPanel.id = this.id;
    this.ngxActiveChange.emit(expansionPanel);
  }

  typeOf(value: any) {
    return typeof value;
  }
}
