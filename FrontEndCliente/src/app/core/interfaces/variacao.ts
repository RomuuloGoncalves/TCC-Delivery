import { GrupoVariacoes } from "./grupo-variacoes";

export interface Variacao {
  COD_VARIACAO?: number;
  NOME: string;
  PORCENTAGEM_DESCONTO?: number;
  VALOR_DESCONTO?: number;
  VALOR_INICIAL?: number;
  GRUPO_VARICOES?: GrupoVariacoes[];
}
