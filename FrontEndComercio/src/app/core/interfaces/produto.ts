import { Categoria } from "./categoria";
import { GrupoVariacoes } from "./grupo-variacoes";
import { Variacao } from "./variacao";

export interface Produto {
  id?: number;
  nome: string;
  imagem?: string;
  descricao?: string;
  categoria?: Categoria;
  cod_categoria?: number;
  variacao?: Variacao;
  variacoes?: Variacao[];
  grupo_variacoes?: GrupoVariacoes[];
}
