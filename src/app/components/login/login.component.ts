import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
    userType: 'cliente'
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        if (this.credentials.userType === 'cliente') {
          this.router.navigate(['/dashboard-cliente']);
        } else {
          this.router.navigate(['/dashboard-gerente']);
        }
      },
      error: (error) => {
        console.error('Erro no login:', error);
      }
    });
  }
}