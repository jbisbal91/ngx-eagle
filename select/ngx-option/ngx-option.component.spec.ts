import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOptionComponent } from './ngx-option.component';

describe('NgxOptionComponent', () => {
  let component: NgxOptionComponent;
  let fixture: ComponentFixture<NgxOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxOptionComponent]
    });
    fixture = TestBed.createComponent(NgxOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
