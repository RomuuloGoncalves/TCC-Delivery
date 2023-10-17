import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private Server: ServerService) { }

  // pegando por id de categoria 👍
  // public listagem(categoria: number) {
  public listagem() {
    return this.Server.get('produto')
  }

}
