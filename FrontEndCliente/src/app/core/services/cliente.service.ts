import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Cliente } from '../interfaces/cliente';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private Cookie: CookieService, private Server: ServerService) { }

  public readonly token = this.Cookie.get('token');

  public cadastro (cliente: Cliente) {
    return this.Server.post('/cliente/cadastrar', cliente);
  }

  public login (cliente: Cliente) {
    return this.Server.post('/cliente/login', cliente);
  }

  public infos () {
    return this.Server.get('/cliente');
  }
}
