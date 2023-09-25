import { Component, OnInit, ViewChild } from '@angular/core';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  @ViewChild('popover') popover:any

  constructor() { }

  ngOnInit() {
  }

  isOpen = false;

  formularioPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
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


  marmitas: Produto[] = [
    {
      id_produto: 1,
      nome: 'Batata',
      variacao: {
        id_variacao: 1,
        nome: 'Batata Frita',
        valor_desconto: 15.00,
        valor_inicial: 19.50,
        descricao: 'Batata muito boa tipo muito muito boa mesmo',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 2,
      nome: 'Frango',
      variacao: {
        id_variacao: 1,
        nome: 'Frango Grelhado',
        valor_desconto: 10.00,
        valor_inicial: 25.00,
        descricao: 'Peito de frango grelhado com temperos especiais',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 3,
      nome: 'Salada',
      variacao: {
        id_variacao: 1,
        nome: 'Salada Fresca',
        valor_desconto: 8.00,
        valor_inicial: 12.50,
        descricao: 'Mix de folhas frescas com vegetais diversos',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 4,
      nome: 'Lasanha',
      variacao: {
        id_variacao: 1,
        nome: 'Lasanha à Bolonhesa',
        valor_desconto: 20.00,
        valor_inicial: 32.00,
        descricao: 'Lasanha tradicional com carne bolonhesa',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 5,
      nome: 'Sushi',
      variacao: {
        id_variacao: 1,
        nome: 'Sushi Variado',
        valor_desconto: 25.00,
        valor_inicial: 45.00,
        descricao: 'Combinação variada de sushis e sashimis',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 6,
      nome: 'Hambúrguer',
      variacao: {
        id_variacao: 1,
        nome: 'Hambúrguer Clássico',
        valor_desconto: 12.00,
        valor_inicial: 18.50,
        descricao: 'Hambúrguer com carne suculenta e molhos especiais',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 7,
      nome: 'Pizza',
      variacao: {
        id_variacao: 1,
        nome: 'Pizza Margherita',
        valor_desconto: 18.00,
        valor_inicial: 26.00,
        descricao: 'Pizza com molho de tomate, queijo e manjericão',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 8,
      nome: 'Massa',
      variacao: {
        id_variacao: 1,
        nome: 'Massa ao Pesto',
        valor_desconto: 14.00,
        valor_inicial: 21.50,
        descricao: 'Massa com molho pesto e pinhões',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 9,
      nome: 'Taco',
      variacao: {
        id_variacao: 1,
        nome: 'Taco Mexicano',
        valor_desconto: 10.00,
        valor_inicial: 16.00,
        descricao: 'Taco recheado com carne, feijão e vegetais',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 10,
      nome: 'Peixe',
      variacao: {
        id_variacao: 1,
        nome: 'Peixe Grelhado',
        valor_desconto: 16.00,
        valor_inicial: 28.00,
        descricao: 'Filé de peixe grelhado com temperos leves',
        valor_final: 23.00,
      }
    }
  ]

  bebidas: Produto[] = [
    {
      id_produto: 11,
      nome: 'Refrigerante',
      variacao: {
        id_variacao: 1,
        nome: 'Coca-Cola',
        valor_desconto: 5.00,
        valor_inicial: 7.00,
        descricao: 'Refrigerante Coca-Cola gelado',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 12,
      nome: 'Suco',
      variacao: {
        id_variacao: 1,
        nome: 'Suco de Laranja',
        valor_desconto: 6.00,
        valor_inicial: 9.00,
        descricao: 'Suco natural de laranja fresca',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 13,
      nome: 'Água',
      variacao: {
        id_variacao: 1,
        nome: 'Água Mineral',
        valor_desconto: 2.50,
        valor_inicial: 3.50,
        descricao: 'Garrafa de água mineral 500ml',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 14,
      nome: 'Café',
      variacao: {
        id_variacao: 1,
        nome: 'Café Espresso',
        valor_desconto: 3.00,
        valor_inicial: 4.50,
        descricao: 'Café espresso quente e encorpado',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 15,
      nome: 'Chá',
      variacao: {
        id_variacao: 1,
        nome: 'Chá de Camomila',
        valor_desconto: 4.00,
        valor_inicial: 5.50,
        descricao: 'Chá de camomila calmante e reconfortante',
        valor_final: 23.00,
      }
    }
  ]

  combos: Produto[] = [
    {
      id_produto: 21,
      nome: 'Combo Família',
      variacao: {
        id_variacao: 1,
        nome: 'Combo Clássico',
        valor_desconto: 25.00,
        valor_inicial: 35.00,
        descricao: 'Combo com marmita, refrigerante e sobremesa',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 22,
      nome: 'Combo Fitness',
      variacao: {
        id_variacao: 1,
        nome: 'Combo Saudável',
        valor_desconto: 20.00,
        valor_inicial: 28.00,
        descricao: 'Combo com salada, suco e fruta',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 23,
      nome: 'Combo Cinema',
      variacao: {
        id_variacao: 1,
        nome: 'Combo Diversão',
        valor_desconto: 18.00,
        valor_inicial: 24.00,
        descricao: 'Combo com pipoca, refrigerante e doce',
        valor_final: 23.00,
      }
    }
  ]

  acompanhamentos: Produto[] = [
    {
      id_produto: 31,
      nome: 'Fritas',
      variacao: {
        id_variacao: 1,
        nome: 'Batata Frita',
        valor_desconto: 5.00,
        valor_inicial: 7.00,
        descricao: 'Porção de batata frita crocante',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 32,
      nome: 'Legumes',
      variacao: {
        id_variacao: 1,
        nome: 'Legumes Salteados',
        valor_desconto: 6.00,
        valor_inicial: 9.00,
        descricao: 'Mix de legumes frescos salteados na manteiga',
        valor_final: 23.00,
      }
    },
    {
      id_produto: 33,
      nome: 'Arroz',
      variacao: {
        id_variacao: 1,
        nome: 'Arroz Branco',
        valor_desconto: 3.00,
        valor_inicial: 5.00,
        descricao: 'Porção de arroz branco soltinho',
        valor_final: 23.00,
      }
    }
  ]
}



