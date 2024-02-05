import { Injectable, } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxDialog {
    constructor(resolver, injector) {
        this.resolver = resolver;
        this.injector = injector;
        this.ngxDialogId = -1;
    }
    open(component, data, style) {
        const componentFactory = this.resolver.resolveComponentFactory(component);
        const componentRef = componentFactory.create(this.injector);
        const backdrop = document.createElement('div');
        backdrop.setAttribute('id', `ngx-overlay-${++this.ngxDialogId}`);
        backdrop.classList.add('ngx-global-backdrop');
        backdrop.classList.add('ngx-global-overlay-wrapper');
        const overlayPane = document.createElement('div');
        overlayPane.classList.add('ngx-overlay-pane');
        const componentElement = componentRef.hostView
            .rootNodes[0];
        overlayPane.appendChild(componentElement);
        backdrop.appendChild(overlayPane);
        document.body.appendChild(backdrop);
        if (style) {
            this.setStyle(overlayPane, style);
        }
        return componentRef;
    }
    setStyle(overlayPane, style) {
        if (style?.width) {
            overlayPane.style.width = style.width;
        }
        if (style?.height) {
            overlayPane.style.height = style.height;
        }
    }
    closeAll() {
        document.getElementById(`ngx-overlay-${this.ngxDialogId}`)?.remove();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxDialog, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxDialog, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxDialog, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWFnbGUvZGlhbG9nL3NlcnZpY2UvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFVBQVUsR0FHWCxNQUFNLGVBQWUsQ0FBQzs7QUFVdkIsTUFBTSxPQUFPLFNBQVM7SUFHcEIsWUFDVSxRQUFrQyxFQUNsQyxRQUFrQjtRQURsQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSjVCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFLZCxDQUFDO0lBRUosSUFBSSxDQUFDLFNBQW9CLEVBQUUsSUFBVSxFQUFFLEtBQWU7UUFDcEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFFLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDakUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM5QyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRXJELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU5QyxNQUFNLGdCQUFnQixHQUFJLFlBQVksQ0FBQyxRQUFnQjthQUNwRCxTQUFTLENBQUMsQ0FBQyxDQUFnQixDQUFDO1FBRS9CLFdBQVcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQTJCLEVBQUUsS0FBYztRQUNsRCxJQUFJLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDaEIsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUN2QztRQUNELElBQUksS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUNqQixXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDdkUsQ0FBQzsrR0EzQ1UsU0FBUzttSEFBVCxTQUFTLGNBRlIsTUFBTTs7NEZBRVAsU0FBUztrQkFIckIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBJbmplY3RhYmxlLFxyXG4gIEluamVjdG9yLFxyXG4gIFR5cGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOZ1N0eWxlID0ge1xyXG4gIHdpZHRoPzogc3RyaW5nO1xyXG4gIGhlaWdodD86IHN0cmluZztcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEaWFsb2cge1xyXG4gIG5neERpYWxvZ0lkID0gLTE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcclxuICApIHt9XHJcblxyXG4gIG9wZW4oY29tcG9uZW50OiBUeXBlPGFueT4sIGRhdGE/OiBhbnksIHN0eWxlPzogTmdTdHlsZSkge1xyXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG5cclxuICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYWNrZHJvcC5zZXRBdHRyaWJ1dGUoJ2lkJywgYG5neC1vdmVybGF5LSR7Kyt0aGlzLm5neERpYWxvZ0lkfWApO1xyXG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnbmd4LWdsb2JhbC1iYWNrZHJvcCcpO1xyXG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnbmd4LWdsb2JhbC1vdmVybGF5LXdyYXBwZXInKTtcclxuXHJcbiAgICBjb25zdCBvdmVybGF5UGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3ZlcmxheVBhbmUuY2xhc3NMaXN0LmFkZCgnbmd4LW92ZXJsYXktcGFuZScpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudEVsZW1lbnQgPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIGFueSlcclxuICAgICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBvdmVybGF5UGFuZS5hcHBlbmRDaGlsZChjb21wb25lbnRFbGVtZW50KTtcclxuICAgIGJhY2tkcm9wLmFwcGVuZENoaWxkKG92ZXJsYXlQYW5lKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFja2Ryb3ApO1xyXG4gICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3R5bGUob3ZlcmxheVBhbmUsIHN0eWxlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb21wb25lbnRSZWY7XHJcbiAgfVxyXG5cclxuICBzZXRTdHlsZShvdmVybGF5UGFuZTogSFRNTERpdkVsZW1lbnQsIHN0eWxlOiBOZ1N0eWxlKSB7XHJcbiAgICBpZiAoc3R5bGU/LndpZHRoKSB7XHJcbiAgICAgIG92ZXJsYXlQYW5lLnN0eWxlLndpZHRoID0gc3R5bGUud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAoc3R5bGU/LmhlaWdodCkge1xyXG4gICAgICBvdmVybGF5UGFuZS5zdHlsZS5oZWlnaHQgPSBzdHlsZS5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZUFsbCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBuZ3gtb3ZlcmxheS0ke3RoaXMubmd4RGlhbG9nSWR9YCk/LnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=