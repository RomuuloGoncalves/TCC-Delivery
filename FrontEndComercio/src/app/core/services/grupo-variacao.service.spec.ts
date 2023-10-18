import { TestBed } from '@angular/core/testing';

import { GrupoVariacaoService } from './grupo-variacao.service';

describe('GrupoVariacaoService', () => {
  let service: GrupoVariacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoVariacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
