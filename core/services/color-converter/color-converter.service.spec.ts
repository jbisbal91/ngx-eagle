import { TestBed } from '@angular/core/testing';

import { ColorConverter } from './color-converter.service';

describe('ColorConverter', () => {
  let service: ColorConverter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorConverter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
