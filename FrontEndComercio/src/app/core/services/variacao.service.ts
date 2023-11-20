import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Variacao } from '../interfaces/variacao';

@Injectable({
  providedIn: 'root'
})
export class VariacaoService {
  constructor(private Server: ServerService) { }

  public cadastrarVariacao(data: any) {
    return this.Server.post('/variacao/cadastrar', data);
  }

  public pegarVariacao(id: number) {
    return this.Server.get(`/variacao/${id}`);
  }

  public editarVariacao(data: any) {
    return this.Server.put('/variacao/editar', data);
  }

  public excluirVariacao(id: any) {
    return this.Server.delete(`/variacao/excluir/${id}`);
  }
}
