import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { PedProdGrupoVarService } from 'src/app/core/services/ped-prod-grupo-var.service';
import { PedidosService } from 'src/app/core/services/pedidos.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss'],
})
export class VendasComponent implements OnInit {

  constructor(private Pedidos: PedidosService, private pedProdGrupo: PedProdGrupoVarService) { }

  ngOnInit() {
    this.recuperarTodosPedidos().then(() => {
      this.gerarGrafico();
    });

    this.pedProd()
  }

  rendimentoBruto: any = 0
  despesas: number = 0
  lucro: number = 0
  pedidos!: Pedido[]

  recuperarTodosPedidos(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.Pedidos.pegarPedidos().subscribe(
        (response) => {
          this.pedidos = response;
          resolve();
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    });
  }

  pedProd() {
    this.pedProdGrupo.pegarPedProd().subscribe(
      (response) => {
        console.log("pedido produto grupo var", response)
      },
      (error) => {
        console.error(error);
      }
    );

  }





  calcularRendimentoSemanal() {

  }

  calcularRendimentoDiario(){

  }



  borderWidth: number = 3


  gerarGrafico() {
    this.graficoTotal()
    this.graficoSemanal()

  }

  graficoSemanal() {
  

  }

  graficoTotal() {

    const graficoVendas = new Chart("vendas", {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Vendas Mensal',
            data: [1,2,4,45,5,3],
            backgroundColor: '#321dcf',
            borderColor: '#321dcf',
            borderWidth: this.borderWidth
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
