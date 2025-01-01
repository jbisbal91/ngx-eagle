
const ButtonSize = ['small', 'medium', 'large'] as const;
export type ButtonSize = (typeof ButtonSize)[number];

const ButtonRounded = ['small', 'medium','large','full'] as const;
export type ButtonRounded = (typeof ButtonRounded)[number];

export const ButtonFillMode = ['filled', 'outlined', 'text', 'elevated'] as const;
export type ButtonFillMode = (typeof ButtonFillMode)[number];
