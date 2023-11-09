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
    return this.Server.delete(`/cliente/carrinho/delete/${id}`);
  }
  public produtos() {
    return this.Server.get(`/pedido/carrinho`);
  }

  public adicionarProduto(produto: Produto) {
    return this.Server.put(`/cliente/carrinho/adicionar`, produto)
  }

  public adicionarCupom(id: number) {
    console.log("adicionar cupom ao carrinh")
    return this.Server.put(`/cliente/carrinho/adicionarCupom`, id)
  }

}