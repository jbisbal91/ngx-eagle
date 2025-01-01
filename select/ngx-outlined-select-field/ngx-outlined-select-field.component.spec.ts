import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOutlinedSelectFieldComponent } from './ngx-outlined-select-field.component';

describe('NgxOutlinedSelectFieldComponent', () => {
  let component: NgxOutlinedSelectFieldComponent;
  let fixture: ComponentFixture<NgxOutlinedSelectFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxOutlinedSelectFieldComponent]
    });
    fixture = TestBed.createComponent(NgxOutlinedSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
