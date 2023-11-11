import { Categoria } from './categoria';
import { GrupoVariacoes } from './grupo-variacoes';
import { Variacao } from './variacao';

export interface Produto {
  id?: number;
  nome: string;
  imagem?: string;
  descricao?: string;
  variacao?: Variacao;
  grupo_variacao?: GrupoVariacoes[];
  quantidade?: number;
  subtotal?: number;
  categoria?: Categoria;
}
