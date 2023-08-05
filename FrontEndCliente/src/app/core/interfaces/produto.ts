import { Variacao } from "./variacao";

export interface Produto {
  COD_PRODUTO?: number;
  NOME: string;
  DESCRICAO?: string;
  GRUPO_VARIACAO?: Variacao;
  VARIACOES?: Variacao[];
}
