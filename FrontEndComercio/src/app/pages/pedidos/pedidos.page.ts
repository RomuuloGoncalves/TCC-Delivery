import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { PedidosService } from 'src/app/core/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  constructor(private Pedidos: PedidosService) { }


  ngOnInit() {
    this.recuperarTodosPedidos()
  }

  pedidos!: Pedido[]

  recuperarTodosPedidos() {
    this.Pedidos.pegarPedidos().subscribe(
      (response) => {
        console.log(response)
        this.pedidos = response
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
