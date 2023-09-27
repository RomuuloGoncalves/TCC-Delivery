import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private Server: ServerService) { }

  public cadastro (cliente: Cliente) {
    return this.Server.post('cliente/cadastrar', cliente);
  }

  public login (cliente: Cliente) {
    return this.Server.post('cliente/login', cliente);
  }

}
