import { Directive } from '@angular/core';

@Directive({
  selector: '[ngx-menu]', host: {
    class: 'ngx-menu',
  },
  standalone: true
})
export class MenuDirective {

  constructor() { }

}
