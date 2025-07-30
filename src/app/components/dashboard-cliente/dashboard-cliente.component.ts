import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../services/conta.service';
import { EmprestimoService } from '../../services/emprestimo.service';
import { Conta } from '../../models/conta.model';
import { Emprestimo } from '../../models/emprestimo.model';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent implements OnInit {
  conta: Conta | null = null;
  emprestimos: Emprestimo[] = [];

  constructor(
    private contaService: ContaService,
    private emprestimoService: EmprestimoService
  ) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.contaService.obterConta().subscribe({
      next: (conta) => this.conta = conta,
      error: (error) => console.error('Erro ao carregar conta:', error)
    });

    this.emprestimoService.listarEmprestimos().subscribe({
      next: (emprestimos) => this.emprestimos = emprestimos,
      error: (error) => console.error('Erro ao carregar empréstimos:', error)
    });
  }

  realizarTransferencia(valor: number, contaDestino: string) {
    this.contaService.transferir(valor, contaDestino).subscribe({
      next: () => {
        alert('Transferência realizada com sucesso!');
        this.carregarDados();
      },
      error: (error) => console.error('Erro na transferência:', error)
    });
  }
}