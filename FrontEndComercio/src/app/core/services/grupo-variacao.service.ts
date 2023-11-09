import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { GrupoVariacoes } from '../interfaces/grupo-variacoes';

@Injectable({
  providedIn: 'root'
})
export class GrupoVariacaoService {
  constructor(private Server: ServerService) { }

  public pegarGrupoVar () {
    return this.Server.get('/grupo-variacao');
  }

  public pegarGrupoVarProduto (id:number) {
    return this.Server.get(`/grupo-variacao/${id}`);
  }

  public cadastrarGrupoVar (grupoVar: any) {
      return this.Server.post('/grupo-variacao/cadastrar', grupoVar);
    }  
}
