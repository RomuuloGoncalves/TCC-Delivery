import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private Server: ServerService) { }

  public pegarCategorias () {
    return this.Server.get('/categoria');
  }

  public cadastrarCategoria(data:any) {
    return this.Server.post('/categoria/cadastrar', data);
  }

  public excluirCategoria(id:any) {
    return this.Server.delete(`/categoria/excluir/${id}`);
  }
}
