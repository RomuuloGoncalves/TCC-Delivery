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
    return this.Server.post('/cliente/endereco/editar', endereco);
  }

  public excluir (id: Number) {
    return this.Server.delete(`/cliente/endereco/excluir/${id}`);
  }
}
