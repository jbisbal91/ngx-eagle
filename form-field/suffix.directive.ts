import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxSuffix]',
  host: {
    class: 'ngx-suffix'
  },
  standalone: true
})
export class SuffixDirective {

  constructor() { }

}
