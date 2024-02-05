import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, ViewChild, ContentChildren, NgModule } from '@angular/core';
import { NgIf } from '@angular/common';

class AvatarComponent {
    constructor(elementRef, renderer2, cdr) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.cdr = cdr;
        this.ngxIcon = null;
        this.ngxShape = 'circle';
        this.ngxSize = 'default';
        this.ngxSrc = null;
        this.ngxText = null;
    }
    ngOnInit() {
        if (typeof this.ngxSize) {
            this.setSizeInNumber();
        }
        this.cdr.markForCheck();
    }
    setSizeInNumber() {
        const size = Number(this.ngxSize) / 16 + 'rem';
        this.renderer2.setStyle(this.elementRef.nativeElement, 'width', size);
        this.renderer2.setStyle(this.elementRef.nativeElement, 'height', size);
        this.renderer2.setStyle(this.elementRef.nativeElement, 'line-height', size);
        this.setFontSizeImgUser();
    }
    setFontSizeImgUser() {
        setTimeout(() => {
            if (this.avatarUserRef) {
                this.avatarUserRef.nativeElement.style.fontSize =
                    (Number(this.ngxSize) * 0.5) / 16 + 'rem';
            }
        });
    }
    getInitials(text) {
        const words = text.split(' ');
        const initials = words.map((word) => word.charAt(0).toUpperCase());
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', this.getBackgroundColor(initials.join('')));
        return initials.join('');
    }
    getBackgroundColor(initials) {
        const colors = {
            A: '#FF5733',
            B: '#33FF57',
            C: '#3357FF',
            D: '#FF33E8',
            E: '#FFD733',
            F: '#FF6347',
            G: '#32CD32',
            H: '#8A2BE2',
            I: '#FF1493',
            J: '#FF4500',
            K: '#FF8C00',
            L: '#00BFFF',
            M: '#9400D3',
            N: '#008080',
            O: '#800000',
            P: '#00FF7F',
            Q: '#FFD700',
            R: '#800080',
            S: '#008000',
            T: '#FFA500',
            U: '#4B0082',
            V: '#FFC0CB',
            W: '#1E90FF',
            X: '#FF00FF',
            Y: '#FFFF00',
            Z: '#808080', // Gris para las letras no asignadas
        };
        const initialLetter = initials.charAt(0).toUpperCase();
        const color = colors[initialLetter] || '#CCCCCC';
        return color;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AvatarComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AvatarComponent, isStandalone: true, selector: "ngx-avatar", inputs: { ngxIcon: "ngxIcon", ngxShape: "ngxShape", ngxSize: "ngxSize", ngxSrc: "ngxSrc", ngxText: "ngxText" }, host: { properties: { "class.ngx-avatar-circle": "ngxShape === 'circle'", "class.ngx-avatar-square": "ngxShape === 'square'", "class.ngx-avatar-sm": "ngxSize === 'small'", "class.ngx-avatar-df": "ngxSize === 'default'", "class.ngx-avatar-lg": "ngxSize === 'large'" }, classAttribute: "ngx-avatar" }, viewQueries: [{ propertyName: "avatarUserRef", first: true, predicate: ["ngx_avatar_user"], descendants: true }], ngImport: i0, template: ` <img
      class="ngx-avatar-img"
      *ngIf="ngxSrc"
      [src]="ngxSrc"
      alt="ngx-avatar"
    />
    <span *ngIf="ngxText && !ngxSrc">{{ getInitials(ngxText) }}</span>

    <span #ngx_avatar_user *ngIf="!ngxSrc && !ngxText" class="ngx-avatar-user"
      ><svg
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
        width="1em"
        height="1em"
        data-icon="user"
        aria-hidden="true"
      >
        <path
          d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
        ></path>
      </svg>
    </span>`, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-avatar',
                    template: ` <img
      class="ngx-avatar-img"
      *ngIf="ngxSrc"
      [src]="ngxSrc"
      alt="ngx-avatar"
    />
    <span *ngIf="ngxText && !ngxSrc">{{ getInitials(ngxText) }}</span>

    <span #ngx_avatar_user *ngIf="!ngxSrc && !ngxText" class="ngx-avatar-user"
      ><svg
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
        width="1em"
        height="1em"
        data-icon="user"
        aria-hidden="true"
      >
        <path
          d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
        ></path>
      </svg>
    </span>`,
                    host: {
                        class: 'ngx-avatar',
                        '[class.ngx-avatar-circle]': `ngxShape === 'circle'`,
                        '[class.ngx-avatar-square]': `ngxShape === 'square'`,
                        '[class.ngx-avatar-sm]': `ngxSize === 'small'`,
                        '[class.ngx-avatar-df]': `ngxSize === 'default'`,
                        '[class.ngx-avatar-lg]': `ngxSize === 'large'`,
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [NgIf],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { ngxIcon: [{
                type: Input
            }], ngxShape: [{
                type: Input
            }], ngxSize: [{
                type: Input
            }], ngxSrc: [{
                type: Input
            }], ngxText: [{
                type: Input
            }], avatarUserRef: [{
                type: ViewChild,
                args: ['ngx_avatar_user']
            }] } });

