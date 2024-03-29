import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-sessao-cards-produto',
  templateUrl: './sessao-cards-produto.component.html',
  styleUrls: ['./sessao-cards-produto.component.scss'],
})
export class SessaoCardsProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() tituloSessao?: string;
  @Input() produtos!: any;
  @Output() public selecionar: EventEmitter<number> = new EventEmitter();
}
