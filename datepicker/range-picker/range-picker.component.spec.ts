import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangePickerComponent } from './range-picker.component';

describe('RangePickerComponent', () => {
  let component: RangePickerComponent;
  let fixture: ComponentFixture<RangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
