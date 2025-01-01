const CheckboxSize = ['large', 'small', 'default'] as const;
export type NgxSize = (typeof CheckboxSize)[number];
