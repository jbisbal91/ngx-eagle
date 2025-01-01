import { NgModule } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';

const COMPONENTS = [TabComponent, TabGroupComponent];
@NgModule({
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class TabModule {}
