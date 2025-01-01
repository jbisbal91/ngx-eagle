import { Component } from '@angular/core';

@Component({
  selector: 'ngx-card-header',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-card-header',
  },
  standalone: true,
})
export class CardHeaderComponent {}
