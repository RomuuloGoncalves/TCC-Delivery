import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-sessao-cards-home',
  templateUrl: './sessao-cards-home.component.html',
  styleUrls: ['./sessao-cards-home.component.scss'],
})
export class SessaoCardsHomeComponent implements OnInit {

  constructor() { }

  @Input() tituloSessao?: string;
  @Input() produtos?: Produto[];
  @Input() cardMontagem: boolean = false;

  ngOnInit() { }

}
