import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-montagem-marmita',
  templateUrl: './montagem-marmita.page.html',
  styleUrls: ['./montagem-marmita.page.scss'],
})
export class MontagemMarmitaPage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined
  swiper?: Swiper

  opcaoSelecionada = {
    arroz : {
      variacao: "branco",
      descricao: "arroz branco cozido"
    },
    feijao : {
      variacao: "carioca",
      descricao: "feijao carioca cozido"
    },
    mistura: {
      variacao: "",
      descricao: ""
    },
    acompanhamento : {
      variacao: "",
      descricao: ""
    },
  }

  marmita = {
    arroz: {
      produto : "arroz",
      grup_var: "nome/tipo",
      variacao: "branco",
      descricao: "arroz branco cozido"
    },
    feijao: {
      produto : "feijão",
      grup_var: "nome/tipo",
      variacao: "carioca",
      descricao: ""
    },
    guarnicao: {
      produto : "guarnição",
      grup_var: "nome/tipo",
      variacao: "",
      descricao: ""
    },
    acompanhamento: {
      produto : "acompanhamento",
      grup_var: "nome/tipo",
      variacao: "",
      descricao: ""
      // "variacao": [
      //   "farofa",
      //   "batata frita"
      // ]
    },
  }

  ingredientes = {
    arroz : [
      {
        variacao: "branco",
        descricao: "arroz branco cozido"
      },
      {
        variacao: "integral",
        descricao: "arroz integral cozido"
      },
      {
        variacao: "à grega",
        descricao: "arroz à grega cozido"
      },
      {
        variacao: "basmati",
        descricao: "arroz basmati cozido"
      },
      {
        variacao: "selvagem",
        descricao: "arroz selvagem cozido"
      },
      {
        variacao: "preto",
        descricao: "arroz preto cozido"
      },
      {
        variacao: "vermelho",
        descricao: "arroz vermelho cozido"
      },
    ],
    "feijao" : [
            {
        variacao: "carioca",
        descricao: "feijao carioca cozido"
      },
      {
        variacao: "preto",
        descricao: "feijao preto cozido"
      },
      {
        variacao: "branco",
        descricao: "feijao branco cozido"
      },
      {
        variacao: "vermelho",
        descricao: "feijao vermelho cozido"
      },
      {
        variacao: "fradinho",
        descricao: "feijao fradinho cozido"
      },
      {
        variacao: "azuki",
        descricao: "feijao azuki cozido"
      },
      {
        variacao: "pinto",
        descricao: "feijao pinto cozido"
      },
      {
        variacao: "mungo",
        descricao: "feijao mungo cozido"
      },
    ],
    "mistura" : [
            {
        variacao: "feijoada",
        descricao: "feijoada  de cria"
      },
      {
        variacao: "farofa com carne",
        descricao: "farofa com carne  de cria"
      },
      {
        variacao: "baião de dois",
        descricao: "baião de dois  de cria"
      },
      {
        variacao: "acarajé com vatapá",
        descricao: "acarajé com vatapá  de cria"
      },
      {
        variacao: "moqueca de peixe",
        descricao: "moqueca de peixe  de cria"
      },
      {
        variacao: "escondidinho",
        descricao: "escondidinho  de cria"
      },
      {
        variacao: "tutu de feijão",
        descricao: "tutu de feijão  de cria"
      },
      {
        variacao: "bobó de camarão",
        descricao: "bobó de camarão  de cria"
      },
    ],
    "acompanhamento" : [
            {
        variacao: "farofa",
        descricao: "farofa no capricho"
      },
      {
        variacao: "vinagrete",
        descricao: "vinagrete no capricho"
      },
      {
        variacao: "mandioca frita",
        descricao: "mandioca frita no capricho"
      },
      {
        variacao: "couve refogada",
        descricao: "couve refogada no capricho"
      },
      {
        variacao: "pão de queijo",
        descricao: "pão de queijo no capricho"
      },
      {
        variacao: "banana-da-terra frita",
        descricao: "banana-da-terra frita no capricho"
      },
      {
        variacao: "salada de maionese",
        descricao: "salada de maionese no capricho"
      },
      {
        variacao: "batata palha",
        descricao: "batata palha no capricho"
      },
      // "farofa",
      // "vinagrete",
      // "mandioca frita",
      // "",
      // "",
      // "banana-da-terra frita",
      // "salada de maionese",
      // "batata palha",
    ],
  }

  constructor() { }

  ngOnInit() {

  }
  
    proxCard() {
      console.log(this.swiperRef)
      this.swiperRef?.nativeElement.swiper.slideNext()
    }
  
    voltCard() {
      this.swiperRef?.nativeElement.swiper.slidePrev()
    }


  trocarOpcao(opcao?: string, event?: any) {
    (opcao == 'arroz') ? (
      this.opcaoSelecionada.arroz = event
    ) : ( opcao == 'feijao' ) ? (
      this.opcaoSelecionada.feijao = event
    ) : ( opcao == 'mistura' ) ? (
      this.opcaoSelecionada.mistura = event
    ) : ( opcao == 'acompanhamento') ? (
      this.opcaoSelecionada.acompanhamento = event
    ) : null
  }

  retirarProduto(produto: string, event: any) {
    (produto == 'arroz') ? (
      this.opcaoSelecionada.arroz = {
        variacao: "",
        descricao: ""
      }
    ) : ( produto == 'feijao' ) ? (
      this.opcaoSelecionada.feijao = {
        variacao: "",
        descricao: ""
      }
    ) : ( produto == 'mistura' ) ? (
      this.opcaoSelecionada.mistura = {
        variacao: "",
        descricao: ""
      }
    ) : ( produto == 'acompanhamento') ? (
      this.opcaoSelecionada.acompanhamento = {
        variacao: "",
        descricao: ""
      }
    ) : null
  }

}
