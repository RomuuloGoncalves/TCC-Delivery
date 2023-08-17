import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

import Swiper from 'swiper';

@Component({
  selector: 'app-montagem-marmita',
  templateUrl: './montagem-marmita.page.html',
  styleUrls: ['./montagem-marmita.page.scss'],
})
export class MontagemMarmitaPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  marmita: Produto[] = [
    {
      NOME: 'Arroz',
      VARIACAO: {
        NOME: 'Branco',
        DESCRICAO: 'arroz branco cozido',
      },
    },
    {
      NOME: 'Feijão',
      VARIACAO: {
        NOME: 'Tropeiro',
        DESCRICAO: 'Feijão cozido',
      },
    },
    {
      NOME: 'Guarnição',
      VARIACAO: {
        NOME: 'Almondega',
        DESCRICAO: 'Almondega braba',
      },
    },
  ];

  ingredientes: Produto[] = [
    {
      NOME: 'Arroz',
      VARIACOES: [
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Integral',
          DESCRICAO: 'arroz integral cozido',
        },
        {
          NOME: 'À grega',
          DESCRICAO: 'arroz à grega cozido',
        },
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Integral',
          DESCRICAO: 'arroz integral cozido',
        },
        {
          NOME: 'À grega',
          DESCRICAO: 'arroz à grega cozido',
        },
      ],
    },
    {
      NOME: 'Feijão',
      VARIACOES: [
        {
          NOME: 'Branco',
          DESCRICAO: 'Feijão branco cozido',
        },
        {
          NOME: 'Integral',
          DESCRICAO: 'Feijão integral cozido',
        },
        {
          NOME: 'À grega',
          DESCRICAO: 'Feijão à grega cozido',
        },
      ],
    },
    {
      NOME: 'Mistura',
      VARIACOES: [
        {
          NOME: 'Branco',
          DESCRICAO: 'Mistura branco cozido',
        },
        {
          NOME: 'Integral',
          DESCRICAO: 'Mistura integral cozido',
        },
        {
          NOME: 'À grega',
          DESCRICAO: 'Mistura à grega cozido',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  proximoCard() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }

  voltarCard() {
    this.swiperRef?.nativeElement.swiper.slidePrev();
  }
}
