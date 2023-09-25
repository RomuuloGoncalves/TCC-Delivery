import { Cliente } from "./cliente";
import { Produto } from "./produto";

export interface Pedido {
  id_pedido?: number;
  valor_total?: number;
  valor_com_desconto: number;
  data_pedido: string;
  data_entrega: string;
  data_pagamento: string;
  endereco_pedido: string;
  forma_pagamento: string;
  status: string;
  cliente?: Cliente;
  produtos: Produto[];
}
