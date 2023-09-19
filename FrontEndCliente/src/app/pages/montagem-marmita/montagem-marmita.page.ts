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
      tipo: 'Arroz',
      id_produto: 2,
      id_grupo_variacoes: 3,

      variacoes: [
        {
          id_variacao: 1,
          nome: 'Branco',
          descricao: 'HUMMMMMMMMMM',
          valor_inicial: 7.0,
          valor_final: 5.0,
        },
        {
          id_variacao: 2,
          nome: 'Integral',
          descricao: 'HUMMMMMMMMMM',
          valor_inicial: 8.0,
          valor_final: 8.0,
        },
        {
          id_variacao: 3,
          nome: 'Grego',
          descricao: 'HUMMMMMMMMMM',
          valor_inicial: 6.0,
          valor_final: 6.0,
        },
      ],
    },
    {
      tipo: 'Feijão',
      id_produto: 5,
      id_grupo_variacoes: 4,

      variacoes: [
        {
          id_variacao: 5,
          nome: 'Tutu',
          descricao: 'HUMMMMMMMMMM',
          valor_inicial: 7,
          valor_final: 6,
        },
        {
          id_variacao: 6,
          nome: 'Branco',
          descricao: 'HUMMMMMMMMMM',
          valor_inicial: 10,
          valor_final: 8.5,
        },
        {
          id_variacao: 7,
          nome: 'Preto',
          descricao: 'HUMMMMMMMMMM',
          valor_inicial: 11.0,
          valor_final: 9.99,
        },
      ],
    },
    {
      id_grupo_variacoes: 1,
      tipo: 'Acompanhamentos',
      qtdd_max: 3,

      variacoes: [
        {
          id_variacao: 4,
          nome: 'mandioquinha',
          descricao: 'mandioca frita',
          valor_inicial: 8.0,
          valor_final: 8.0,
        },
        {
          id_variacao: 5,
          nome: 'Filé',
          descricao: 'Filé zica',
          valor_inicial: 11.0,
          valor_final: 9.49,
        },
        {
          id_variacao: 6,
          nome: 'Filé Acebolado',
          descricao: 'Filé acebolado zika',
          valor_inicial: 11.0,
          valor_final: 9.49,
        },
        {
          id_variacao: 7,
          nome: 'Patinho',
          descricao: 'Quack Quack zica',
          valor_inicial: 10,
          valor_final: 9.49,
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
      tipo: ingrediente.tipo,
      id_grupo_variacoes: ingrediente.id_grupo_variacoes,
      id_variacao: ingrediente.id_variacao,
      variacoes: variacoes,
    };
    this.marmita.push(objFinal);
  }

  selecionarIndividuais(idIngrediente: number, event: any) {
    const ingrediente: GrupoVariacoes = this.ingredientes[idIngrediente];
    const idVariacao: number = event.detail.value;
    const variacao: Variacao = ingrediente.variacoes![idVariacao];

    this.marmita.forEach((ingredienteMarmita: GrupoVariacoes, id: number) => {
      ingredienteMarmita.id_grupo_variacoes === ingrediente.id_grupo_variacoes
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
    const variacao: Variacao = ingrediente.variacoes![idVariacao];
    const adicionarVariacao: boolean = event.detail.checked;
    let adicionado: boolean = false;

    if (adicionarVariacao) {
      this.marmita.forEach((ingredienteMarmita: GrupoVariacoes) => {
        ingredienteMarmita.id_grupo_variacoes! === ingrediente.id_grupo_variacoes!
          ? (ingredienteMarmita.variacoes?.push(variacao), (adicionado = true))
          : null;
      });

      !adicionado
        ? this.adicionarIngredienteMarmita(ingrediente, [variacao])
        : null;
    } else {
      this.marmita.forEach((ingredienteMarmita: GrupoVariacoes, id: number) => {
        if (ingredienteMarmita.id_grupo_variacoes! === ingrediente.id_grupo_variacoes!) {
          ingredienteMarmita.variacoes?.forEach((variacaoMarmita: Variacao, id: number) => {
            (variacaoMarmita.id_variacao === variacao.id_variacao)
              ? ingredienteMarmita.variacoes?.splice(id, 1)
              : null
          });

          (!ingredienteMarmita.variacoes?.length)
            ? this.marmita.splice(id, 1)
            : null;
        }
      });
    }
  }

  calcPrecoMarmita() {
    this.precoMarmtia = this.marmita.reduce((preco: number, ingredienteMarmita: GrupoVariacoes) => {
      const totalVariacoes = ingredienteMarmita.variacoes?.reduce((preco: number, variacaoMarmita: Variacao) => {
        return preco + variacaoMarmita.valor_final!;
      }, 0);
      return preco + totalVariacoes!;
    }, 0);
    this.calcTotal();
  }

  calcTotal() {
    this.total = this.precoMarmtia * this.qtddMarmita
  }
}
