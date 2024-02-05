import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { PieChart } from '../models';
import * as i0 from "@angular/core";
export type NgxPosition = 'bottom' | 'left' | 'right';
export declare class PieChartComponent implements OnInit {
    private cdr;
    canvas: ElementRef<HTMLCanvasElement>;
    context: CanvasRenderingContext2D | null;
    width: number;
    height: number;
    value: PieChart[];
    ngxPosition: string;
    ngxGutter: number;
    partChartIndex: EventEmitter<number>;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    mouseenter(val: PieChart): void;
    mouseleave(): void;
    /**
     * Create the graph
     * @param value is of type PieChart[], partGraphId will be the id obtained by hovering the mouse
     * over each part of the graph.
     */
    drawPieChart(value: PieChart[], partGraphId?: number): void;
    setShadow(ctx: CanvasRenderingContext2D, partGraphId: number, index: number): void;
    /**
     * Build the text that will be centered in the graphic
     * @param The value is of type PieChart[], total is the sum of all the values of PieChart[],
     * partGraphId will be the id obtained by hovering the mouse, centerX and centerY is the center of the graph
     */
    buildCenteredText(value: PieChart[], total: number, partGraphId: number | undefined, centerX: number, centerY: number): void;
    /**
     * Adds a ring in the center of the graph the value depends on ngGutter [0-1]
     * @param Radius of the graph, centerX and centerY is the center of the graph
     */
    drawRing(centerX: number, centerY: number, radius: number): void;
    /**
     * Builds the text and centers it in the empty space in the center of the graphic
     * @param text that will be added in the center of the graph, color is the color of
     * the text that matches the color of the part of the graph that is selected,
     * centerX and centerY is the center of the graph
     */
    drawCenteredText(text: string, centerX: number, centerY: number, font: string, color?: string): void;
    detectPart(mouseX: number, mouseY: number): number;
    radianToDegree(rad: number): number;
    detectFill(mouseX: number, mouseY: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PieChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PieChartComponent, "ngx-pie-chart", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "value": { "alias": "value"; "required": false; }; "ngxPosition": { "alias": "ngxPosition"; "required": false; }; "ngxGutter": { "alias": "ngxGutter"; "required": false; }; }, { "partChartIndex": "partChartIndex"; }, never, never, true, never>;
    static ngAcceptInputType_ngxGutter: unknown;
}
