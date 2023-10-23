export interface Variacao {
  id_variacao?: number;
  nome: string;
  descricao?: string;
  porcentagem_desconto?: number;
  valor_desconto?: number;
  valor_inicial?: number;
  valor_final?: number;
  imagem?: string;
  selecionado?: boolean;
}