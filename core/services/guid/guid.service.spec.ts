import { TestBed } from '@angular/core/testing';

import { Guid} from './guid.service';

describe('GuidService', () => {
  let service: Guid;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Guid);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
