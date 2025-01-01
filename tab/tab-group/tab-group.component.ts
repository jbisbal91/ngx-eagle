import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  Renderer2,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Tab } from '../tab/tab.interface';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { AlignTabs, Mode, TabPosition } from '../typings';

/**
 * Represents a tab group component.
 */
@Component({
  selector: 'ngx-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  host: {
    class: 'ngx-tab-group',
    '[class.ngx-tab-position-top]': `tabPosition === 'top'`,
    '[class.ngx-tab-position-left]': `tabPosition === 'left'`,
    '[class.ngx-tab-position-right]': `tabPosition === 'right'`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgForOf, NgIf, NgTemplateOutlet],
})
export class TabGroupComponent implements AfterContentInit {
  /**
   * The list of tabs in the tab group.
   */
  @ContentChildren(TabComponent) public tabs!: QueryList<TabComponent>;

  /**
   * The alignment of the tabs within the tab group.
   */
  @Input() alignTabs: AlignTabs = 'start';

  /**
   * The mode of the tab group.
   */
  @Input() mode: Mode = 'default';

  /**
   * The position of the tabs within the tab group.
   */
  @Input() tabPosition: TabPosition = 'top';

  /**
   * The index of the currently selected tab.
   */
  internalSelectedIndex: number = 0;

  /**
   * Gets the index of the currently selected tab.
   */
  @Input()
  get selectedIndex(): number {
    return this.internalSelectedIndex;
  }

  /**
   * Sets the index of the currently selected tab.
   */
  set selectedIndex(index: number) {
    if (this.internalSelectedIndex !== index) {
      this.internalSelectedIndex = index;
      this.selectedIndexChange.emit(index);
    }
  }

  /**
   * Event emitted when the selected index changes.
   */
  @Output() selectedIndexChange: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) { }

  /**
   * Lifecycle hook that is called after the content of the component has been initialized.
   */
  ngAfterContentInit(): void {
    Promise.resolve().then(() => {
      this.selectTab(this.internalSelectedIndex);
    });
  }

  /**
   * Finds a tab in the tab group by its index.
   * @param index - The index of the tab.
   * @returns The tab component.
   */
  findTabByIndex(index: number) {
    const tabs = this.tabs.toArray();
    return tabs[index];
  }

  /**
   * Selects a tab in the tab group by its index.
   * @param index - The index of the tab to select.
   */
  selectTab(index: number) {
    let tab: Tab = this.findTabByIndex(index);
    if (tab?.disabled) {
      return;
    }
    this.tabs?.forEach((tab) => (tab.isActive = false));
    if (tab) {
      tab.isActive = true;
    }
    this.selectedIndexChange.emit(index);
    this.cdr.markForCheck();
  }

  /**
   * Closes a tab in the tab group.
   * @param tab - The tab to close.
   */
  closeTab(tab: Tab): void {
    if (tab?.disabled) {
      return;
    }
    const tabs = this.tabs.toArray();
    let index = tabs.findIndex((tb) => tb.id === tab.id);
    tabs.splice(index, 1);
    this.tabs = new QueryList<TabComponent>();
    this.tabs.reset(tabs);
    const tabContent = document.getElementById(tab.id);
    this.renderer.removeChild(tabContent?.parentNode, tabContent);
    if (tab.isActive) {
      this.selectTab(0);
    }
  }
}
