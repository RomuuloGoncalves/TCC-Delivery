import { Component, OnInit } from '@angular/core';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  filtrar: { [chave: string]: boolean } = {
    "marmita": true,
    "bebida": true,
    "combo": true,
    "acompanhamento": true
  }

  selectedOptions: string[] = ["marmita", "bebida", "combo", "acompanhamento"]

  filtrarSelecao(e: any) {
    console.log(e.detail.value);
    console.log(this.filtrar[e.detail.value])
    for (const [chave, valor] of Object.entries(this.filtrar)) {
      this.filtrar[chave] = false
    }

    e.detail.value.forEach((chave: any) => {
      if (this.filtrar.hasOwnProperty(chave)) {
        this.filtrar[chave] = true; // Definir o valor booleano como true se a chave existir no objeto
      }
    });
  }
  // "marmitas": [
  //   {"Tamanho": [
  //     "P", "G", "M"
  //   ]},
  //   {"Arroz":[
  //     "Integral", "Branco", "A grega"
  //   ]},
  //   {"Feijão":[
  //     "Carioca", "Preto", "Tropeiro"
  //   ]},
  //   {"Mistura":[
  //     "Frango", "Bisteca", "Linguiça"
  //   ]},
  //   {"Acompanhamento":[
  //     "Batata Frita", "Mandioca", "Pipoca"
  //   ]}
  // ],
  // "Bebidas": [
  //   {"Tamanho":[

  //   ]},
  //   "Sabor",
  // ],
  // "Combos": [
  //   "Fé",
  //   "Muita Fé",
  //   "Muita muita fé mesmo"
  // ],

  criarFormularoProduto: Produto[] = [
    //Marmitas
    {
      NOME: "Marmita",
      GRUPO_VARIACOES: [
        {
          TIPO: "Arroz",
          VARIACOES: [
            {
              NOME: "Arroz",
              DESCRICAO: "arroz branco cozido",
              VALOR_DESCONTO: 5,
              VALOR_INICIAL: 10,
              VALOR_FINAL: 5,
              IMAGEM: "../../..",
            },
            {
              NOME: "Arroz",
              DESCRICAO: "arroz branco cozido",
              VALOR_DESCONTO: 5,
              VALOR_INICIAL: 10,
              VALOR_FINAL: 5,
              IMAGEM: "../../..",
            },
            {
              NOME: "Integral",
              DESCRICAO: "arroz branco cozido",
              VALOR_DESCONTO: 5,
              VALOR_INICIAL: 10,
              VALOR_FINAL: 5,
              IMAGEM: "../../..",
            },
            {
              NOME: "a grega",
              DESCRICAO: "arroz branco cozido",
              VALOR_DESCONTO: 5,
              VALOR_INICIAL: 10,
              VALOR_FINAL: 5,
              IMAGEM: "../../..",
            },
          ]
        },
        {
          TIPO: "Feijão",
          VARIACOES: [
            {
              NOME: "Carioca",
              DESCRICAO: "feijao carioca cozido na pressão",
              VALOR_DESCONTO: 2,
              VALOR_INICIAL: 6,
              VALOR_FINAL: 4,
              IMAGEM: "../../../../../",
            },
            {
              NOME: "tropero",
              DESCRICAO: "feijao carioca cozido na pressão",
              VALOR_DESCONTO: 2,
              VALOR_INICIAL: 6,
              VALOR_FINAL: 4,
              IMAGEM: "../../../../../",
            },
            {
              NOME: "preto",
              DESCRICAO: "feijao carioca cozido na pressão",
              VALOR_DESCONTO: 2,
              VALOR_INICIAL: 6,
              VALOR_FINAL: 4,
              IMAGEM: "../../../../../",
            },
          ]
        },
        {
          TIPO: "Mistura",
          VARIACOES: [
            {
              NOME: "Parmegiana",
              DESCRICAO: "Frango queijo sexo",
              VALOR_DESCONTO: 1,
              VALOR_INICIAL: 12,
              VALOR_FINAL: 11,
            },
            {
              NOME: "feijoado",
              DESCRICAO: "Frango queijo sexo",
              VALOR_DESCONTO: 1,
              VALOR_INICIAL: 12,
              VALOR_FINAL: 11,
            },
            {
              NOME: "sua mae",
              DESCRICAO: "Frango queijo sexo",
              VALOR_DESCONTO: 1,
              VALOR_INICIAL: 12,
              VALOR_FINAL: 11,
            },
          ]
        },
        {
          TIPO: "Acompanhamento",
          VARIACOES: [
            {
              NOME: "Batata",
              DESCRICAO: "fritas",
              VALOR_DESCONTO: 1,
              VALOR_INICIAL: 4,
              VALOR_FINAL: 3,
            },
            {
              NOME: "Mandioca",
              DESCRICAO: "fritas",
              VALOR_DESCONTO: 1,
              VALOR_INICIAL: 4,
              VALOR_FINAL: 3,
            },
            {
              NOME: "pure",
              DESCRICAO: "fritas",
              VALOR_DESCONTO: 1,
              VALOR_INICIAL: 4,
              VALOR_FINAL: 3,
            },
          ]
        },
        {
          TIPO: "Tamanho",
          VARIACOES: [
            {
              NOME: "P",
              DESCRICAO: "Marmita respectiva",
              VALOR_INICIAL: 10,
              VALOR_FINAL: 10,
            },
            {
              NOME: "M",
              DESCRICAO: "Marmita respectiva",
              VALOR_INICIAL: 10,
              VALOR_FINAL: 10,
            },
            {
              NOME: "G",
              DESCRICAO: "Marmita respectiva",
              VALOR_INICIAL: 10,
              VALOR_FINAL: 10,
            },
          ]
        },
      ]
    },

    //Produtos
    {
      NOME: "Coca-cola",
      GRUPO_VARIACOES: [
        {
          TIPO: "Tamanho",
          VARIACOES: [
            {
              NOME: "2L",
              DESCRICAO: "coca cola muito boa",
              VALOR_DESCONTO: 5,
              VALOR_INICIAL: 10,
              VALOR_FINAL: 5,
              IMAGEM: "../../..",
            },
            {
              NOME: "1L",
              DESCRICAO: "coca cola muito boa",
              VALOR_DESCONTO: 5,
              VALOR_INICIAL: 10,
              VALOR_FINAL: 5,
              IMAGEM: "../../..",
            },
            {
              NOME: "0.6L",
              DESCRICAO: "coca cola muito boa",
              VALOR_DESCONTO: 5,
              VALOR_INICIAL: 10,
              VALOR_FINAL: 5,
              IMAGEM: "../../..",
            },

          ]
        },
        {
          TIPO: "Sabor",
          VARIACOES: [
            {
              NOME: "Café",
              DESCRICAO: "ruim",
              VALOR_DESCONTO: 2,
              VALOR_INICIAL: 6,
              VALOR_FINAL: 4,
              IMAGEM: "../../../../../",
            },
            {
              NOME: "Normal",
              DESCRICAO: "Muito boa",
              VALOR_DESCONTO: 2,
              VALOR_INICIAL: 6,
              VALOR_FINAL: 4,
              IMAGEM: "../../../../../",
            },
            {
              NOME: "Sem açucar",
              DESCRICAO: "Boa",
              VALOR_DESCONTO: 2,
              VALOR_INICIAL: 6,
              VALOR_FINAL: 4,
              IMAGEM: "../../../../../",
            },
          ]
        },
      ]
    }
  ]

  marmitas: Produto[] = [
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Batata muito boa tipo muito muito boa mesmo',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 2,
      NOME: 'Frango',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Frango Grelhado',
        VALOR_DESCONTO: 10.00,
        VALOR_INICIAL: 25.00,
        DESCRICAO: 'Peito de frango grelhado com temperos especiais',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 3,
      NOME: 'Salada',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Salada Fresca',
        VALOR_DESCONTO: 8.00,
        VALOR_INICIAL: 12.50,
        DESCRICAO: 'Mix de folhas frescas com vegetais diversos',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 4,
      NOME: 'Lasanha',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Lasanha à Bolonhesa',
        VALOR_DESCONTO: 20.00,
        VALOR_INICIAL: 32.00,
        DESCRICAO: 'Lasanha tradicional com carne bolonhesa',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 5,
      NOME: 'Sushi',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Sushi Variado',
        VALOR_DESCONTO: 25.00,
        VALOR_INICIAL: 45.00,
        DESCRICAO: 'Combinação variada de sushis e sashimis',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 6,
      NOME: 'Hambúrguer',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Hambúrguer Clássico',
        VALOR_DESCONTO: 12.00,
        VALOR_INICIAL: 18.50,
        DESCRICAO: 'Hambúrguer com carne suculenta e molhos especiais',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 7,
      NOME: 'Pizza',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Pizza Margherita',
        VALOR_DESCONTO: 18.00,
        VALOR_INICIAL: 26.00,
        DESCRICAO: 'Pizza com molho de tomate, queijo e manjericão',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 8,
      NOME: 'Massa',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Massa ao Pesto',
        VALOR_DESCONTO: 14.00,
        VALOR_INICIAL: 21.50,
        DESCRICAO: 'Massa com molho pesto e pinhões',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 9,
      NOME: 'Taco',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Taco Mexicano',
        VALOR_DESCONTO: 10.00,
        VALOR_INICIAL: 16.00,
        DESCRICAO: 'Taco recheado com carne, feijão e vegetais',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 10,
      NOME: 'Peixe',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Peixe Grelhado',
        VALOR_DESCONTO: 16.00,
        VALOR_INICIAL: 28.00,
        DESCRICAO: 'Filé de peixe grelhado com temperos leves',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    }
  ]

  bebidas: Produto[] = [
    {
      COD_PRODUTO: 11,
      NOME: 'Refrigerante',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Coca-Cola',
        VALOR_DESCONTO: 5.00,
        VALOR_INICIAL: 7.00,
        DESCRICAO: 'Refrigerante Coca-Cola gelado',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 12,
      NOME: 'Suco',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Suco de Laranja',
        VALOR_DESCONTO: 6.00,
        VALOR_INICIAL: 9.00,
        DESCRICAO: 'Suco natural de laranja fresca',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 13,
      NOME: 'Água',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Água Mineral',
        VALOR_DESCONTO: 2.50,
        VALOR_INICIAL: 3.50,
        DESCRICAO: 'Garrafa de água mineral 500ml',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 14,
      NOME: 'Café',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Café Espresso',
        VALOR_DESCONTO: 3.00,
        VALOR_INICIAL: 4.50,
        DESCRICAO: 'Café espresso quente e encorpado',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 15,
      NOME: 'Chá',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Chá de Camomila',
        VALOR_DESCONTO: 4.00,
        VALOR_INICIAL: 5.50,
        DESCRICAO: 'Chá de camomila calmante e reconfortante',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    }
  ]

  combos: Produto[] = [
    {
      COD_PRODUTO: 21,
      NOME: 'Combo Família',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Combo Clássico',
        VALOR_DESCONTO: 25.00,
        VALOR_INICIAL: 35.00,
        DESCRICAO: 'Combo com marmita, refrigerante e sobremesa',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 22,
      NOME: 'Combo Fitness',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Combo Saudável',
        VALOR_DESCONTO: 20.00,
        VALOR_INICIAL: 28.00,
        DESCRICAO: 'Combo com salada, suco e fruta',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 23,
      NOME: 'Combo Cinema',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Combo Diversão',
        VALOR_DESCONTO: 18.00,
        VALOR_INICIAL: 24.00,
        DESCRICAO: 'Combo com pipoca, refrigerante e doce',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    }
  ]

  acompanhamentos: Produto[] = [
    {
      COD_PRODUTO: 31,
      NOME: 'Fritas',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 5.00,
        VALOR_INICIAL: 7.00,
        DESCRICAO: 'Porção de batata frita crocante',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 32,
      NOME: 'Legumes',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Legumes Salteados',
        VALOR_DESCONTO: 6.00,
        VALOR_INICIAL: 9.00,
        DESCRICAO: 'Mix de legumes frescos salteados na manteiga',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    },
    {
      COD_PRODUTO: 33,
      NOME: 'Arroz',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Arroz Branco',
        VALOR_DESCONTO: 3.00,
        VALOR_INICIAL: 5.00,
        DESCRICAO: 'Porção de arroz branco soltinho',
        VALOR_FINAL: 23.00,
        IMAGEM: ''
      }
    }
  ]
}



