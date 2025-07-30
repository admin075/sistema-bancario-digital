import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { DashboardClienteComponent } from './components/dashboard-cliente/dashboard-cliente.component';
import { SolicitarEmprestimoComponent } from './components/solicitar-emprestimo/solicitar-emprestimo.component';
import { DashboardGerenteComponent } from './components/dashboard-gerente/dashboard-gerente.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { 
    path: 'dashboard-cliente', 
    component: DashboardClienteComponent, 
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'cliente' }
  },
  { 
    path: 'solicitar-emprestimo', 
    component: SolicitarEmprestimoComponent, 
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'cliente' }
  },
  { 
    path: 'dashboard-gerente', 
    component: DashboardGerenteComponent, 
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'gerente' }
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }