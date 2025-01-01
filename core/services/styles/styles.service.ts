import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StylesService {
  constructor() {}

  getStyleValue(element: Element, property: string): string {
    const computedStyle = window.getComputedStyle(element);
    return computedStyle.getPropertyValue(property);
  }
}
