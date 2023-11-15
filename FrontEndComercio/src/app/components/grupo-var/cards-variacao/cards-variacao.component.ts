import { Component, Input, OnInit } from '@angular/core';
import { Variacao } from 'src/app/core/interfaces/variacao';

@Component({
  selector: 'app-cards-variacao',
  templateUrl: './cards-variacao.component.html',
  styleUrls: ['./cards-variacao.component.scss'],
})
export class CardsVariacaoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  @Input() variacao?: Variacao;


}
