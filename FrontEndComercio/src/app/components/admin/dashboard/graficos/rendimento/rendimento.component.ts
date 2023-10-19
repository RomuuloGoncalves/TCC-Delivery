import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from 'src/app/core/services/dashboard.service';
Chart.register(...registerables);

@Component({
  selector: 'app-rendimento',
  templateUrl: './rendimento.component.html',
  styleUrls: ['./rendimento.component.scss'],
})
export class RendimentoComponent implements OnInit, OnChanges {

  @Input() intervalo: string = 'semanalmente'
  id: string = 'semanalmente'

  constructor(private DashBoard: DashboardService) { }

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
  dados!: any

  recuperarDadosSemanais(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.DashBoard.rendimentoSemanal().subscribe(
        (response) => {
          console.log("rendomento", response)
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
      this.DashBoard.rendimentoMensal().subscribe(
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
      this.DashBoard.rendimentoAnual().subscribe(
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

    this.lucro = this.dados?.semanaPassada_vs_semanaAtual?.toFixed() || 0;
    this.rendimentoBrutoAtual = this.dados?.rendimentoAtual?.toFixed() || 0;
    this.rendimentoBrutoPassado = this.dados?.rendimentoPassado?.toFixed() || 0;

    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const semanalmente = new Chart('semanalmente', {
      type: 'line',
      data: {
        labels: diasDaSemana,
        datasets: [
          {
            label: 'Rendimento Bruto por Dia (Semana Atual)',
            data: [
              this.dados!.dias[0],
              this.dados!.dias[1],
              this.dados!.dias[2],
              this.dados!.dias[3],
              this.dados!.dias[4],
              this.dados!.dias[5],
              this.dados!.dias[6]
            ],
            backgroundColor: '#321dcf',
            borderColor: '#321dcf',
            borderWidth: this.borderWidth
          },

          {
            label: 'Rendimento Bruto por Dia (Semana Passada)',
            data: [
              this.dados!.semanaPassada[0],
              this.dados!.semanaPassada[1],
              this.dados!.semanaPassada[2],
              this.dados!.semanaPassada[3],
              this.dados!.semanaPassada[4],
              this.dados!.semanaPassada[5],
              this.dados!.semanaPassada[6]
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
    this.rendimentoBrutoAtual = this.dados!.rendimento_total_mes_atual.toFixed()
    this.rendimentoBrutoPassado = this.dados!.rendimento_total_mes_passado.toFixed()
    const semanasMes = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'];

    const mensalmente = new Chart('mensalmente', {
      type: 'line',
      data: {
        labels: semanasMes,
        datasets: [
          {
            label: 'Rendimento Bruto por Mês (Semana Atual)',
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
            label: 'Rendimento Bruto por Mês (Semana Passada)',
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
    this.rendimentoBrutoAtual = this.dados!.rendimento_total_ano_atual.toFixed()
    this.rendimentoBrutoPassado = this.dados!.rendimento_total_ano_passado.toFixed()
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const anualmente = new Chart('anualmente', {
      type: 'line',
      data: {
        labels: meses,
        datasets: [
          {
            label: 'Rendimento Bruto por Mês (Semana Atual)',
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
            label: 'Rendimento Bruto por Mês (Semana Passada)',
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
    Chart.getChart('mensalmente')?.destroy();
    Chart.getChart('semanalmente')?.destroy();
    Chart.getChart('anualmente')?.destroy();
  }
}
