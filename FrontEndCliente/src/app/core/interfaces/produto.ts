import { GrupoVariacoes } from "./grupo-variacoes";
import { Variacao } from "./variacao";

export interface Produto {
  COD_PRODUTO?: number;
  NOME: string;
  VARIACAO?: Variacao;
  VARIACOES?: Variacao[];
  GRUPO_VARIACOES?: GrupoVariacoes[];
}
