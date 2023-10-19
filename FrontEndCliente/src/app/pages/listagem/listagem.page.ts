import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Produto } from 'src/app/core/interfaces/produto';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  constructor(private route: ActivatedRoute, private Router: Router, private produtoService: ProdutoService) {}

  nomeProduto!: any;

  ngOnInit() {
    this.nomeProduto = this.route.snapshot.paramMap.get('produto');

    if (!this.eStringValida(this.nomeProduto)) this.Router.navigate(['..']);

    this.nomeProduto =
      this.nomeProduto[0].toUpperCase() + this.nomeProduto.slice(1);

    this.carregarProdutos()
    
  }

  filtrar: { [chave: string]: boolean } = {
    marmita: true,
    bebida: true,
    combo: true,
    acompanhamento: true,
  };

  selectedOptions: string = 'nenhum';

  loading: boolean = false;
  produto!: Produto[]

  produtoFiltrado?: any
  // produtoFiltrado?: Produto[]
  // produtoFiltrado: Produto[] = this.produto;

  carregarProdutos() {
    this.loading = true;
    this.produtoService.listagem().subscribe(
      (response: Produto[]) => {
        this.produto = response;
        // this.produtoFiltrado = this.produto;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  eStringValida(str: string) {
    const regexString: RegExp = /^[A-Za-z]+$/;
    return regexString.test(str);
  }

  filtrarSelecao(e: any) {
    for (const [chave, valor] of Object.entries(this.filtrar)) {
      this.filtrar[chave] = false;
    }

    e.detail.value.forEach((chave: any) => {
      if (this.filtrar.hasOwnProperty(chave)) {
        this.filtrar[chave] = true;
      }
    });
  }

  // filtragem  
  filtrarPesquisa(event: any) {
    // const pesquisa: string = event.detail.value.toLowerCase().trim();

    // this.produtoFiltrado = {
    //   id_produto: this.produto.id_produto,
    //   nome: this.produto.nome,
    //   variacoes: [
    //     ...this.produto.variacoes!.filter((variacao: Variacao) => {
    //       const nomeVariacao: string = variacao.nome.toLowerCase().trim();
    //       return (
    //         nomeVariacao.startsWith(pesquisa) || nomeVariacao.endsWith(pesquisa)
    //       );
    //     }),
    //   ],
    // };
  }

}
