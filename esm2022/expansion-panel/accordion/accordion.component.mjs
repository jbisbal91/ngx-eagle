import { ChangeDetectionStrategy, Component, ContentChildren, Input, booleanAttribute, } from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export class AccordionComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.multi = false;
        this.ngxColor = '';
        this.ngxExpandIconPosition = 'left';
        this.ngxType = 'default';
        this.subscription = new Subscription();
    }
    ngOnChanges() {
        setTimeout(() => {
            this.setProp();
        });
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.expansionPanels.last.lastExP = true;
        setTimeout(() => {
            this.setProp();
        });
    }
    setProp() {
        if (this.expansionPanels) {
            this.expansionPanels.forEach((exPanel) => {
                exPanel.ngxColor = this.ngxColor;
                exPanel.ngxType = this.ngxType;
                exPanel.ngxExpandIconPosition = this.ngxExpandIconPosition;
            });
        }
    }
    ngAfterContentInit() {
        this.expansionPanels.forEach((ep) => {
            this.subscription.add(ep.ngxActiveChange.subscribe((value) => {
                this.expand(value);
            }));
        });
    }
    expand(component) {
        this.expansionPanels.forEach((ep) => {
            if (ep.id === component.id) {
                ep.expanded = !ep.expanded;
            }
            else {
                if (!this.multi) {
                    ep.expanded = false;
                }
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: AccordionComponent, isStandalone: true, selector: "ngx-accordion", inputs: { multi: ["multi", "multi", booleanAttribute], ngxColor: "ngxColor", ngxExpandIconPosition: "ngxExpandIconPosition", ngxType: "ngxType" }, queries: [{ propertyName: "expansionPanels", predicate: ExpansionPanelComponent }], usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-accordion',
                    template: `<ng-content></ng-content>`,
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { multi: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ngxColor: [{
                type: Input
            }], ngxExpandIconPosition: [{
                type: Input
            }], ngxType: [{
                type: Input
            }], expansionPanels: [{
                type: ContentChildren,
                args: [ExpansionPanelComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25neC1lYWdsZS9leHBhbnNpb24tcGFuZWwvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFJTCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFTcEMsTUFBTSxPQUFPLGtCQUFrQjtJQWM3QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVZGLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdEQsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QiwwQkFBcUIsR0FBMEIsTUFBTSxDQUFDO1FBQ3RELFlBQU8sR0FBWSxTQUFTLENBQUM7UUFLOUIsaUJBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVYLENBQUM7SUFFOUMsV0FBVztRQUNULFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDekMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3ZDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDakMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUMvQixPQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzdELENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFjO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDbEMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFCLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNmLEVBQUUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUNyQjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQWhFVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixxRkFJVCxnQkFBZ0IsdUpBS25CLHVCQUF1QixrREFiOUIsMkJBQTJCOzs0RkFJMUIsa0JBQWtCO2tCQU45QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEO3dHQUt5QyxLQUFLO3NCQUE1QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUM3QixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBR0MsZUFBZTtzQkFEckIsZUFBZTt1QkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTmd4RXhwYW5kSWNvblBvc2l0aW9uLCBOZ3hUeXBlIH0gZnJvbSAnLi4vdHlwaW5ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1hY2NvcmRpb24nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3lcclxue1xyXG4gIFxyXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBtdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG5neENvbG9yOiBzdHJpbmcgPSAnJzsgIFxyXG4gIEBJbnB1dCgpIG5neEV4cGFuZEljb25Qb3NpdGlvbjogTmd4RXhwYW5kSWNvblBvc2l0aW9uID0gJ2xlZnQnO1xyXG4gIEBJbnB1dCgpIG5neFR5cGU6IE5neFR5cGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpXHJcbiAgcHVibGljIGV4cGFuc2lvblBhbmVscyE6IFF1ZXJ5TGlzdDxFeHBhbnNpb25QYW5lbENvbXBvbmVudD47XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRQcm9wKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5leHBhbnNpb25QYW5lbHMubGFzdC5sYXN0RXhQID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFByb3AoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvcCgpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuc2lvblBhbmVscykge1xyXG4gICAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChleFBhbmVsKSA9PiB7XHJcbiAgICAgICAgZXhQYW5lbC5uZ3hDb2xvciA9IHRoaXMubmd4Q29sb3I7XHJcbiAgICAgICAgZXhQYW5lbC5uZ3hUeXBlID0gdGhpcy5uZ3hUeXBlO1xyXG4gICAgICAgIGV4UGFuZWwubmd4RXhwYW5kSWNvblBvc2l0aW9uID0gdGhpcy5uZ3hFeHBhbmRJY29uUG9zaXRpb247XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5leHBhbnNpb25QYW5lbHMuZm9yRWFjaCgoZXApID0+IHtcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxyXG4gICAgICAgIGVwLm5neEFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZCh2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kKGNvbXBvbmVudDogYW55KSB7XHJcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChlcCkgPT4ge1xyXG4gICAgICBpZiAoZXAuaWQgPT09IGNvbXBvbmVudC5pZCkge1xyXG4gICAgICAgIGVwLmV4cGFuZGVkID0gIWVwLmV4cGFuZGVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy5tdWx0aSkge1xyXG4gICAgICAgICAgZXAuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=