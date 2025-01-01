import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';


@NgModule({
  exports: [LoadingComponent],
  imports: [
    LoadingComponent
  ]
})
export class LoadingModule { }
