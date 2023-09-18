import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

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
    576: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }

  produtos: Produto[] = [
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
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
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 33,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
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
      NOME: 'Batata',
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
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 33,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 33,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        }
      ]
    },
  ]

}
