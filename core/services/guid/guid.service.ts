import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Guid {
  public static EMPTY = '00000000-0000-0000-0000-000000000000';

  constructor() {}

  public static create(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  public static isGuid(guid: string): boolean {
    if (!guid) throw new TypeError(`Invalid argument; has no value.`);
    var validator = new RegExp(
      '^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$',
      'i'
    );
    return validator.test(guid);
  }
}
