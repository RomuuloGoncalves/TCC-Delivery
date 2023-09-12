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

  marmita: Produto[] = [];

  ingredientes: Produto[] = [
    {
      NOME: 'Arroz',
      VARIACOES: [
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
        },
        {
          NOME: 'Branco',
          DESCRICAO: 'arroz branco cozido',
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
          NOME: 'Preto',
          DESCRICAO: 'feijão preto cozido',
        },
        {
          NOME: 'Carioquinha',
          DESCRICAO: 'feijão carioquinha cozido',
        },
        {
          NOME: 'Fradinho',
          DESCRICAO: 'feijão fradinho cozido',
        },
      ],
    },
    {
      NOME: 'Salada',
      VARIACOES: [
        {
          NOME: 'Alface',
          DESCRICAO: 'Alface verdinha',
        },
        {
          NOME: 'Pepino',
          DESCRICAO: 'Pepino fresquinho',
        },
        {
          NOME: 'Couve',
          DESCRICAO: 'Couve ralada  ',
        },
      ],
    },
  ];

  acompanhamentos: GrupoVariacoes = {
    COD_GRUPO_VARIACOES: 1,
    TIPO: "Acompanhamentos",
    VARIACOES: [
      {
        COD_VARIACAO: 1,
        NOME: "mandioquinha",
        DESCRICAO: "mandioca frita",
        VALOR_INICIAL: 20.00,
        VALOR_FINAL: 20.00,
      }
    ]

  };

  constructor() {}

  ngOnInit() {}


  proximoCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slideNext();
  }

  voltarCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slidePrev();
  }

  selecionarIngrediente(event: any) {
    const ingredienteNome = event.target.attributes['ng-reflect-value'].nodeValue;
    const variacaoNome = event.detail.value;

    const ingredienteObj = this.ingredientes.find((ingrediente: Produto) => {
      return ingrediente.NOME === ingredienteNome;
    });

    const variacaoObj = ingredienteObj?.VARIACOES?.find((variacao: Variacao) => {
      return variacao.NOME === variacaoNome;
    });

    this.marmita.filter((produto: Produto, id: number) => {
      if (produto.NOME === ingredienteNome)
        this.marmita.splice(id, 1);
    })

    this.marmita.push({
      NOME: ingredienteObj!.NOME,
      VARIACAO: variacaoObj,
    });
  }

  selecionarAcompanhamento(event: any) {


  }

}
