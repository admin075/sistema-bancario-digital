export interface Cliente {
  id?: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  endereco: string;
  password?: string;
  dataCadastro?: Date;
  ativo?: boolean;
}