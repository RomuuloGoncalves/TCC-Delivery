import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Pedido } from '../interfaces/pedido';
import { PedidoProduto } from '../interfaces/pedido-produto';
import { PedidoProdutoGrupoVariacoes } from '../interfaces/ped-prod-grupo-var';
import { VariacaoSelecionada } from '../interfaces/variacao-selecionada';


@Injectable({
  providedIn: 'root'
})
export class PedidoProdutoService {

  constructor(private Server: ServerService) { }

  public criar(ped_prod_grupo_var: PedidoProdutoGrupoVariacoes) {
    return this.Server.post('ped-prod-grupo-var/cadastrar', ped_prod_grupo_var);
  }

  public editar (ped_prod_grupo_var: PedidoProdutoGrupoVariacoes) {
    return this.Server.post('ped-prod-grupo-var/cadastrar', ped_prod_grupo_var);
  }
}
