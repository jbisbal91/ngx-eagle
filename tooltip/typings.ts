const Position = ['top', 'bottom', 'left','right'] as const;
export type Position= (typeof Position)[number];
