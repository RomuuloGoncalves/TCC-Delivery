import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent  implements OnInit {

  constructor() { }

  @Input() public contador: number = 0;
  @Output() public change: any = new EventEmitter<number>()
  @Input() public min?: number
  @Input() public max?: number;
  @Input() public gap: number = 1;

  ngOnInit() {}

  incContador() {
    const resultado = this.contador + this.gap;

    if (this.max === undefined)
      this.contador = resultado;
    else if (resultado <= this.max!)
      this.contador = resultado;
    this.change.emit(this.contador);
  }

  decContador() {
    const resultado = this.contador - this.gap;

    if (this.min === undefined) 
      this.contador = resultado;
    else if (resultado >= this.min!)
      this.contador = resultado;
    this.change.emit(this.contador);
  }
}
