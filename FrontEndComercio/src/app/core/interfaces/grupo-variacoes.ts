import { Produto } from "./produto";
import { Variacao } from "./variacao";

export interface GrupoVariacoes {
  id_grupo_variacoes?: number;
  id?: number;
  tipo: string;
  variacao?: Variacao[];
  qtdd_min?: number;
  qtdd_max?: number;
  produto?: Produto;
}
