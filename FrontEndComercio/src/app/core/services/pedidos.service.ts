import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  constructor(private Server: ServerService) { }

  public pegarPedidos () {
    return this.Server.get('/pedido');
  }
  
  public pegarPedidoID (id_pedido:number) {
    return this.Server.get(`/pedido/${id_pedido}`);
  }
}
