import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class DividerComponent {
    constructor() {
        this.ngxText = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DividerComponent, isStandalone: true, selector: "ngx-divider", inputs: { ngxText: "ngxText" }, host: { classAttribute: "ngx-divider" }, ngImport: i0, template: `
    <ng-container>
      <span *ngIf="ngxText">{{ ngxText }}</span>
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-divider',
                    template: `
    <ng-container>
      <span *ngIf="ngxText">{{ ngxText }}</span>
    </ng-container>
  `,
                    standalone: true,
                    host: {
                        class: 'ngx-divider',
                    },
                    imports: [NgIf],
                }]
        }], propDecorators: { ngxText: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWFnbGUvZGl2aWRlci9kaXZpZGVyL2RpdmlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFldkMsTUFBTSxPQUFPLGdCQUFnQjtJQWI3QjtRQWNXLFlBQU8sR0FBVyxFQUFFLENBQUM7S0FDL0I7K0dBRlksZ0JBQWdCO21HQUFoQixnQkFBZ0IsZ0pBWGpCOzs7O0dBSVQsNERBS1MsSUFBSTs7NEZBRUgsZ0JBQWdCO2tCQWI1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxhQUFhO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7aUJBQ2hCOzhCQUVVLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kaXZpZGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lcj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJuZ3hUZXh0XCI+e3sgbmd4VGV4dCB9fTwvc3Bhbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ25neC1kaXZpZGVyJyxcclxuICB9LFxyXG4gIGltcG9ydHM6IFtOZ0lmXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERpdmlkZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG5neFRleHQ6IHN0cmluZyA9ICcnO1xyXG59XHJcbiJdfQ==