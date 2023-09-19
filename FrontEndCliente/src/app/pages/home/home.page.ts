import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';
import { Variacao } from 'src/app/core/interfaces/variacao';

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

  constructor() {}

  ngOnInit() {}

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

  loading: boolean = false;

  produtos: Produto[] = [
    {
      id_produto: 1,
      nome: 'Porções',
      variacoes: [
        {
          id_variacao: 1,
          nome: 'Batata Frita',
          valor_desconto: 15.0,
          valor_inicial: 19.5,
          valor_final: 33,
          descricao: 'Bata muito boa tipo muito muito boa mesmo',
          imagem: '../../../assets/img/home-icons/garfo_faca_outline.png',
        },
        {
          id_variacao: 1,
          nome: 'Mandioca Frita',
          valor_desconto: 15.0,
          valor_inicial: 19.5,
          valor_final: 33,
          descricao: 'Bata muito boa tipo muito muito boa mesmo',
          imagem: '../../../assets/img/home-icons/garfo_faca_outline.png',
        },
        {
          id_variacao: 1,
          nome: 'Frango Frita',
          valor_desconto: 15.0,
          valor_inicial: 19.5,
          valor_final: 33,
          descricao: 'Bata muito boa tipo muito muito boa mesmo',
          imagem: '../../../assets/img/home-icons/garfo_faca_outline.png',
        },
      ],
    },
    {
      id_produto: 1,
      nome: 'Doces',
      variacoes: [
        {
          id_variacao: 1,
          nome: 'Pudim',
          valor_desconto: 15.0,
          valor_inicial: 19.5,
          valor_final: 33,
          descricao: 'Bata muito boa tipo muito muito boa mesmo',
          imagem: '../../../assets/img/home-icons/garfo_faca_outline.png',
        },
        {
          id_variacao: 1,
          nome: 'Arroz Doce',
          valor_desconto: 15.0,
          valor_inicial: 19.5,
          valor_final: 33,
          descricao: 'Bata muito boa tipo muito muito boa mesmo',
          imagem: '../../../assets/img/home-icons/garfo_faca_outline.png',
        },
        {
          id_variacao: 1,
          nome: 'Angu',
          valor_desconto: 15.0,
          valor_inicial: 19.5,
          valor_final: 33,
          descricao: 'Bata muito boa tipo muito muito boa mesmo',
          imagem: '../../../assets/img/home-icons/garfo_faca_outline.png',
        },
      ],
    },
  ];

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
}
