import { Component, OnInit, Input, Output } from '@angular/core';
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

  isOpen: boolean = false;
  idSelecionado?: number;

  abrirModal(produto: Produto) {
    console.log(produto)
    this.idSelecionado = produto.id!;
    this.isOpen = true;
  }
}
