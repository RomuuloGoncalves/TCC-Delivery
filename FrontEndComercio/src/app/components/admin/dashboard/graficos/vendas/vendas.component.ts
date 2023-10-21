import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from 'src/app/core/services/dashboard.service';
Chart.register(...registerables);

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss'],
})
export class VendasComponent implements OnInit {


  @Input() intervalo: string = 'semanalmente'
  id: string = 'semanalmente'

  constructor(private DashBoard: DashboardService) { }

  ngOnInit() {
    this.recuperarDadosSemanais().then(() => {
      this.gerarGrafico();
    });
  }

  vendasAtuais: any = 0
  vendasPassadas: any = 0
  lucro: number = 0
  dados!: any

  recuperarDadosSemanais(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.DashBoard.vendasSemanais().subscribe(
        (response) => {
          console.log("vendas", response)
          this.dados = response;
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

  recuperarDadosMensais(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.DashBoard.vendasMensais().subscribe(
        (response) => {
          console.log("mensal", response)
          this.dados = response;
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

  recuperarDadosAnuais(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.DashBoard.vendasAnuais().subscribe(
        (response) => {
          console.log("mensal", response)
          this.dados = response;
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
    if (this.intervalo == 'semanalmente') {
      this.id = 'semanalmente'

      this.recuperarDadosSemanais().then(() => {
        this.graficoSemanal()
      });
    }

    if (this.intervalo == 'mensalmente') {
      this.id = 'mensalmente'

      this.recuperarDadosMensais().then(() => {
        this.graficoMensal()
      });
    }

    if (this.intervalo == 'anualmente') {
      this.id = 'anualmente'

      this.recuperarDadosAnuais().then(() => {
        this.graficoAnual()
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['intervalo']) {
      this.gerarGrafico()
    }
  }


  graficoSemanal() {
    this.destruirGraficos()

    this.lucro = this.dados?.semanaPassada_vs_semanaAtual?.toFixed()
    this.vendasAtuais = this.dados?.quantidade_pedido_atual?.toFixed()
    this.vendasPassadas = this.dados?.quantidade_pedido_passada?.toFixed()

    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const semanalmente = new Chart('vendasSemanalmente', {
      type: 'line',
      data: {
        labels: diasDaSemana,
        datasets: [
          {
            label: 'Vendas por Dia (Semana Atual)',
            data: [
              this.dados!.quantidade_pedidos[0],
              this.dados!.quantidade_pedidos[1],
              this.dados!.quantidade_pedidos[2],
              this.dados!.quantidade_pedidos[3],
              this.dados!.quantidade_pedidos[4],
              this.dados!.quantidade_pedidos[5],
              this.dados!.quantidade_pedidos[6],
            ],
            backgroundColor: '#321dcf',
            borderColor: '#321dcf',
            borderWidth: this.borderWidth
          },

          {
            label: 'Vendas por Dia (Semana Passada)',
            data: [
              this.dados!.quantidade_pedidos_semana_passada[0],
              this.dados!.quantidade_pedidos_semana_passada[1],
              this.dados!.quantidade_pedidos_semana_passada[2],
              this.dados!.quantidade_pedidos_semana_passada[3],
              this.dados!.quantidade_pedidos_semana_passada[4],
              this.dados!.quantidade_pedidos_semana_passada[5],
              this.dados!.quantidade_pedidos_semana_passada[6]
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

  graficoMensal() {
    this.destruirGraficos()

    this.lucro = this.dados!.mesPassado_vs_mesAtual.toFixed()
    this.vendasAtuais = this.dados!.total_pedidos_mes_atual.toFixed()
    this.vendasPassadas = this.dados!.total_pedidos_mes_passado.toFixed()
    const semanasMes = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'];

    const mensalmente = new Chart('vendasMensalmente', {
      type: 'line',
      data: {
        labels: semanasMes,
        datasets: [
          {
            label: 'Vendas por Semana (Mês Atual)',
            data: [
              this.dados!.semanas[0],
              this.dados!.semanas[1],
              this.dados!.semanas[2],
              this.dados!.semanas[3],
              this.dados!.semanas[4],

            ],
            backgroundColor: '#321dcf',
            borderColor: '#321dcf',
            borderWidth: this.borderWidth
          },

          {
            label: 'Vendas por Semana (Mês Passada)',
            data: [
              this.dados!.semanas_mes_passado[0],
              this.dados!.semanas_mes_passado[1],
              this.dados!.semanas_mes_passado[2],
              this.dados!.semanas_mes_passado[3],
              this.dados!.semanas_mes_passado[4],
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

  graficoAnual() {
    this.destruirGraficos()

    this.lucro = this.dados!.anoPassado_vs_anoAtual.toFixed()
    this.vendasAtuais = this.dados!.quantidade_total_ano_atual.toFixed()
    this.vendasPassadas = this.dados!.quantidade_total_ano_passado.toFixed()
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const anualmente = new Chart('vendasAnualmente', {
      type: 'line',
      data: {
        labels: meses,
        datasets: [
          {
            label: 'Vendas por Mes (Ano Atual)',
            data: [
              this.dados!.meses[1],
              this.dados!.meses[2],
              this.dados!.meses[3],
              this.dados!.meses[4],
              this.dados!.meses[5],
              this.dados!.meses[6],
              this.dados!.meses[7],
              this.dados!.meses[8],
              this.dados!.meses[9],
              this.dados!.meses[10],
              this.dados!.meses[11],
              this.dados!.meses[12],
            ],
            backgroundColor: '#321dcf',
            borderColor: '#321dcf',
            borderWidth: this.borderWidth
          },

          {
            label: 'Vendas por Mes (Ano Passada)',
            data: [
              this.dados!.meses_ano_passado[1],
              this.dados!.meses_ano_passado[2],
              this.dados!.meses_ano_passado[3],
              this.dados!.meses_ano_passado[4],
              this.dados!.meses_ano_passado[5],
              this.dados!.meses_ano_passado[6],
              this.dados!.meses_ano_passado[7],
              this.dados!.meses_ano_passado[8],
              this.dados!.meses_ano_passado[9],
              this.dados!.meses_ano_passado[10],
              this.dados!.meses_ano_passado[11],
              this.dados!.meses_ano_passado[12],
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

  destruirGraficos() {
    Chart.getChart('vendasSemanalmente')?.destroy();
    Chart.getChart('vendasMensalmente')?.destroy();
    Chart.getChart('vendasAnualmente')?.destroy();
  }
}