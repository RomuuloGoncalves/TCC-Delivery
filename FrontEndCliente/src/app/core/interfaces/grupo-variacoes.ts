import { Variacao } from "./variacao";

export interface GrupoVariacoes {
  COD_GRUPO_VARIACOES?: number;
  COD_VARIACAO?: number;
  COD_PROD?: number;
  TIPO: string;
  VARIACOES?: Variacao[];
  MULTISELECIONAVEL?: boolean;
}
