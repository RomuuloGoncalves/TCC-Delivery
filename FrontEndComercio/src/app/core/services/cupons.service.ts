import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class CuponsService {
  constructor(private Server: ServerService) { }

  public pegarCupons () {
    return this.Server.get('/cupom/listar');
  }
}
