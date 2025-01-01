const DividerOrientation = ['left', 'center', 'right'] as const;
export type NgxOrientation = (typeof DividerOrientation)[number];

const DividerType = ['horizontal', 'vertical'] as const;
export type NgxType = (typeof DividerType)[number];
