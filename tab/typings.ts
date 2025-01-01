const TabGroupPosition = ['top', 'left', 'right'] as const;
export type TabPosition = (typeof TabGroupPosition)[number];

const TabGroupAlign = ['start', 'center', 'end'] as const;
export type AlignTabs = (typeof TabGroupAlign)[number];

const TabGroupMode = ['default', 'closeable'] as const;
export type Mode = (typeof TabGroupMode)[number];
