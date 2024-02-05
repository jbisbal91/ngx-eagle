import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardActionsComponent } from './components/card-actions/card-actions.component';
import { CardAvatarDirective } from './directives/card-avatar.directive';
import { CardImageDirective } from './directives/card-image.directive';
import * as i0 from "@angular/core";
const components = [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardActionsComponent,
    CardAvatarDirective,
    CardImageDirective,
];
export class CardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardModule, imports: [CardComponent,
            CardHeaderComponent,
            CardContentComponent,
            CardActionsComponent,
            CardAvatarDirective,
            CardImageDirective], exports: [CardComponent,
            CardHeaderComponent,
            CardContentComponent,
            CardActionsComponent,
            CardAvatarDirective,
            CardImageDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [components],
                    exports: [components],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWFnbGUvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFdkUsTUFBTSxVQUFVLEdBQUc7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDbkIsQ0FBQztBQU1GLE1BQU0sT0FBTyxVQUFVOytHQUFWLFVBQVU7Z0hBQVYsVUFBVSxZQVpyQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQixhQUxsQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtnSEFPUCxVQUFVOzs0RkFBVixVQUFVO2tCQUp0QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDckIsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC1oZWFkZXIvY2FyZC1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FyZENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC1jb250ZW50L2NhcmQtY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJkQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkLWFjdGlvbnMvY2FyZC1hY3Rpb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRBdmF0YXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2FyZC1hdmF0YXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ2FyZEltYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NhcmQtaW1hZ2UuZGlyZWN0aXZlJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcbiAgQ2FyZENvbXBvbmVudCxcclxuICBDYXJkSGVhZGVyQ29tcG9uZW50LFxyXG4gIENhcmRDb250ZW50Q29tcG9uZW50LFxyXG4gIENhcmRBY3Rpb25zQ29tcG9uZW50LFxyXG4gIENhcmRBdmF0YXJEaXJlY3RpdmUsXHJcbiAgQ2FyZEltYWdlRGlyZWN0aXZlLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbY29tcG9uZW50c10sXHJcbiAgZXhwb3J0czogW2NvbXBvbmVudHNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZE1vZHVsZSB7fVxyXG4iXX0=