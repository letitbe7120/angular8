import { TestBed } from '@angular/core/testing';

import { LoanvendorService } from './loanvendor.service';

describe('LoanvendorService', () => {
  let service: LoanvendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanvendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
