import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { GrupoVariacoes } from '../interfaces/grupo-variacoes';

@Injectable({
  providedIn: 'root',
})
export class GrupoVariacaoService {
  constructor(private Server: ServerService) {}

  public pegarGrupoVar() {
    return this.Server.get('/grupo-variacao');
  }

  public pegarGrupoVariacao(id: number) {
    return this.Server.get(`/grupo-variacao/desc/${id}`);
  }

  public pegarGrupoVarProduto(id: number) {
    return this.Server.get(`/grupo-variacao/${id}`);
  }

  public cadastrarGrupoVar(grupoVar: any) {
    return this.Server.post('/grupo-variacao/cadastrar', grupoVar);
  }
  
  public editarGrupoVar(grupoVar: any) {
    return this.Server.put('/grupo-variacao/editar', grupoVar);
  }

  public excluirGrupVar(id: number) {
    return this.Server.delete(`/grupo-variacao/excluir/${id}`);
  }
}
