import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Cupom } from '../interfaces/cupom';

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  constructor(private Server: ServerService) { }

  usarCupom(cupom: Cupom) {
    return this.Server.post('/cupom/usar', cupom);
  }

}
