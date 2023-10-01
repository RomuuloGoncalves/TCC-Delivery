import { TestBed } from '@angular/core/testing';

import { CuponsService } from './cupons.service';

describe('CuponsService', () => {
  let service: CuponsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuponsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
