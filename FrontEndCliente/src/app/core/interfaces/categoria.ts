import { Produto } from "./produto";

export interface Categoria {
    id?: number;
    nome: string;
    produto?: Produto[];
    valor?: number;
  }