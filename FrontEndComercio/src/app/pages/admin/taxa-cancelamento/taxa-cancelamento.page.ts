import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { PedidosService } from 'src/app/core/services/pedidos.service';
Chart.register(...registerables);

@Component({
  selector: 'app-taxa-cancelamento',
  templateUrl: './taxa-cancelamento.page.html',
  styleUrls: ['./taxa-cancelamento.page.scss'],
})
export class TaxaCancelamentoPage implements OnInit {

  constructor(private Pedidos: PedidosService) { }

  
  ngOnInit() {
    this.recuperarTodosPedidos().then(() => {
      this.gerarGrafico(this.pedidosCancelados.length, this.pedidosEntregues.length);
    });
  }
  
  pedidos!: Pedido[]
  pedidosCancelados: Pedido[] = []
  pedidosEntregues: Pedido[] = []
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
      pedido.status.toLocaleLowerCase().trim() === 'cancelado' ? this.pedidosCancelados.push(pedido) : this.pedidosEntregues.push(pedido);
    });
  }

  gerarGrafico(cancelados: number, entregues: number) {
    var myChart = new Chart('taxaCancelamento', {
      type: 'bar',
      data: {
        labels: ['Cancelado', 'Entregue'],
        datasets: [
          {
            label: 'Marmitas:',
            data: [cancelados, entregues],
            backgroundColor: ['#cf1d1d', '#4bb43f'],
            borderColor: ['#cf1d1d', '#4bb43f'],
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