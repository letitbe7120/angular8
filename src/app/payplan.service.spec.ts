import { TestBed } from '@angular/core/testing';

import { PayplanService } from './payplan.service';

describe('PayplanService', () => {
  let service: PayplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
