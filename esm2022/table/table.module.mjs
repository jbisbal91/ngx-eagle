import { NgModule } from '@angular/core';
import { TableDirective } from './table/table.directive';
import { ColumnGroupDirective } from './table/column-group.directive';
import { SortDirective } from './table/sort.directive';
import { ResizeDirective } from './table/resize.directive';
import * as i0 from "@angular/core";
export class TableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TableModule, imports: [TableDirective,
            ColumnGroupDirective,
            SortDirective,
            ResizeDirective], exports: [TableDirective,
            ColumnGroupDirective,
            SortDirective,
            ResizeDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [
                        TableDirective,
                        ColumnGroupDirective,
                        SortDirective,
                        ResizeDirective,
                    ],
                    imports: [
                        TableDirective,
                        ColumnGroupDirective,
                        SortDirective,
                        ResizeDirective,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbmd4LWVhZ2xlL3RhYmxlL3RhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQWdCM0QsTUFBTSxPQUFPLFdBQVc7K0dBQVgsV0FBVztnSEFBWCxXQUFXLFlBTnBCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsYUFBYTtZQUNiLGVBQWUsYUFUZixjQUFjO1lBQ2Qsb0JBQW9CO1lBQ3BCLGFBQWE7WUFDYixlQUFlO2dIQVNOLFdBQVc7OzRGQUFYLFdBQVc7a0JBZHZCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixhQUFhO3dCQUNiLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsYUFBYTt3QkFDYixlQUFlO3FCQUNoQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS90YWJsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb2x1bW5Hcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUvY29sdW1uLWdyb3VwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNvcnREaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlL3NvcnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUmVzaXplRGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS9yZXNpemUuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW1xyXG4gICAgVGFibGVEaXJlY3RpdmUsXHJcbiAgICBDb2x1bW5Hcm91cERpcmVjdGl2ZSxcclxuICAgIFNvcnREaXJlY3RpdmUsXHJcbiAgICBSZXNpemVEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBUYWJsZURpcmVjdGl2ZSxcclxuICAgIENvbHVtbkdyb3VwRGlyZWN0aXZlLFxyXG4gICAgU29ydERpcmVjdGl2ZSxcclxuICAgIFJlc2l6ZURpcmVjdGl2ZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUge31cclxuIl19