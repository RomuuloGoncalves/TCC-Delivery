import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent  implements OnInit {

  constructor() { 
  }

  @Input() produto!: Produto;
  
  ngOnInit() { }
  
}
