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
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 2,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 2,
        NOME: 'Batata cozida',
        VALOR_DESCONTO: 10.00,
        VALOR_INICIAL: 14.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 3,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 3,
        NOME: 'Batata Doce',
        VALOR_DESCONTO: 17.00,
        VALOR_INICIAL: 21.00,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 4,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 4,
        NOME: 'Batata Chips',
        VALOR_DESCONTO: 20.00,
        VALOR_INICIAL: 25.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    }
  ]

}
