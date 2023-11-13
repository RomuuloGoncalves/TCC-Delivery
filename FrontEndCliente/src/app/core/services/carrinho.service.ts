import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { PedidoProduto } from '../interfaces/pedido-produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  constructor(private Server: ServerService) {}

  public removerProduto(id: number) {
    return this.Server.delete(`/cliente/carrinho/excluir/${id}`);
  }
  public produtos() {
    return this.Server.get(`/cliente/carrinho`);
  }

  public adicionarProduto(produto: any) {
    return this.Server.post(`/cliente/carrinho/adicionar`, produto);
  }

  public adicionarCupom(id: number) {
    return this.Server.put(`/cliente/carrinho/adicionarCupom`, id);
  }

  public editarProduto(produto: PedidoProduto) {
    return this.Server.put(`/cliente/carrinho/editar`, produto);
  }
}
