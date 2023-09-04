import { Component, OnInit } from '@angular/core';
import { Cupom } from 'src/app/core/interfaces/cupom';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {

  constructor() { }

  public cupons: Cupom[] = [
    {
      COD_CUPOM: 1,
      NOME: 'Feijuca',
      QUANTIDADE: 45,
      PORCENTAGEM_DESCONTO: 15,
      DATA_VALIDADE: '2023-12-12',
      STATUS: true
    },
    {
      COD_CUPOM: 1,
      NOME: 'Feijuca',
      QUANTIDADE: 45,
      PORCENTAGEM_DESCONTO: 15,
      DATA_VALIDADE: '2023-12-12',
      STATUS: true
    }, 
    {
      COD_CUPOM: 1,
      NOME: 'Feijuca',
      QUANTIDADE: 45,
      PORCENTAGEM_DESCONTO: 15,
      DATA_VALIDADE: '2023-12-12',
      STATUS: true
    },
    {
      COD_CUPOM: 1,
      NOME: 'Feijuca',
      QUANTIDADE: 45,
      PORCENTAGEM_DESCONTO: 15,
      DATA_VALIDADE: '2023-12-12',
      STATUS: true
    },
    {
      COD_CUPOM: 1,
      NOME: 'Feijuca',
      QUANTIDADE: 45,
      PORCENTAGEM_DESCONTO: 15,
      DATA_VALIDADE: '2023-12-12',
      STATUS: true
    },
    {
      COD_CUPOM: 1,
      NOME: 'Feijuca',
      QUANTIDADE: 45,
      PORCENTAGEM_DESCONTO: 15,
      DATA_VALIDADE: '2023-12-12',
      STATUS: false
    },
  ];

  ngOnInit() {
    console.log(this.cupons)
  }
}
