export type RGB = {
    r: number;
    g: number;
    b: number;
};
export type HSL = {
    h: number;
    s: number;
    l: number;
};
export type ColorContrast = {
    backgroundColor: string;
    overlayColor: string;
};
export type ColorSVG = {
    [key: string]: string;
};
export declare const ErrorColor: string;
export declare const PresetColors: ColorSVG;
