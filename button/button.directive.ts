import { Directive, Input } from '@angular/core';
import { ButtonFillMode, ButtonRounded, ButtonSize } from './typings';

@Directive({
  selector: 'button[ngx-button]',
  host: {
    '[class.button-sm]': 'buttonSize === "small"',
    '[class.button-md]': 'buttonSize === "medium"',
    '[class.button-lg]': 'buttonSize === "large"',
    '[class.button-rounded-sm]': 'buttonRounded === "small"',
    '[class.button-rounded-md]': 'buttonRounded === "medium"',
    '[class.button-rounded-lg]': 'buttonRounded === "large"',
    '[class.button-rounded-full]': 'buttonRounded === "full"',
    '[class.button-filled]': 'buttonFillMode === "filled"',
    '[class.button-outlined]': 'buttonFillMode === "outlined"',
    '[class.button-text]': 'buttonFillMode === "text"',
    '[class.button-elevated]': 'buttonFillMode === "elevated"',
  },
  standalone: true,
})
export class ButtonDirective {
  @Input() buttonFillMode: ButtonFillMode = 'filled';
  @Input() buttonRounded: ButtonRounded = 'medium';
  @Input() buttonSize: ButtonSize = 'medium';
}
