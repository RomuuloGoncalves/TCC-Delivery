import { GrupoVariacoes } from "./grupo-variacoes";
import { Variacao } from "./variacao";

export interface Produto {
  id_produto?: number;
  nome: string;
  imagem?: string;
  descricao?: string;
  variacao?: Variacao;
  variacoes?: Variacao[];
  grupo_variacoes?: GrupoVariacoes[];
  quantidade?: number;
  subtotal?: number;
}
