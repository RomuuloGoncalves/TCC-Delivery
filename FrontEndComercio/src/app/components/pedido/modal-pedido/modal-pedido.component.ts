import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-modal-pedido',
  templateUrl: './modal-pedido.component.html',
  styleUrls: ['./modal-pedido.component.scss'],
})
export class ModalPedidoComponent  implements OnInit {
  @Input() public pedido!: any;
  @Input() public id: any;

  ngOnInit() { }

  constructor() { }
}
