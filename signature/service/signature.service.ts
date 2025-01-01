import { Injectable } from '@angular/core';
import { FontStyle } from '../interface/font-styte.interface';

@Injectable({
  providedIn: 'root'
})
export class SignatureService {

  constructor() { }

  textToBase64Image(text: string, fontStyle: FontStyle, width: number = 400, height: number = 50): string {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const { fontFamily, fontSize, color, textAlign, fontWeight } = fontStyle;
      ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
      ctx.fillStyle = color;
      ctx.textAlign = textAlign;
      ctx.textBaseline = 'middle';
      ctx.fillText(text, width / 2, height / 2);
      return canvas.toDataURL('image/png');
    }

    return '';
  }

  textToBlobImage(text: string, fontStyle: FontStyle, width: number = 400, height: number = 50): Blob {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
  
    if (!ctx) {
      throw new Error('Canvas context is not available.');
    }
  
    const { fontFamily, fontSize, color, textAlign, fontWeight } = fontStyle;
    ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textAlign = textAlign;
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
  
    // Create a Blob from the canvas data
    let blob: Blob | null = null;
    const dataUrl = canvas.toDataURL('image/png');
    const byteString = atob(dataUrl.split(',')[1]);
    const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
  
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
  
    blob = new Blob([uint8Array], { type: mimeString });
  
    if (blob) {
      return blob;
    } else {
      throw new Error('Failed to create Blob from canvas.');
    }
  }

  base64ToBlob(base64: string, mimeType: string): Blob {
    // Decodificar base64
    const byteCharacters = atob(base64.split(',')[1]); // Obtener la parte de datos del base64
    const byteNumbers = new Array(byteCharacters.length);
    
    // Convertir los caracteres a números de bytes
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
  
    // Crear un ArrayBuffer con los bytes
    const byteArray = new Uint8Array(byteNumbers);
    
    // Crear un Blob a partir del ArrayBuffer
    return new Blob([byteArray], { type: mimeType });
  }
  
}
