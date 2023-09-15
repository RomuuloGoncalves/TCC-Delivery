import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';

import Swiper from 'swiper';

@Component({
  selector: 'app-montagem-marmita',
  templateUrl: './montagem-marmita.page.html',
  styleUrls: ['./montagem-marmita.page.scss'],
})
export class MontagemMarmitaPage implements OnInit {

  qtddMarmita: number = 0;

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper

  breakpoints= {
      576: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
  }

  marmita: GrupoVariacoes[] = [
  ];

  ingredientes: GrupoVariacoes[] = [
    {
      TIPO: 'Arroz',
      COD_PROD: 2,
      COD_GRUPO_VARIACOES: 3,

      VARIACOES: [
        {
          COD_VARIACAO: 1,
          NOME: 'Branco',
          DESCRICAO: 'HUMMMMMMMMMM',
          VALOR_INICIAL: 20.00,
          VALOR_FINAL: 20.00,
        },
        {
          COD_VARIACAO: 2,
          NOME: 'Integral',
          DESCRICAO: 'HUMMMMMMMMMM',
          VALOR_INICIAL: 20.00,
          VALOR_FINAL: 20.00,
        },
        {
          COD_VARIACAO: 3,
          NOME: 'Grego',
          DESCRICAO: 'HUMMMMMMMMMM',
          VALOR_INICIAL: 20.00,
          VALOR_FINAL: 20.00,
        },
      ]
    },
    {
      COD_GRUPO_VARIACOES: 1,
      TIPO: "Acompanhamentos",
      MULTISELECIONAVEL: true,
      VARIACOES: [
        {
          COD_VARIACAO: 4,
          NOME: "mandioquinha",
          DESCRICAO: "mandioca frita",
          VALOR_INICIAL: 20.00,
          VALOR_FINAL: 20.00,
        },
        {
          COD_VARIACAO: 5,
          NOME: "Filé",
          DESCRICAO: "Filé zica",
          VALOR_INICIAL: 20.00,
          VALOR_FINAL: 20.00,
        },
        {
          COD_VARIACAO: 5,
          NOME: "Filé Acebolado",
          DESCRICAO: "Filé acebolado zika",
          VALOR_INICIAL: 20.00,
          VALOR_FINAL: 20.00,
        },
        {
          COD_VARIACAO: 5,
          NOME: "Patinho",
          DESCRICAO: "Quack Quack zica",
          VALOR_INICIAL: 20.00,
          VALOR_FINAL: 20.00,
        },
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}


  proximoCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slideNext();
  }

  voltarCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slidePrev();
  }

  selecionarIndividuais(event: any) {
    console.log(event)
  }

  selecionarMultiSelecionaveis(idIngrediente: number, idVariacao: number, event: any) {
    console.log(event)
  }

}
