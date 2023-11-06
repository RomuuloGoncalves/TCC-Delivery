import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Cupom } from '../interfaces/cupom';

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  constructor(private Server: ServerService) { }
  
  consultarNome(cupom: Cupom) {
    return this.Server.post('/cupom/info', cupom)
  }

}
