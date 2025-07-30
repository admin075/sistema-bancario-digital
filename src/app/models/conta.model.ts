export interface Conta {
  id?: number;
  numero: string;
  agencia: string;
  tipo: 'corrente' | 'poupanca';
  saldo: number;
  clienteId: number;
  dataCriacao?: Date;
  ativa?: boolean;
  limite?: number;
}

export interface Transacao {
  id?: number;
  contaId: number;
  tipo: 'debito' | 'credito';
  valor: number;
  descricao: string;
  dataTransacao: Date;
  saldoAnterior: number;
  saldoPosterior: number;
}