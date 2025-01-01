import { Directive, HostListener, inject } from '@angular/core';

import { NgxDialog } from './dialog.service';

@Directive({
  selector: '[closeAllDialogs]',
  standalone: true,
})
export class CloseAllDialogsDirective {
  private NgxDialog = inject(NgxDialog);

  @HostListener('click')
  onClose() {
    this.NgxDialog.closeAll();
  }
}
