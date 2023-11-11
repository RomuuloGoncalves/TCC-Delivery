import { Cliente } from "./cliente";
import { Endereco } from "./endereco";
import { Produto } from "./produto";

export interface Pedido {
  id?: number;
  cod_cliente?: number;
  valor_total?: number;
  valor_com_desconto: number;
  data_pedido: string;
  data_entrega: string;
  data_pagamento: string;
  forma_pagamento: string;
  status: string;
  cliente?: Cliente;
  endereco_pedido?: string;
  pedido_produtos: Produto[];
}
