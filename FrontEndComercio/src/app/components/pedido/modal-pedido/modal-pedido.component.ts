import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-pedido',
  templateUrl: './modal-pedido.component.html',
  styleUrls: ['./modal-pedido.component.scss'],
})
export class ModalPedidoComponent  implements OnInit {
  @Input() public pedido!: any;
  constructor() { }

  ngOnInit() {}

}
