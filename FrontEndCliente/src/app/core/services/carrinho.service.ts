import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private Server: ServerService) { }

  public produtos(cod_cliente: Number) {
    return this.Server.get(`pedido/carrinho/${cod_cliente}`);
  }
}
