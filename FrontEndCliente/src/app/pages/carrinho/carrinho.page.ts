import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  constructor() {}

  ngOnInit() {
    this.calcTotal();
  }

  frete: number = 25;
  subtotal: number = 0;
  total: number = 0;

  produtos: Produto[] = [
    {
      id_produto: 1,
      nome: 'Porções',
      quantidade: 3,
      variacao: {
        id_variacao: 1,
        nome: 'Batata Frita',
        valor_desconto: 4.0,
        valor_inicial: 19.5,
        valor_final: 14.5,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
    },
    {
      id_produto: 1,
      nome: 'Doces',
      quantidade: 2,
      variacao: {
        id_variacao: 1,
        nome: 'Pudim',
        valor_desconto: 4.0,
        valor_inicial: 12.5,
        valor_final: 8.5,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/img/home-icons/garfo_faca_outline.png',
      },
    },
  ];

  calcTotal () {
    this.subtotal = 0;
    this.produtos.forEach((produto: Produto) => {
      produto.subtotal = produto.quantidade! * produto.variacao?.valor_final!;
      this.subtotal += produto.subtotal;
    });

    this.total = this.subtotal + this.frete;
  }
}
