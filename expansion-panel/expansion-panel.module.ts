import { NgModule } from '@angular/core';

import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  exports: [AccordionComponent, ExpansionPanelComponent],
  imports: [AccordionComponent, ExpansionPanelComponent],
})
export class ExpansionPanelModule {}
