import { NgModule } from '@angular/core';
import { TableDirective } from './table/table.directive';
import { ColumnGroupDirective } from './table/column-group.directive';
import { SortDirective } from './table/sort.directive';
import { ResizeDirective } from './table/resize.directive';

@NgModule({
  exports: [
    TableDirective,
    ColumnGroupDirective,
    SortDirective,
    ResizeDirective,
  ],
  imports: [
    TableDirective,
    ColumnGroupDirective,
    SortDirective,
    ResizeDirective,
  ],
})
export class TableModule {}
