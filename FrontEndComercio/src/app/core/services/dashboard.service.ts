import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private Server: ServerService) { }

  public rendimentoSemanal() {
    return this.Server.get('/dashboard/rendimento/semanal');
  }

  public rendimentoMensal() {
    return this.Server.get('/dashboard/rendimento/mensal');
  }

  public rendimentoAnual() {
    return this.Server.get('/dashboard/rendimento/anual');
  }

  public vendasSemanais() {
    return this.Server.get('/dashboard/vendas/semanais');
  }

  public vendasMensais() {
    return this.Server.get('/dashboard/vendas/mensais');
  }

  public vendasAnuais() {
    return this.Server.get('/dashboard/vendas/anual');
  }

  public categoriasSemanais() {
    return this.Server.get('/dashboard/categoria/semanal');
  }

  public categoriasMensais() {
    return this.Server.get('/dashboard/categoria/mensal');
  }

  public categoriasAnuais() {
    return this.Server.get('/dashboard/categoria/anual');
  }
}
