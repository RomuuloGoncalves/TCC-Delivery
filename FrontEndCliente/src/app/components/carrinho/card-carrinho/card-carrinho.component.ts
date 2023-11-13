import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoProduto } from 'src/app/core/interfaces/pedido-produto';

@Component({
  selector: 'app-card-carrinho',
  templateUrl: './card-carrinho.component.html',
  styleUrls: ['./card-carrinho.component.scss'],
})
export class CardCarrinhoComponent implements OnInit {
  constructor() {}

  @Input() pedidoProduto!: PedidoProduto;
  @Output() calc: EventEmitter<any> = new EventEmitter();
  @Output() remover: EventEmitter<PedidoProduto> = new EventEmitter();

  ngOnInit() {
    this.organizarImagens(this.pedidoProduto)
  }

  organizarImagens(produto:any){
    console.log(produto)
    produto.produto.imagem = (produto.produto.imagem) ? `https://cuddly-funicular-jpv6ggxg59xc5vvg-8000.app.github.dev/uploads/${produto.produto.imagem}` : '../../../assets/imgs/default/garfo_faca_outline.png';
    console.log(produto.produto.imagem)
  }

  removerProduto() {
    this.remover.emit(this.pedidoProduto);
  }
}
