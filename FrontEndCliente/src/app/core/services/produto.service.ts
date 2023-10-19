import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private Server: ServerService) { }

  public listagem() {
    return this.Server.get('/produto')
  }

  public pegarProduto(id: number) {
    return this.Server.get(`/produto/${id}`,);
  }

}
