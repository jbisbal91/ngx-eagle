import {Component} from '@angular/core';

@Component({
  selector: 'ngx-card',
  standalone: true,
  template: `
    <ng-content></ng-content>`,
  host: {
    class: 'ngx-card',
  }
})
export class CardComponent {
}
