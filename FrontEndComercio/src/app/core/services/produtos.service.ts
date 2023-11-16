import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Produto } from '../interfaces/produto';

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

  public editarProduto(data: Produto) {
    console.log(data)
    return this.Server.put('/produto/editar', data);
  }

  public cadastrarProduto(data: any) {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('cod_categoria', data.cod_categoria);
    formData.append('descricao', data.descricao);
    formData.append('imagem', data.imagem);
    return this.Server.upload('/produto/cadastrar', formData);
  }

  public pegarImagem(produto:any){
    return this.Server.imagem(produto)
  }
}
