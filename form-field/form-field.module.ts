import { NgModule } from '@angular/core';
import { FormFieldComponent } from './form-field.component';
import { PrefixDirective } from './prefix.directive';
import { SuffixDirective } from './suffix.directive';

@NgModule({
  exports: [
    FormFieldComponent,
    PrefixDirective,
    SuffixDirective
  ],
  imports: [
    FormFieldComponent,
    PrefixDirective,
    SuffixDirective
  ]
})
export class FormFieldModule { }
