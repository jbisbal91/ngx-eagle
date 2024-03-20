declare const ProgressType: readonly ["line", "circle"];
export type NgxType = (typeof ProgressType)[number];
declare const ProgressSize: readonly ["large", "small", "default"];
export type NgxSize = (typeof ProgressSize)[number];
export {};
