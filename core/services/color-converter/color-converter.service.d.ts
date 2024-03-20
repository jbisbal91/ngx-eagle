import { ColorContrast, HSL, RGB } from 'ngx-eagle/core/types';
import * as i0 from "@angular/core";
export declare class ColorConverter {
    constructor();
    isPresetColors(presetColors: string): boolean;
    isHex(hex: string): boolean;
    isRGB(rgb: string): boolean;
    isRGBA(rgba: string): boolean;
    isHSL(hsl: string): boolean;
    isHSLA(hsla: string): boolean;
    contrastingColors(color: string): ColorContrast;
    changeRgbLuminance(rgb: RGB, luminance: number): string;
    luminance(color: RGB): number;
    rgbToObject(rgb: string): RGB;
    rgbaToObject(rgba: string): RGB;
    hexToRgb(hex: string): RGB;
    hslToRgb(hsl: string): RGB;
    hslaToRgb(hsla: string): RGB;
    hexToHsl(hex: string): HSL;
    rgbToHex(rgbString: string): string;
    nameSVGToHex(name: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorConverter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ColorConverter>;
}
