import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class VariacaoService {
  constructor(private Server: ServerService) { }

  public cadastrarVariacao(data: any) {
    return this.Server.post('/variacao/cadastrar', data);
  }
}
