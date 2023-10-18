import { TestBed } from '@angular/core/testing';

import { PedProdGrupoVarService } from './ped-prod-grupo-var.service';

describe('PedProdGrupoVarService', () => {
  let service: PedProdGrupoVarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedProdGrupoVarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
