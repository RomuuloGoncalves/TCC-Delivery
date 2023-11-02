import { PedidoProduto } from "./pedido-produto";
import { Variacao } from "./variacao";


export interface VariacaoSelecionada {
  id_variacao_selecionada: number;
  cod_pedido_produto: number;
  cod_variacao: number;

  ped_prod_grupo_var?: PedidoProduto;
  variacao?: Variacao;
}
