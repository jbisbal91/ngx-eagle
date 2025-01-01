import { NgModule } from '@angular/core';
import { ButtonDirective } from './button.directive';

@NgModule({
  exports: [ButtonDirective],
  imports: [ButtonDirective],
})
export class ButtonModule {}
