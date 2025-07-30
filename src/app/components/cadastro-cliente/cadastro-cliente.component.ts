import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  cliente: Cliente = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    endereco: '',
    password: ''
  };

  constructor(private clienteService: ClienteService, private router: Router) {}

  onSubmit() {
    this.clienteService.cadastrar(this.cliente).subscribe({
      next: (response) => {
        alert('Cliente cadastrado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Erro no cadastro:', error);
      }
    });
  }
}