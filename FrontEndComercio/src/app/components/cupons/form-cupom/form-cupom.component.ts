import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-cupom',
  templateUrl: './form-cupom.component.html',
  styleUrls: ['./form-cupom.component.scss'],
})
export class FormCupomComponent  implements OnInit {

  @Input() cupom?: any
  @Output() emitirCupom: any = new EventEmitter

  cupomEditado = "alegria" 

  constructor() { }

  ngOnInit() {
    console.log(this.cupom)
  }

  editarCupom(e: any) {
    this.cupomEditado = e.detail.value
  }

  emitirEventoCupom(cupomEmitido: any) {
    this.emitirCupom.emit(cupomEmitido)
  }

}
