import { Component, HostListener, Input, Optional, Self, ViewChild, booleanAttribute, } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const ngxSizeMap = {
    small: '2.5rem',
    medium: '3rem',
    large: '3.5rem',
};
const ngxRoundedOutlinedMap = {
    small: '2px',
    medium: '4px',
    large: '6px',
};
const ngxRoundedfilledMap = {
    small: '2px 2px 0px 0px',
    medium: '4px 4px 0px 0px',
    large: '6px 6px 0px 0px',
};
const ngxRoundedOptContMap = {
    small: '0px 0px 2px 2px',
    medium: '0px 0px 4px 4px',
    large: '0px 0px 6px 6px',
};
export class SelectComponent {
    constructor(elementRef, cdr, ngControl) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.ngControl = ngControl;
        this.ngxSize = 'medium';
        this.ngxRounded = 'medium';
        this.ngxFillMode = 'filled';
        this.label = '';
        this.placeholder = '';
        this.autocomplete = false;
        this.containerRef$ = new ReplaySubject();
        this.inputRef$ = new ReplaySubject();
        this.onChange = () => { };
        this.onTouched = () => { };
        this.valStatus = true;
        this.disabled = false;
        this.inputFocus = false;
        this.isOpenDropdown = false;
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    ngAfterViewInit() {
        this.initialize();
        //Se lanza el evento cuando se esta haciendo focus en el input
        this.inputRef.nativeElement.addEventListener('focus', () => {
            this.inputFocus = true;
            this.moveLabel();
        });
        //Se lanza el evento cuando se desenfoca del input
        this.inputRef.nativeElement.addEventListener('blur', () => {
            this.inputFocus = false;
            if (!this.isOpenDropdown) {
                this.moveLabel();
            }
            this.validate();
        });
    }
    openDropdown(isOpenDropdown) {
        setTimeout(() => {
            if (isOpenDropdown) {
                this.isOpenDropdown = this.isOpenDropdown ? false : true;
            }
            else {
                this.isOpenDropdown = isOpenDropdown;
            }
            if (this.optContRef) {
                this.optContRef.nativeElement.style.borderRadius =
                    ngxRoundedOptContMap[this.ngxRounded];
            }
            if (this.ngxFillMode === 'outlined') {
                this.containerRef.nativeElement.style.borderRadius = this.isOpenDropdown
                    ? ngxRoundedfilledMap[this.ngxRounded]
                    : ngxRoundedOutlinedMap[this.ngxRounded];
            }
        }, 100);
    }
    clickout(event) {
        this.openDropdown(this.selectRef.nativeElement.contains(event.target));
        this.value = this.inputRef.nativeElement.value; // se actualiza el valor dependiendo del valor que fue selecionado en el dropdown
        this.moveLabel();
    }
    ngOnChanges() {
        this.initialize();
        this.moveArrow();
        this.cdr.markForCheck();
    }
    initialize() {
        setTimeout(() => {
            this.ngControl.control?.setValue(this.value);
            this.containerRef.nativeElement.style.height = ngxSizeMap[this.ngxSize];
            this.containerRef$.next(this.containerRef);
            this.inputRef$.next(this.inputRef);
            this.containerRef.nativeElement.style.borderRadius =
                this.ngxFillMode === 'outlined'
                    ? ngxRoundedOutlinedMap[this.ngxRounded]
                    : ngxRoundedfilledMap[this.ngxRounded];
            this.labelRef.nativeElement.style.position = 'absolute';
            this.moveLabel();
            this.moveArrow();
        });
    }
    writeValue(value) {
        this.value = value;
        this.moveLabel();
        this.onChange(this.value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    moveLabel() {
        if (this.labelRef) {
            const containerHeight = this.containerRef.nativeElement.offsetHeight;
            if (this.inputFocus || this.value !== '') {
                const top = this.ngxFillMode === 'outlined' ? '-0.375rem ' : '0px';
                this.labelRef.nativeElement.style.top = top;
                this.labelRef.nativeElement.style.fontSize = '0.75rem';
                this.inputRef.nativeElement.placeholder = this.placeholder;
                this.buildBorderOutlined();
            }
            else {
                const top = `${(containerHeight * 0.333) / 16}rem`;
                this.labelRef.nativeElement.style.top = top;
                this.labelRef.nativeElement.style.fontSize = '1rem';
                this.inputRef.nativeElement.placeholder = '';
                this.drawLineTopBorder();
            }
        }
    }
    moveArrow() {
        if (this.arrowRef) {
            const containerHeight = this.containerRef.nativeElement.offsetHeight;
            const marginTop = `${(containerHeight * 0.282) / 16}rem`;
            this.arrowRef.nativeElement.style.marginTop = marginTop;
        }
    }
    onInputChange(event) {
        this.value = event.target.value;
        this.ngControl.control?.setValue(this.value);
        this.validate();
        this.buildBorderOutlined();
    }
    buildBorderOutlined() {
        if (this.ngxFillMode === 'outlined') {
            const formFieldWidth = this.containerRef.nativeElement.offsetWidth;
            const labelWidth = this.labelRef.nativeElement.offsetWidth;
            const percent = ((labelWidth + 10) / formFieldWidth) * 100;
            let color = this.valStatus // validacion
                ? this.inputFocus // si esta el input con el focus activo coloca el color que le corresponde
                    ? 'var(--ngx-comp-form-field-filled-border-color)'
                    : 'currentColor'
                : '#F44336';
            const background = `linear-gradient(to right, ${color} 5px, transparent 5px, transparent ${percent}%, ${color} ${percent}%) no-repeat top/100% 1px`;
            const borderColor = `transparent ${color} ${color}`;
            this.containerRef.nativeElement.style.borderColor = borderColor;
            this.containerRef.nativeElement.style.background = background;
        }
    }
    drawLineTopBorder() {
        const background = this.ngxFillMode === 'outlined'
            ? 'linear-gradient(to right, transparent 0%, currentColor 0%) no-repeat top/100% 1px'
            : 'none';
        const borderColor = `transparent currentColor currentColor`;
        this.containerRef.nativeElement.style.borderColor = borderColor;
        this.containerRef.nativeElement.style.background = background;
    }
    validate() {
        this.valStatus =
            this.ngControl.status?.toLowerCase() === 'valid' ? true : false;
        this.containerRef.nativeElement.style.color = this.valStatus
            ? 'currentColor'
            : '#F44336';
        this.inputRef.nativeElement.style.color = this.valStatus
            ? 'var(--ngx-comp-form-field-filled-border-color)'
            : '#F44336';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.12", type: SelectComponent, isStandalone: true, selector: "ngx-select", inputs: { ngxSize: "ngxSize", ngxRounded: "ngxRounded", ngxFillMode: "ngxFillMode", label: "label", placeholder: "placeholder", autocomplete: ["autocomplete", "autocomplete", booleanAttribute] }, host: { listeners: { "document:mousedown": "clickout($event)" } }, viewQueries: [{ propertyName: "selectRef", first: true, predicate: ["field_form_select"], descendants: true }, { propertyName: "containerRef", first: true, predicate: ["select_container"], descendants: true }, { propertyName: "labelRef", first: true, predicate: ["select_label"], descendants: true }, { propertyName: "inputRef", first: true, predicate: ["select_input"], descendants: true }, { propertyName: "arrowRef", first: true, predicate: ["select_arrow"], descendants: true }, { propertyName: "optContRef", first: true, predicate: ["option_container"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <div class="ngx-field-form-select" #field_form_select>
      <div
        #select_container
        class="ngx-select"
        [class.ngx-select-filled]="ngxFillMode === 'filled'"
        [class.ngx-select-outlined]="ngxFillMode === 'outlined'"
      >
        <label #select_label class="ngx-select-label">{{ label }}</label>
        <input
          #select_input
          class="ngx-select-input"
          [placeholder]="placeholder"
          [value]="value"
          [disabled]="disabled"
          [readonly]="!autocomplete"
          (input)="onInputChange($event)"
        />
        <span class="ngx-select-arrow">
          <svg
            #select_arrow
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M7 10L12 15L17 10H7Z" fill="black" />
          </svg>
        </span>
      </div>
      <div
        *ngIf="isOpenDropdown && !disabled"
        #option_container
        class="ngx-option-container"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-select',
                    template: `
    <div class="ngx-field-form-select" #field_form_select>
      <div
        #select_container
        class="ngx-select"
        [class.ngx-select-filled]="ngxFillMode === 'filled'"
        [class.ngx-select-outlined]="ngxFillMode === 'outlined'"
      >
        <label #select_label class="ngx-select-label">{{ label }}</label>
        <input
          #select_input
          class="ngx-select-input"
          [placeholder]="placeholder"
          [value]="value"
          [disabled]="disabled"
          [readonly]="!autocomplete"
          (input)="onInputChange($event)"
        />
        <span class="ngx-select-arrow">
          <svg
            #select_arrow
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M7 10L12 15L17 10H7Z" fill="black" />
          </svg>
        </span>
      </div>
      <div
        *ngIf="isOpenDropdown && !disabled"
        #option_container
        class="ngx-option-container"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
                    standalone: true,
                    imports: [NgIf],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { ngxSize: [{
                type: Input
            }], ngxRounded: [{
                type: Input
            }], ngxFillMode: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], autocomplete: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], selectRef: [{
                type: ViewChild,
                args: ['field_form_select']
            }], containerRef: [{
                type: ViewChild,
                args: ['select_container']
            }], labelRef: [{
                type: ViewChild,
                args: ['select_label']
            }], inputRef: [{
                type: ViewChild,
                args: ['select_input']
            }], arrowRef: [{
                type: ViewChild,
                args: ['select_arrow']
            }], optContRef: [{
                type: ViewChild,
                args: ['option_container']
            }], clickout: [{
                type: HostListener,
                args: ['document:mousedown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lYWdsZS9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFFckMsTUFBTSxVQUFVLEdBQUc7SUFDakIsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsTUFBTTtJQUNkLEtBQUssRUFBRSxRQUFRO0NBQ2hCLENBQUM7QUFFRixNQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxLQUFLO0lBQ1osTUFBTSxFQUFFLEtBQUs7SUFDYixLQUFLLEVBQUUsS0FBSztDQUNiLENBQUM7QUFFRixNQUFNLG1CQUFtQixHQUFHO0lBQzFCLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsTUFBTSxFQUFFLGlCQUFpQjtJQUN6QixLQUFLLEVBQUUsaUJBQWlCO0NBQ3pCLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHO0lBQzNCLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsTUFBTSxFQUFFLGlCQUFpQjtJQUN6QixLQUFLLEVBQUUsaUJBQWlCO0NBQ3pCLENBQUM7QUErQ0YsTUFBTSxPQUFPLGVBQWU7SUE2QjFCLFlBQ1MsVUFBc0IsRUFDckIsR0FBc0IsRUFDSCxTQUFvQjtRQUZ4QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ0gsY0FBUyxHQUFULFNBQVMsQ0FBVztRQTdCeEMsWUFBTyxHQUFZLFFBQVEsQ0FBQztR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QUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPcHRpb25hbCxcclxuICBTZWxmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBib29sZWFuQXR0cmlidXRlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hGaWxsTW9kZSwgTmd4Um91bmRlZCwgTmd4U2l6ZSB9IGZyb20gJy4vdHlwaW5ncyc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5jb25zdCBuZ3hTaXplTWFwID0ge1xyXG4gIHNtYWxsOiAnMi41cmVtJyxcclxuICBtZWRpdW06ICczcmVtJyxcclxuICBsYXJnZTogJzMuNXJlbScsXHJcbn07XHJcblxyXG5jb25zdCBuZ3hSb3VuZGVkT3V0bGluZWRNYXAgPSB7XHJcbiAgc21hbGw6ICcycHgnLFxyXG4gIG1lZGl1bTogJzRweCcsXHJcbiAgbGFyZ2U6ICc2cHgnLFxyXG59O1xyXG5cclxuY29uc3Qgbmd4Um91bmRlZGZpbGxlZE1hcCA9IHtcclxuICBzbWFsbDogJzJweCAycHggMHB4IDBweCcsXHJcbiAgbWVkaXVtOiAnNHB4IDRweCAwcHggMHB4JyxcclxuICBsYXJnZTogJzZweCA2cHggMHB4IDBweCcsXHJcbn07XHJcblxyXG5jb25zdCBuZ3hSb3VuZGVkT3B0Q29udE1hcCA9IHtcclxuICBzbWFsbDogJzBweCAwcHggMnB4IDJweCcsXHJcbiAgbWVkaXVtOiAnMHB4IDBweCA0cHggNHB4JyxcclxuICBsYXJnZTogJzBweCAwcHggNnB4IDZweCcsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWZpZWxkLWZvcm0tc2VsZWN0XCIgI2ZpZWxkX2Zvcm1fc2VsZWN0PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgI3NlbGVjdF9jb250YWluZXJcclxuICAgICAgICBjbGFzcz1cIm5neC1zZWxlY3RcIlxyXG4gICAgICAgIFtjbGFzcy5uZ3gtc2VsZWN0LWZpbGxlZF09XCJuZ3hGaWxsTW9kZSA9PT0gJ2ZpbGxlZCdcIlxyXG4gICAgICAgIFtjbGFzcy5uZ3gtc2VsZWN0LW91dGxpbmVkXT1cIm5neEZpbGxNb2RlID09PSAnb3V0bGluZWQnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxsYWJlbCAjc2VsZWN0X2xhYmVsIGNsYXNzPVwibmd4LXNlbGVjdC1sYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICNzZWxlY3RfaW5wdXRcclxuICAgICAgICAgIGNsYXNzPVwibmd4LXNlbGVjdC1pbnB1dFwiXHJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICBbcmVhZG9ubHldPVwiIWF1dG9jb21wbGV0ZVwiXHJcbiAgICAgICAgICAoaW5wdXQpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmd4LXNlbGVjdC1hcnJvd1wiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAjc2VsZWN0X2Fycm93XHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTcgMTBMMTIgMTVMMTcgMTBIN1pcIiBmaWxsPVwiYmxhY2tcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgICpuZ0lmPVwiaXNPcGVuRHJvcGRvd24gJiYgIWRpc2FibGVkXCJcclxuICAgICAgICAjb3B0aW9uX2NvbnRhaW5lclxyXG4gICAgICAgIGNsYXNzPVwibmd4LW9wdGlvbi1jb250YWluZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmdJZl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXNcclxue1xyXG4gIEBJbnB1dCgpIG5neFNpemU6IE5neFNpemUgPSAnbWVkaXVtJztcclxuICBASW5wdXQoKSBuZ3hSb3VuZGVkOiBOZ3hSb3VuZGVkID0gJ21lZGl1bSc7XHJcbiAgQElucHV0KCkgbmd4RmlsbE1vZGU6IE5neEZpbGxNb2RlID0gJ2ZpbGxlZCc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYXV0b2NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpZWxkX2Zvcm1fc2VsZWN0Jykgc2VsZWN0UmVmITogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdzZWxlY3RfY29udGFpbmVyJykgY29udGFpbmVyUmVmITogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdzZWxlY3RfbGFiZWwnKSBsYWJlbFJlZiE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnc2VsZWN0X2lucHV0JykgaW5wdXRSZWYhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdF9hcnJvdycpIGFycm93UmVmITogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdvcHRpb25fY29udGFpbmVyJykgb3B0Q29udFJlZiE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHJlYWRvbmx5IGNvbnRhaW5lclJlZiQgPSBuZXcgUmVwbGF5U3ViamVjdDxFbGVtZW50UmVmPigpO1xyXG4gIHJlYWRvbmx5IGlucHV0UmVmJCA9IG5ldyBSZXBsYXlTdWJqZWN0PEVsZW1lbnRSZWY+KCk7XHJcblxyXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7fTtcclxuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHt9O1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgdmFsU3RhdHVzOiBib29sZWFuID0gdHJ1ZTtcclxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlucHV0Rm9jdXMgPSBmYWxzZTtcclxuXHJcbiAgaXNPcGVuRHJvcGRvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIC8vU2UgbGFuemEgZWwgZXZlbnRvIGN1YW5kbyBzZSBlc3RhIGhhY2llbmRvIGZvY3VzIGVuIGVsIGlucHV0XHJcbiAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5wdXRGb2N1cyA9IHRydWU7XHJcbiAgICAgIHRoaXMubW92ZUxhYmVsKCk7XHJcbiAgICB9KTtcclxuICAgIC8vU2UgbGFuemEgZWwgZXZlbnRvIGN1YW5kbyBzZSBkZXNlbmZvY2EgZGVsIGlucHV0XHJcbiAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgdGhpcy5pbnB1dEZvY3VzID0gZmFsc2U7XHJcbiAgICAgIGlmICghdGhpcy5pc09wZW5Ecm9wZG93bikge1xyXG4gICAgICAgIHRoaXMubW92ZUxhYmVsKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuRHJvcGRvd24oaXNPcGVuRHJvcGRvd246IGJvb2xlYW4pIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoaXNPcGVuRHJvcGRvd24pIHtcclxuICAgICAgICB0aGlzLmlzT3BlbkRyb3Bkb3duID0gdGhpcy5pc09wZW5Ecm9wZG93biA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzT3BlbkRyb3Bkb3duID0gaXNPcGVuRHJvcGRvd247XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMub3B0Q29udFJlZikge1xyXG4gICAgICAgIHRoaXMub3B0Q29udFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9XHJcbiAgICAgICAgICBuZ3hSb3VuZGVkT3B0Q29udE1hcFt0aGlzLm5neFJvdW5kZWRdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm5neEZpbGxNb2RlID09PSAnb3V0bGluZWQnKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSB0aGlzLmlzT3BlbkRyb3Bkb3duXHJcbiAgICAgICAgICA/IG5neFJvdW5kZWRmaWxsZWRNYXBbdGhpcy5uZ3hSb3VuZGVkXVxyXG4gICAgICAgICAgOiBuZ3hSb3VuZGVkT3V0bGluZWRNYXBbdGhpcy5uZ3hSb3VuZGVkXTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgY2xpY2tvdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vcGVuRHJvcGRvd24odGhpcy5zZWxlY3RSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKTtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWU7IC8vIHNlIGFjdHVhbGl6YSBlbCB2YWxvciBkZXBlbmRpZW5kbyBkZWwgdmFsb3IgcXVlIGZ1ZSBzZWxlY2lvbmFkbyBlbiBlbCBkcm9wZG93blxyXG4gICAgdGhpcy5tb3ZlTGFiZWwoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB0aGlzLm1vdmVBcnJvdygpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2w/LnNldFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IG5neFNpemVNYXBbdGhpcy5uZ3hTaXplXTtcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYkLm5leHQodGhpcy5jb250YWluZXJSZWYpO1xyXG4gICAgICB0aGlzLmlucHV0UmVmJC5uZXh0KHRoaXMuaW5wdXRSZWYpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9XHJcbiAgICAgICAgdGhpcy5uZ3hGaWxsTW9kZSA9PT0gJ291dGxpbmVkJ1xyXG4gICAgICAgICAgPyBuZ3hSb3VuZGVkT3V0bGluZWRNYXBbdGhpcy5uZ3hSb3VuZGVkXVxyXG4gICAgICAgICAgOiBuZ3hSb3VuZGVkZmlsbGVkTWFwW3RoaXMubmd4Um91bmRlZF07XHJcbiAgICAgIHRoaXMubGFiZWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgIHRoaXMubW92ZUxhYmVsKCk7XHJcbiAgICAgIHRoaXMubW92ZUFycm93KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5tb3ZlTGFiZWwoKTtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIG1vdmVMYWJlbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMuY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBpZiAodGhpcy5pbnB1dEZvY3VzIHx8IHRoaXMudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5uZ3hGaWxsTW9kZSA9PT0gJ291dGxpbmVkJyA/ICctMC4zNzVyZW0gJyA6ICcwcHgnO1xyXG4gICAgICAgIHRoaXMubGFiZWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB0b3A7XHJcbiAgICAgICAgdGhpcy5sYWJlbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzAuNzVyZW0nO1xyXG4gICAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XHJcbiAgICAgICAgdGhpcy5idWlsZEJvcmRlck91dGxpbmVkKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdG9wID0gYCR7KGNvbnRhaW5lckhlaWdodCAqIDAuMzMzKSAvIDE2fXJlbWA7XHJcbiAgICAgICAgdGhpcy5sYWJlbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHRvcDtcclxuICAgICAgICB0aGlzLmxhYmVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMXJlbSc7XHJcbiAgICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID0gJyc7XHJcbiAgICAgICAgdGhpcy5kcmF3TGluZVRvcEJvcmRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlQXJyb3coKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hcnJvd1JlZikge1xyXG4gICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgY29uc3QgbWFyZ2luVG9wID0gYCR7KGNvbnRhaW5lckhlaWdodCAqIDAuMjgyKSAvIDE2fXJlbWA7XHJcbiAgICAgIHRoaXMuYXJyb3dSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sPy5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIHRoaXMuYnVpbGRCb3JkZXJPdXRsaW5lZCgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRCb3JkZXJPdXRsaW5lZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm5neEZpbGxNb2RlID09PSAnb3V0bGluZWQnKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1GaWVsZFdpZHRoID0gdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMubGFiZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgY29uc3QgcGVyY2VudCA9ICgobGFiZWxXaWR0aCArIDEwKSAvIGZvcm1GaWVsZFdpZHRoKSAqIDEwMDtcclxuICAgICAgbGV0IGNvbG9yID0gdGhpcy52YWxTdGF0dXMgLy8gdmFsaWRhY2lvblxyXG4gICAgICAgID8gdGhpcy5pbnB1dEZvY3VzIC8vIHNpIGVzdGEgZWwgaW5wdXQgY29uIGVsIGZvY3VzIGFjdGl2byBjb2xvY2EgZWwgY29sb3IgcXVlIGxlIGNvcnJlc3BvbmRlXHJcbiAgICAgICAgICA/ICd2YXIoLS1uZ3gtY29tcC1mb3JtLWZpZWxkLWZpbGxlZC1ib3JkZXItY29sb3IpJ1xyXG4gICAgICAgICAgOiAnY3VycmVudENvbG9yJ1xyXG4gICAgICAgIDogJyNGNDQzMzYnO1xyXG4gICAgICBjb25zdCBiYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtjb2xvcn0gNXB4LCB0cmFuc3BhcmVudCA1cHgsIHRyYW5zcGFyZW50ICR7cGVyY2VudH0lLCAke2NvbG9yfSAke3BlcmNlbnR9JSkgbm8tcmVwZWF0IHRvcC8xMDAlIDFweGA7XHJcbiAgICAgIGNvbnN0IGJvcmRlckNvbG9yID0gYHRyYW5zcGFyZW50ICR7Y29sb3J9ICR7Y29sb3J9YDtcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd0xpbmVUb3BCb3JkZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID1cclxuICAgICAgdGhpcy5uZ3hGaWxsTW9kZSA9PT0gJ291dGxpbmVkJ1xyXG4gICAgICAgID8gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCUsIGN1cnJlbnRDb2xvciAwJSkgbm8tcmVwZWF0IHRvcC8xMDAlIDFweCdcclxuICAgICAgICA6ICdub25lJztcclxuICAgIGNvbnN0IGJvcmRlckNvbG9yID0gYHRyYW5zcGFyZW50IGN1cnJlbnRDb2xvciBjdXJyZW50Q29sb3JgO1xyXG4gICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yO1xyXG4gICAgdGhpcy5jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKCkge1xyXG4gICAgdGhpcy52YWxTdGF0dXMgPVxyXG4gICAgICB0aGlzLm5nQ29udHJvbC5zdGF0dXM/LnRvTG93ZXJDYXNlKCkgPT09ICd2YWxpZCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB0aGlzLmNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy52YWxTdGF0dXNcclxuICAgICAgPyAnY3VycmVudENvbG9yJ1xyXG4gICAgICA6ICcjRjQ0MzM2JztcclxuXHJcbiAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLnZhbFN0YXR1c1xyXG4gICAgICA/ICd2YXIoLS1uZ3gtY29tcC1mb3JtLWZpZWxkLWZpbGxlZC1ib3JkZXItY29sb3IpJ1xyXG4gICAgICA6ICcjRjQ0MzM2JztcclxuICB9XHJcbn1cclxuIl19