const AccordionType = ['card', 'bordered', 'default'] as const;
export type NgxType = (typeof AccordionType)[number];

const AccordionExpandIconPosition = ['left', 'right'] as const;
export type NgxExpandIconPosition =
  (typeof AccordionExpandIconPosition)[number];
