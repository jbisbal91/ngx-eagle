import { Directive } from '@angular/core';

@Directive({
  selector: '[ngx-card-image]',
  host: {
    class: 'ngx-card-image',
  },
  standalone: true,
})
export class CardImageDirective {}
