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
    id_produto: 1,
    nome: 'Doces',
    variacoes: [
      {
        id_variacao: 1,
        nome: 'Pudim',
        valor_desconto: 15.00,
        valor_inicial: 19.50,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/img/home-icons/garfo_faca_outline.png'
      },
      {
        id_variacao: 1,
        nome: 'Arroz Doce',
        valor_desconto: 15.00,
        valor_inicial: 19.50,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/img/home-icons/garfo_faca_outline.png'
      },
      {
        id_variacao: 1,
        nome: 'Angu',
        valor_desconto: 15.00,
        valor_inicial: 19.50,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/img/home-icons/garfo_faca_outline.png'
      },
      {
        id_variacao: 1,
        nome: 'Angu',
        valor_desconto: 15.00,
        valor_inicial: 19.50,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/img/home-icons/garfo_faca_outline.png'
      },
      {
        id_variacao: 1,
        nome: 'Angu',
        valor_desconto: 15.00,
        valor_inicial: 19.50,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/img/home-icons/garfo_faca_outline.png'
      },
      {
        id_variacao: 1,
        nome: 'Angu',
        valor_desconto: 15.00,
        valor_inicial: 19.50,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/img/home-icons/garfo_faca_outline.png'
      }
    ]
  }

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
        this.filtrar[chave] = true;
      }
    });
  }
}
