import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoVariacaoService {
  constructor(private Server: ServerService) { }

  public pegarGrupoVar () {
    return this.Server.get('/grupo-variacao');
  }

}
