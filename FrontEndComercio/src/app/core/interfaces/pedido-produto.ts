import { Pedido } from "./pedido";
import { Produto } from "./produto";
import { VariacaoSelecionada } from "./variacao-selecionada";

export interface PedidoProduto {
  id: number;
  quantidade: number;
  total: number;
  cod_pedido: number;
  cod_produto: number;
  variacoes_selecionadas?: VariacaoSelecionada[];
  pedido?: Pedido;
  produto?: Produto;
}
