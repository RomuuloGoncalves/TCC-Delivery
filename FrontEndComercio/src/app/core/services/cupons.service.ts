import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class CuponsService {
  constructor(private Server: ServerService) { }

  public pegarCupons () {
    return this.Server.get('/cupom/');
  }

  public pegarCupomID (id_cupom:Number) {
    return this.Server.get(`/cupom/${id_cupom}`);
  }

  public excluirCupom(id_cupom:Number) {
    return this.Server.delete(`/cupom/excluir/${id_cupom}`);
  }
}
