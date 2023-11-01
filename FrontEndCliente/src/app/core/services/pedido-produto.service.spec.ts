import { TestBed } from '@angular/core/testing';

import { PedidoProdutoService } from './pedido-produto.service';

describe('PedidoService', () => {
  let service: PedidoProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
