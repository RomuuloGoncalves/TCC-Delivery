import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  constructor(private route: ActivatedRoute, private Router: Router) {}

  nomeProduto!: any;

  ngOnInit() {
    this.nomeProduto = this.route.snapshot.paramMap.get('produto');

    if (!this.ehStringValida(this.nomeProduto)) this.Router.navigate(['..']);

    this.nomeProduto = this.nomeProduto[0].toUpperCase() + this.nomeProduto.slice(1);
  }

  filtrar: { [chave: string]: boolean } = {
    marmita: true,
    bebida: true,
    combo: true,
    acompanhamento: true,
  };

  selectedOptions: string = 'nenhum';

  loading: boolean = false;
  produto: Produto = {
    COD_PRODUTO: 1,
    NOME: 'Batata',
    VARIACOES: [
      {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.0,
        VALOR_INICIAL: 19.5,
        VALOR_FINAL: 30.0,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
      {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.0,
        VALOR_INICIAL: 19.5,
        VALOR_FINAL: 30.0,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
      {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.0,
        VALOR_INICIAL: 19.5,
        VALOR_FINAL: 30.0,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
      {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.0,
        VALOR_INICIAL: 19.5,
        VALOR_FINAL: 30.0,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
      {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.0,
        VALOR_INICIAL: 19.5,
        VALOR_FINAL: 30.0,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
      {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.0,
        VALOR_INICIAL: 19.5,
        VALOR_FINAL: 30.0,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
      {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.0,
        VALOR_INICIAL: 19.5,
        VALOR_FINAL: 30.0,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
      {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.0,
        VALOR_INICIAL: 19.5,
        VALOR_FINAL: 30.0,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
      {
        COD_VARIACAO: 1,
        NOME: 'Batata Frita',
        VALOR_DESCONTO: 15.0,
        VALOR_INICIAL: 19.5,
        VALOR_FINAL: 30.0,
        DESCRICAO: 'Bata muito boa tipo muito muito boa mesmo',
        IMAGEM: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
    ],
  };

  ehStringValida(str: string) {
    const regexString: RegExp = /^[A-Za-z]+$/;
    return regexString.test(str);
  }

  filtrarSelecao(e: any) {
    for (const [chave, valor] of Object.entries(this.filtrar)) {
      this.filtrar[chave] = false;
    }

    e.detail.value.forEach((chave: any) => {
      if (this.filtrar.hasOwnProperty(chave)) {
        this.filtrar[chave] = true; // Definir o valor booleano como true se a chave existir no objeto
      }
    });
  }
}
