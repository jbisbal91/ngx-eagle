import { ComponentRef, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DialogConfig, GlobalDialogConfig, JustProps } from './types';
import { DragOffset } from './draggable.directive';
type GuardFN<R> = (result?: R) => Observable<boolean> | Promise<boolean> | boolean;
export declare abstract class DialogRef<Data = any, Result = any, Ref extends ComponentRef<any> | TemplateRef<any> = ComponentRef<any> | TemplateRef<any>> {
    ref: Ref | null;
    data: Data;
    id: string;
    backdropClick$: Observable<MouseEvent>;
    afterClosed$: Observable<Result>;
    abstract close(result?: Result): void;
    abstract beforeClose(guard: GuardFN<Result>): void;
    abstract resetDrag(offset?: DragOffset): void;
    abstract updateConfig(config: Partial<DialogConfig>): void;
}
type InternalDialogRefProps = Partial<Omit<JustProps<InternalDialogRef>, 'id' | 'data'> & Pick<InternalDialogRef, 'onClose' | 'onReset'>>;
export declare class InternalDialogRef extends DialogRef {
    config: DialogConfig & GlobalDialogConfig;
    backdropClick$: Subject<MouseEvent>;
    beforeCloseGuards: GuardFN<unknown>[];
    onClose: (result?: unknown) => void | null;
    onReset: (offset?: DragOffset) => void;
    constructor(props?: InternalDialogRefProps);
    close(result?: unknown): void;
    beforeClose(guard: GuardFN<unknown>): void;
    resetDrag(offset?: DragOffset): void;
    canClose(result: unknown): Observable<boolean>;
    mutate(props: InternalDialogRefProps): void;
    updateConfig(config: Partial<DialogConfig & GlobalDialogConfig>): void;
    asDialogRef(): DialogRef;
}
export {};
