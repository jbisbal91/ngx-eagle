import { NgComponentOutlet, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  Type,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { DrawerPlacement } from './typings';
import { TouchModule } from 'ngx-eagle/touch';
import { Drawer } from './drawer.service';

@Component({
  selector: 'ngx-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  standalone: true,
  imports: [NgIf, TouchModule, NgTemplateOutlet, NgComponentOutlet],
})
export class DrawerComponent implements AfterViewChecked {
  @Input({ transform: booleanAttribute }) backdrop: boolean = true;
  @Input({ transform: booleanAttribute }) backdropClosable: boolean = true;
  @Input() placement: DrawerPlacement = 'left';
  @Input({ transform: booleanAttribute }) closeMobile: boolean = false;
  @Input({ transform: booleanAttribute }) closeDesktop: boolean = false;

  templateContent!: TemplateRef<any> | null;
  componentContent!: Type<any> | null;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onOpen = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();

  internalVisible = false;

  @Input()
  get visible(): boolean {
    return this.internalVisible;
  }

  set visible(val: boolean) {
    if (this.internalVisible !== val) {
      this.internalVisible = val;
      if (val) {
        this.openDrawer();
      }
      this.visibleChange.emit(val);
    }
  }

  @ViewChild('backdrop') backdropRef!: ElementRef;
  @ViewChild('drawer') drawerRef!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private drawer: Drawer
  ) { }

  ngAfterViewChecked(): void {
    this.updateBackdropStyle();
  }

  closingByTouch(touch: string) {
    if (touch === 'down' && this.placement === 'bottom') {
      this.closingAction();
    } else if (touch === 'up' && this.placement === 'top') {
      this.closingAction();
    }
  }

  updateBackdropStyle() {
    if (this.backdropRef) {
      const bgColor = this.backdrop ? 'rgba(0, 0, 0, 0.65)' : 'transparent';
      this.renderer.setStyle(this.backdropRef.nativeElement, 'background-color', bgColor);
    }
  }

  openDrawer() {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (this.drawerRef) {
        const axis = ['top', 'bottom'].includes(this.placement) ? 'Y' : 'X';
        this.renderer.setStyle(this.drawerRef.nativeElement, 'transform', `translate${axis}(0)`);
        this.onOpen.emit();
      }
    });
  }

  closeDrawer(event: Event) {
    if (this.backdropRef.nativeElement === event.target && this.backdropClosable) {
      this.closingAction();
    }
  }

  closingAction() {
    if (this.drawerRef) {
      const transformMap = {
        top: 'translateY(-100%)',
        bottom: 'translateY(100%)',
        left: 'translateX(-100%)',
        right: 'translateX(100%)',
      };
      this.renderer.setStyle(this.drawerRef.nativeElement, 'transform', transformMap[this.placement]);
      setTimeout(() => {
        document.body.removeAttribute('style');
        this.drawer.closeAll();
        this.visibleChange.emit(false);
        this.onClose.emit();
      }, 500);
    }
  }
}
