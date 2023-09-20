import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-criacao-bebidas',
  templateUrl: './criacao-bebidas.page.html',
  styleUrls: ['./criacao-bebidas.page.scss'],
})
export class CriacaoBebidasPage implements OnInit {

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
    // Bebidas
    {
      nome: 'Refrigerante',
      grupo_variacoes: [
        {
          tipo: 'Coca-cola',
          variacoes: [
            {
              nome: 'Coca cola sem açucar',
              descricao: 'sem açucar mesmo',
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
              imagem: '../../..',
            },
          ],
        },
        {
          tipo: 'Fanta',
          variacoes: [
            {
              nome: 'Fanta Laranja',
              descricao: 'Tem gosto de laranja mesmo',
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
              imagem: '../../../../../',
            },
          ],
        },
      ],
    },
    {
      nome: 'Suco',
      grupo_variacoes: [
        {
          tipo: 'Del vale',
          variacoes: [
            {
              nome: 'Laranja',
              descricao: 'sem açucar mesmo',
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
              imagem: '../../..',
            },
          ],
        },
        {
          tipo: 'Suquito',
          variacoes: [
            {
              nome: 'Fanta Laranja',
              descricao: 'Tem gosto de laranja mesmo',
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
              imagem: '../../../../../',
            },
          ],
        },
      ],
    },
    {
      nome: 'Cerveja',
      grupo_variacoes: [
        {
          tipo: 'Iscol',
          variacoes: [
            {
              nome: 'Sem alcool',
              descricao: 'sem açucar mesmo',
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
              imagem: '../../..',
            },
          ],
        },
        {
          tipo: 'Rainiquem',
          variacoes: [
            {
              nome: 'Não beba',
              descricao: 'Tem gosto de laranja mesmo',
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
