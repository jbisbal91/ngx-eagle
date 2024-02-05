import * as i0 from '@angular/core';
import { Component, Input, booleanAttribute, ChangeDetectionStrategy, ContentChildren, NgModule } from '@angular/core';
import { NgForOf } from '@angular/common';

class CarouselItemComponent {
    constructor() {
        this.id = '';
        this.isActive = false;
        this.disabled = false;
    }
    ngOnInit() {
        this.id = this.guid();
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
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
    constructor(cdr) {
        this.cdr = cdr;
        this.ngxAutoPlaySpeed = 3000;
    }
    ngAfterContentInit() {
        this.carouselItems.first.isActive = true;
        this.currentItem = this.carouselItems.first;
        this.cdr.markForCheck();
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
    onClick(carouselItem) {
        this.carouselItems?.forEach((ci) => {
            ci.isActive = ci.id === carouselItem.id ? true : false;
        });
        const element = document.getElementById(carouselItem.id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: CarouselComponent, isStandalone: true, selector: "ngx-carousel", inputs: { ngxAutoPlay: ["ngxAutoPlay", "ngxAutoPlay", booleanAttribute], ngxAutoPlaySpeed: "ngxAutoPlaySpeed" }, host: { classAttribute: "ngx-carousel" }, queries: [{ propertyName: "carouselItems", predicate: CarouselItemComponent }], ngImport: i0, template: `
    <div class="ngx-carousel">
      <div class="slick-initialized slick-slider">
        <div class="slick-list">
          <div class="slick-track">
            <ng-content></ng-content>
          </div>
        </div>

        <ul class="slick-list slick-dots slick-dots-bottom">
          <li
            [class.slick-active]="carouselItem.isActive"
            *ngFor="let carouselItem of carouselItems"
            (click)="onClick(carouselItem)"
          >
            <button>{{ carouselItem.id }}</button>
          </li>
        </ul>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-carousel',
                    template: `
    <div class="ngx-carousel">
      <div class="slick-initialized slick-slider">
        <div class="slick-list">
          <div class="slick-track">
            <ng-content></ng-content>
          </div>
        </div>

        <ul class="slick-list slick-dots slick-dots-bottom">
          <li
            [class.slick-active]="carouselItem.isActive"
            *ngFor="let carouselItem of carouselItems"
            (click)="onClick(carouselItem)"
          >
            <button>{{ carouselItem.id }}</button>
          </li>
        </ul>
      </div>
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'ngx-carousel',
                    },
                    standalone: true,
                    imports: [NgForOf],
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { carouselItems: [{
                type: ContentChildren,
                args: [CarouselItemComponent]
            }], ngxAutoPlay: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxAutoPlaySpeed: [{
                type: Input
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

/**
 * Generated bundle index. Do not edit.
 */

export { CarouselComponent, CarouselItemComponent, CarouselModule };
//# sourceMappingURL=ngx-eagle-carousel.mjs.map
