import { TestBed } from '@angular/core/testing';

import { VariacaoService } from './variacao.service';

describe('VariacaoService', () => {
  let service: VariacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
