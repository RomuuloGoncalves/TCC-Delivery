import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { PedidosService } from 'src/app/core/services/pedidos.service';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  constructor(private Pedidos: PedidosService,) { }


  ngOnInit() {
    this.recuperarHistoricoPedidos()
  }

  pedidos!: Pedido[]

  recuperarHistoricoPedidos() {
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

