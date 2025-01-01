import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpinnerSize, SpinnerType } from './typings';

@Component({
  selector: 'ngx-spinner',
  standalone: true,
  imports: [NgIf, NgFor],
  template: `
    <div *ngIf="!hidden" class="spinner" 
         [class.spinner-sm]="size === 'sm'"
         [class.spinner-md]="size === 'md'"
         [class.spinner-lg]="size === 'lg'">
      <div *ngFor="let _ of [].constructor(12); let i = index"
          [class.spinner-bars]="spinnerType === 'bars'"
          [class.spinner-dots]="spinnerType === 'dots'"       
          [style.transform]="'rotate(' + (i * 30) + 'deg)'"
          [style.animationDelay]="-1.1 + i * 0.1 + 's'">
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() hidden: boolean = false;
  @Input() spinnerType: SpinnerType = 'bars';
}
