export interface Emprestimo {
  id?: number;
  clienteId: number;
  valor: number;
  taxaJuros: number;
  numeroParcelas: number;
  valorParcela?: number;
  valorTotal?: number;
  finalidade: string;
  status: 'pendente' | 'aprovado' | 'rejeitado' | 'quitado';
  dataSolicitacao?: Date;
  dataAprovacao?: Date;
  dataVencimento?: Date;
  observacoes?: string;
}