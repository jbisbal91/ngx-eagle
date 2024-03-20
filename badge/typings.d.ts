declare const BadgeSize: readonly ["small", "medium", "large"];
export type NgxSize = (typeof BadgeSize)[number];
declare const BadgePosition: readonly ["before", "after"];
export type NgxPosition = (typeof BadgePosition)[number];
export type NodeName = {
    [key: string]: string;
};
export declare const nodeNameForText: NodeName;
export {};
