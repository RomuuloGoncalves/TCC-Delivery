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
}
