const SpinnerType = ['bars', 'dots'] as const;
export type SpinnerType = (typeof SpinnerType)[number];

const SpinnerSize = ['sm', 'md','lg'] as const;
export type SpinnerSize = (typeof SpinnerSize)[number];
