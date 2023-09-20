import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-criacao-comidas',
  templateUrl: './criacao-comidas.page.html',
  styleUrls: ['./criacao-comidas.page.scss'],
})
export class CriacaoComidasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  produtoSelecionado: string = 'Marmita';
  grupoVariacao: string = '';

  produtoSelecionadoSelect(e: any) {
    this.produtoSelecionado = e.detail.value;
  }
  grupoVariacaoSelecionada(e: any) {
    this.grupoVariacao = e.detail.value;
  }

  criarFormularoProduto: Produto[] = [
    // Marmitas
    {
      nome: 'Marmitas',
      grupo_variacoes: [
        {
          tipo: 'Arroz',
          variacoes: [
            {
              nome: 'Arroz',
              descricao: 'arroz branco cozido',
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
              imagem: '../../..',
            },
            {
              nome: 'Queimado',
              descricao: 'arroz branco cozido',
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
              imagem: '../../..',
            },
            {
              nome: 'Integral',
              descricao: 'arroz branco cozido',
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
              imagem: '../../..',
            },
            {
              nome: 'a grega',
              descricao: 'arroz branco cozido',
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
              imagem: '../../..',
            }
          ],
        },
        {
          tipo: 'Feijão',
          variacoes: [
            {
              nome: 'Carioca',
              descricao: 'feijao carioca cozido na pressão',
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
              imagem: '../../../../../',
            },
            {
              nome: 'tropero',
              descricao: 'feijao carioca cozido na pressão',
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
              imagem: '../../../../../',
            },
            {
              nome: 'preto',
              descricao: 'feijao carioca cozido na pressão',
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
              imagem: '../../../../../',
            },
          ],
        },
        {
          tipo: 'mistura',
          variacoes: [
            {
              nome: 'Parmegiana',
              descricao: 'Frango queijo sexo',
              valor_desconto: 1,
              valor_inicial: 12,
              valor_final: 11,
              imagem: '../../../../../',
            },
            {
              nome: 'feijoado',
              descricao: 'Frango queijo sexo',
              valor_desconto: 1,
              valor_inicial: 12,
              valor_final: 11,
              imagem: '../../../../../',
            },
            {
              nome: 'sua mae',
              descricao: 'Frango queijo sexo',
              valor_desconto: 1,
              valor_inicial: 12,
              valor_final: 11,
              imagem: '../../../../../',
            },
          ],
        },
        {
          tipo: 'Acompanhamento',
          variacoes: [
            {
              nome: 'Batata',
              descricao: 'fritas',
              valor_desconto: 1,
              valor_inicial: 4,
              valor_final: 3,
              imagem: '../../../../../',
            },
            {
              nome: 'Mandioca',
              descricao: 'fritas',
              valor_desconto: 1,
              valor_inicial: 4,
              valor_final: 3,
              imagem: '../../../../../',
            },
            {
              nome: 'pure',
              descricao: 'fritas',
              valor_desconto: 1,
              valor_inicial: 4,
              valor_final: 3,
              imagem: '../../../../../',
            },
          ],
        },
      ],
    },

    // Sobremesas
    {
      nome: 'Sobremesas',
      grupo_variacoes: [
        {
          tipo: 'Bolo',
          variacoes: [
            {
              nome: 'Chocolate',
              descricao: 'Bolo de chocolate',
              valor_desconto: 3,
              valor_inicial: 15,
              valor_final: 12,
              imagem: '../../..',
            },
            {
              nome: 'Cenoura',
              descricao: 'Bolo de cenoura',
              valor_desconto: 3,
              valor_inicial: 15,
              valor_final: 12,
              imagem: '../../..',
            },
          ],
        },
        {
          tipo: 'Sorvete',
          variacoes: [
            {
              nome: 'Baunilha',
              descricao: 'Sorvete sabor baunilha',
              valor_desconto: 2,
              valor_inicial: 8,
              valor_final: 6,
              imagem: '../../../../../',
            },
            {
              nome: 'Morango',
              descricao: 'Sorvete sabor morango',
              valor_desconto: 2,
              valor_inicial: 8,
              valor_final: 6,
              imagem: '../../../../../',
            },
          ],
        },
        {
          tipo: 'Torta',
          variacoes: [
            {
              nome: 'Maçã',
              descricao: 'Torta de maçã',
              valor_desconto: 4,
              valor_inicial: 18,
              valor_final: 14,
              imagem: '../../../../../',
            },
            {
              nome: 'Limão',
              descricao: 'Torta de limão',
              valor_desconto: 4,
              valor_inicial: 18,
              valor_final: 14,
              imagem: '../../../../../',
            },
          ],
        },
        {
          tipo: 'Sobremesa Gelada',
          variacoes: [
            {
              nome: 'Pudim',
              descricao: 'Pudim de leite condensado',
              valor_desconto: 2,
              valor_inicial: 10,
              valor_final: 8,
              imagem: '../../../../../',
            },
            {
              nome: 'Mousse de Chocolate',
              descricao: 'Mousse de chocolate',
              valor_desconto: 2,
              valor_inicial: 10,
              valor_final: 8,
              imagem: '../../../../../',
            },
          ],
        },
      ],
    },

    // Saladas
    {
      nome: 'Saladas',
      grupo_variacoes: [
        {
          tipo: 'Folhas Verdes',
          variacoes: [
            {
              nome: 'Alface',
              descricao: 'Alface fresca',
              valor_desconto: 1,
              valor_inicial: 6,
              valor_final: 5,
              imagem: '../../..',
            },
            {
              nome: 'Rúcula',
              descricao: 'Rúcula fresca',
              valor_desconto: 1,
              valor_inicial: 6,
              valor_final: 5,
              imagem: '../../..',
            },
          ],
        },
        {
          tipo: 'Legumes',
          variacoes: [
            {
              nome: 'Cenoura',
              descricao: 'Cenoura crua ralada',
              valor_desconto: 1,
              valor_inicial: 5,
              valor_final: 4,
              imagem: '../../../../../',
            },
            {
              nome: 'Tomate',
              descricao: 'Tomate em rodelas',
              valor_desconto: 1,
              valor_inicial: 5,
              valor_final: 4,
              imagem: '../../../../../',
            },
          ],
        },
        {
          tipo: 'Grãos',
          variacoes: [
            {
              nome: 'Quinoa',
              descricao: 'Salada com quinoa',
              valor_desconto: 2,
              valor_inicial: 8,
              valor_final: 6,
              imagem: '../../../../../',
            },
            {
              nome: 'Lentilhas',
              descricao: 'Salada com lentilhas',
              valor_desconto: 2,
              valor_inicial: 8,
              valor_final: 6,
              imagem: '../../../../../',
            },
          ],
        },
      ],
    }



  ];
}