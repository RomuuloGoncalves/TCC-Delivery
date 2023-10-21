import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  constructor(private route: ActivatedRoute, private Router: Router, private categoriaService: CategoriaService) {}

  nomeProduto!: any;

  ngOnInit() {

    if (!this.eStringValida(this.nomeProduto)) this.Router.navigate(['..']);
    this.nomeProduto = this.route.snapshot.paramMap.get('produto');
    console.log(this.nomeProduto)
    
    // this.nomeProduto = this.nomeProduto[0].toUpperCase() + this.nomeProduto.slice(1);

    // marmitas
    // bebidas
    // combos

    this.nomeProduto == 'marmitas' ? this.nomeProduto = 'Marmita Pronta' : null
    this.nomeProduto == 'bebidas' ? this.nomeProduto = 'Bebida' : null
    this.nomeProduto == 'combos' ? this.nomeProduto = 'Combos' : null


    this.carregarCategorias(this.nomeProduto)
    
  }

  filtrar: { [chave: string]: boolean } = {
    marmita: true,
    bebida: true,
    combo: true,
    acompanhamento: true,
  };
  selectedOptions: string = 'nenhum';

  loading: boolean = true;
  categorias!: Categoria[]

  produtoFiltrado?: any
  // produtoFiltrado?: Produto[]
  // produtoFiltrado: Produto[] = this.produto;

  private carregarCategorias(nome: string) {
    this.categoriaService.pegarCategoriaNome(nome).subscribe(
      (response: Categoria[]) => {
        this.categorias = response
      },
      (error) => {
        console.error(error);
      }
    )
    this.loading = false
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
