import { Directive } from '@angular/core';

@Directive({
  selector: '[ngx-menu-item]',
  host: {
    class: 'ngx-menu-item',
  },
  standalone: true
})
export class MenuItemDirective {

  constructor() { }

}
