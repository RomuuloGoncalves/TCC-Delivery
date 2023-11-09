import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Produto } from '../interfaces/produto';
import { Cupom } from '../interfaces/cupom';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  constructor(private Server: ServerService) {}

  public removerProduto(id: number) {
    return this.Server.delete(`/cliente/carrinho/delete}`);
  }
  public produtos() {
    return this.Server.get(`/cliente/carrinho`);
  }

  public adicionarProduto(produto: Produto) {
    return this.Server.post(`/cliente/carrinho/adicionar`, produto)
  }

  public adicionarCupom(id: number) {
    return this.Server.put(`/cliente/carrinho/adicionarCupom`, id)
  }

}
