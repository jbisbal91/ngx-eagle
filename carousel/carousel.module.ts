import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@NgModule({
  exports: [CarouselComponent, CarouselItemComponent],
  imports: [CarouselComponent, CarouselItemComponent],
})
export class CarouselModule {}
