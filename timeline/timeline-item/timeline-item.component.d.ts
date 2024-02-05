import { TemplateRef } from '@angular/core';
import { NgxTimelineItemColor, NgxTimelinePosition } from '../typings';
import * as i0 from "@angular/core";
export declare class TimelineItemComponent {
    ngxPosition?: NgxTimelinePosition;
    ngxColor: NgxTimelineItemColor;
    ngxDot?: string | TemplateRef<void>;
    ngxLabel?: string | TemplateRef<void>;
    first: boolean;
    last: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimelineItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimelineItemComponent, "ngx-timeline-item", never, { "ngxPosition": { "alias": "ngxPosition"; "required": false; }; "ngxColor": { "alias": "ngxColor"; "required": false; }; "ngxDot": { "alias": "ngxDot"; "required": false; }; "ngxLabel": { "alias": "ngxLabel"; "required": false; }; }, {}, never, ["*"], true, never>;
}
