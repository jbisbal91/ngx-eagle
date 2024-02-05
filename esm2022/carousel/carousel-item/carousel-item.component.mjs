import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CarouselItemComponent {
    constructor() {
        this.id = '';
        this.isActive = false;
        this.disabled = false;
    }
    ngOnInit() {
        this.id = this.guid();
    }
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CarouselItemComponent, isStandalone: true, selector: "ngx-carousel-item", inputs: { disabled: "disabled" }, host: { classAttribute: "ngx-carousel-item" }, ngImport: i0, template: `
    <div class="ngx-carousel-item" [id]="id">
      <ng-content></ng-content>
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CarouselItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-carousel-item',
                    template: `
    <div class="ngx-carousel-item" [id]="id">
      <ng-content></ng-content>
    </div>
  `,
                    host: {
                        class: 'ngx-carousel-item',
                    },
                    standalone: true,
                }]
        }], propDecorators: { disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWFnbGUvY2Fyb3VzZWwvY2Fyb3VzZWwtaXRlbS9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFlekQsTUFBTSxPQUFPLHFCQUFxQjtJQVpsQztRQWFTLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN4QixhQUFRLEdBQVksS0FBSyxDQUFDO0tBZ0JwQztJQWRDLFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSTtRQUNGLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUNuRCxPQUFPLEVBQ1AsVUFBVSxDQUFDO1lBQ1QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNoQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDckMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzsrR0FsQlUscUJBQXFCO21HQUFyQixxQkFBcUIsOEpBVnRCOzs7O0dBSVQ7OzRGQU1VLHFCQUFxQjtrQkFaakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLG1CQUFtQjtxQkFDM0I7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUlVLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICcuLi9jYXJvdXNlbC5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtY2Fyb3VzZWwtaXRlbScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtY2Fyb3VzZWwtaXRlbVwiIFtpZF09XCJpZFwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbmd4LWNhcm91c2VsLWl0ZW0nLFxyXG4gIH0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIENhcm91c2VsLCBPbkluaXQge1xyXG4gIHB1YmxpYyBpZDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5ndWlkKCk7XHJcbiAgfVxyXG5cclxuICBndWlkKCkge1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoXHJcbiAgICAgIC9beHldL2csXHJcbiAgICAgIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMCxcclxuICAgICAgICAgIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XHJcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=