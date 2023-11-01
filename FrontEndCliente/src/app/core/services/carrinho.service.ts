import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private Server: ServerService) { }

  removerProduto(id: number) {
    return this.Server.delete(`/cliente/carrinho/delete/${id}`)
  }
}
