import { Cliente } from "./cliente";

export interface Endereco {
  id?: number;
  cod_cliente?: number;
  nome: string;
  complemento?: string;
  bairro: string;
  numero: string;
  rua: string;
  cep: string;
  cliente?: Cliente;
}
