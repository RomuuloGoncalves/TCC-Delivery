import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  constructor(private Server: ServerService) { }

  public pegarProdutos() {
    return this.Server.get('/produto/');
  }

  public pegarprodutoID(id_produto: Number) {
    return this.Server.get(`/produto/${id_produto}`);
  }

  public excluirProduto(id_produto: Number) {
    return this.Server.delete(`/produto/excluir/${id_produto}`);
  }

  public editarProduto(data: any) {
    return this.Server.put('/produto/editar', data);
  }

  public adcionarProduto(data: any) {
    return this.Server.post('/produto/cadastrar', data);
  }
}