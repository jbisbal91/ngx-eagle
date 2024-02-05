import { ChangeDetectionStrategy, Component, Input, ViewChild, } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class AvatarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxLQUFLLEVBS0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUF1Q3ZDLE1BQU0sT0FBTyxlQUFlO0lBUzFCLFlBQ1MsVUFBc0IsRUFDckIsU0FBb0IsRUFDcEIsR0FBc0I7UUFGdkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBWHZCLFlBQU8sR0FBa0IsSUFBSSxDQUFDO1FBQzlCLGFBQVEsR0FBYSxRQUFRLENBQUM7UUFDOUIsWUFBTyxHQUFxQixTQUFTLENBQUM7UUFDdEMsV0FBTSxHQUFrQixJQUFJLENBQUM7UUFDN0IsWUFBTyxHQUFrQixJQUFJLENBQUM7SUFRcEMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVE7b0JBQzdDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdEIsTUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QyxNQUFNLFFBQVEsR0FBYSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FDN0IsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0Isa0JBQWtCLEVBQ2xCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQzNDLENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGtCQUFrQixDQUFDLFFBQWdCO1FBQ2pDLE1BQU0sTUFBTSxHQUFHO1lBQ2IsQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxTQUFTO1lBQ1osQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxTQUFTO1lBQ1osQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxTQUFTO1lBQ1osQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxTQUFTO1lBQ1osQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxTQUFTO1lBQ1osQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxTQUFTO1lBQ1osQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxTQUFTO1lBQ1osQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxTQUFTO1lBQ1osQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsU0FBUyxFQUFFLG9DQUFvQztTQUNuRCxDQUFDO1FBRUYsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2RCxNQUFNLEtBQUssR0FDUixNQUFvQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLFNBQVMsQ0FBQztRQUNwRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7K0dBeEZVLGVBQWU7bUdBQWYsZUFBZSxvbEJBbkNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQSw0REFXQSxJQUFJOzs0RkFFSCxlQUFlO2tCQXJDM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO29CQUNWLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsWUFBWTt3QkFDbkIsMkJBQTJCLEVBQUUsdUJBQXVCO3dCQUNwRCwyQkFBMkIsRUFBRSx1QkFBdUI7d0JBQ3BELHVCQUF1QixFQUFFLHFCQUFxQjt3QkFDOUMsdUJBQXVCLEVBQUUsdUJBQXVCO3dCQUNoRCx1QkFBdUIsRUFBRSxxQkFBcUI7cUJBQy9DO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO2lCQUNoQjt5SkFFVSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFFd0IsYUFBYTtzQkFBMUMsU0FBUzt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hTaGFwZSwgTmd4U2l6ZSB9IGZyb20gJy4vdHlwaW5ncyc7XHJcbmltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtYXZhdGFyJyxcclxuICB0ZW1wbGF0ZTogYCA8aW1nXHJcbiAgICAgIGNsYXNzPVwibmd4LWF2YXRhci1pbWdcIlxyXG4gICAgICAqbmdJZj1cIm5neFNyY1wiXHJcbiAgICAgIFtzcmNdPVwibmd4U3JjXCJcclxuICAgICAgYWx0PVwibmd4LWF2YXRhclwiXHJcbiAgICAvPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJuZ3hUZXh0ICYmICFuZ3hTcmNcIj57eyBnZXRJbml0aWFscyhuZ3hUZXh0KSB9fTwvc3Bhbj5cclxuXHJcbiAgICA8c3BhbiAjbmd4X2F2YXRhcl91c2VyICpuZ0lmPVwiIW5neFNyYyAmJiAhbmd4VGV4dFwiIGNsYXNzPVwibmd4LWF2YXRhci11c2VyXCJcclxuICAgICAgPjxzdmdcclxuICAgICAgICB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiXHJcbiAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgIGRhdGEtaWNvbj1cInVzZXJcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk04NTguNSA3NjMuNmEzNzQgMzc0IDAgMDAtODAuNi0xMTkuNSAzNzUuNjMgMzc1LjYzIDAgMDAtMTE5LjUtODAuNmMtLjQtLjItLjgtLjMtMS4yLS41QzcxOS41IDUxOCA3NjAgNDQ0LjcgNzYwIDM2MmMwLTEzNy0xMTEtMjQ4LTI0OC0yNDhTMjY0IDIyNSAyNjQgMzYyYzAgODIuNyA0MC41IDE1NiAxMDIuOCAyMDEuMS0uNC4yLS44LjMtMS4yLjUtNDQuOCAxOC45LTg1IDQ2LTExOS41IDgwLjZhMzc1LjYzIDM3NS42MyAwIDAwLTgwLjYgMTE5LjVBMzcxLjcgMzcxLjcgMCAwMDEzNiA5MDEuOGE4IDggMCAwMDggOC4yaDYwYzQuNCAwIDcuOS0zLjUgOC03LjggMi03Ny4yIDMzLTE0OS41IDg3LjgtMjA0LjMgNTYuNy01Ni43IDEzMi04Ny45IDIxMi4yLTg3LjlzMTU1LjUgMzEuMiAyMTIuMiA4Ny45Qzc3OSA3NTIuNyA4MTAgODI1IDgxMiA5MDIuMmMuMSA0LjQgMy42IDcuOCA4IDcuOGg2MGE4IDggMCAwMDgtOC4yYy0xLTQ3LjgtMTAuOS05NC4zLTI5LjUtMTM4LjJ6TTUxMiA1MzRjLTQ1LjkgMC04OS4xLTE3LjktMTIxLjYtNTAuNFMzNDAgNDA3LjkgMzQwIDM2MmMwLTQ1LjkgMTcuOS04OS4xIDUwLjQtMTIxLjZTNDY2LjEgMTkwIDUxMiAxOTBzODkuMSAxNy45IDEyMS42IDUwLjRTNjg0IDMxNi4xIDY4NCAzNjJjMCA0NS45LTE3LjkgODkuMS01MC40IDEyMS42UzU1Ny45IDUzNCA1MTIgNTM0elwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L3NwYW4+YCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ25neC1hdmF0YXInLFxyXG4gICAgJ1tjbGFzcy5uZ3gtYXZhdGFyLWNpcmNsZV0nOiBgbmd4U2hhcGUgPT09ICdjaXJjbGUnYCxcclxuICAgICdbY2xhc3Mubmd4LWF2YXRhci1zcXVhcmVdJzogYG5neFNoYXBlID09PSAnc3F1YXJlJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1hdmF0YXItc21dJzogYG5neFNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtYXZhdGFyLWRmXSc6IGBuZ3hTaXplID09PSAnZGVmYXVsdCdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtYXZhdGFyLWxnXSc6IGBuZ3hTaXplID09PSAnbGFyZ2UnYCxcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW05nSWZdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBuZ3hJY29uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuZ3hTaGFwZTogTmd4U2hhcGUgPSAnY2lyY2xlJztcclxuICBASW5wdXQoKSBuZ3hTaXplOiBOZ3hTaXplIHwgbnVtYmVyID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG5neFNyYzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbmd4VGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ25neF9hdmF0YXJfdXNlcicpIGF2YXRhclVzZXJSZWYhOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubmd4U2l6ZSkge1xyXG4gICAgICB0aGlzLnNldFNpemVJbk51bWJlcigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTaXplSW5OdW1iZXIoKSB7XHJcbiAgICBjb25zdCBzaXplID0gTnVtYmVyKHRoaXMubmd4U2l6ZSkgLyAxNiArICdyZW0nO1xyXG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHNpemUpO1xyXG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBzaXplKTtcclxuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbGluZS1oZWlnaHQnLCBzaXplKTtcclxuICAgIHRoaXMuc2V0Rm9udFNpemVJbWdVc2VyKCk7XHJcbiAgfVxyXG5cclxuICBzZXRGb250U2l6ZUltZ1VzZXIoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuYXZhdGFyVXNlclJlZikge1xyXG4gICAgICAgIHRoaXMuYXZhdGFyVXNlclJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplID1cclxuICAgICAgICAgIChOdW1iZXIodGhpcy5uZ3hTaXplKSAqIDAuNSkgLyAxNiArICdyZW0nO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEluaXRpYWxzKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB3b3Jkczogc3RyaW5nW10gPSB0ZXh0LnNwbGl0KCcgJyk7XHJcbiAgICBjb25zdCBpbml0aWFsczogc3RyaW5nW10gPSB3b3Jkcy5tYXAoKHdvcmQpID0+XHJcbiAgICAgIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcicsXHJcbiAgICAgIHRoaXMuZ2V0QmFja2dyb3VuZENvbG9yKGluaXRpYWxzLmpvaW4oJycpKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gaW5pdGlhbHMuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBnZXRCYWNrZ3JvdW5kQ29sb3IoaW5pdGlhbHM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBjb2xvcnMgPSB7XHJcbiAgICAgIEE6ICcjRkY1NzMzJywgLy8gUm9qb1xyXG4gICAgICBCOiAnIzMzRkY1NycsIC8vIFZlcmRlXHJcbiAgICAgIEM6ICcjMzM1N0ZGJywgLy8gQXp1bFxyXG4gICAgICBEOiAnI0ZGMzNFOCcsIC8vIFJvc2FcclxuICAgICAgRTogJyNGRkQ3MzMnLCAvLyBBbWFyaWxsb1xyXG4gICAgICBGOiAnI0ZGNjM0NycsIC8vIFRvbWF0ZVxyXG4gICAgICBHOiAnIzMyQ0QzMicsIC8vIFZlcmRlIGxpbWFcclxuICAgICAgSDogJyM4QTJCRTInLCAvLyBBenVsIGHDsWlsXHJcbiAgICAgIEk6ICcjRkYxNDkzJywgLy8gUm9zYSBmdWVydGVcclxuICAgICAgSjogJyNGRjQ1MDAnLCAvLyBOYXJhbmphIHJvaml6b1xyXG4gICAgICBLOiAnI0ZGOEMwMCcsIC8vIE5hcmFuamEgb3NjdXJvXHJcbiAgICAgIEw6ICcjMDBCRkZGJywgLy8gQXp1bCBjZWxlc3RlXHJcbiAgICAgIE06ICcjOTQwMEQzJywgLy8gVmlvbGV0YSBvc2N1cm9cclxuICAgICAgTjogJyMwMDgwODAnLCAvLyBWZXJkZSBhenVsYWRvXHJcbiAgICAgIE86ICcjODAwMDAwJywgLy8gTWFycsOzblxyXG4gICAgICBQOiAnIzAwRkY3RicsIC8vIFZlcmRlIHByaW1hdmVyYVxyXG4gICAgICBROiAnI0ZGRDcwMCcsIC8vIE9yb1xyXG4gICAgICBSOiAnIzgwMDA4MCcsIC8vIFDDunJwdXJhXHJcbiAgICAgIFM6ICcjMDA4MDAwJywgLy8gVmVyZGVcclxuICAgICAgVDogJyNGRkE1MDAnLCAvLyBOYXJhbmphXHJcbiAgICAgIFU6ICcjNEIwMDgyJywgLy8gw41uZGlnb1xyXG4gICAgICBWOiAnI0ZGQzBDQicsIC8vIFJvc2EgY2xhcm9cclxuICAgICAgVzogJyMxRTkwRkYnLCAvLyBBenVsIHJlYWxcclxuICAgICAgWDogJyNGRjAwRkYnLCAvLyBGdWNzaWFcclxuICAgICAgWTogJyNGRkZGMDAnLCAvLyBBbWFyaWxsbyBicmlsbGFudGVcclxuICAgICAgWjogJyM4MDgwODAnLCAvLyBHcmlzIHBhcmEgbGFzIGxldHJhcyBubyBhc2lnbmFkYXNcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbExldHRlciA9IGluaXRpYWxzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgY29uc3QgY29sb3IgPVxyXG4gICAgICAoY29sb3JzIGFzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pW2luaXRpYWxMZXR0ZXJdIHx8ICcjQ0NDQ0NDJztcclxuICAgIHJldHVybiBjb2xvcjtcclxuICB9XHJcbn1cclxuIl19