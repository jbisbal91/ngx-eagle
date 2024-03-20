import { Directive, ElementRef, inject, Input, NgZone, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, map, switchMap, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class DialogDraggableDirective {
    constructor() {
        this.dialogDragEnabled = false;
        this.host = inject(ElementRef);
        this.zone = inject(NgZone);
        this.delta = { x: 0, y: 0 };
        this.offset = { x: 0, y: 0 };
        this.enabled = true;
        this.destroy$ = new Subject();
    }
    set dialogDragOffset(offset) {
        this.reset(offset);
    }
    ngAfterViewInit() {
        if (!this.enabled) {
            return;
        }
        this.init();
    }
    ngOnChanges() {
        if (!this.enabled && this.dialogDragEnabled && this.dialogDragTarget) {
            this.enabled = true;
            if (this.handle) {
                this.handle.style.setProperty('cursor', 'move');
            }
            else if (this.enabled) {
                this.init();
            }
        }
        if (!this.dialogDragEnabled) {
            this.enabled = false;
            if (this.handle) {
                this.handle.style.setProperty('cursor', '');
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    reset(offset) {
        const defaultValues = { x: 0, y: 0 };
        this.offset = { ...defaultValues, ...offset };
        this.delta = { ...defaultValues };
        this.translate();
    }
    setupEvents() {
        this.zone.runOutsideAngular(() => {
            const mousedown$ = fromEvent(this.handle, 'mousedown');
            const mousemove$ = fromEvent(document, 'mousemove');
            const mouseup$ = fromEvent(document, 'mouseup');
            const mousedrag$ = mousedown$.pipe(filter(() => this.enabled), map((event) => ({
                startX: event.clientX,
                startY: event.clientY,
            })), switchMap(({ startX, startY }) => mousemove$.pipe(map((event) => {
                event.preventDefault();
                this.delta = {
                    x: event.clientX - startX,
                    y: event.clientY - startY,
                };
                if (this.dragConstraint === 'constrain') {
                    this.checkConstraint();
                }
            }), takeUntil(mouseup$))), takeUntil(this.destroy$));
            mousedrag$.subscribe(() => {
                if (this.delta.x === 0 && this.delta.y === 0) {
                    return;
                }
                this.translate();
            });
            mouseup$
                .pipe(filter(() => this.enabled), filter(() => this.delta.x !== 0 || this.delta.y !== 0), takeUntil(this.destroy$))
                .subscribe(() => {
                if (this.dragConstraint === 'bounce') {
                    this.checkConstraint();
                    this.translate();
                }
                this.offset.x += this.delta.x;
                this.offset.y += this.delta.y;
                this.delta = { x: 0, y: 0 };
            });
        });
    }
    translate() {
        if (this.target) {
            this.zone.runOutsideAngular(() => {
                requestAnimationFrame(() => {
                    const transform = `translate(${this.translateX}px, ${this.translateY}px)`;
                    this.target?.style.setProperty('transform', transform);
                });
            });
        }
    }
    get translateX() {
        return this.offset.x + this.delta.x;
    }
    get translateY() {
        return this.offset.y + this.delta.y;
    }
    init() {
        if (!this.dialogDragTarget) {
            throw new Error('You need to specify the drag target');
        }
        this.handle =
            this.dialogDragHandle instanceof Element
                ? this.dialogDragHandle
                : typeof this.dialogDragHandle === 'string' && this.dialogDragHandle
                    ? document.querySelector(this.dialogDragHandle)
                    : this.host.nativeElement;
        if (this.handle && this.enabled) {
            this.handle.style.setProperty('cursor', 'move');
        }
        this.target =
            this.dialogDragTarget instanceof HTMLElement
                ? this.dialogDragTarget
                : document.querySelector(this.dialogDragTarget);
        this.setupEvents();
        this.translate();
    }
    checkConstraint() {
        if (this.target) {
            const { width, height } = this.target.getBoundingClientRect();
            const { innerWidth, innerHeight } = window;
            const verticalDistance = this.translateY > 0
                ? this.translateY + height / 2
                : this.translateY - height / 2;
            const maxVerticalDistance = innerHeight / 2;
            const horizontalDistance = this.translateX > 0
                ? this.translateX + width / 2
                : this.translateX - width / 2;
            const maxHorizontalDistance = innerWidth / 2;
            if (-maxVerticalDistance > verticalDistance) {
                this.delta.y = -maxVerticalDistance + height / 2 - this.offset.y;
            }
            if (maxVerticalDistance < verticalDistance) {
                this.delta.y = maxVerticalDistance - height / 2 - this.offset.y;
            }
            if (-maxHorizontalDistance > horizontalDistance) {
                this.delta.x = -maxHorizontalDistance + width / 2 - this.offset.x;
            }
            if (maxHorizontalDistance < horizontalDistance) {
                this.delta.x = maxHorizontalDistance - width / 2 - this.offset.x;
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogDraggableDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DialogDraggableDirective, isStandalone: true, selector: "[dialogDraggable]", inputs: { dialogDragHandle: "dialogDragHandle", dialogDragTarget: "dialogDragTarget", dialogDragEnabled: "dialogDragEnabled", dialogDragOffset: "dialogDragOffset", dragConstraint: "dragConstraint" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DialogDraggableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dialogDraggable]',
                    standalone: true,
                }]
        }], propDecorators: { dialogDragHandle: [{
                type: Input
            }], dialogDragTarget: [{
                type: Input
            }], dialogDragEnabled: [{
                type: Input
            }], dialogDragOffset: [{
                type: Input
            }], dragConstraint: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25neC1lYWdsZS9kaWFsb2cvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBWW5FLE1BQU0sT0FBTyx3QkFBd0I7SUFKckM7UUFZRSxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFRbEIsU0FBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQixTQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR3RCLFVBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLFdBQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztLQXdLeEM7SUF0TEMsSUFDSSxnQkFBZ0IsQ0FBQyxNQUFrQjtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFhTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FB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QUFDLENBQUMsR0FBRyxtQkFBbUIsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2pFO1lBQ0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGtCQUFrQixFQUFFO2dCQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbkU7WUFDRCxJQUFJLHFCQUFxQixHQUFHLGtCQUFrQixFQUFFO2dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxxQkFBcUIsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7SUFDSCxDQUFDOytHQTlMVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qjs7NEZBQXhCLHdCQUF3QjtrQkFKcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBS0MsZ0JBQWdCO3NCQURmLEtBQUs7Z0JBR04sZ0JBQWdCO3NCQURmLEtBQUs7Z0JBR04saUJBQWlCO3NCQURoQixLQUFLO2dCQUdGLGdCQUFnQjtzQkFEbkIsS0FBSztnQkFLTixjQUFjO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgaW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEcmFnQ29uc3RyYWludCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgRHJhZ09mZnNldCA9IHtcclxuICB4PzogbnVtYmVyO1xyXG4gIHk/OiBudW1iZXI7XHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tkaWFsb2dEcmFnZ2FibGVdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nRHJhZ2dhYmxlRGlyZWN0aXZlXHJcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveVxyXG57XHJcbiAgQElucHV0KClcclxuICBkaWFsb2dEcmFnSGFuZGxlITogc3RyaW5nIHwgRWxlbWVudDtcclxuICBASW5wdXQoKVxyXG4gIGRpYWxvZ0RyYWdUYXJnZXQhOiBzdHJpbmcgfCBFbGVtZW50O1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlhbG9nRHJhZ0VuYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBkaWFsb2dEcmFnT2Zmc2V0KG9mZnNldDogRHJhZ09mZnNldCkge1xyXG4gICAgdGhpcy5yZXNldChvZmZzZXQpO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIGRyYWdDb25zdHJhaW50ITogRHJhZ0NvbnN0cmFpbnQ7XHJcblxyXG4gIHByaXZhdGUgaG9zdCA9IGluamVjdChFbGVtZW50UmVmKTtcclxuICBwcml2YXRlIHpvbmUgPSBpbmplY3QoTmdab25lKTtcclxuICBwcml2YXRlIHRhcmdldCE6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICBwcml2YXRlIGhhbmRsZSE6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGVsdGEgPSB7IHg6IDAsIHk6IDAgfTtcclxuICBwcml2YXRlIG9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xyXG4gIHByaXZhdGUgZW5hYmxlZCA9IHRydWU7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCAmJiB0aGlzLmRpYWxvZ0RyYWdFbmFibGVkICYmIHRoaXMuZGlhbG9nRHJhZ1RhcmdldCkge1xyXG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5oYW5kbGUpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnY3Vyc29yJywgJ21vdmUnKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5kaWFsb2dEcmFnRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMuaGFuZGxlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGUuc3R5bGUuc2V0UHJvcGVydHkoJ2N1cnNvcicsICcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXQob2Zmc2V0PzogRHJhZ09mZnNldCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgdGhpcy5vZmZzZXQgPSB7IC4uLmRlZmF1bHRWYWx1ZXMsIC4uLm9mZnNldCB9O1xyXG4gICAgdGhpcy5kZWx0YSA9IHsgLi4uZGVmYXVsdFZhbHVlcyB9O1xyXG4gICAgdGhpcy50cmFuc2xhdGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXBFdmVudHMoKSB7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBjb25zdCBtb3VzZWRvd24kID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMuaGFuZGxlLCAnbW91c2Vkb3duJyk7XHJcbiAgICAgIGNvbnN0IG1vdXNlbW92ZSQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdtb3VzZW1vdmUnKTtcclxuICAgICAgY29uc3QgbW91c2V1cCQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdtb3VzZXVwJyk7XHJcblxyXG4gICAgICBjb25zdCBtb3VzZWRyYWckID0gbW91c2Vkb3duJC5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmVuYWJsZWQpLFxyXG4gICAgICAgIG1hcCgoZXZlbnQpID0+ICh7XHJcbiAgICAgICAgICBzdGFydFg6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICBzdGFydFk6IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoeyBzdGFydFgsIHN0YXJ0WSB9KSA9PlxyXG4gICAgICAgICAgbW91c2Vtb3ZlJC5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICB0aGlzLmRlbHRhID0ge1xyXG4gICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHN0YXJ0WCxcclxuICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSBzdGFydFksXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5kcmFnQ29uc3RyYWludCA9PT0gJ2NvbnN0cmFpbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb25zdHJhaW50KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdGFrZVVudGlsKG1vdXNldXAkKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBtb3VzZWRyYWckLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEueCA9PT0gMCAmJiB0aGlzLmRlbHRhLnkgPT09IDApIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbW91c2V1cCRcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmVuYWJsZWQpLFxyXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuZGVsdGEueCAhPT0gMCB8fCB0aGlzLmRlbHRhLnkgIT09IDApLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZHJhZ0NvbnN0cmFpbnQgPT09ICdib3VuY2UnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb25zdHJhaW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm9mZnNldC54ICs9IHRoaXMuZGVsdGEueDtcclxuICAgICAgICAgIHRoaXMub2Zmc2V0LnkgKz0gdGhpcy5kZWx0YS55O1xyXG4gICAgICAgICAgdGhpcy5kZWx0YSA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zbGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnRhcmdldCkge1xyXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy50cmFuc2xhdGVYfXB4LCAke3RoaXMudHJhbnNsYXRlWX1weClgO1xyXG4gICAgICAgICAgdGhpcy50YXJnZXQ/LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHRyYW5zbGF0ZVgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm9mZnNldC54ICsgdGhpcy5kZWx0YS54O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgdHJhbnNsYXRlWSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0LnkgKyB0aGlzLmRlbHRhLnk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlhbG9nRHJhZ1RhcmdldCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIHNwZWNpZnkgdGhlIGRyYWcgdGFyZ2V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYW5kbGUgPVxyXG4gICAgICB0aGlzLmRpYWxvZ0RyYWdIYW5kbGUgaW5zdGFuY2VvZiBFbGVtZW50XHJcbiAgICAgICAgPyB0aGlzLmRpYWxvZ0RyYWdIYW5kbGVcclxuICAgICAgICA6IHR5cGVvZiB0aGlzLmRpYWxvZ0RyYWdIYW5kbGUgPT09ICdzdHJpbmcnICYmIHRoaXMuZGlhbG9nRHJhZ0hhbmRsZVxyXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmRpYWxvZ0RyYWdIYW5kbGUgYXMgc3RyaW5nKVxyXG4gICAgICAgIDogdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICBpZiAodGhpcy5oYW5kbGUgJiYgdGhpcy5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlLnN0eWxlLnNldFByb3BlcnR5KCdjdXJzb3InLCAnbW92ZScpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YXJnZXQgPVxyXG4gICAgICB0aGlzLmRpYWxvZ0RyYWdUYXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxyXG4gICAgICAgID8gdGhpcy5kaWFsb2dEcmFnVGFyZ2V0XHJcbiAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZGlhbG9nRHJhZ1RhcmdldCBhcyBzdHJpbmcpO1xyXG5cclxuICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcclxuICAgIHRoaXMudHJhbnNsYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrQ29uc3RyYWludCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhcmdldCkge1xyXG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCB7IGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBjb25zdCB2ZXJ0aWNhbERpc3RhbmNlID1cclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVkgPiAwXHJcbiAgICAgICAgICA/IHRoaXMudHJhbnNsYXRlWSArIGhlaWdodCAvIDJcclxuICAgICAgICAgIDogdGhpcy50cmFuc2xhdGVZIC0gaGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3QgbWF4VmVydGljYWxEaXN0YW5jZSA9IGlubmVySGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3QgaG9yaXpvbnRhbERpc3RhbmNlID1cclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVggPiAwXHJcbiAgICAgICAgICA/IHRoaXMudHJhbnNsYXRlWCArIHdpZHRoIC8gMlxyXG4gICAgICAgICAgOiB0aGlzLnRyYW5zbGF0ZVggLSB3aWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IG1heEhvcml6b250YWxEaXN0YW5jZSA9IGlubmVyV2lkdGggLyAyO1xyXG5cclxuICAgICAgaWYgKC1tYXhWZXJ0aWNhbERpc3RhbmNlID4gdmVydGljYWxEaXN0YW5jZSkge1xyXG4gICAgICAgIHRoaXMuZGVsdGEueSA9IC1tYXhWZXJ0aWNhbERpc3RhbmNlICsgaGVpZ2h0IC8gMiAtIHRoaXMub2Zmc2V0Lnk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1heFZlcnRpY2FsRGlzdGFuY2UgPCB2ZXJ0aWNhbERpc3RhbmNlKSB7XHJcbiAgICAgICAgdGhpcy5kZWx0YS55ID0gbWF4VmVydGljYWxEaXN0YW5jZSAtIGhlaWdodCAvIDIgLSB0aGlzLm9mZnNldC55O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgtbWF4SG9yaXpvbnRhbERpc3RhbmNlID4gaG9yaXpvbnRhbERpc3RhbmNlKSB7XHJcbiAgICAgICAgdGhpcy5kZWx0YS54ID0gLW1heEhvcml6b250YWxEaXN0YW5jZSArIHdpZHRoIC8gMiAtIHRoaXMub2Zmc2V0Lng7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1heEhvcml6b250YWxEaXN0YW5jZSA8IGhvcml6b250YWxEaXN0YW5jZSkge1xyXG4gICAgICAgIHRoaXMuZGVsdGEueCA9IG1heEhvcml6b250YWxEaXN0YW5jZSAtIHdpZHRoIC8gMiAtIHRoaXMub2Zmc2V0Lng7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19