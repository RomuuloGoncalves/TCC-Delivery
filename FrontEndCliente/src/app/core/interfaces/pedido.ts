import { Produto } from "./produto";

export interface Pedido {
  COD_PEDIDO?: number;
  VALOR_TOTAL?: number;
  VALOR_COM_DESCONTO: number;
  DATA_PEDIDO: string;
  DATA_ENTREGA: string;
  DATA_PAGAMENTO: string;
  COMPLEMENTO?: string;
  BAIRRO: string;
  NUMERO: string;
  RUA: string;
  CEP: string;
  FORMA_PAGAMENTO: string;
  STATUS: string;
  PRODUTOS: Produto[];
}
