import { Component, Input, TemplateRef, booleanAttribute } from '@angular/core';
import { Tab } from './tab.interface';
import { NgIf, NgTemplateOutlet } from '@angular/common';

/**
 * Represents a tab component.
 */
@Component({
  selector: 'ngx-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
})
export class TabComponent implements Tab {
  /**
   * The unique identifier for the tab.
   */
  public id: string = crypto.randomUUID();

  /**
   * Indicates whether the tab is currently active.
   */
  public isActive: boolean = false;

  /**
   * Indicates whether the tab is disabled.
   */
  @Input({ transform: booleanAttribute })
  disabled: boolean = false;

  /**
   * The label for the tab.
   */
  @Input()
  label: string = '';

  /**
   * The icon for the tab.
   */
  @Input() icon: TemplateRef<any> | null = null;

  /**
   * The direction of the icon.
   */
  @Input() direction: 'left' | 'right' = 'left';
}
