import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../../services/emprestimo.service';
import { ClienteService } from '../../services/cliente.service';
import { Emprestimo } from '../../models/emprestimo.model';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-dashboard-gerente',
  templateUrl: './dashboard-gerente.component.html',
  styleUrls: ['./dashboard-gerente.component.css']
})
export class DashboardGerenteComponent implements OnInit {
  emprestimos: Emprestimo[] = [];
  clientes: Cliente[] = [];

  constructor(
    private emprestimoService: EmprestimoService,
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.emprestimoService.listarTodos().subscribe({
      next: (emprestimos) => this.emprestimos = emprestimos,
      error: (error) => console.error('Erro ao carregar empréstimos:', error)
    });

    this.clienteService.listarTodos().subscribe({
      next: (clientes) => this.clientes = clientes,
      error: (error) => console.error('Erro ao carregar clientes:', error)
    });
  }

  aprovarEmprestimo(id: number) {
    this.emprestimoService.aprovar(id).subscribe({
      next: () => {
        alert('Empréstimo aprovado com sucesso!');
        this.carregarDados();
      },
      error: (error) => console.error('Erro ao aprovar empréstimo:', error)
    });
  }

  rejeitarEmprestimo(id: number) {
    this.emprestimoService.rejeitar(id).subscribe({
      next: () => {
        alert('Empréstimo rejeitado!');
        this.carregarDados();
      },
      error: (error) => console.error('Erro ao rejeitar empréstimo:', error)
    });
  }
}