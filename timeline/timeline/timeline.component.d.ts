import { AfterViewInit, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import { NgxTimelineMode } from '../typings';
import * as i0 from "@angular/core";
export declare class TimelineComponent implements OnChanges, AfterViewInit {
    timelineItems: QueryList<TimelineItemComponent>;
    ngxMode: NgxTimelineMode;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    buildMaxDimension(): {
        dotHeight: number;
        dotWidth: number;
    };
    setMode(mode: NgxTimelineMode): void;
    setSizeDot(): void;
    setModeLeftAndRight(oLeft: number, oRight: number): void;
    setModeAlternate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimelineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimelineComponent, "ngx-timeline", never, { "ngxMode": { "alias": "ngxMode"; "required": false; }; }, {}, ["timelineItems"], ["*"], true, never>;
}
