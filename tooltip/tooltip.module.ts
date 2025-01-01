import { NgModule } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';



@NgModule({
  exports: [TooltipDirective],
  imports: [
    TooltipDirective
  ]
})
export class TooltipModule { }
