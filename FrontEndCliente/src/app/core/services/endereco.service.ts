import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Endereco } from '../interfaces/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private Server: ServerService) { }

  public cadastro (endereco: Endereco) {
    return this.Server.post('/cliente/endereco/cadastrar', endereco);
  }

  public listagem () {
    return this.Server.get(`/cliente/endereco`,);
  }

  public editar (endereco: Endereco) {
    return this.Server.post('/endereco/editar', endereco);
  }

  public excluir (endereco: Endereco) {
    return this.Server.post('/endereco/excluir', endereco);
  }
}
