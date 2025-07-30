import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conta } from '../models/conta.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  private apiUrl = `${environment.apiUrl}/contas`;

  constructor(private http: HttpClient) {}

  obterConta(): Observable<Conta> {
    return this.http.get<Conta>(`${this.apiUrl}/minha`);
  }

  obterSaldo(): Observable<{ saldo: number }> {
    return this.http.get<{ saldo: number }>(`${this.apiUrl}/saldo`);
  }

  transferir(valor: number, contaDestino: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/transferir`, {
      valor,
      contaDestino
    });
  }

  depositar(valor: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/depositar`, { valor });
  }

  sacar(valor: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/sacar`, { valor });
  }

  obterExtrato(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/extrato`);
  }

  criarConta(dadosConta: Partial<Conta>): Observable<Conta> {
    return this.http.post<Conta>(this.apiUrl, dadosConta);
  }
}