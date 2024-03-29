import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';

import Swiper from 'swiper';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { Produto } from 'src/app/core/interfaces/produto';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { ToastService } from 'src/app/core/controller/toast.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-montagem-marmita',
  templateUrl: './montagem-marmita.page.html',
  styleUrls: ['./montagem-marmita.page.scss'],
})
export class MontagemMarmitaPage implements OnInit {
  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private toastService: ToastService
  ) {}

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  marmita: GrupoVariacoes[] = [];

  precoMarmita: number = 0.0;
  qtddMarmita: number = 1;
  observacao: string = '';
  total: number = 0.0;

  ingredientes!: Produto;

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

  loadingAdicionar: boolean = false;

  ngOnInit() {
    this.atualizarMarmita();
    this.carregarMarmita();
  }

  marmitaPersonalizada!: Produto;
  loading: boolean = true;

  private carregarMarmita() {
    this.produtoService.pegarProduto(1).subscribe(
      (response: Produto) => {
        this.marmitaPersonalizada = response;
        this.ingredientes = response;
        this.loading = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  attObservacao(event: any) {
    const value = event.target.value;
    this.observacao = value;
  }

  selecionarIngrediente(idIngrediente: number, idVariacao: number, event: any) {
    if (this.ingredientes && this.ingredientes.grupo_variacao) {
      const grupo = this.ingredientes.grupo_variacao[idIngrediente];
      if (grupo && grupo.variacao) {
        grupo.variacao[idVariacao].selecionado = event.detail.checked;
      }
    }

    this.atualizarMarmita();
  }

  private atualizarMarmita() {
    this.marmita = [];
    if (this.ingredientes && this.ingredientes.grupo_variacao) {
      this.ingredientes.grupo_variacao.forEach(
        (ingrediente: GrupoVariacoes) => {
          const variacoesSelecionadas: Variacao[] = [];
          ingrediente.variacao!.forEach((variacao: Variacao) => {
            variacao.selecionado ? variacoesSelecionadas.push(variacao) : null;
          });
          if (variacoesSelecionadas.length)
            this.marmita.push({
              id: ingrediente.id,
              tipo: ingrediente.tipo,
              variacao: variacoesSelecionadas,
            });
        }
      );
    }
  }

  calcPrecoMarmita() {
    this.precoMarmita = 0;
    this.marmita.forEach((grupoVariacao) => {
      grupoVariacao.variacao?.forEach((variacao) => {
        if (variacao.valor) this.precoMarmita += variacao.valor;
      });
    });

    this.calcTotal();
  }

  adicionarMarmita() {
    this.loadingAdicionar = true;
    const objMarmita = {
      id: this.marmitaPersonalizada.id,
      quantidade: this.qtddMarmita,
      grupo_variacao: this.marmita,
      observacao: this.observacao,
    };

    this.carrinhoService.adicionarProduto(objMarmita).subscribe(
      (response: any) => {
        this.toastService.mostrarToast(
          'sucesso',
          'Produto adicionado ao carrinho!'
        );
        setTimeout(() => {
          location.reload();
        }, 500);
        this.loadingAdicionar = false;
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse);
      }
    );
  }

  calcTotal() {
    this.total = this.precoMarmita * this.qtddMarmita;
  }

  ehVariacaoDisabled(ingrediente: GrupoVariacoes, variacao: Variacao) {
    if (!ingrediente.quantidade_variacoes_max) return false;

    const idIngrediente = this.marmita.findIndex(
      (ingredienteMarmita: GrupoVariacoes) =>
        ingrediente.id === ingredienteMarmita.id
    );

    if (idIngrediente <= -1) return false;

    const ingredienteMarmita = this.marmita[idIngrediente];

    if (ingredienteMarmita.variacao!.indexOf(variacao) >= 0) return false;

    return (
      ingredienteMarmita.variacao!.length >=
      ingrediente.quantidade_variacoes_max
    );
  }

  proximoCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slideNext();
  }

  voltarCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slidePrev();
  }
}
