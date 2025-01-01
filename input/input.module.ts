import { NgModule } from '@angular/core';
import { InputDirective } from './input.directive';

@NgModule({
  exports: [InputDirective],
  imports: [InputDirective],
})
export class InputModule {}
