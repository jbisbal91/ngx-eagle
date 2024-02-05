import { AfterContentInit, ChangeDetectorRef, QueryList } from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import * as i0 from "@angular/core";
export declare class CarouselComponent implements AfterContentInit {
    private cdr;
    carouselItems: QueryList<CarouselItemComponent>;
    ngxAutoPlay: boolean;
    ngxAutoPlaySpeed: number;
    currentItem: CarouselItemComponent;
    constructor(cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    autoPlay(index?: number): void;
    onClick(carouselItem: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent, "ngx-carousel", never, { "ngxAutoPlay": { "alias": "ngxAutoPlay"; "required": false; }; "ngxAutoPlaySpeed": { "alias": "ngxAutoPlaySpeed"; "required": false; }; }, {}, ["carouselItems"], ["*"], true, never>;
    static ngAcceptInputType_ngxAutoPlay: unknown;
}
