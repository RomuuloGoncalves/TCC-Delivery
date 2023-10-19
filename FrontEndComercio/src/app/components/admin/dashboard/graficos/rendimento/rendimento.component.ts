import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { PedProdGrupoVarService } from 'src/app/core/services/ped-prod-grupo-var.service';
import { PedidosService } from 'src/app/core/services/pedidos.service';
Chart.register(...registerables);

@Component({
  selector: 'app-rendimento',
  templateUrl: './rendimento.component.html',
  styleUrls: ['./rendimento.component.scss'],
})
export class RendimentoComponent implements OnInit {


  constructor(private DashBoard: DashboardService, private pedProdGrupo: PedProdGrupoVarService) { }

  ngOnInit() {
    this.recuperarDadosSemanais().then(() => {
      this.gerarGrafico();
    });
    // testando kkkkkkkk
  }

  rendimentoBrutoAtual: any = 0
  rendimentoBrutoPassado: any = 0
  despesas: number = 0
  lucro: number = 0
  dadosSemanais!: any

  recuperarDadosSemanais(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.DashBoard.rendimentoSemanal().subscribe(
        (response) => {
          console.log("rendomento", response)
          this.dadosSemanais = response;
          console.log()
          resolve();
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    });
  }


  borderWidth: number = 3


  gerarGrafico() {
    this.graficoSemanal()

  }

  graficoSemanal() {
    this.lucro = this.dadosSemanais!.semanaPassada_vs_semanaAtual.toFixed()
    this.rendimentoBrutoAtual = this.dadosSemanais!.rendimentoAtual.toFixed()
    this.rendimentoBrutoPassado = this.dadosSemanais!.rendimentoPassado.toFixed()
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const myChart = new Chart("financeiroSemanal", {
      type: 'line',
      data: {
        labels: diasDaSemana,
        datasets: [
          {
            label: 'Rendimento Bruto por Dia (Semana Atual)',
            data: [
              this.dadosSemanais!.dias[0],
              this.dadosSemanais!.dias[1],
              this.dadosSemanais!.dias[2],
              this.dadosSemanais!.dias[3],
              this.dadosSemanais!.dias[4],
              this.dadosSemanais!.dias[5],
              this.dadosSemanais!.dias[6]
            ],
            backgroundColor: '#321dcf',
            borderColor: '#321dcf',
            borderWidth: this.borderWidth
          },

          {
            label: 'Rendimento Bruto por Dia (Semana Passada)',
            data: [
              this.dadosSemanais!.semanaPassada[0],
              this.dadosSemanais!.semanaPassada[1],
              this.dadosSemanais!.semanaPassada[2],
              this.dadosSemanais!.semanaPassada[3],
              this.dadosSemanais!.semanaPassada[4],
              this.dadosSemanais!.semanaPassada[5],
              this.dadosSemanais!.semanaPassada[6]
            ],
            backgroundColor: '#4bb43f',
            borderColor: '#4bb43f',
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
