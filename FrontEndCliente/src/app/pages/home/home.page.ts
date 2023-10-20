import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { Produto } from 'src/app/core/interfaces/produto';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ClienteService } from 'src/app/core/services/cliente.service';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(
    private Cliente: ClienteService,
    private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.carregarCategorias();
  }

  private carregarCategorias() {
    this.categoriaService.listagem().subscribe(
      (response: Categoria[]) => {
        console.log("responseeee",response)
        this.categorias = response
      },
      (error) => {
        console.error(error);
      }
    )
  }

  logedIn = !!this.Cliente.token;


  loading: boolean = false;

  categorias!: Categoria[];

  produtos: Produto[] = [];

  produtosFiltrados: Produto[] = [...this.produtos];

  filtrarPesquisa(event: any) {
    const pesquisa: string = event.detail.value.toLowerCase().trim();

    this.produtosFiltrados = [
      ...this.produtos.map((produto: Produto) => {
        const nProduto: Produto = {
          id_produto: produto.id_produto,
          nome: produto.nome,
          variacoes: [
            ...produto.variacoes!.filter((variacao: Variacao) => {
              const nomeVariacao: string = variacao.nome.toLowerCase().trim();
              return (
                nomeVariacao.startsWith(pesquisa) || nomeVariacao.endsWith(pesquisa)
              );
            }),
          ],
        };
        return nProduto;
      }),
    ];

    this.produtosFiltrados = [
      ...this.produtosFiltrados.filter((produto: Produto) => {
        return produto.variacoes?.length;
      }),
    ];
  }

  breakpoints = {
    975: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    976: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };
}
