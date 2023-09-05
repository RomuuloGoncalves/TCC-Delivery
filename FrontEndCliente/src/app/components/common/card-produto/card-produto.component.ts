import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent  implements OnInit {

  constructor() { 
    console.log(this.produto)
  }

  ngOnInit() { }

  @Input() produto!: Produto;

  calcValorFinal() {

    let valorDesconto, valorInicial, valorFinal
    this.produto.VARIACAO ? ( 
      valorDesconto = this.produto.VARIACAO.VALOR_DESCONTO,
      valorInicial = this.produto.VARIACAO.VALOR_INICIAL 
      ) : null

    valorDesconto != undefined && valorInicial != undefined ? (
     valorFinal = valorInicial - valorDesconto
    ) : null

    return valorFinal



  }


}
