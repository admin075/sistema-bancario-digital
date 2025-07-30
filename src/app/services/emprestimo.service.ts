import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprestimo } from '../models/emprestimo.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  private apiUrl = `${environment.apiUrl}/emprestimos`;

  constructor(private http: HttpClient) {}

  solicitar(emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.post<Emprestimo>(this.apiUrl, emprestimo);
  }

  listarEmprestimos(): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(`${this.apiUrl}/meus`);
  }

  listarTodos(): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(this.apiUrl);
  }

  obterPorId(id: number): Observable<Emprestimo> {
    return this.http.get<Emprestimo>(`${this.apiUrl}/${id}`);
  }

  aprovar(id: number): Observable<Emprestimo> {
    return this.http.patch<Emprestimo>(`${this.apiUrl}/${id}/aprovar`, {});
  }

  rejeitar(id: number): Observable<Emprestimo> {
    return this.http.patch<Emprestimo>(`${this.apiUrl}/${id}/rejeitar`, {});
  }

  calcularJuros(valor: number, parcelas: number): number {
    const taxaMensal = 0.02; // 2% ao mês
    return valor * taxaMensal * parcelas;
  }

  simularEmprestimo(valor: number, parcelas: number): any {
    const juros = this.calcularJuros(valor, parcelas);
    const valorTotal = valor + juros;
    const valorParcela = valorTotal / parcelas;

    return {
      valorSolicitado: valor,
      juros: juros,
      valorTotal: valorTotal,
      numeroParcelas: parcelas,
      valorParcela: valorParcela,
      taxaJuros: 2
    };
  }
}