import { TestBed } from '@angular/core/testing';

import { PassarMarmitaService } from './passar-marmita.service';

describe('PassarMarmitaService', () => {
  let service: PassarMarmitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassarMarmitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
