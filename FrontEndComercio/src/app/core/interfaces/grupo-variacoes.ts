import { Variacao } from "./variacao";

export interface GrupoVariacoes {
  id_grupo_variacoes?: number;
  id_variacao?: number;
  id_produto?: number;
  tipo: string;
  variacoes?: Variacao[];
  qtdd_min?: number;
  qtdd_max?: number;
}
