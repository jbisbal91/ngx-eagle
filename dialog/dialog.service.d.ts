import { TemplateRef, Type } from '@angular/core';
import { DialogRef } from './dialog-ref';
import { DialogConfig, ExtractData, ExtractResult } from './types';
import * as i0 from "@angular/core";
export declare class NgxDialog {
    private appRef;
    private injector;
    private document;
    private globalConfig;
    dialogs: DialogRef[];
    private hasOpenDialogSub;
    hasOpenDialogs$: import("rxjs").Observable<boolean>;
    hasOpenDialogs(): boolean;
    isOpen(id: string): boolean;
    isLastOpened(idOrRef: string | DialogRef): boolean;
    closeAll(): void;
    open(template: TemplateRef<any>, config?: Partial<DialogConfig>): DialogRef;
    open<C extends Type<any>>(component: C, config?: Partial<DialogConfig<ExtractData<InstanceType<C>>>>): DialogRef<ExtractData<InstanceType<C>>, ExtractResult<InstanceType<C>>>;
    private openTemplate;
    private openComponent;
    private attach;
    private createDialog;
    private mergeConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDialog, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxDialog>;
}
