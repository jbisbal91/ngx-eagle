import { Directive, Host, Input, Optional, numberAttribute, } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../row/row.directive";
export class ColDirective {
    constructor(elementRef, renderer2, rowDirective) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.rowDirective = rowDirective;
        this.ngxSpan = 24;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.rowDirective?.currentSpan$.subscribe((currentSpan) => {
            this.setMaxWidthCols(currentSpan);
        }));
        this.subscription.add(this.rowDirective?.currentGutter$.subscribe((currentGutter) => {
            if (currentGutter) {
                const gutter = JSON.parse(currentGutter)
                    .map((val) => val + 'px')
                    .join(' ');
                this.setGutter(gutter);
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    setMaxWidthCols(totalCols) {
        const maxWidth = (Number(this.ngxSpan) / totalCols) * 100;
        this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'block');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'max-width', `${maxWidth}%`);
        this.renderer2.setStyle(this.elementRef.nativeElement, 'flex', `0 0 ${maxWidth}%`);
    }
    setGutter(gutter) {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'margin', `${gutter}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.RowDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: ColDirective, selector: "[ngx-col]", inputs: { ngxSpan: ["ngxSpan", "ngxSpan", numberAttribute] }, host: { classAttribute: "ngx-col" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngx-col]',
                    host: {
                        class: 'ngx-col',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.RowDirective, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }]; }, propDecorators: { ngxSpan: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS9ncmlkL2NvbC9jb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBRVIsZUFBZSxHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFTcEMsTUFBTSxPQUFPLFlBQVk7SUFHdkIsWUFDUyxVQUFzQixFQUNyQixTQUFvQixFQUNELFlBQTBCO1FBRjlDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTGhCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDcEQsaUJBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUtyRCxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDNUQsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO3FCQUNyQyxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7cUJBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQWlCO1FBQy9CLE1BQU0sUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsV0FBVyxFQUNYLEdBQUcsUUFBUSxHQUFHLENBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsTUFBTSxFQUNOLE9BQU8sUUFBUSxHQUFHLENBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixRQUFRLEVBQ1IsR0FBRyxNQUFNLEVBQUUsQ0FDWixDQUFDO0lBQ0osQ0FBQzsrR0FwRFUsWUFBWTttR0FBWixZQUFZLG1FQUNILGVBQWU7OzRGQUR4QixZQUFZO2tCQU54QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFNBQVM7cUJBQ2pCO2lCQUNGOzswQkFPSSxRQUFROzswQkFBSSxJQUFJOzRDQUxvQixPQUFPO3NCQUE3QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBudW1iZXJBdHRyaWJ1dGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3dEaXJlY3RpdmUgfSBmcm9tICcuLi9yb3cvcm93LmRpcmVjdGl2ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3gtY29sXScsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICduZ3gtY29sJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIG5neFNwYW46IG51bWJlciA9IDI0O1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyByb3dEaXJlY3RpdmU6IFJvd0RpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXHJcbiAgICAgIHRoaXMucm93RGlyZWN0aXZlPy5jdXJyZW50U3BhbiQuc3Vic2NyaWJlKChjdXJyZW50U3BhbikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0TWF4V2lkdGhDb2xzKGN1cnJlbnRTcGFuKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXHJcbiAgICAgIHRoaXMucm93RGlyZWN0aXZlPy5jdXJyZW50R3V0dGVyJC5zdWJzY3JpYmUoKGN1cnJlbnRHdXR0ZXIpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudEd1dHRlcikge1xyXG4gICAgICAgICAgY29uc3QgZ3V0dGVyID0gSlNPTi5wYXJzZShjdXJyZW50R3V0dGVyKVxyXG4gICAgICAgICAgICAubWFwKCh2YWw6IGFueSkgPT4gdmFsICsgJ3B4JylcclxuICAgICAgICAgICAgLmpvaW4oJyAnKTtcclxuICAgICAgICAgIHRoaXMuc2V0R3V0dGVyKGd1dHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHNldE1heFdpZHRoQ29scyh0b3RhbENvbHM6IG51bWJlcikge1xyXG4gICAgY29uc3QgbWF4V2lkdGggPSAoTnVtYmVyKHRoaXMubmd4U3BhbikgLyB0b3RhbENvbHMpICogMTAwO1xyXG4gICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZShcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdtYXgtd2lkdGgnLFxyXG4gICAgICBgJHttYXhXaWR0aH0lYFxyXG4gICAgKTtcclxuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2ZsZXgnLFxyXG4gICAgICBgMCAwICR7bWF4V2lkdGh9JWBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZXRHdXR0ZXIoZ3V0dGVyOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ21hcmdpbicsXHJcbiAgICAgIGAke2d1dHRlcn1gXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=