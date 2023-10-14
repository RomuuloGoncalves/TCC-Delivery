import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/core/interfaces/pedido';

@Component({
  selector: 'app-tabela-pedidos',
  templateUrl: './tabela-pedidos.component.html',
  styleUrls: ['./tabela-pedidos.component.scss'],
})
export class TabelaPedidosComponent  implements OnInit {

  constructor() { }

  @Input() pedidos!: Pedido[];

  ngOnInit() {}
}
