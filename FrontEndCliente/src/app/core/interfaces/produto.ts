import { GrupoVariacoes } from "./grupo-variacoes";
import { Variacao } from "./variacao";

export interface Produto {
  id_produto?: number;
  nome: string;
  imagem?: string;
  descricao?: string;
  variacao?: Variacao;
  variacoes?: Variacao[];
  // macaquice pra nao ter que corrigir o nome na porra do tcc inteiro por negligencia dos amigos
  grupo_variacao?: GrupoVariacoes[];
  grupo_variacoes?: GrupoVariacoes[];
  quantidade?: number;
  subtotal?: number;
}
