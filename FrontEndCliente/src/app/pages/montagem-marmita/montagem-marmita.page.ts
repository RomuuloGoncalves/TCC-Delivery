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

  ingredientes!: Produto

  constructor(private passarMarmita: PassarMarmitaService, private produtoService: ProdutoService) {}

  ngOnInit() {
    this.atualizarMarmita();
    console.log(this.passarMarmita.resgatarMarmita())
    this.carregarMarmita()
  }


  marmitaPersonalizavel!: Produto
  loading: boolean = true

  private carregarMarmita() {
    // _______________________ trocar por 6 (SEIS) depois __________________________
    this.produtoService.pegarProduto(5).subscribe(
      (response: Produto) => {
        this.ingredientes = response;
        this.loading = false
        console.log("marmita",this.marmitaPersonalizavel)
      },
      (error) => {
        console.error(error);
      }
    )
  }

  proximoCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slideNext();
  }

  voltarCard() {
    this.swiper = this.swiperRef?.nativeElement.swiper.slidePrev();
  }

  selecionarIngrediente(idIngrediente: number, idVariacao: number, event: any) {
    console.log(event.detail.checked)
    this.ingredientes.grupo_variacao?[idIngrediente].variacao[idVariacao].selecionado =
      event.detail.checked;
    this.atualizarMarmita();
    // console.log(this.ingredientes)
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

}
