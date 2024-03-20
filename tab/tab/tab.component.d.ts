import { Tab } from './tab.interface';
import * as i0 from "@angular/core";
export declare class TabComponent implements Tab {
    id: string;
    isActive: boolean;
    disabled: boolean;
    label: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabComponent, "ngx-tab", never, { "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_disabled: unknown;
}
