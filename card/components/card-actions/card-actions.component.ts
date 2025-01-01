import { Component } from '@angular/core';

@Component({
  selector: 'ngx-card-actions',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'ngx-card-actions',
  },
  standalone: true,
})
export class CardActionsComponent {}
