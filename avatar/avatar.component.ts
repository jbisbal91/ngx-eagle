import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'ngx-avatar',
  templateUrl:'./avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf,NgStyle],
})
export class AvatarComponent {
  @Input() ngxSrc: string | null = null;
  @Input() ngxText: string | null = null;

  getInitials(text: string): string {
    const words: string[] = text.split(' ');
    const initials: string[] = words.map((word) =>
      word.charAt(0).toUpperCase()
    );
    return initials.join('');
  }
}
