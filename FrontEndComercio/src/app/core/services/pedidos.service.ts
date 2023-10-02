import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  constructor(private Server: ServerService) { }

  public pegarPedidos () {
    return this.Server.get('/pedido/listar');
  }

  public pegarPedidoCliente (cod_cliente:number) {
    return this.Server.get(`/pedido/pedidoCliente?cod_cliente=${cod_cliente}`);
  }  
  
  public pegarPedidoID (id_pedido:number) {
    return this.Server.get(`/pedido/pedidoID?id_pedido=${id_pedido}`);
  }
}
