const ResizeDirection = ['horizontal', 'vertical', 'diagonal'] as const;
export type ResizeDirection = (typeof ResizeDirection)[number];

const MarkerPosition = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right', 'top', 'bottom'] as const;
export type MarkerPosition = (typeof MarkerPosition)[number];

