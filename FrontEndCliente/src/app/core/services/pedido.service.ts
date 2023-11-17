import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private Server: ServerService) { }


  public criar(pedido: Pedido) {
    return this.Server.post('/pedido/cadastrar', pedido);
  }

  public editar(pedido: Pedido) {
    return this.Server.put('/pedido/editar', pedido);
  }
}
