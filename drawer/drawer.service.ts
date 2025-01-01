import { Injectable, ApplicationRef, createComponent, EnvironmentInjector, Type, ComponentRef, TemplateRef } from '@angular/core';
import { DrawerComponent } from './drawer.component';
import { DrawerConfig } from './typings';

@Injectable({
  providedIn: 'root'
})
export class Drawer {

  private drawerComponent!: ComponentRef<DrawerComponent>;

  constructor(private appRef: ApplicationRef, private environmentInjector: EnvironmentInjector) { }

  open(componentOrTemplate: Type<any> | TemplateRef<any>, config?: Partial<DrawerConfig>): void {
    this.drawerComponent = this.createDynamicComponent(DrawerComponent);
    this.drawerComponent.instance.visible = true;
    if (config) {
      this.setDrawerConfig(config);
      // Listen to onOpen and onClose events
      this.drawerComponent.instance.onOpen.subscribe(() => {
        if (config.onOpen) config.onOpen();
      });
      this.drawerComponent.instance.onClose.subscribe(() => {
        if (config.onClose) config.onClose();
      });
    }
    if (componentOrTemplate instanceof TemplateRef) {
      this.drawerComponent.instance.templateContent = componentOrTemplate;
    } else if (componentOrTemplate instanceof Type) {
      this.drawerComponent.instance.componentContent = componentOrTemplate;
    }
    this.appRef.attachView(this.drawerComponent.hostView);
    document.body.appendChild(this.drawerComponent.location.nativeElement);
  }

  setDrawerConfig(config: Partial<DrawerConfig>): void {
    if (this.drawerComponent) {
      this.drawerComponent.instance.backdrop = config.backdrop ?? true;
      this.drawerComponent.instance.backdropClosable = config.backdropClosable ?? true;
      this.drawerComponent.instance.placement = config.placement ?? 'left';
      this.drawerComponent.instance.closeMobile = config.closeMobile ?? false;
      this.drawerComponent.instance.closeDesktop = config.closeDesktop ?? false;
    }
  }

  closeAll(): void {
    document.body.childNodes.forEach((node) => {
      if (node.nodeName === 'NGX-DRAWER') {
        document.body.removeChild(node);
      }
    });
  }

  private createDynamicComponent(component: Type<any>): ComponentRef<DrawerComponent> {
    const componentRef = createComponent(component, { environmentInjector: this.environmentInjector });
    return componentRef;
  }
}
