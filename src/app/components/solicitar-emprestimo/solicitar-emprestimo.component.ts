import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmprestimoService } from '../../services/emprestimo.service';
import { Emprestimo } from '../../models/emprestimo.model';

@Component({
  selector: 'app-solicitar-emprestimo',
  templateUrl: './solicitar-emprestimo.component.html',
  styleUrls: ['./solicitar-emprestimo.component.css']
})
export class SolicitarEmprestimoComponent {
  emprestimo: Partial<Emprestimo> = {
    valor: 0,
    numeroParcelas: 12,
    finalidade: ''
  };

  constructor(
    private emprestimoService: EmprestimoService,
    private router: Router
  ) {}

  onSubmit() {
    this.emprestimoService.solicitar(this.emprestimo as Emprestimo).subscribe({
      next: (response) => {
        alert('Empréstimo solicitado com sucesso!');
        this.router.navigate(['/dashboard-cliente']);
      },
      error: (error) => {
        console.error('Erro ao solicitar empréstimo:', error);
      }
    });
  }

  calcularJuros() {
    // Lógica simplificada para cálculo de juros
    return this.emprestimo.valor! * 0.02; // 2% ao mês
  }
}