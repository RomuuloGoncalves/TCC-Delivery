import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';

import Swiper from 'swiper';
import { PassarMarmitaService } from 'src/app/core/services/passar-marmita.service';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-montagem-marmita',
  templateUrl: './montagem-marmita.page.html',
  styleUrls: ['./montagem-marmita.page.scss'],
})
export class MontagemMarmitaPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  marmita: GrupoVariacoes[] = [];

  precoMarmita: number = 0.0;
  qtddMarmita: number = 1;
  total: number = 0.0;

  ingredientes!: Produto;

  constructor(
    private passarMarmita: PassarMarmitaService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.atualizarMarmita();
    this.carregarMarmita();
  }

  marmitaPersonalizavel!: Produto;
  loading: boolean = true;

  private carregarMarmita() {
    // _______________________ trocar por 6 (SEIS) depois __________________________
    this.produtoService.pegarProduto(1).subscribe(
      (response: Produto) => {
        this.marmitaPersonalizavel = response;
        this.ingredientes = response;
        this.loading = false;
      },
      (error) => {
        console.error(error);
      }
    );
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
          this.marmita.push({
            id: ingrediente.id,
            tipo: ingrediente.tipo,
            variacao: variacoesSelecionadas,
          });
        }
      );
    }
    console.log("marmita",this.marmita);
  }

  calcPrecoMarmita() {
    this.precoMarmita = 0
    this.marmita.forEach(grupoVariacao => {
      console.log(grupoVariacao)
      grupoVariacao.variacao?.forEach(variacao => {
        if (variacao.valor_inicial)
          this.precoMarmita += variacao.valor_inicial
        console.log("valor",variacao.valor_inicial)
      });
    });


    this.calcTotal();
  }

  calcTotal() {
    this.total = this.precoMarmita * this.qtddMarmita;
  }

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

  proximoCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slideNext();
  }

  voltarCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slidePrev();
  }
}
