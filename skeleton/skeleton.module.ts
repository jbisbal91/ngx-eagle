import { NgModule } from '@angular/core';
import { SkeletonDirective } from './skeleton.directive';

@NgModule({
  exports: [SkeletonDirective],
  imports: [SkeletonDirective]
})
export class SkeletonModule { }
