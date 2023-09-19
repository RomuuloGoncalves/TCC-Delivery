import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-criacao-produtos',
  templateUrl: './criacao-produtos.page.html',
  styleUrls: ['./criacao-produtos.page.scss'],
})
export class CriacaoProdutosPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  produtoSelecionado: string = 'Marmita';
  grupoVariacao: string = '';

  produtoSelecionadoSelect(e: any) {
    this.produtoSelecionado = e.detail.value;
  }
  grupoVariacaoSelecionada(e: any) {
    this.grupoVariacao = e.detail.value;
  }

  criarFormularoProduto: Produto[] = [
    //Marmitas
    {
      nome: 'Comidas',
      grupo_variacoes: [
        {
          tipo: 'Marmita',
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
              nome: 'Arroz',
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
            },
          ],
        },
        {
          tipo: 'Sobremesa',
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
          tipo: 'Salada',
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

    //Bebidas
    {
      nome: 'Bebidas',
      grupo_variacoes: [
        {
          tipo: 'Refrigerante',
          variacoes: [
            {
              nome: 'Coca-cola',
              descricao: 'coca cola muito boa',
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
              imagem: '../../..',
            },
            {
              nome: '1L',
              descricao: 'coca cola muito boa',
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
              imagem: '../../..',
            },
            {
              nome: '0.6L',
              descricao: 'coca cola muito boa',
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
              imagem: '../../..',
            },
          ],
        },
        {
          tipo: 'Suco',
          variacoes: [
            {
              nome: 'Del Vale',
              descricao: 'ruim',
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
              imagem: '../../../../../',
            },
            {
              nome: 'é suco',
              descricao: 'Muito boa',
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
              imagem: '../../../../../',
            },
            {
              nome: 'Del mole',
              descricao: 'Boa',
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
              imagem: '../../../../../',
            },
            {
              nome: 'É vapo',
              descricao: 'Boa',
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
              imagem: '../../../../../',
            },
          ],
        },
      ],
    },
  ];
}
