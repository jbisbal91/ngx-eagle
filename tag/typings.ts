const TagMode = ['default', 'closeable', 'checkable'] as const;
export type NgxMode = (typeof TagMode)[number];

