import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { PedidosService } from 'src/app/core/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  constructor(private Pedidos: PedidosService) {}

  loading: boolean = true;

  ngOnInit() {
    this.recuperarTodosPedidos();
  }

  pedidos: Pedido[] = [];

  recuperarTodosPedidos() {
    this.Pedidos.pegarPedidos().subscribe(
      (response) => {
        this.pedidos = response;
        this.ordenarPedidos = this.pedidos;
        this.loading = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ordenarPedidos!: any;
  ordenar(option: any) {
    if (option.detail.value == 'id')
      this.pedidos = this.ordenarPedidos.sort((a: any, b: any) => a.id - b.id);
    if (option.detail.value == 'status')
      this.pedidos.sort((a, b) => a.status.localeCompare(b.status));
    if (option.detail.value == 'quantidade')
      this.pedidos = this.pedidos.sort(
        (a, b) => a.pedido_produtos.length - b.pedido_produtos.length
      );
    if (option.detail.value == 'data')
      this.pedidos = this.ordenarPedidos.sort(
        (a: any, b: any) =>
          Number(new Date(a.data_pedido)) - Number(new Date(b.data_pedido))
      );
  }
}
