import { TestBed } from '@angular/core/testing';

import { EditloanService } from './editloan.service';

describe('EditloanService', () => {
  let service: EditloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
