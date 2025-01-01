import { Component } from '@angular/core';

@Component({
  selector: 'ngx-card-content',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-card-content',
  },
  standalone: true,
})
export class CardContentComponent {}
