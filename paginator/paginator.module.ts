import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  exports: [PaginatorComponent],
  imports: [PaginatorComponent],
})
export class PaginatorModule {}
