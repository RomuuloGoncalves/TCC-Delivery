import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoProduto } from 'src/app/core/interfaces/pedido-produto';

@Component({
  selector: 'app-card-carrinho',
  templateUrl: './card-carrinho.component.html',
  styleUrls: ['./card-carrinho.component.scss'],
})
export class CardCarrinhoComponent implements OnInit {

  constructor() { }

  @Input() pedidoProduto!: PedidoProduto;
  @Output() calc: EventEmitter<any> = new EventEmitter();
  @Output() remover: EventEmitter<number> = new EventEmitter()

  ngOnInit() { }


  calcTotal() {

  }

  removerProduto(){
    this.remover.emit(this.pedidoProduto.id)
  }
}
