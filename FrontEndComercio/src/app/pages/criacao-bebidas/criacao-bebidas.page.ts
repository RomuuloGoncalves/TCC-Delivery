import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-criacao-bebidas',
  templateUrl: './criacao-bebidas.page.html',
  styleUrls: ['./criacao-bebidas.page.scss'],
})
export class CriacaoBebidasPage implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
  }

  metodo:string = 'post'

  produtoSelecionado: string = 'Refrigerante';
  grupoVariacao: string = '';

  produtoSelecionadoSelect(e: any) {
    this.produtoSelecionado = e.detail.value;
  }
  grupoVariacaoSelecionada(e: any) {
    this.grupoVariacao = e.detail.value;
  }

  criarBebida(e: any) {
    this.produtoService.cadastrarProduto(e).subscribe(
      (response) => {
        console.log('response: ', response)
      }
    )
  }



}
