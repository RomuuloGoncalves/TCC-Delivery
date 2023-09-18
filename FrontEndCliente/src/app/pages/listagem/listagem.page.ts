import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  constructor() { }

  
  filtrar: { [chave: string]: boolean } = {
    "marmita": true,
    "bebida": true,
    "combo": true,
    "acompanhamento": true
  }

  selectedOptions: string = "nenhum"

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

  loading : boolean = false;
  produto: Produto =
    {
      COD_PRODUTO: 1,
      NOME: 'Batata',
      VARIACOES: [
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 30.00,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 30.00,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 30.00,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 30.00,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 30.00,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 30.00,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 30.00,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 30.00,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
        {
          COD_VARIACAO: 1,
          NOME: 'Batata Frita',
          VALOR_DESCONTO: 15.00,
          VALOR_INICIAL: 19.50,
          VALOR_FINAL: 30.00,
          DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
          IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png'
        },
      ] 
    }
  
  ngOnInit() {
  }
}
