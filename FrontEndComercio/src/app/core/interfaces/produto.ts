import { GrupoVariacoes } from "./grupo-variacoes";
import { Variacao } from "./variacao";

export interface Produto {
  id_produto?: number;
  nome: string;
  imagem?: string;
  categoria?: string;
  variacao?: Variacao;
  variacoes?: Variacao[];
  grupo_variacoes?: GrupoVariacoes[];
}
