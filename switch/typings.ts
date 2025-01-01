const SwitchSize = ['large', 'small', 'default'] as const;
export type NgxSize = (typeof SwitchSize)[number];

const SwitchLabelPosition = ['before', 'after'] as const;
export type LabelPosition = (typeof SwitchLabelPosition)[number];
