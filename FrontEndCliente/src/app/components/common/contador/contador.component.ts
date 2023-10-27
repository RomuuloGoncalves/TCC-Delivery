import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {
  constructor() {}

  @Input() public min: number = 1;
  @Input() public max?: number;
  @Input() public gap: number = 1;
  @Input() public contador: number = this.min;
  @Output() public change: any = new EventEmitter<number>();

  ngOnInit() {}

  incContador() {
    const resultado = this.contador + this.gap;

    if (this.max === undefined || resultado <= this.max!) {
      this.contador = resultado;
      this.change.emit(this.contador);
    }
  }

  decContador() {
    const resultado = this.contador - this.gap;

    if (this.min === undefined || resultado >= this.min!) {
      this.contador = resultado;
      this.change.emit(this.contador);
    }
  }
}
