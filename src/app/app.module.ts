import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { DashboardClienteComponent } from './components/dashboard-cliente/dashboard-cliente.component';
import { SolicitarEmprestimoComponent } from './components/solicitar-emprestimo/solicitar-emprestimo.component';
import { DashboardGerenteComponent } from './components/dashboard-gerente/dashboard-gerente.component';

import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroClienteComponent,
    DashboardClienteComponent,
    SolicitarEmprestimoComponent,
    DashboardGerenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }