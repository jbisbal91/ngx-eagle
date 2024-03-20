import * as i0 from '@angular/core';
import { EventEmitter, booleanAttribute, Component, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NgIf } from '@angular/common';

class DrawerComponent {
    get ngxVisible() {
        return this.internalVisible;
    }
    set ngxVisible(val) {
        if (this.internalVisible !== val) {
            this.internalVisible = val;
            if (val) {
                this.openDrawer();
            }
            this.ngxVisibleChange.emit(val);
        }
    }
    constructor(renderer) {
        this.renderer = renderer;
        this.ngxBackdrop = true;
        this.ngxBackdropClosable = true;
        this.ngxPlacement = 'left';
        this.internalVisible = false;
        this.ngxVisibleChange = new EventEmitter();
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngAfterViewChecked() {
        this.setBgBackdrop();
    }
    setBgBackdrop() {
        if (this.backdropRef) {
            const bgBackdrop = this.ngxBackdrop
                ? 'rgba(0, 0, 0, 0.65)'
                : 'transparent';
            this.renderer.setStyle(this.backdropRef.nativeElement, 'background-color', bgBackdrop);
        }
    }
    openDrawer() {
        setTimeout(() => {
            if (this.drawerRef &&
                (this.ngxPlacement === 'top' ||
                    this.ngxPlacement === 'bottom' ||
                    this.ngxPlacement === 'right' ||
                    this.ngxPlacement === 'left')) {
                const axis = this.ngxPlacement === 'top' || this.ngxPlacement === 'bottom'
                    ? 'Y'
                    : 'X';
                this.renderer.setStyle(this.drawerRef.nativeElement, 'transform', `translate${axis}(0px)`);
            }
        });
    }
    closeDrawer(event) {
        const clickedElement = event.target;
        const isClickOnParent = clickedElement === this.backdropRef.nativeElement;
        const isClickOnChild = this.drawerRef.nativeElement.contains(clickedElement);
        if (isClickOnParent && !isClickOnChild && this.ngxBackdropClosable) {
            this.closingAction();
        }
    }
    closingAction() {
        if (this.drawerRef) {
            const transformMap = {
                bottom: 'translateY(100%)',
                top: 'translateY(-100%)',
                right: 'translateX(100%)',
                left: 'translateX(-100%)',
            };
            this.renderer.setStyle(this.drawerRef.nativeElement, 'transform', transformMap[this.ngxPlacement]);
            setTimeout(() => {
                this.ngxVisibleChange.emit(false);
            }, 500);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DrawerComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: DrawerComponent, isStandalone: true, selector: "ngx-drawer", inputs: { ngxBackdrop: ["ngxBackdrop", "ngxBackdrop", booleanAttribute], ngxBackdropClosable: ["ngxBackdropClosable", "ngxBackdropClosable", booleanAttribute], ngxPlacement: "ngxPlacement", ngxVisible: "ngxVisible" }, outputs: { ngxVisibleChange: "ngxVisibleChange" }, viewQueries: [{ propertyName: "backdropRef", first: true, predicate: ["backdrop"], descendants: true }, { propertyName: "drawerRef", first: true, predicate: ["drawer"], descendants: true }], ngImport: i0, template: ` <div
    #backdrop
    (click)="closeDrawer($event)"
    *ngIf="internalVisible"
    class="ngx-backdrop"
  >
    <div
      #drawer
      class="ngx-drawer"
      [class.ngx-drawer-placement-top]="ngxPlacement === 'top'"
      [class.ngx-drawer-placement-right]="ngxPlacement === 'right'"
      [class.ngx-drawer-placement-bottom]="ngxPlacement === 'bottom'"
      [class.ngx-drawer-placement-left]="ngxPlacement === 'left'"
    >
      <ng-content></ng-content>
    </div>
  </div>`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DrawerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-drawer',
                    template: ` <div
    #backdrop
    (click)="closeDrawer($event)"
    *ngIf="internalVisible"
    class="ngx-backdrop"
  >
    <div
      #drawer
      class="ngx-drawer"
      [class.ngx-drawer-placement-top]="ngxPlacement === 'top'"
      [class.ngx-drawer-placement-right]="ngxPlacement === 'right'"
      [class.ngx-drawer-placement-bottom]="ngxPlacement === 'bottom'"
      [class.ngx-drawer-placement-left]="ngxPlacement === 'left'"
    >
      <ng-content></ng-content>
    </div>
  </div>`,
                    standalone: true,
                    imports: [NgIf],
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { ngxBackdrop: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxBackdropClosable: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxPlacement: [{
                type: Input
            }], ngxVisible: [{
                type: Input
            }], ngxVisibleChange: [{
                type: Output
            }], backdropRef: [{
                type: ViewChild,
                args: ['backdrop']
            }], drawerRef: [{
                type: ViewChild,
                args: ['drawer']
            }] } });

class DrawerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DrawerModule, imports: [DrawerComponent], exports: [DrawerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DrawerModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [DrawerComponent],
                    imports: [DrawerComponent],
                }]
        }] });

const DrawerPlacement = ['top', 'right', 'bottom', 'left'];

/**
 * Generated bundle index. Do not edit.
 */

export { DrawerComponent, DrawerModule };
//# sourceMappingURL=ngx-eagle-drawer.mjs.map
