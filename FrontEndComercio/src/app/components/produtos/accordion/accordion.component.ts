import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log(this.produtos)
  }

  @Input() produtos?: any[];
  @Input() tituloSessao?: string;
  @Output() clickCard: EventEmitter<Produto> = new EventEmitter();
}
