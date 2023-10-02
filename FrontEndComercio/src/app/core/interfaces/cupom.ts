export interface Cupom {
  id?: number,
  nome: String,
  porcentagem_desconto?: Number,
  valor_desconto?: number,
  data_validade: String,
  quantidade: number,
  status: boolean,
}
