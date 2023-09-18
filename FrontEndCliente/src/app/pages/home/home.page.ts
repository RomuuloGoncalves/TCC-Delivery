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
  swiper?: Swiper


  constructor() { }

  ngOnInit() { }

  breakpoints = {
    975: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    976: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }

  loading: boolean = false;

  produtos: Produto[] = [
    {
      COD_PRODUTO: 1,
      NOME: 'Porções',
      VARIACOES: [
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 33,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Mandioca Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 33,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Frango Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 33,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        }
      ]
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Doces',
      VARIACOES: [
        {
          COD_VARIACAO: 1,
          NOME: 'Pudim',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 33,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Arroz Doce',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 33,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Angu',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 33,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        }
      ]
    },
  ];

  produtosFiltrados: Produto[] = [...this.produtos];

  filtrar(event: any) {
    const pesquisa: string = event.detail.value.toLowerCase().trim();

    this.produtosFiltrados = [...
        this.produtos.map((produto: Produto) => {
        const nProduto: Produto = {
          COD_PRODUTO: produto.COD_PRODUTO,
          NOME: produto.NOME,
          VARIACOES: [
            ...produto.VARIACOES!.filter((variacao: Variacao) => {
              return variacao.NOME.toLowerCase().trim().startsWith(pesquisa);
          })]
        };
        return nProduto;
      })
    ];

    this.produtosFiltrados = [...this.produtosFiltrados.filter((produto: Produto) => {
      return produto.VARIACOES?.length;
    })];
  }
}
