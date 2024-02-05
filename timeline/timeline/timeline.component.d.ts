import { AfterViewInit, QueryList } from '@angular/core';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import { NgxTimelineMode } from '../typings';
import * as i0 from "@angular/core";
export declare class TimelineComponent implements AfterViewInit {
    timelineItems: QueryList<TimelineItemComponent>;
    ngxMode: NgxTimelineMode;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimelineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimelineComponent, "ngx-timeline", never, { "ngxMode": { "alias": "ngxMode"; "required": false; }; }, {}, ["timelineItems"], ["*"], true, never>;
}
