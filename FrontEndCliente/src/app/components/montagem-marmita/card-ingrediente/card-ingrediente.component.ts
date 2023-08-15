import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-ingrediente',
  templateUrl: './card-ingrediente.component.html',
  styleUrls: ['./card-ingrediente.component.scss'],
})
export class CardIngredienteComponent  implements OnInit {

  @Input() opcaoSelecionada?: String
  @Input() ingredientes?: any[]
  @Input() ingrediente?: any
  @Input() produto!: string

  @Output() onChangeRadio = new EventEmitter

  constructor() { }

  ngOnInit() { }

  trocarOpcao() {

    console.log(this.opcaoSelecionada)

    let ingredienteSelecionado!: Object

    this.ingredientes?.forEach(ingrediente => {
      ingrediente.variacao == this.opcaoSelecionada ? 
      ingredienteSelecionado = {
        variacao: ingrediente.variacao,
        descricao: ingrediente.descricao
      } : null
    });
    this.onChangeRadio.emit(ingredienteSelecionado)
  }

}
