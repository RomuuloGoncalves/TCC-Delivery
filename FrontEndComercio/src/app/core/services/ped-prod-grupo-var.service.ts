import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class PedProdGrupoVarService {
  constructor(private Server: ServerService) { }

  public pegarPedProd () {
    return this.Server.get('/ped-prod-grupo-var');
  }
}
