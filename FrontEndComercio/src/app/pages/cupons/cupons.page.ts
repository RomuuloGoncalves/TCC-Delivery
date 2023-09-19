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
      id_cupom: 1,
      nome: 'Feijuca',
      quantidade: 45,
      porcentagem_desconto: 15,
      data_validade: '2023-12-12',
      status: true
    },
    {
      id_cupom: 1,
      nome: 'Feijuca',
      quantidade: 45,
      porcentagem_desconto: 15,
      data_validade: '2023-12-12',
      status: true
    },
    {
      id_cupom: 1,
      nome: 'Feijuca',
      quantidade: 45,
      porcentagem_desconto: 15,
      data_validade: '2023-12-12',
      status: true
    },
    {
      id_cupom: 1,
      nome: 'Feijuca',
      quantidade: 45,
      porcentagem_desconto: 15,
      data_validade: '2023-12-12',
      status: true
    },
    {
      id_cupom: 1,
      nome: 'Feijuca',
      quantidade: 45,
      porcentagem_desconto: 15,
      data_validade: '2023-12-12',
      status: true
    },
    {
      id_cupom: 1,
      nome: 'Feijuca',
      quantidade: 45,
      porcentagem_desconto: 15,
      data_validade: '2023-12-12',
      status: false
    },
  ];

  ngOnInit() {
    console.log(this.cupons)
  }
}
