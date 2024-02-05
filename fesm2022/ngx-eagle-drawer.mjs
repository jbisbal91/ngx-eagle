import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ViewChild, NgModule } from '@angular/core';
import { NgIf } from '@angular/common';

class DrawerComponent {
    constructor() {
        this.ngxVisible = false;
        this.ngxPlacement = 'left';
        this.ngxOnClose = new EventEmitter();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes['ngxVisible']) {
            if (changes['ngxVisible'].currentValue) {
                this.openDrawer();
            }
            else {
                this.closingAction();
            }
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
                this.drawerRef.nativeElement.style.transform = `translate${axis}(0px)`;
            }
        });
    }
    closeDrawer(event) {
        const clickedElement = event.target;
        const isClickOnParent = clickedElement === this.backdropRef.nativeElement;
        const isClickOnChild = this.drawerRef.nativeElement.contains(clickedElement);
        if (isClickOnParent && !isClickOnChild) {
            this.closingAction();
        }
    }
    closingAction() {
        const transformMap = {
            bottom: 'translateY(100%)',
            top: 'translateY(-100%)',
            right: 'translateX(100%)',
            left: 'translateX(-100%)',
        };
        this.drawerRef.nativeElement.style.transform =
            transformMap[this.ngxPlacement];
        setTimeout(() => {
            this.ngxOnClose.emit();
        }, 500);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DrawerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DrawerComponent, isStandalone: true, selector: "ngx-drawer", inputs: { ngxVisible: "ngxVisible", ngxPlacement: "ngxPlacement" }, outputs: { ngxOnClose: "ngxOnClose" }, viewQueries: [{ propertyName: "backdropRef", first: true, predicate: ["backdrop"], descendants: true }, { propertyName: "drawerRef", first: true, predicate: ["drawer"], descendants: true }], usesOnChanges: true, ngImport: i0, template: ` <div
    #backdrop
    (click)="closeDrawer($event)"
    *ngIf="ngxVisible"
    class="ngx-drawer-backdrop"
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
    *ngIf="ngxVisible"
    class="ngx-drawer-backdrop"
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
        }], propDecorators: { ngxVisible: [{
                type: Input
            }], ngxPlacement: [{
                type: Input
            }], ngxOnClose: [{
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
