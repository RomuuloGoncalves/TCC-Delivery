import { Variacao } from "./variacao";

export interface GrupoVariacoes {
  id?: number;
  id_variacao?: number;
  id_produto?: number;
  tipo: string;
  variacao?: Variacao[];
  qtdd_min?: number;
  qtdd_max?: number;
}
