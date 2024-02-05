import { Component, ContentChildren, } from '@angular/core';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export class AccordionComponent {
    constructor() {
        this.subscription = new Subscription();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterContentInit() {
        this.expansionPanels.forEach((ep) => {
            this.subscription.add(ep.onClick.subscribe((value) => {
                this.expand(value);
            }));
        });
    }
    expand(component) {
        this.expansionPanels.forEach((ep) => {
            if (ep.id === component.id) {
                ep.expanded = ep.expanded ? false : true;
            }
            else {
                ep.expanded = false;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AccordionComponent, isStandalone: true, selector: "ngx-accordion", queries: [{ propertyName: "expansionPanels", predicate: ExpansionPanelComponent }], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-accordion',
                    template: `<ng-content></ng-content>`,
                    standalone: true
                }]
        }], propDecorators: { expansionPanels: [{
                type: ContentChildren,
                args: [ExpansionPanelComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS9leHBhbnNpb24tcGFuZWwvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEdBR2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBT3BDLE1BQU0sT0FBTyxrQkFBa0I7SUFML0I7UUFTVSxpQkFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBeUJ6RDtJQXZCQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFjO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDbEMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFCLEVBQUUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDckI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBNUJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLHlHQUNaLHVCQUF1Qiw2QkFKOUIsMkJBQTJCOzs0RkFHMUIsa0JBQWtCO2tCQUw5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxVQUFVLEVBQUMsSUFBSTtpQkFDaEI7OEJBR1EsZUFBZTtzQkFEckIsZUFBZTt1QkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgT25EZXN0cm95LFxyXG4gIFF1ZXJ5TGlzdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXhwYW5zaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9leHBhbnNpb24tcGFuZWwvZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtYWNjb3JkaW9uJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIHN0YW5kYWxvbmU6dHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkcmVuKEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KVxyXG4gIHB1YmxpYyBleHBhbnNpb25QYW5lbHMhOiBRdWVyeUxpc3Q8RXhwYW5zaW9uUGFuZWxDb21wb25lbnQ+O1xyXG5cclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChlcCkgPT4ge1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXHJcbiAgICAgICAgZXAub25DbGljay5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZCh2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kKGNvbXBvbmVudDogYW55KSB7XHJcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChlcCkgPT4ge1xyXG4gICAgICBpZiAoZXAuaWQgPT09IGNvbXBvbmVudC5pZCkge1xyXG4gICAgICAgIGVwLmV4cGFuZGVkID0gZXAuZXhwYW5kZWQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXAuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==