import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private Server: ServerService) { }

  public listagem() {
    return this.Server.get('categoria')
  }
}
