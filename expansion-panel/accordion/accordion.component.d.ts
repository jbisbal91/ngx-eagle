import { OnDestroy, QueryList } from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import * as i0 from "@angular/core";
export declare class AccordionComponent implements OnDestroy {
    expansionPanels: QueryList<ExpansionPanelComponent>;
    private subscription;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    expand(component: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "ngx-accordion", never, {}, {}, ["expansionPanels"], ["*"], true, never>;
}
