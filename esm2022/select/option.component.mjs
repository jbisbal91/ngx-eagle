import { Component, Host, Input, Optional, ViewChild, } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./select.component";
export class OptionComponent {
    constructor(selectComponent) {
        this.selectComponent = selectComponent;
        this.value = '';
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.subscription.add(this.selectComponent?.containerRef$.subscribe((containerRef) => {
            const containerWidth = containerRef.nativeElement.offsetWidth;
            const containerHeight = containerRef.nativeElement.offsetHeight - 8;
            this.optionItemRef.nativeElement.style.width = `${containerWidth / 16}rem`;
            this.optionItemRef.nativeElement.style.height = `${containerHeight / 16}rem`;
        }));
        this.subscription.add(this.selectComponent?.inputRef$.subscribe((inputRef) => {
            this.inputRef = inputRef;
        }));
    }
    onClick() {
        this.inputRef.nativeElement.value =
            this.optionItemRef.nativeElement.textContent;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OptionComponent, deps: [{ token: i1.SelectComponent, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: OptionComponent, isStandalone: true, selector: "ngx-option", inputs: { value: "value" }, viewQueries: [{ propertyName: "optionItemRef", first: true, predicate: ["option_item"], descendants: true }], ngImport: i0, template: `
    <div (click)="onClick()" #option_item class="ngx-option">
      <ng-content></ng-content>
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-option',
                    template: `
    <div (click)="onClick()" #option_item class="ngx-option">
      <ng-content></ng-content>
    </div>
  `,
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.SelectComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }]; }, propDecorators: { optionItemRef: [{
                type: ViewChild,
                args: ['option_item']
            }], value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS9zZWxlY3Qvb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFXcEMsTUFBTSxPQUFPLGVBQWU7SUFPMUIsWUFBdUMsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTDlELFVBQUssR0FBVyxFQUFFLENBQUM7UUFHcEIsaUJBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVrQixDQUFDO0lBRTNFLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDN0QsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7WUFDOUQsTUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FDN0MsY0FBYyxHQUFHLEVBQ25CLEtBQUssQ0FBQztZQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FDOUMsZUFBZSxHQUFHLEVBQ3BCLEtBQUssQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSztZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDakQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7K0dBcENVLGVBQWU7bUdBQWYsZUFBZSxnTkFQaEI7Ozs7R0FJVDs7NEZBR1UsZUFBZTtrQkFUM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkFRYyxRQUFROzswQkFBSSxJQUFJOzRDQU5ILGFBQWE7c0JBQXRDLFNBQVM7dUJBQUMsYUFBYTtnQkFDZixLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtb3B0aW9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAoY2xpY2spPVwib25DbGljaygpXCIgI29wdGlvbl9pdGVtIGNsYXNzPVwibmd4LW9wdGlvblwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnb3B0aW9uX2l0ZW0nKSBvcHRpb25JdGVtUmVmITogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIGlucHV0UmVmITogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBzZWxlY3RDb21wb25lbnQ6IFNlbGVjdENvbXBvbmVudCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXHJcbiAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Py5jb250YWluZXJSZWYkLnN1YnNjcmliZSgoY29udGFpbmVyUmVmKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgLSA4O1xyXG4gICAgICAgIHRoaXMub3B0aW9uSXRlbVJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7XHJcbiAgICAgICAgICBjb250YWluZXJXaWR0aCAvIDE2XHJcbiAgICAgICAgfXJlbWA7XHJcbiAgICAgICAgdGhpcy5vcHRpb25JdGVtUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7XHJcbiAgICAgICAgICBjb250YWluZXJIZWlnaHQgLyAxNlxyXG4gICAgICAgIH1yZW1gO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQ/LmlucHV0UmVmJC5zdWJzY3JpYmUoKGlucHV0UmVmKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFJlZiA9IGlucHV0UmVmO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPVxyXG4gICAgICB0aGlzLm9wdGlvbkl0ZW1SZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19