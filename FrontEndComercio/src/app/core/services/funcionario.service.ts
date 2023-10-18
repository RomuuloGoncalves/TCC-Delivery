import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Funcionario } from '../interfaces/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private Server: ServerService) { }

  public cadastro(funcionario: Funcionario) {
    return this.Server.post('/funcionario/cadastrar', funcionario);
  }

  public login(funcionario: Funcionario) {
    return this.Server.post('/funcionario/login', funcionario);
  }
}
