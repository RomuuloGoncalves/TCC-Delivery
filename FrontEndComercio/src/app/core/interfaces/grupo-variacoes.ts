import { Produto } from "./produto";
import { Variacao } from "./variacao";

export interface GrupoVariacoes {
  id?: number;
  tipo: string;
  variacao?: Variacao[];
  quantidade_variacoes_min: number;
  quantidade_variacoes_max: number;
  cod_produto: number;
  produto?: Produto;
}