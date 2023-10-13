import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { PedidosService } from 'src/app/core/services/pedidos.service';
Chart.register(...registerables);

@Component({
  selector: 'app-formas-pagamento',
  templateUrl: './formas-pagamento.page.html',
  styleUrls: ['./formas-pagamento.page.scss'],
})
export class FormasPagamentoPage implements OnInit {

  constructor(private Pedidos: PedidosService) { }


  ngOnInit() {
    this.recuperarTodosPedidos().then(() => {
      console.log(this.cartao.length, this.pix.length, this.dinheiro.length)
      this.gerarGrafico(this.cartao.length, this.pix.length, this.dinheiro.length);
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
          console.log(this.pedidos);
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

  gerarGrafico(cartao: number, pix: number, dinheiro: number) {
    var myChart = new Chart('formasPagamento', {
      type: 'bar',
      data: {
        labels: ['Cartão', 'Dinheiro', 'Pix'],
        datasets: [
          {
            label: 'Pagamentos',
            data: [cartao, dinheiro, pix],
            backgroundColor: ['#321dcf', '#4bb43f', '#cf1d1d',],
            borderColor: ['#321dcf', '#4bb43f', '#cf1d1d',],
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
