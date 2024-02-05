import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

class LineChartComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LineChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: LineChartComponent, isStandalone: true, selector: "ngx-line-chart", ngImport: i0, template: "<p>line-chart works!</p>\r\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LineChartComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-line-chart', standalone: true, template: "<p>line-chart works!</p>\r\n" }]
        }] });

class LineChartModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LineChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: LineChartModule, imports: [LineChartComponent], exports: [LineChartComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LineChartModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LineChartModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [LineChartComponent],
                    exports: [LineChartComponent],
                }]
        }] });

class LineChart {
    constructor() {
        this.label = '';
        this.value = 0;
        this.color = '';
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { LineChart, LineChartComponent, LineChartModule };
//# sourceMappingURL=ngx-eagle-line-chart.mjs.map
