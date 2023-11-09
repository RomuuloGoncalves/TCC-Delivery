import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  constructor(private Server: ServerService) {}

  public removerProduto(id: number) {
    return this.Server.delete(`/cliente/carrinho/delete/${id}`);
  }
  public produtos() {
    return this.Server.get(`/pedido/carrinho`);
  }

  public adicionarProduto(produto: Produto) {
    return this.Server.put(`/cliente/carrinho/adicionar`, produto);
  }
}
