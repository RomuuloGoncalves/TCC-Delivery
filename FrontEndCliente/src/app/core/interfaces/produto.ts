import { GrupoVariacoes } from "./grupo-variacoes";
import { Variacao } from "./variacao";

export interface Produto {
  id_produto?: number;
  nome: string;
  imagem?: string;
  descricao?: string;
  variacao?: Variacao;
  grupo_variacao?: GrupoVariacoes[];
  quantidade?: number;
  subtotal?: number;
}
