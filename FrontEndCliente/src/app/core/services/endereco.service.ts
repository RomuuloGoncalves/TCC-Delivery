import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Endereco } from '../interfaces/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private Server: ServerService) { }

  public cadastro (endereco: Endereco) {
    return this.Server.post('endereco/cadastrar', endereco);
  }
}
