import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';

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

  breakpoints = {
    576: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  };

  marmita: GrupoVariacoes[] = [];

  precoMarmtia: number = 0.00;
  qtddMarmita: number = 1;
  total: number = 0.00

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
          VALOR_INICIAL: 20.0,
          VALOR_FINAL: 20.0,
        },
        {
          COD_VARIACAO: 2,
          NOME: 'Integral',
          DESCRICAO: 'HUMMMMMMMMMM',
          VALOR_INICIAL: 20.0,
          VALOR_FINAL: 20.0,
        },
        {
          COD_VARIACAO: 3,
          NOME: 'Grego',
          DESCRICAO: 'HUMMMMMMMMMM',
          VALOR_INICIAL: 20.0,
          VALOR_FINAL: 20.0,
        },
      ],
    },
    {
      COD_GRUPO_VARIACOES: 1,
      TIPO: 'Acompanhamentos',
      MULTISELECIONAVEL: true,
      VARIACOES: [
        {
          COD_VARIACAO: 4,
          NOME: 'mandioquinha',
          DESCRICAO: 'mandioca frita',
          VALOR_INICIAL: 20.0,
          VALOR_FINAL: 20.0,
        },
        {
          COD_VARIACAO: 5,
          NOME: 'Filé',
          DESCRICAO: 'Filé zica',
          VALOR_INICIAL: 20.0,
          VALOR_FINAL: 20.0,
        },
        {
          COD_VARIACAO: 6,
          NOME: 'Filé Acebolado',
          DESCRICAO: 'Filé acebolado zika',
          VALOR_INICIAL: 20.0,
          VALOR_FINAL: 20.0,
        },
        {
          COD_VARIACAO: 7,
          NOME: 'Patinho',
          DESCRICAO: 'Quack Quack zica',
          VALOR_INICIAL: 20.0,
          VALOR_FINAL: 20.0,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  proximoCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slideNext();
  }

  voltarCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slidePrev();
  }

  private adicionarIngredienteMarmita(
    ingrediente: GrupoVariacoes,
    variacoes: Variacao[]
  ) {
    const objFinal: GrupoVariacoes = {
      TIPO: ingrediente.TIPO,
      COD_GRUPO_VARIACOES: ingrediente.COD_GRUPO_VARIACOES,
      COD_VARIACAO: ingrediente.COD_VARIACAO,
      VARIACOES: variacoes,
    };
    this.marmita.push(objFinal);
  }

  selecionarIndividuais(idIngrediente: number, event: any) {
    const ingrediente: GrupoVariacoes = this.ingredientes[idIngrediente];
    const idVariacao: number = event.detail.value;
    const variacao: Variacao = ingrediente.VARIACOES![idVariacao];

    this.marmita.forEach((ingredienteMarmita: GrupoVariacoes, id: number) => {
      ingredienteMarmita.COD_GRUPO_VARIACOES === ingrediente.COD_GRUPO_VARIACOES
        ? this.marmita.splice(id, 1)
        : null;
    });
    this.adicionarIngredienteMarmita(ingrediente, [variacao]);
  }

  selecionarMultiSelecionaveis(
    idIngrediente: number,
    idVariacao: number,
    event: any
  ) {
    const ingrediente: GrupoVariacoes = this.ingredientes[idIngrediente];
    const variacao: Variacao = ingrediente.VARIACOES![idVariacao];
    const adicionarVariacao: boolean = event.detail.checked;
    let adicionado: boolean = false;

    if (adicionarVariacao) {
      this.marmita.forEach((ingredienteMarmita: GrupoVariacoes) => {
        ingredienteMarmita.COD_GRUPO_VARIACOES! === ingrediente.COD_GRUPO_VARIACOES!
          ? (ingredienteMarmita.VARIACOES?.push(variacao), (adicionado = true))
          : null;
      });

      !adicionado
        ? this.adicionarIngredienteMarmita(ingrediente, [variacao])
        : null;
    } else {
      this.marmita.forEach((ingredienteMarmita: GrupoVariacoes, id: number) => {
        if (ingredienteMarmita.COD_GRUPO_VARIACOES! === ingrediente.COD_GRUPO_VARIACOES!) {
          ingredienteMarmita.VARIACOES?.forEach((variacaoMarmita: Variacao, id: number) => {
            (variacaoMarmita.COD_VARIACAO === variacao.COD_VARIACAO)
              ? ingredienteMarmita.VARIACOES?.splice(id, 1)
              : null
          });

          (!ingredienteMarmita.VARIACOES?.length)
            ? this.marmita.splice(id, 1)
            : null;
        }
      });
    }
  }

  calcPrecoMarmita() {
    this.precoMarmtia = this.marmita.reduce((preco: number, ingredienteMarmita: GrupoVariacoes) => {
      const totalVariacoes = ingredienteMarmita.VARIACOES?.reduce((preco: number, variacaoMarmita: Variacao) => {
        return preco + variacaoMarmita.VALOR_FINAL!;
      }, 0);
      return preco + totalVariacoes!;
    }, 0);
    this.calcTotal();
  }

  calcTotal() {
    this.total = this.precoMarmtia * this.qtddMarmita
  }
}
