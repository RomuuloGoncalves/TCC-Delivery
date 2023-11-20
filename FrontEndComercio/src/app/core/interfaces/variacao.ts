import { GrupoVariacoes } from "./grupo-variacoes";

export interface Variacao {
  id?: number;
  nome: string;
  descricao?: string;
  porcentagem_desconto?: number;
  valor?: number;
  imagem?: string;
  cod_grupo_variacoes?: number;
  grupo_variacao?: GrupoVariacoes;
}
