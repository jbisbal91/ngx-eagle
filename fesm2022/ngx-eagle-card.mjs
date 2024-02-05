import * as i0 from '@angular/core';
import { Component, Directive, NgModule } from '@angular/core';

class CardComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardComponent, isStandalone: true, selector: "ngx-card", host: { classAttribute: "ngx-card" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-card',
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'ngx-card',
                    },
                    standalone: true,
                }]
        }] });

class CardHeaderComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardHeaderComponent, isStandalone: true, selector: "ngx-card-header", host: { classAttribute: "ngx-card-header" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-card-header',
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'ngx-card-header',
                    },
                    standalone: true,
                }]
        }] });

class CardContentComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardContentComponent, isStandalone: true, selector: "ngx-card-content", host: { classAttribute: "ngx-card-content" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-card-content',
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'ngx-card-content',
                    },
                    standalone: true,
                }]
        }] });

class CardActionsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardActionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardActionsComponent, isStandalone: true, selector: "ngx-card-actions", host: { classAttribute: "ngx-card-actions" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardActionsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-card-actions',
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'ngx-card-actions',
                    },
                    standalone: true,
                }]
        }] });

class CardAvatarDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardAvatarDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: CardAvatarDirective, isStandalone: true, selector: "[ngx-card-avatar]", host: { classAttribute: "ngx-card-avatar" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardAvatarDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-card-avatar]',
                    host: {
                        class: 'ngx-card-avatar',
                    },
                    standalone: true,
                }]
        }] });

class CardImageDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardImageDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: CardImageDirective, isStandalone: true, selector: "[ngx-card-image]", host: { classAttribute: "ngx-card-image" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardImageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-card-image]',
                    host: {
                        class: 'ngx-card-image',
                    },
                    standalone: true,
                }]
        }] });

const components = [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardActionsComponent,
    CardAvatarDirective,
    CardImageDirective,
];
class CardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardModule, imports: [CardComponent,
            CardHeaderComponent,
            CardContentComponent,
            CardActionsComponent,
            CardAvatarDirective,
            CardImageDirective], exports: [CardComponent,
            CardHeaderComponent,
            CardContentComponent,
            CardActionsComponent,
            CardAvatarDirective,
            CardImageDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [components],
                    exports: [components],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CardActionsComponent, CardAvatarDirective, CardComponent, CardContentComponent, CardHeaderComponent, CardImageDirective, CardModule };
//# sourceMappingURL=ngx-eagle-card.mjs.map
