import { AfterContentInit, ElementRef, QueryList, Renderer2 } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { NgxDotPosition } from '../typings';
import * as i0 from "@angular/core";
export declare class CarouselComponent implements AfterContentInit {
    private renderer;
    carouselItems: QueryList<CarouselItemComponent>;
    ngxAutoPlay: boolean;
    ngxAutoPlaySpeed: number;
    ngxDotPosition: NgxDotPosition;
    currentCarouselItem: CarouselItemComponent;
    slickTrackRef: ElementRef;
    constructor(renderer: Renderer2);
    ngAfterContentInit(): void;
    autoPlay(index?: number): void;
    resize(): void;
    onClick(carouselItem: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent, "ngx-carousel", never, { "ngxAutoPlay": { "alias": "ngxAutoPlay"; "required": false; }; "ngxAutoPlaySpeed": { "alias": "ngxAutoPlaySpeed"; "required": false; }; "ngxDotPosition": { "alias": "ngxDotPosition"; "required": false; }; }, {}, ["carouselItems"], ["*"], true, never>;
    static ngAcceptInputType_ngxAutoPlay: unknown;
}
