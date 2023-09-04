import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-listagem-page',
  templateUrl: './listagem-page.page.html',
  styleUrls: ['./listagem-page.page.scss'],
})
export class ListagemPagePage implements OnInit {

  constructor() { }

  loaded: boolean = false
  produtos: Produto[] = [
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACAO: {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.00,
        VALOR_INICIAL: 19.50,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    },
  ]
  
  ngOnInit() {
  }

}
