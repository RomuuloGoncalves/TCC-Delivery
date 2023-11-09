import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { PedidosService } from 'src/app/core/services/pedidos.service';
Chart.register(...registerables);

@Component({
  selector: 'app-taxa-cancelamento',
  templateUrl: './taxa-cancelamento.component.html',
  styleUrls: ['./taxa-cancelamento.component.scss'],
})
export class TaxaCancelamentoComponent implements OnInit {
  constructor(private Pedidos: PedidosService) {}

  ngOnInit() {
    this.recuperarTodosPedidos().then(() => {
      this.gerarGrafico(
        this.pedidosCancelados.length,
        this.pedidosEntregues.length
      );
    });
  }

  pedidos!: Pedido[];
  pedidosCancelados: Pedido[] = [];
  pedidosEntregues: Pedido[] = [];
  recuperarTodosPedidos(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.Pedidos.pegarPedidosHistorico().subscribe(
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
      pedido.status.toLocaleLowerCase().trim() === 'cancelado'
        ? this.pedidosCancelados.push(pedido)
        : this.pedidosEntregues.push(pedido);
    });
  }

  gerarGrafico(cancelados: number, entregues: number) {
    var taxaCancelamentoGrafico = new Chart('taxaCancelamento', {
      type: 'bar',
      data: {
        labels: ['Taxa de Cancelamento'],
        datasets: [
          {
            label: 'Cancelamentos',
            data: [cancelados],
            backgroundColor: ['#cf1d1d'],
            borderColor: ['#cf1d1d'],
            borderWidth: 1,
          },
          {
            label: 'Entregues',
            data: [entregues],
            backgroundColor: ['#4bb43f'],
            borderColor: ['#4bb43f'],
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
