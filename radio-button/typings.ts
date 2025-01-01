const RadioButtonSize = ['large', 'small', 'default'] as const;
export type NgxSize = (typeof RadioButtonSize)[number];
