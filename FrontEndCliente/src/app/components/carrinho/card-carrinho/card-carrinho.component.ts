import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-card-carrinho',
  templateUrl: './card-carrinho.component.html',
  styleUrls: ['./card-carrinho.component.scss'],
})
export class CardCarrinhoComponent implements OnInit {

  constructor() { }

  @Input() produto?: Produto;
  @Input() quantidade: number = 0;

  ngOnInit() { }

  addQuantidade(qtde: number) {
    this.quantidade += qtde;
  }

}
