import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  constructor(private Server: ServerService) { }
  
  consultarNome(nome: string) {
    return this.Server.get('/cupom/nome', nome)
  }

}
