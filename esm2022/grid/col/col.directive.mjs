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
        if (this.ngxSpan === 0) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
        }
        else {
            const maxWidth = (Number(this.ngxSpan) / totalCols) * 100;
            this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'block');
            this.renderer2.setStyle(this.elementRef.nativeElement, 'max-width', `${maxWidth}%`);
            this.renderer2.setStyle(this.elementRef.nativeElement, 'flex', `0 0 ${maxWidth}%`);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1lYWdsZS9ncmlkL2NvbC9jb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBRVIsZUFBZSxHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFTcEMsTUFBTSxPQUFPLFlBQVk7SUFHdkIsWUFDUyxVQUFzQixFQUNyQixTQUFvQixFQUNELFlBQTBCO1FBRjlDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTGhCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDcEQsaUJBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUtyRCxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDNUQsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO3FCQUNyQyxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7cUJBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZSxDQUFDLFNBQWlCO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsU0FBUyxFQUNULE9BQU8sQ0FDUixDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixXQUFXLEVBQ1gsR0FBRyxRQUFRLEdBQUcsQ0FDZixDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixNQUFNLEVBQ04sT0FBTyxRQUFRLEdBQUcsQ0FDbkIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsUUFBUSxFQUNSLEdBQUcsTUFBTSxFQUFFLENBQ1osQ0FBQztJQUNKLENBQUM7K0dBNURVLFlBQVk7bUdBQVosWUFBWSxtRUFDSCxlQUFlOzs0RkFEeEIsWUFBWTtrQkFOeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxTQUFTO3FCQUNqQjtpQkFDRjs7MEJBT0ksUUFBUTs7MEJBQUksSUFBSTs0Q0FMb0IsT0FBTztzQkFBN0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgbnVtYmVyQXR0cmlidXRlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUm93RGlyZWN0aXZlIH0gZnJvbSAnLi4vcm93L3Jvdy5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4LWNvbF0nLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LWNvbCcsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBuZ3hTcGFuOiBudW1iZXIgPSAyNDtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgcm93RGlyZWN0aXZlOiBSb3dEaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxyXG4gICAgICB0aGlzLnJvd0RpcmVjdGl2ZT8uY3VycmVudFNwYW4kLnN1YnNjcmliZSgoY3VycmVudFNwYW4pID0+IHtcclxuICAgICAgICB0aGlzLnNldE1heFdpZHRoQ29scyhjdXJyZW50U3Bhbik7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxyXG4gICAgICB0aGlzLnJvd0RpcmVjdGl2ZT8uY3VycmVudEd1dHRlciQuc3Vic2NyaWJlKChjdXJyZW50R3V0dGVyKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRHdXR0ZXIpIHtcclxuICAgICAgICAgIGNvbnN0IGd1dHRlciA9IEpTT04ucGFyc2UoY3VycmVudEd1dHRlcilcclxuICAgICAgICAgICAgLm1hcCgodmFsOiBhbnkpID0+IHZhbCArICdweCcpXHJcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XHJcbiAgICAgICAgICB0aGlzLnNldEd1dHRlcihndXR0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRNYXhXaWR0aENvbHModG90YWxDb2xzOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLm5neFNwYW4gPT09IDApIHtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gKE51bWJlcih0aGlzLm5neFNwYW4pIC8gdG90YWxDb2xzKSAqIDEwMDtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ2Rpc3BsYXknLFxyXG4gICAgICAgICdibG9jaydcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ21heC13aWR0aCcsXHJcbiAgICAgICAgYCR7bWF4V2lkdGh9JWBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgJ2ZsZXgnLFxyXG4gICAgICAgIGAwIDAgJHttYXhXaWR0aH0lYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0R3V0dGVyKGd1dHRlcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZShcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdtYXJnaW4nLFxyXG4gICAgICBgJHtndXR0ZXJ9YFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19