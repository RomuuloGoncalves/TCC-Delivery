import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-montagem-marmita',
  templateUrl: './montagem-marmita.page.html',
  styleUrls: ['./montagem-marmita.page.scss'],
})
export class MontagemMarmitaPage implements OnInit {

  opcaoSelecionada = {
    "arroz" : "branco",
    "feijao" : "carioca",
    "mistura" : "",
    "acompanhamento" : ""
  }

  marmita = {
    "arroz": {
      "grup_var": "arroz",
      "variacao": "branco",
    },
    "feijao": {
      "grup_var": "feijão",
      "variacao": "carioca",
    },
    "guarnicao": {
      "grup_var": "guarnição",
      "variacao": "",
    },
    "acompanhamento": {
      "grup_var": "acompanhamento",
      "variacao": "",
      // "variacao": [
      //   "farofa",
      //   "batata frita"
      // ]
    },
  }

  ingredientes = {
    "arroz" : [
      "branco",
      "integral",
      "à grega",
      "basmati",
      "jasmin",
      "selvagem",
      "preto",
      "vermelho",
    ],
    "feijao" : [
      "carioca",
      "preto",
      "branco",
      "vermelho",
      "fradinho",
      "azuki",
      "mungo",
      "pinto",
    ],
    "mistura" : [
      "feijoada",
      "farofa com carne",
      "baião de dois",
      "acarajé com vatapá",
      "moqueca de peixe",
      "escondidinho",
      "tutu de feijão",
      "bobó de camarão",
    ],
    "acompanhamento" : [
      "farofa",
      "vinagrete",
      "mandioca frita",
      "couve refogada",
      "pão de queijo",
      "banana-da-terra frita",
      "salada de maionese",
      "batata palha",
    ],
  }

  constructor() { }

  ngOnInit() {
    
  }

  trocarOpcao(opcao?: string) {
    if (opcao == 'arroz') {
      this.marmita.arroz.variacao = this.opcaoSelecionada.arroz
    }
    if (opcao == 'feijao') {
      this.marmita.feijao.variacao = this.opcaoSelecionada.feijao
    }
    if (opcao == 'mistura') {
      this.marmita.guarnicao.variacao = this.opcaoSelecionada.mistura
    }
    if (opcao == 'acompanhamento') {
      this.marmita.acompanhamento.variacao = this.opcaoSelecionada.acompanhamento
    }
  }

}
