import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Funcionario } from '../interfaces/funcionario';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private Server: ServerService, private Cookie: CookieService) { }

  private readonly token: string = this.Cookie.get('token');
  public readonly logedIn: boolean = this.token !== '';

  public cadastro(funcionario: Funcionario) {
    return this.Server.post('/funcionario/cadastrar', funcionario);
  }

  public login(funcionario: Funcionario) {
    return this.Server.post('/funcionario/login', funcionario);
  }

  public logout() {
    return this.Server.post('/funcionario/logout', null);
  }

  public limparToken() {
    this.Cookie.delete('token')
  }
}
