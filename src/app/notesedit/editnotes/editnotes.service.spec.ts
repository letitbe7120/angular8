import { TestBed } from '@angular/core/testing';

import { EditnotesService } from './editnotes.service';

describe('EditnotesService', () => {
  let service: EditnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
