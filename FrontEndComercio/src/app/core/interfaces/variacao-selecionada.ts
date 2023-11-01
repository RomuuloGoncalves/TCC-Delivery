import { Variacao } from "./variacao";
import { PedidoProdutoGrupoVariacoes } from "./ped-prod-grupo-var";


export interface VariacaoSelecionada {
  id_variacao_selecionada: number;
  id_pedido_produto_grupo_variacoes: number;
  id_variacao: number;

  ped_prod_grupo_var?: PedidoProdutoGrupoVariacoes;
  variacao?: Variacao;
}
