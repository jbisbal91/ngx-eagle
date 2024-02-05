declare const AvatarSize: readonly ["large", "small", "default"];
export type NgxSize = (typeof AvatarSize)[number];
declare const AvatarShape: readonly ["circle", "square"];
export type NgxShape = (typeof AvatarShape)[number];
export {};
