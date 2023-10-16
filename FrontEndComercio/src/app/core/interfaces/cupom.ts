export interface Cupom {
  id?: number,
  nome: String,
  porcentagem_desconto?: Number,
  valor_desconto?: number,
  data_validade: string,
  quantidade: number,
  status: boolean,
}