class AvatarGroupComponent {
    constructor(renderer, elementRef, cdr) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.maxVisibleAvatars = null;
    }
    ngAfterContentInit() {
        this.updateVisibleAvatars();
        this.cdr.markForCheck();
    }
    updateVisibleAvatars() {
        const avatarArray = this.avatars.toArray();
        avatarArray.forEach((avatar, index) => {
            if (this.maxVisibleAvatars && index >= this.maxVisibleAvatars) {
                this.renderer.removeChild(this.elementRef.nativeElement, avatar.elementRef.nativeElement);
            }
        });
        if (this.maxVisibleAvatars &&
            this.avatars.length - this.maxVisibleAvatars > 0) {
            this.createNodeOverflow(this.avatars.length - this.maxVisibleAvatars);
        }
    }
    createNodeOverflow(overflow) {
        const ngxSize = this.avatars.first.ngxSize;
        const nodeOverflow = document.createElement('div');
        nodeOverflow.classList.add('ngx-avatar');
        nodeOverflow.classList.add('ngx-avatar-circle');
        nodeOverflow.innerText = `+${overflow}`;
        this.setSizeNodeOverflow(nodeOverflow, ngxSize);
        this.elementRef.nativeElement.appendChild(nodeOverflow);
    }
    setSizeNodeOverflow(nodeOverflow, ngxSize) {
        if (typeof ngxSize === 'string') {
            switch (ngxSize) {
                case 'small':
                    nodeOverflow.classList.add('ngx-avatar-sm');
                    break;
                case 'default':
                    nodeOverflow.classList.add('ngx-avatar-df');
                    break;
                case 'large':
                    nodeOverflow.classList.add('ngx-avatar-lg');
                    break;
            }
        }
        if (typeof ngxSize === 'number') {
            const size = Number(ngxSize) / 16 + 'rem';
            this.renderer.setStyle(nodeOverflow, 'width', size);
            this.renderer.setStyle(nodeOverflow, 'height', size);
            this.renderer.setStyle(nodeOverflow, 'line-height', size);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AvatarGroupComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AvatarGroupComponent, isStandalone: true, selector: "ngx-avatar-group", inputs: { maxVisibleAvatars: "maxVisibleAvatars" }, host: { classAttribute: "ngx-avatar-group" }, queries: [{ propertyName: "avatars", predicate: AvatarComponent }], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AvatarGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-avatar-group',
                    template: `<ng-content></ng-content>`,
                    host: {
                        class: 'ngx-avatar-group',
                    },
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { maxVisibleAvatars: [{
                type: Input
            }], avatars: [{
                type: ContentChildren,
                args: [AvatarComponent]
            }] } });

class AvatarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AvatarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AvatarModule, imports: [AvatarGroupComponent, AvatarComponent], exports: [AvatarGroupComponent, AvatarComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AvatarModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AvatarModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [AvatarGroupComponent, AvatarComponent],
                    imports: [AvatarGroupComponent, AvatarComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AvatarComponent, AvatarGroupComponent, AvatarModule };
//# sourceMappingURL=ngx-eagle-avatar.mjs.map
