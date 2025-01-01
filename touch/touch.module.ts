import { NgModule } from '@angular/core';
import { TouchDirective } from './touch.directive';


@NgModule({
  exports: [
    TouchDirective
  ],
  imports: [
    TouchDirective
  ]
})
export class TouchModule { }
