const SkeletonType = ['avatar', 'button', 'row', 'text',''] as const;
export type SkeletonType = (typeof SkeletonType)[number];


