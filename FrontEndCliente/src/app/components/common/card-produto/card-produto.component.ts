import { Component, OnInit, Input } from '@angular/core';

import { Variacao } from 'src/app/core/interfaces/variacao';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent  implements OnInit {

  constructor() { 
  }

  @Input() variacao!: Variacao;
  
  ngOnInit() { }

}
