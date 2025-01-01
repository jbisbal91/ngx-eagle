const Sort = ['ascend', 'descend', null] as const;
export type NgxSort= (typeof Sort)[number];
