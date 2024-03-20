import { AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { DragConstraint } from './types';
import * as i0 from "@angular/core";
export type DragOffset = {
    x?: number;
    y?: number;
};
export declare class DialogDraggableDirective implements AfterViewInit, OnChanges, OnDestroy {
    dialogDragHandle: string | Element;
    dialogDragTarget: string | Element;
    dialogDragEnabled: boolean;
    set dialogDragOffset(offset: DragOffset);
    dragConstraint: DragConstraint;
    private host;
    private zone;
    private target;
    private handle;
    private delta;
    private offset;
    private enabled;
    private destroy$;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    reset(offset?: DragOffset): void;
    private setupEvents;
    private translate;
    private get translateX();
    private get translateY();
    private init;
    private checkConstraint;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogDraggableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DialogDraggableDirective, "[dialogDraggable]", never, { "dialogDragHandle": { "alias": "dialogDragHandle"; "required": false; }; "dialogDragTarget": { "alias": "dialogDragTarget"; "required": false; }; "dialogDragEnabled": { "alias": "dialogDragEnabled"; "required": false; }; "dialogDragOffset": { "alias": "dialogDragOffset"; "required": false; }; "dragConstraint": { "alias": "dragConstraint"; "required": false; }; }, {}, never, never, true, never>;
}
