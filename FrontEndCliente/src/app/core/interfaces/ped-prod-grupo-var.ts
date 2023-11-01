import { PedidoProduto } from "./pedido-produto";
import { VariacaoSelecionada } from "./variacao-selecionada";


export interface PedidoProdutoGrupoVariacoes {
  id_pedido_produto_grupo_variacoes: number;
  id_pedido_produto: number;
  quantidade?: number;

  pedido_produto?: PedidoProduto;
  variacoes_seleciondas?: VariacaoSelecionada;
}
