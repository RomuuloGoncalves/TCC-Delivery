import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-cupom',
  templateUrl: './form-cupom.component.html',
  styleUrls: ['./form-cupom.component.scss'],
})
export class FormCupomComponent  implements OnInit {

  @Input() cupom!: any
  @Output() eventoCupom?: any

  constructor() { }

  ngOnInit() {
    console.log("aaaaaaaaaaaa")
    console.log(this.cupom)
  }

  emitirEventoCupom(cupomEmitido: any) {
    console.log(cupomEmitido)
  }

}
