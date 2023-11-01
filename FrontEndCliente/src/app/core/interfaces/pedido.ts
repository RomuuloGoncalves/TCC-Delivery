import { Cliente } from "./cliente";
import { Endereco } from "./endereco";
import { PedidoProduto } from "./pedido-produto";

export interface Pedido {
  id?: number;
  cod_cliente?: number;
  cod_endereco?: number;
  cod_cupom?: number;
  valor_total?: number;
  valor_com_desconto?: number;
  data_pedido?: string;
  data_entrega?: string;
  data_pagamento?: string;
  forma_pagamento?: string;
  status: string;
  cliente?: Cliente;
  endereco?: Endereco;
  cupom?: Endereco;
  pedido_produtos?: PedidoProduto[];
}
