const BadgeSize = ['small', 'medium', 'large'] as const;
export type NgxSize = (typeof BadgeSize)[number];

const BadgePosition = ['before', 'after'] as const;
export type NgxPosition = (typeof BadgePosition)[number];

export type NodeName = { [key: string]: string };
export const nodeNameForText: NodeName = {
  P: 'p',
  SPAN: 'span',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  A: 'a',
  STRONG: 'strong',
  EM: 'em',
  B: 'b',
  I: 'i',
  U: 'u',
  S: 's',
  SUP: 'sup',
  SUB: 'sub',
  BLOCKQUOTE: 'blockquote',
  Q: 'q',
  CITE: 'cite',
  CODE: 'code',
  PRE: 'pre',
  ABBR: 'abbr',
  TIME: 'time',
};
