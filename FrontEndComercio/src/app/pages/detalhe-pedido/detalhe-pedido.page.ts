import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from 'src/app/core/services/pedidos.service';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-detalhe-pedido',
  templateUrl: './detalhe-pedido.page.html',
  styleUrls: ['./detalhe-pedido.page.scss'],
})
export class DetalhePedidoPage implements OnInit {

  constructor(private Pedidos: PedidosService, private Cliente: ClienteService, private route: ActivatedRoute) { }
  id_pedido!: any
  cod_cliente!: any

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_pedido = params['id_pedido'];
      this.cod_cliente = params['cod_cliente'];
    });

    this.pegarPedido(Number(this.id_pedido))
    this.pegarCliente(Number(this.cod_cliente))
    console.log(this.id_pedido)
    console.log(this.cod_cliente)

  }
  pedidoCliente!: Pedido[]
  cliente!: Cliente


  pegarPedido(cod_pedido: any) {
    this.Pedidos.pegarPedidoID(cod_pedido).subscribe(
      (response) => {
        console.log(response)
        this.pedidoCliente = response
      },
      (error) => {
        console.error(error);
      }
    );
  }

  pegarCliente(cod_cliente: any) {
    this.Cliente.pegarCliente(cod_cliente).subscribe(
      (response) => {
        this.cliente = response
        console.log(this.cliente)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
