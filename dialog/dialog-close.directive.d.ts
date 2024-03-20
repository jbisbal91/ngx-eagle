import { OnInit } from '@angular/core';
import { DialogRef } from './dialog-ref';
import * as i0 from "@angular/core";
export declare class DialogCloseDirective implements OnInit {
    private host;
    private NgxDialog;
    ref: DialogRef | undefined | null;
    dialogClose: any;
    ngOnInit(): void;
    onClose(): void;
    private getRefFromParent;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogCloseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DialogCloseDirective, "[dialogClose]", never, { "dialogClose": { "alias": "dialogClose"; "required": false; }; }, {}, never, never, true, never>;
}
