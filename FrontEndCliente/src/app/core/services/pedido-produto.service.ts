import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Pedido } from '../interfaces/pedido';
import { PedidoProduto } from '../interfaces/pedido-produto';
import { VariacaoSelecionada } from '../interfaces/variacao-selecionada';


@Injectable({
  providedIn: 'root'
})
export class PedidoProdutoService {

  constructor(private Server: ServerService) { }

  public criar(pedido_produto: PedidoProduto) {
    return this.Server.post('pedido-produto/cadastrar', pedido_produto);
  }

  public info(id: Number) {
    return this.Server.get(`pedido-produto/${id}`);
  }

  public editar(pedido_produto: PedidoProduto) {
    return this.Server.put('pedido-produto/editar', pedido_produto);
  }

  public excluir(id: Number) {
    return this.Server.delete(`pedido-produto/excluir/${id}`);
  }

  // Variação Selecionada

  public cadastrarVariacaoSelecionada(variacao_selecionada: VariacaoSelecionada) {
    return this.Server.post('pedido-produto/variacao-selecionada/cadastrar', variacao_selecionada);
  }

  public editarVariacaoSelecionada(variacao_selecionada: VariacaoSelecionada) {
    return this.Server.put('pedido-produto/variacao-selecionada/editar', variacao_selecionada);
  }

  public excluirVariacaoSelecionada(id: Number) {
    return this.Server.delete(`pedido-produto/variacao-selecionada/excluir/${id}`);
  }
}
