import { OnInit } from '@angular/core';
import { Carousel } from '../carousel.interface';
import * as i0 from "@angular/core";
export declare class CarouselItemComponent implements Carousel, OnInit {
    id: string;
    isActive: boolean;
    disabled: boolean;
    ngOnInit(): void;
    guid(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselItemComponent, "ngx-carousel-item", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], true, never>;
}
