import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-criacao-produtos',
  templateUrl: './criacao-produtos.page.html',
  styleUrls: ['./criacao-produtos.page.scss'],
})
export class CriacaoProdutosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  produtoSelecionado:string = "Marmita"
  grupoVariacao:string = ""

  produtoSelecionadoSelect(e:any){
    this.produtoSelecionado = e.detail.value
  }
   grupoVariacaoSelecionada(e:any){
    this.grupoVariacao = e.detail.value
  }

  criarFormularoProduto: Produto[] = [
    //Marmitas
    {
      NOME: "Comidas",
      GRUPO_VARIACOES: [
        {
          TIPO: "Marmita",
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
          TIPO: "Sobremesa",
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
          TIPO: "Salada",
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
      ]
    },

    //Bebidas
    {
      NOME: "Bebidas",
      GRUPO_VARIACOES: [
        {
          TIPO: "Refrigerante",
          VARIACOES: [
            {
              NOME: "Coca-cola",
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
          TIPO: "Suco",
          VARIACOES: [
            {
              NOME: "Del Vale",
              DESCRICAO: "ruim",
              VALOR_DESCONTO: 2,
              VALOR_INICIAL: 6,
              VALOR_FINAL: 4,
              IMAGEM: "../../../../../",
            },
            {
              NOME: "é suco",
              DESCRICAO: "Muito boa",
              VALOR_DESCONTO: 2,
              VALOR_INICIAL: 6,
              VALOR_FINAL: 4,
              IMAGEM: "../../../../../",
            },
            {
              NOME: "Del mole",
              DESCRICAO: "Boa",
              VALOR_DESCONTO: 2,
              VALOR_INICIAL: 6,
              VALOR_FINAL: 4,
              IMAGEM: "../../../../../",
            },
            {
              NOME: "É vapo",
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
}
