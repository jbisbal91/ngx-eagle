import { ChangeDetectionStrategy, Component, Input, ViewChild, } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class AvatarComponent {
    constructor(elementRef, renderer2, cdr) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.cdr = cdr;
        this.ngxShape = 'circle';
        this.ngxSize = 'default';
        this.ngxSrc = null;
        this.ngxText = null;
    }
    ngAfterViewInit() {
        if (typeof this.ngxSize === 'number') {
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
        if (this.avatarUserRef) {
            const fontSize = `${(Number(this.ngxSize) * 0.5) / 16}rem`;
            this.renderer2.setStyle(this.avatarUserRef.nativeElement, 'font-size', fontSize);
        }
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AvatarComponent, isStandalone: true, selector: "ngx-avatar", inputs: { ngxShape: "ngxShape", ngxSize: "ngxSize", ngxSrc: "ngxSrc", ngxText: "ngxText" }, host: { properties: { "class.ngx-avatar-circle": "ngxShape === 'circle'", "class.ngx-avatar-square": "ngxShape === 'square'", "class.ngx-avatar-sm": "ngxSize === 'small'", "class.ngx-avatar-df": "ngxSize === 'default'", "class.ngx-avatar-lg": "ngxSize === 'large'" }, classAttribute: "ngx-avatar" }, viewQueries: [{ propertyName: "avatarUserRef", first: true, predicate: ["ngx_avatar_user"], descendants: true }], ngImport: i0, template: ` <div class="ngx-avatar-img">
      <img *ngIf="ngxSrc" [src]="ngxSrc" alt="ngx-avatar" />
    </div>
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
                    template: ` <div class="ngx-avatar-img">
      <img *ngIf="ngxSrc" [src]="ngxSrc" alt="ngx-avatar" />
    </div>
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
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { ngxShape: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25neC1lYWdsZS9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxLQUFLLEVBRUwsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFvQ3ZDLE1BQU0sT0FBTyxlQUFlO0lBUTFCLFlBQ1MsVUFBc0IsRUFDckIsU0FBb0IsRUFDcEIsR0FBc0I7UUFGdkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVnZCLGFBQVEsR0FBYSxRQUFRLENBQUM7UUFDOUIsWUFBTyxHQUFxQixTQUFTLENBQUM7UUFDdEMsV0FBTSxHQUFrQixJQUFJLENBQUM7UUFDN0IsWUFBTyxHQUFrQixJQUFJLENBQUM7SUFRcEMsQ0FBQztJQUVKLGVBQWU7UUFDYixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFh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QUUsdUJBQXVCO3dCQUNwRCx1QkFBdUIsRUFBRSxxQkFBcUI7d0JBQzlDLHVCQUF1QixFQUFFLHVCQUF1Qjt3QkFDaEQsdUJBQXVCLEVBQUUscUJBQXFCO3FCQUMvQztvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztpQkFDaEI7eUpBRVUsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFFd0IsYUFBYTtzQkFBMUMsU0FBUzt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4U2hhcGUsIE5neFNpemUgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWF2YXRhcicsXHJcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cIm5neC1hdmF0YXItaW1nXCI+XHJcbiAgICAgIDxpbWcgKm5nSWY9XCJuZ3hTcmNcIiBbc3JjXT1cIm5neFNyY1wiIGFsdD1cIm5neC1hdmF0YXJcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3BhbiAqbmdJZj1cIm5neFRleHQgJiYgIW5neFNyY1wiPnt7IGdldEluaXRpYWxzKG5neFRleHQpIH19PC9zcGFuPlxyXG5cclxuICAgIDxzcGFuICNuZ3hfYXZhdGFyX3VzZXIgKm5nSWY9XCIhbmd4U3JjICYmICFuZ3hUZXh0XCIgY2xhc3M9XCJuZ3gtYXZhdGFyLXVzZXJcIlxyXG4gICAgICA+PHN2Z1xyXG4gICAgICAgIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCJcclxuICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgZGF0YS1pY29uPVwidXNlclwiXHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTg1OC41IDc2My42YTM3NCAzNzQgMCAwMC04MC42LTExOS41IDM3NS42MyAzNzUuNjMgMCAwMC0xMTkuNS04MC42Yy0uNC0uMi0uOC0uMy0xLjItLjVDNzE5LjUgNTE4IDc2MCA0NDQuNyA3NjAgMzYyYzAtMTM3LTExMS0yNDgtMjQ4LTI0OFMyNjQgMjI1IDI2NCAzNjJjMCA4Mi43IDQwLjUgMTU2IDEwMi44IDIwMS4xLS40LjItLjguMy0xLjIuNS00NC44IDE4LjktODUgNDYtMTE5LjUgODAuNmEzNzUuNjMgMzc1LjYzIDAgMDAtODAuNiAxMTkuNUEzNzEuNyAzNzEuNyAwIDAwMTM2IDkwMS44YTggOCAwIDAwOCA4LjJoNjBjNC40IDAgNy45LTMuNSA4LTcuOCAyLTc3LjIgMzMtMTQ5LjUgODcuOC0yMDQuMyA1Ni43LTU2LjcgMTMyLTg3LjkgMjEyLjItODcuOXMxNTUuNSAzMS4yIDIxMi4yIDg3LjlDNzc5IDc1Mi43IDgxMCA4MjUgODEyIDkwMi4yYy4xIDQuNCAzLjYgNy44IDggNy44aDYwYTggOCAwIDAwOC04LjJjLTEtNDcuOC0xMC45LTk0LjMtMjkuNS0xMzguMnpNNTEyIDUzNGMtNDUuOSAwLTg5LjEtMTcuOS0xMjEuNi01MC40UzM0MCA0MDcuOSAzNDAgMzYyYzAtNDUuOSAxNy45LTg5LjEgNTAuNC0xMjEuNlM0NjYuMSAxOTAgNTEyIDE5MHM4OS4xIDE3LjkgMTIxLjYgNTAuNFM2ODQgMzE2LjEgNjg0IDM2MmMwIDQ1LjktMTcuOSA4OS4xLTUwLjQgMTIxLjZTNTU3LjkgNTM0IDUxMiA1MzR6XCJcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvc3Bhbj5gLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LWF2YXRhcicsXHJcbiAgICAnW2NsYXNzLm5neC1hdmF0YXItY2lyY2xlXSc6IGBuZ3hTaGFwZSA9PT0gJ2NpcmNsZSdgLFxyXG4gICAgJ1tjbGFzcy5uZ3gtYXZhdGFyLXNxdWFyZV0nOiBgbmd4U2hhcGUgPT09ICdzcXVhcmUnYCxcclxuICAgICdbY2xhc3Mubmd4LWF2YXRhci1zbV0nOiBgbmd4U2l6ZSA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLm5neC1hdmF0YXItZGZdJzogYG5neFNpemUgPT09ICdkZWZhdWx0J2AsXHJcbiAgICAnW2NsYXNzLm5neC1hdmF0YXItbGddJzogYG5neFNpemUgPT09ICdsYXJnZSdgLFxyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmdJZl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBuZ3hTaGFwZTogTmd4U2hhcGUgPSAnY2lyY2xlJztcclxuICBASW5wdXQoKSBuZ3hTaXplOiBOZ3hTaXplIHwgbnVtYmVyID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG5neFNyYzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbmd4VGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ25neF9hdmF0YXJfdXNlcicpIGF2YXRhclVzZXJSZWYhOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm5neFNpemUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMuc2V0U2l6ZUluTnVtYmVyKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNldFNpemVJbk51bWJlcigpIHtcclxuICAgIGNvbnN0IHNpemUgPSBOdW1iZXIodGhpcy5uZ3hTaXplKSAvIDE2ICsgJ3JlbSc7XHJcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgc2l6ZSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHNpemUpO1xyXG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdsaW5lLWhlaWdodCcsIHNpemUpO1xyXG4gICAgdGhpcy5zZXRGb250U2l6ZUltZ1VzZXIoKTtcclxuICB9XHJcblxyXG4gIHNldEZvbnRTaXplSW1nVXNlcigpIHtcclxuICAgIGlmICh0aGlzLmF2YXRhclVzZXJSZWYpIHtcclxuICAgICAgY29uc3QgZm9udFNpemUgPSBgJHsoTnVtYmVyKHRoaXMubmd4U2l6ZSkgKiAwLjUpIC8gMTZ9cmVtYDtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5hdmF0YXJVc2VyUmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ2ZvbnQtc2l6ZScsXHJcbiAgICAgICAgZm9udFNpemVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEluaXRpYWxzKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB3b3Jkczogc3RyaW5nW10gPSB0ZXh0LnNwbGl0KCcgJyk7XHJcbiAgICBjb25zdCBpbml0aWFsczogc3RyaW5nW10gPSB3b3Jkcy5tYXAoKHdvcmQpID0+XHJcbiAgICAgIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcclxuICAgICk7XHJcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZShcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJyxcclxuICAgICAgdGhpcy5nZXRCYWNrZ3JvdW5kQ29sb3IoaW5pdGlhbHMuam9pbignJykpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFja2dyb3VuZENvbG9yKGluaXRpYWxzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY29sb3JzID0ge1xyXG4gICAgICBBOiAnI0ZGNTczMycsIC8vIFJvam9cclxuICAgICAgQjogJyMzM0ZGNTcnLCAvLyBWZXJkZVxyXG4gICAgICBDOiAnIzMzNTdGRicsIC8vIEF6dWxcclxuICAgICAgRDogJyNGRjMzRTgnLCAvLyBSb3NhXHJcbiAgICAgIEU6ICcjRkZENzMzJywgLy8gQW1hcmlsbG9cclxuICAgICAgRjogJyNGRjYzNDcnLCAvLyBUb21hdGVcclxuICAgICAgRzogJyMzMkNEMzInLCAvLyBWZXJkZSBsaW1hXHJcbiAgICAgIEg6ICcjOEEyQkUyJywgLy8gQXp1bCBhw7FpbFxyXG4gICAgICBJOiAnI0ZGMTQ5MycsIC8vIFJvc2EgZnVlcnRlXHJcbiAgICAgIEo6ICcjRkY0NTAwJywgLy8gTmFyYW5qYSByb2ppem9cclxuICAgICAgSzogJyNGRjhDMDAnLCAvLyBOYXJhbmphIG9zY3Vyb1xyXG4gICAgICBMOiAnIzAwQkZGRicsIC8vIEF6dWwgY2VsZXN0ZVxyXG4gICAgICBNOiAnIzk0MDBEMycsIC8vIFZpb2xldGEgb3NjdXJvXHJcbiAgICAgIE46ICcjMDA4MDgwJywgLy8gVmVyZGUgYXp1bGFkb1xyXG4gICAgICBPOiAnIzgwMDAwMCcsIC8vIE1hcnLDs25cclxuICAgICAgUDogJyMwMEZGN0YnLCAvLyBWZXJkZSBwcmltYXZlcmFcclxuICAgICAgUTogJyNGRkQ3MDAnLCAvLyBPcm9cclxuICAgICAgUjogJyM4MDAwODAnLCAvLyBQw7pycHVyYVxyXG4gICAgICBTOiAnIzAwODAwMCcsIC8vIFZlcmRlXHJcbiAgICAgIFQ6ICcjRkZBNTAwJywgLy8gTmFyYW5qYVxyXG4gICAgICBVOiAnIzRCMDA4MicsIC8vIMONbmRpZ29cclxuICAgICAgVjogJyNGRkMwQ0InLCAvLyBSb3NhIGNsYXJvXHJcbiAgICAgIFc6ICcjMUU5MEZGJywgLy8gQXp1bCByZWFsXHJcbiAgICAgIFg6ICcjRkYwMEZGJywgLy8gRnVjc2lhXHJcbiAgICAgIFk6ICcjRkZGRjAwJywgLy8gQW1hcmlsbG8gYnJpbGxhbnRlXHJcbiAgICAgIFo6ICcjODA4MDgwJywgLy8gR3JpcyBwYXJhIGxhcyBsZXRyYXMgbm8gYXNpZ25hZGFzXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxMZXR0ZXIgPSBpbml0aWFscy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcclxuICAgIGNvbnN0IGNvbG9yID1cclxuICAgICAgKGNvbG9ycyBhcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KVtpbml0aWFsTGV0dGVyXSB8fCAnI0NDQ0NDQyc7XHJcbiAgICByZXR1cm4gY29sb3I7XHJcbiAgfVxyXG59XHJcbiJdfQ==