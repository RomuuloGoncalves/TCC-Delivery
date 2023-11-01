import { Pedido } from "./pedido";
import { Produto } from "./produto";

export interface PedidoProduto {
  id: number;
  cod_pedido: number;
  cod_produto: number;
  pedido?: Pedido;
  produto?: Produto;
}
