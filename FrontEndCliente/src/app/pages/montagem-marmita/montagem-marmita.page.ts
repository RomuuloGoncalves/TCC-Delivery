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

  precoMarmita: number = 0.0;
  qtddMarmita: number = 1;
  total: number = 0.0;

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
          selecionado: false
        },
        {
          id_variacao: 2,
          nome: 'Integral',
          descricao: 'HUMMMMMMMMMM',
          valor_inicial: 8.0,
          valor_final: 8.0,
          selecionado: false
        },
        {
          id_variacao: 3,
          nome: 'Grego',
          descricao: 'HUMMMMMMMMMM',
          valor_inicial: 6.0,
          valor_final: 6.0,
          selecionado: false
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
          selecionado: false
        },
        {
          id_variacao: 6,
          nome: 'Branco',
          descricao: 'HUMMMMMMMMMM',
          valor_inicial: 10,
          valor_final: 8.5,
          selecionado: false
        },
        {
          id_variacao: 7,
          nome: 'Preto',
          descricao: 'HUMMMMMMMMMM',
          valor_inicial: 11.0,
          valor_final: 9.99,
          selecionado: false
        },
      ],
    },
    {
      id_grupo_variacoes: 1,
      tipo: 'Acompanhamentos',
      qtdd_max: 1,

      variacoes: [
        {
          id_variacao: 4,
          nome: 'mandioquinha',
          descricao: 'mandioca frita',
          valor_inicial: 8.0,
          valor_final: 8.0,
          selecionado: false
        },
        {
          id_variacao: 5,
          nome: 'Filé',
          descricao: 'Filé zica',
          valor_inicial: 11.0,
          valor_final: 9.49,
          selecionado: false
        },
        {
          id_variacao: 6,
          nome: 'Filé Acebolado',
          descricao: 'Filé acebolado zika',
          valor_inicial: 11.0,
          valor_final: 9.49,
          selecionado: false
        },
        {
          id_variacao: 7,
          nome: 'Patinho',
          descricao: 'Quack Quack zica',
          valor_inicial: 10,
          valor_final: 9.49,
          selecionado: false
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {
    this.atualizarMarmita();
  }

  proximoCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slideNext();
  }

  voltarCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slidePrev();
  }

  selecionarIngrediente(idIngrediente: number, idVariacao: number, event: any) {
    this.ingredientes[idIngrediente].variacoes![idVariacao].selecionado =
      event.detail.checked;
    this.atualizarMarmita();
    console.log(this.ingredientes)
  }

  private atualizarMarmita() {
    this.marmita = [];
    this.ingredientes.forEach((ingrediente: GrupoVariacoes) => {
      const variacoesSelecionadas: Variacao[] = [];
      ingrediente.variacoes!.forEach((variacao: Variacao) => {
        variacao.selecionado ? variacoesSelecionadas.push(variacao) : null;
      });
      this.marmita.push({
        id_grupo_variacoes: ingrediente.id_grupo_variacoes,
        tipo: ingrediente.tipo,
        variacoes: variacoesSelecionadas,
      });
    });
  }

  calcPrecoMarmita() {
    this.precoMarmita = this.marmita.reduce(
      (preco: number, ingredienteMarmita: GrupoVariacoes) => {
        const totalVariacoes = ingredienteMarmita.variacoes?.reduce(
          (preco: number, variacaoMarmita: Variacao) => {
            return preco + variacaoMarmita.valor_final!;
          }, 0);
        return preco + totalVariacoes!;
      } ,0);
    this.calcTotal();
  }

  calcTotal() {
    this.total = this.precoMarmita * this.qtddMarmita;
  }
}
