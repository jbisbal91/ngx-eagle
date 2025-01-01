import { NgModule } from '@angular/core';
import { ResizableDirective } from './resizable.directive';


@NgModule({
  exports: [
    ResizableDirective
  ],
  imports: [
    ResizableDirective
  ]
})
export class ResizableModule { }
