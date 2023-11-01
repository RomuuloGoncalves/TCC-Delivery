import { Variacao } from "./variacao";

export interface GrupoVariacoes {
  id?: number;
  id_variacao?: number;
  id_produto?: number;
  tipo: string;
  variacao?: Variacao[];
  quantidade_variacoes_min?: number;
  quantidade_variacoes_max?: number;
}
