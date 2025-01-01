import { Directive } from '@angular/core';

@Directive({
  selector: 'tr[ngx-column-group]',
  host: {
    class: 'ngx-column-group',
  },
  standalone: true,
})
export class ColumnGroupDirective {
  constructor() {}
}
