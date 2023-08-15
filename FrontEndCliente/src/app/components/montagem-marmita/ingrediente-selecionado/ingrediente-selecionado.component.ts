import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingrediente-selecionado',
  templateUrl: './ingrediente-selecionado.component.html',
  styleUrls: ['./ingrediente-selecionado.component.scss'],
})
export class IngredienteSelecionadoComponent  implements OnInit {

  @Input() ingrediente?: any
  @Input() produto!: String

  @Output() retirarProduto = new EventEmitter

  detalhando: boolean = false

  constructor() { }

  ngOnInit() {
    console.log(this.ingrediente)
  }

  mostrarDetalhes() {
    !this.detalhando ? this.detalhando = true : this.detalhando = false
  }

  emitRetirarProduto() {
    this.retirarProduto.emit(this.produto)
    this.detalhando = false
  }

}
