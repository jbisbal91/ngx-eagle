import {Injectable } from '@angular/core';
import { ColorContrast, HSL, RGB, PresetColors } from 'ngx-eagle/core/types';

@Injectable({
  providedIn: 'root',
})
export class ColorConverter {
  constructor() {}

  //--------------START VALIDATIONS ------------------

  public isPresetColors(presetColors: string) {
    if (!presetColors) throw new TypeError(`Invalid argument; has no value.`);
    PresetColors[presetColors.toLowerCase()];
    return PresetColors[presetColors.toLowerCase()] ? true : false;
  }

  public isHex(hex: string): boolean {
    if (!hex) throw new TypeError(`Invalid argument; has no value.`);
    const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
    return regex.test(hex);
  }

  public isRGB(rgb: string): boolean {
    if (!rgb) throw new TypeError(`Invalid argument; has no value.`);
    const regex =
      /^rgb\(\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*\)$/;
    return regex.test(rgb);
  }

  public isRGBA(rgba: string): boolean {
    if (!rgba) throw new TypeError(`Invalid argument; has no value.`);
    const regex =
      /^rgba\(\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|0)\s*,\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|0)\s*,\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|0)\s*,\s*((1(\.0)?)|0(\.\d+)?)\s*\)$/;
    return regex.test(rgba);
  }

  public isHSL(hsl: string): boolean {
    if (!hsl) throw new TypeError(`Invalid argument; has no value.`);
    const regex =
      /^hsl\(\s*((\d{1,2}|[1-2]\d{2}|3[0-5]\d)|360)\s*,\s*(\d{1,2}|100)%\s*,\s*(\d{1,2}|100)%\s*\)$/;
    return regex.test(hsl);
  }

  public isHSLA(hsla: string): boolean {
    if (!hsla) throw new TypeError(`Invalid argument; has no value.`);
    const regex =
      /^hsla\(\s*((\d{1,2}|[1-2]\d{2}|3[0-5]\d)|360)\s*,\s*(\d{1,2}|100)%\s*,\s*(\d{1,2}|100)%\s*,\s*(0(\.\d+)?|1(\.0)?)\s*\)$/;
    return regex.test(hsla);
  }
  //--------------END VALIDATIONS ------------------

  contrastingColors(color: string): ColorContrast {
    let rgb: RGB;

    if (this.isPresetColors(color)) {
      rgb = this.hexToRgb(this.nameSVGToHex(color));
    }

    if (this.isHex(color)) {
      rgb = this.hexToRgb(color);
    }

    if (this.isRGB(color)) {
      rgb = this.rgbToObject(color);
    }

    if (this.isRGBA(color)) {
      rgb = this.rgbaToObject(color);
    }

    if (this.isHSL(color)) {
      rgb = this.hslToRgb(color);
    }
    if (this.isHSLA(color)) {
      rgb = this.hslaToRgb(color);
    }

    const buildOverlayColor = () => {
      const luminance = this.luminance(rgb);
      return luminance > 0.5 ? this.changeRgbLuminance(rgb, 0.35) : '#ffffff';
    };
    const backgroundColor = color;
    const overlayColor = buildOverlayColor();
    return { backgroundColor: backgroundColor, overlayColor: overlayColor };
  }

  changeRgbLuminance(rgb: RGB, luminance: number): string {
    const newR = Math.max(0, Math.floor(rgb.r * luminance));
    const newG = Math.max(0, Math.floor(rgb.g * luminance));
    const newB = Math.max(0, Math.floor(rgb.b * luminance));
    return `rgb(${newR},${newG},${newB})`;
  }

  luminance(color: RGB) {
    return (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;
  }

  //------------- TO RGB -------------
  rgbToObject(rgb: string): RGB {
    if (!rgb) throw new TypeError(`Invalid argument; has no value.`);
    const match = rgb.match(
      /^rgb\(\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*\)$/
    );
    if (!match) throw new TypeError(`Invalid RGB color format: ${rgb}`);

    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
    };
  }

  rgbaToObject(rgba: string): RGB {
    if (!rgba) throw new TypeError(`Invalid argument; has no value.`);
    const match = rgba.match(
      /^rgba\(\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|0)\s*,\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|0)\s*,\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|0)\s*,\s*((1(\.0)?)|0(\.\d+)?)\s*\)$/
    );
    if (!match) throw new TypeError(`Invalid RGBA color format: ${rgba}`);

    const r = parseInt(match[1]);
    const g = parseInt(match[3]);
    const b = parseInt(match[5]);
    const a = parseFloat(match[7]);

    // Convertir el color con opacidad a RGB
    const rgb = {
      r: Math.round((1 - a) * 255 + a * r),
      g: Math.round((1 - a) * 255 + a * g),
      b: Math.round((1 - a) * 255 + a * b),
    };
    return rgb;
  }

  hexToRgb(hex: string): RGB {
    let hexCode = hex.startsWith('#') ? hex.slice(1) : hex;
    if (hexCode.length === 3) {
      hexCode = hexCode
        .split('')
        .map((char) => char + char)
        .join('');
    }
    const bigint = parseInt(hexCode, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  hslToRgb(hsl: string): RGB {
    if (!hsl) throw new TypeError(`Invalid argument; has no value.`);
    const match = hsl.match(/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/);
    if (!match) throw new TypeError(`Invalid HSL color format: ${hsl}`);

    const h = parseInt(match[1]) / 360;
    const s = parseInt(match[2]) / 100;
    const l = parseInt(match[3]) / 100;

    let r, g, b;
    if (s === 0) {
      r = g = b = l; // Achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    };
  }

  hslaToRgb(hsla: string): RGB {
    if (!hsla) throw new TypeError(`Invalid argument; has no value.`);
    const match = hsla.match(
      /^hsla\(\s*((\d{1,2}|[1-2]\d{2}|3[0-5]\d)|360)\s*,\s*(\d{1,2}|100)%\s*,\s*(\d{1,2}|100)%\s*,\s*(0(\.\d+)?|1(\.0)?)\s*\)$/
    );
    if (!match) throw new TypeError(`Invalid HSLA color format: ${hsla}`);
    const h = parseInt(match[1]) / 360;
    const s = parseInt(match[2]) / 100;
    const l = parseInt(match[3]) / 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // Achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    };
  }

  //------------- END -------------
  //------------- TO HSL -------------
  hexToHsl(hex: string): HSL {
    const r = parseInt(hex.substring(1, 3), 16) / 255;
    const g = parseInt(hex.substring(3, 5), 16) / 255;
    const b = parseInt(hex.substring(5, 7), 16) / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const l = (min + max) / 2;
    let s = 0;
    if (min !== max) {
      s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
    }
    let h = 0;
    if (min !== max) {
      if (max === r) {
        h = (g - b) / (max - min);
      } else if (max === g) {
        h = 2 + (b - r) / (max - min);
      } else {
        h = 4 + (r - g) / (max - min);
      }
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
    return { h, s: s * 100, l: l * 100 };
  }
  //------------- END -------------
  //------------- TO HEX -------------
  rgbToHex(rgbString: string): string {
    const rgbMatch = rgbString.match(
      /^rgb\(\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*,\s*(0*(?:[0-9]{1,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*\)$/
    );
    if (!rgbMatch) {
      throw new Error('Incorrect RGB color format.');
    }
    const [, r, g, b] = rgbMatch.map(Number);
    return `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  nameSVGToHex(name: any) {
    const response = PresetColors[name.toLowerCase()];
    if (response) {
      return PresetColors[name.toLowerCase()];
    }
    throw new Error('Wrong color name');
  }

}
