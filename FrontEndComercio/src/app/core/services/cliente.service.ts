import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private Server: ServerService) { }

  public pegarCliente (id_cliente:any) {
    return this.Server.get(`/cliente/listar?id_cliente=${id_cliente}`);
  }
}
