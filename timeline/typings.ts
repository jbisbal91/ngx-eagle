
const TimelineModes = ['left', 'alternate', 'right','default'] as const;
export type NgxTimelineMode = (typeof TimelineModes)[number];


