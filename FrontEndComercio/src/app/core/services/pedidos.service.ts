import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor(private Server: ServerService) {}

  public pegarPedidos() {
    return this.Server.get('/pedido');
  }

  public pegarHistoricoPedidos() {
    return this.Server.get('/pedido/historico');
  }

  public pegarPedidoID(id: number) {
    return this.Server.get(`/pedido/${id}`);
  }

  public editarStatusPedido(id: number, status: string) {
    const pedido = {
      id: id,
      status: status
    };
    return this.Server.put('/pedido/editar', pedido);
  }
}
