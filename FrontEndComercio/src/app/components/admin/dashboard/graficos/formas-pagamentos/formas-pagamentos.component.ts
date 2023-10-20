import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { PedidosService } from 'src/app/core/services/pedidos.service';
Chart.register(...registerables);

@Component({
  selector: 'app-formas-pagamentos',
  templateUrl: './formas-pagamentos.component.html',
  styleUrls: ['./formas-pagamentos.component.scss'],
})
export class FormasPagamentosComponent  implements OnInit {

  constructor(private Pedidos: PedidosService) { }


  ngOnInit() {
    this.recuperarTodosPedidos().then(() => {
      this.gerarGraficos();
    });
  }

  pedidos!: Pedido[]
  cartao: Pedido[] = []
  pix: Pedido[] = []
  dinheiro: Pedido[] = []

  recuperarTodosPedidos(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.Pedidos.pegarPedidos().subscribe(
        (response) => {
          this.pedidos = response;
          this.organizarPedidos(this.pedidos);
          resolve(); // Resolve the promise when the data is retrieved and processed.
        },
        (error) => {
          console.error(error);
          reject(error); // Reject the promise if an error occurs.
        }
      );
    });
  }

  organizarPedidos(pedidos: Pedido[]) {
    pedidos.forEach((pedido) => {
      if (pedido.forma_pagamento.toLocaleLowerCase().trim() == 'dinheiro')
        this.dinheiro.push(pedido)
      if (pedido.forma_pagamento.toLocaleLowerCase().trim() == 'crédito' || pedido.forma_pagamento.toLocaleLowerCase().trim() === 'débito')
        this.cartao.push(pedido)
      if (pedido.forma_pagamento.toLocaleLowerCase().trim() == 'pix')
        this.pix.push(pedido)
    });
  }

  gerarGraficos() {
    this.formasPagamento(this.cartao.length, this.pix.length, this.dinheiro.length)

  }

  formasPagamento(cartao: number, pix: number, dinheiro: number){
    var formasPagamentoGrafico = new Chart('formasPagamento', {
      type: 'bar',
      data: {
        labels: ['Formas de Pagemento'],
        datasets: [
          {
            label: 'Pagamentos',
            data: [cartao],
            backgroundColor: ['#321dcf'],
            borderColor: ['#321dcf'],
            borderWidth: 1,
          },
          {
            label: 'Dinheiro',
            data: [ dinheiro],
            backgroundColor: ['#4bb43f'],
            borderColor: ['#4bb43f'],
            borderWidth: 1,
          },
          {
            label: 'Pix',
            data: [pix],
            backgroundColor: ['#cf1d1d',],
            borderColor: ['#cf1d1d',],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
