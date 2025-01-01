import { NgModule } from '@angular/core';
import { RadioGroupComponent } from './radio-group.component';
import { RadioButtonComponent } from './radio-button.component';

@NgModule({
  exports: [RadioGroupComponent, RadioButtonComponent],
  imports: [RadioGroupComponent, RadioButtonComponent],
})
export class RadioButtonModule {}
