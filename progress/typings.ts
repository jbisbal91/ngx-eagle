const ProgressType = ['line', 'circle'] as const;
export type NgxType = (typeof ProgressType)[number];

const ProgressSize = ['large', 'small', 'default'] as const;
export type NgxSize = (typeof ProgressSize)[number];

