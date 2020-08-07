import { TestBed } from '@angular/core/testing';

import { LoanalertService } from './loanalert.service';

describe('LoanalertService', () => {
  let service: LoanalertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanalertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
