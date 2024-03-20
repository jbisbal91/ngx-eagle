import { OnDestroy, OnInit } from '@angular/core';
import { InternalDialogRef } from './dialog-ref';
import { DragOffset } from './draggable.directive';
import * as i0 from "@angular/core";
export declare class DialogComponent implements OnInit, OnDestroy {
    dialogRef: InternalDialogRef;
    config: import("ngx-eagle/dialog").DialogConfig<any> & import("./types").GlobalDialogConfig;
    private size;
    styles: {
        width: string;
        minWidth: string;
        maxWidth: string;
        height: string;
        minHeight: string;
        maxHeight: string;
    };
    private backdrop;
    private dialogElement;
    private draggable;
    private destroy$;
    private nodes;
    private document;
    private host;
    private NgxDialog;
    constructor();
    ngOnInit(): void;
    reset(offset?: DragOffset): void;
    closeDialog(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogComponent, "ngx-dialog", never, {}, {}, never, never, true, never>;
}
