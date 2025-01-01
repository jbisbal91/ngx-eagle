import { NgModule } from '@angular/core';
import { RowDirective } from './row/row.directive';
import { ColDirective } from './col/col.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, RowDirective, ColDirective],
  exports: [RowDirective, ColDirective],
})
export class GridModule {}
