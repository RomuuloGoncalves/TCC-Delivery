import { Component, OnInit, Input, Output } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sessao-cards-produto',
  templateUrl: './sessao-cards-produto.component.html',
  styleUrls: ['./sessao-cards-produto.component.scss'],
})
export class SessaoCardsProdutoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}  
  
  @Input() tituloSessao?: string;
  @Input() produto?: Produto;
  @Input() cardMontagem: boolean = false;

  @Output() produtoEmitido: any = new EventEmitter

  emitirEvento() {
    this.produtoEmitido.emit(this.produto)
  }

}
