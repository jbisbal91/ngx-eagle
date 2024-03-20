import * as i0 from '@angular/core';
import { Component, Input, QueryList, booleanAttribute, ContentChildren, ViewChild, HostListener, NgModule } from '@angular/core';
import { Guid } from 'ngx-eagle/core/services';
import { NgForOf } from '@angular/common';

class CarouselItemComponent {
    constructor() {
        this.id = Guid.create();
        this.isActive = false;
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CarouselItemComponent, isStandalone: true, selector: "ngx-carousel-item", inputs: { disabled: "disabled" }, host: { classAttribute: "ngx-carousel-item" }, ngImport: i0, template: `
    <div class="ngx-carousel-item" [id]="id">
      <ng-content></ng-content>
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-carousel-item',
                    template: `
    <div class="ngx-carousel-item" [id]="id">
      <ng-content></ng-content>
    </div>
  `,
                    host: {
                        class: 'ngx-carousel-item',
                    },
                    standalone: true,
                }]
        }], propDecorators: { disabled: [{
                type: Input
            }] } });

class CarouselComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.carouselItems = new QueryList();
        this.ngxAutoPlaySpeed = 3000;
        this.ngxDotPosition = 'bottom';
    }
    ngAfterContentInit() {
        this.carouselItems.first.isActive = true;
        this.currentCarouselItem = this.carouselItems.first;
        if (this.currentCarouselItem) {
            setTimeout(() => {
                this.onClick(this.currentCarouselItem);
            });
        }
        if (this.ngxAutoPlay) {
            this.autoPlay();
        }
    }
    autoPlay(index = 0) {
        setTimeout(() => {
            this.onClick(this.carouselItems.get(index));
            index = index === this.carouselItems.length - 1 ? 0 : ++index;
            this.autoPlay(index);
        }, this.ngxAutoPlaySpeed);
    }
    resize() {
        this.onClick(this.currentCarouselItem);
    }
    onClick(carouselItem) {
        let index = 0;
        this.carouselItems?.forEach((ci, i) => {
            ci.isActive = ci.id === carouselItem.id;
            if (ci.isActive) {
                this.currentCarouselItem = ci;
                index = i;
            }
        });
        const carouselRef = document.getElementById(carouselItem.id);
        const carouselProp = carouselRef.getBoundingClientRect();
        this.renderer.setStyle(this.slickTrackRef.nativeElement, 'transform', `translateX(${carouselProp.width * -index}px)`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: CarouselComponent, isStandalone: true, selector: "ngx-carousel", inputs: { ngxAutoPlay: ["ngxAutoPlay", "ngxAutoPlay", booleanAttribute], ngxAutoPlaySpeed: "ngxAutoPlaySpeed", ngxDotPosition: "ngxDotPosition" }, host: { listeners: { "window:resize": "resize($event)" }, classAttribute: "ngx-carousel" }, queries: [{ propertyName: "carouselItems", predicate: CarouselItemComponent }], viewQueries: [{ propertyName: "slickTrackRef", first: true, predicate: ["slick_track"], descendants: true }], ngImport: i0, template: `
    <div class="ngx-carousel">
      <div class="slick-list">
        <div #slick_track class="slick-track">
          <ng-content></ng-content>
        </div>
      </div>
      <ul
        class="slick-list slick-dots"
        [class.slick-dots-top]="ngxDotPosition === 'top'"
        [class.slick-dots-bottom]="ngxDotPosition === 'bottom'"
      >
        <li
          [class.slick-active]="carouselItem.isActive"
          *ngFor="let carouselItem of carouselItems"
        >
          <button (click)="onClick(carouselItem)"></button>
        </li>
      </ul>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-carousel',
                    template: `
    <div class="ngx-carousel">
      <div class="slick-list">
        <div #slick_track class="slick-track">
          <ng-content></ng-content>
        </div>
      </div>
      <ul
        class="slick-list slick-dots"
        [class.slick-dots-top]="ngxDotPosition === 'top'"
        [class.slick-dots-bottom]="ngxDotPosition === 'bottom'"
      >
        <li
          [class.slick-active]="carouselItem.isActive"
          *ngFor="let carouselItem of carouselItems"
        >
          <button (click)="onClick(carouselItem)"></button>
        </li>
      </ul>
    </div>
  `,
                    host: {
                        class: 'ngx-carousel',
                    },
                    standalone: true,
                    imports: [NgForOf],
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { carouselItems: [{
                type: ContentChildren,
                args: [CarouselItemComponent]
            }], ngxAutoPlay: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxAutoPlaySpeed: [{
                type: Input
            }], ngxDotPosition: [{
                type: Input
            }], slickTrackRef: [{
                type: ViewChild,
                args: ['slick_track']
            }], resize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

class CarouselModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CarouselModule, imports: [CarouselComponent, CarouselItemComponent], exports: [CarouselComponent, CarouselItemComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [CarouselComponent, CarouselItemComponent],
                    imports: [CarouselComponent, CarouselItemComponent],
                }]
        }] });

const DotPosition = ['bottom', 'top'];

/**
 * Generated bundle index. Do not edit.
 */

export { CarouselComponent, CarouselItemComponent, CarouselModule };
//# sourceMappingURL=ngx-eagle-carousel.mjs.map
