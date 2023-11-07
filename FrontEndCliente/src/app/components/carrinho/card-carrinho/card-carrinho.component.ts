import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-card-carrinho',
  templateUrl: './card-carrinho.component.html',
  styleUrls: ['./card-carrinho.component.scss'],
})
export class CardCarrinhoComponent implements OnInit {

  constructor() { }

  @Input() produto!: Produto;
  @Output() calc: EventEmitter<any> = new EventEmitter();
  @Output() remover: EventEmitter<number> = new EventEmitter()

  ngOnInit() { }


  calcTotal() {

  }

  removerProduto(){
    this.remover.emit(this.produto.id)
  }
}
