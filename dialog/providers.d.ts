import { InjectionToken } from '@angular/core';
import { DialogConfig, GlobalDialogConfig } from './types';
export declare const DIALOG_DOCUMENT_REF: InjectionToken<Document>;
export declare function defaultGlobalConfig(): Partial<GlobalDialogConfig & DialogConfig>;
export declare const GLOBAL_DIALOG_CONFIG: InjectionToken<Partial<GlobalDialogConfig>>;
export declare const NODES_TO_INSERT: InjectionToken<Element[]>;
export declare function provideDialogConfig(config: Partial<GlobalDialogConfig>): import("@angular/core").EnvironmentProviders;
export declare function provideDialogDocRef(doc: Document): import("@angular/core").EnvironmentProviders;
