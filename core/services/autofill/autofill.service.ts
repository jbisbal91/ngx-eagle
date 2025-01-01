import { ElementRef, Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type AutofillEvent = {
  target: Element;
  isAutofilled: boolean;
};

type MonitoredElementInfo = {
  readonly subject: Subject<AutofillEvent>;
  unlisten: () => void;
};

@Injectable({
  providedIn: 'root',
})
export class Autofill {
  private _monitoredElements = new Map<Element, MonitoredElementInfo>();
  constructor(private _ngZone: NgZone) {}

  monitor(element: ElementRef<Element>): Observable<AutofillEvent>;

  monitor(
    elementOrRef: Element | ElementRef<Element>
  ): Observable<AutofillEvent> {
    const result = new Subject<AutofillEvent>();
    return result;
  }


}
