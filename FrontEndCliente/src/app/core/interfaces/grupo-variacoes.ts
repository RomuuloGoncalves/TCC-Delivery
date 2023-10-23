import { Variacao } from "./variacao";

export interface GrupoVariacoes {
  id_grupo_variacoes?: number;
  id_variacao?: number;
  id_produto?: number;
  tipo: string;
  // macaquice pra nao ter que corrigir o nome na porra do tcc inteiro por negligencia dos amigos
  variacao?: Variacao[];
  variacoes?: Variacao[];
  qtdd_min?: number;
  qtdd_max?: number;
}
