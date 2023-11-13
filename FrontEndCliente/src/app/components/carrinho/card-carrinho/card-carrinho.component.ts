import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoProduto } from 'src/app/core/interfaces/pedido-produto';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-card-carrinho',
  templateUrl: './card-carrinho.component.html',
  styleUrls: ['./card-carrinho.component.scss'],
})
export class CardCarrinhoComponent implements OnInit {
  constructor(private Produto: ProdutoService) {}

  @Input() pedidoProduto!: PedidoProduto;
  @Output() calc: EventEmitter<any> = new EventEmitter();
  @Output() remover: EventEmitter<PedidoProduto> = new EventEmitter();

  ngOnInit() {
    this.organizarImagens(this.pedidoProduto)
  }

  organizarImagens(produtos:any){
    produtos.produto.imagem = (produtos.produto.imagem ) ? this.Produto.pegarImagem(produtos.produto.imagem) : '../../../assets/imgs/default/garfo_faca_outline.png';
  }

  removerProduto() {
    this.remover.emit(this.pedidoProduto);
  }
}
