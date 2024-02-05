import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class NgxDialog {
    constructor(resolver, injector) {
        this.resolver = resolver;
        this.injector = injector;
        this.ngxDialogId = -1;
    }
    open(component, data, style) {
        const componentFactory = this.resolver.resolveComponentFactory(component);
        const componentRef = componentFactory.create(this.injector);
        const backdrop = document.createElement('div');
        backdrop.setAttribute('id', `ngx-overlay-${++this.ngxDialogId}`);
        backdrop.classList.add('ngx-global-backdrop');
        backdrop.classList.add('ngx-global-overlay-wrapper');
        const overlayPane = document.createElement('div');
        overlayPane.classList.add('ngx-overlay-pane');
        const componentElement = componentRef.hostView
            .rootNodes[0];
        overlayPane.appendChild(componentElement);
        backdrop.appendChild(overlayPane);
        document.body.appendChild(backdrop);
        if (style) {
            this.setStyle(overlayPane, style);
        }
        return componentRef;
    }
    setStyle(overlayPane, style) {
        if (style?.width) {
            overlayPane.style.width = style.width;
        }
        if (style?.height) {
            overlayPane.style.height = style.height;
        }
    }
    closeAll() {
        document.getElementById(`ngx-overlay-${this.ngxDialogId}`)?.remove();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxDialog, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxDialog, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxDialog, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.Injector }]; } });

class DialogModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, providers: [NgxDialog], imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule],
                    exports: [],
                    providers: [NgxDialog],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DialogModule, NgxDialog };
//# sourceMappingURL=ngx-eagle-dialog.mjs.map
