import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss'],
})
export class CardHomeComponent  implements OnInit {

  constructor() { }

  @Input() produto?: Produto;

  ngOnInit() {}

}
