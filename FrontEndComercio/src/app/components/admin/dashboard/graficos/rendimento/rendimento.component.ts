import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { PedProdGrupoVarService } from 'src/app/core/services/ped-prod-grupo-var.service';
import { PedidosService } from 'src/app/core/services/pedidos.service';
Chart.register(...registerables);

@Component({
  selector: 'app-rendimento',
  templateUrl: './rendimento.component.html',
  styleUrls: ['./rendimento.component.scss'],
})
export class RendimentoComponent implements OnInit {


  constructor(private Pedidos: PedidosService, private pedProdGrupo: PedProdGrupoVarService) { }

  ngOnInit() {
    this.recuperarTodosPedidos().then(() => {
      this.gerarGrafico();
      this.calculoRendimentoBruto()
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

  calculoRendimentoBruto() {
    this.pedidos.forEach((pedido: any) => {
      this.rendimentoBruto += Number(pedido.valor_total)
    })

    this.rendimentoBruto = Number(this.rendimentoBruto).toFixed(2)
  }


  calcularRendimentoSemanal() {
    const rendimentoSemanal: any = {}; // Objeto para armazenar o rendimento por semana

    this.pedidos.forEach((pedido: any) => {
      const dataPedido = new Date(pedido.data_pedido);
      const semana = this.getWeekNumber(dataPedido); // Função para obter o número da semana
      rendimentoSemanal[semana] = (rendimentoSemanal[semana] || 0) + Number(pedido.valor_total);
    });

    return Object.values(rendimentoSemanal); // Retorna os rendimentos por semana
  }

  calcularRendimentoDiario(): number[] {
    const currentDate = new Date();
    const semanaAtual = this.getWeekNumber(currentDate);

    const rendimentoPorDia: number[] = Array(7).fill(0); // Inicializa um array com 7 posições para cada dia da semana

    this.pedidos.forEach((pedido: any) => {
      const dataPedido = new Date(pedido.data_pedido);
      const semanaPedido = this.getWeekNumber(dataPedido);

      if (semanaPedido === semanaAtual) {
        const diaDaSemana = dataPedido.getDay(); // 0 (Domingo) a 6 (Sábado)
        rendimentoPorDia[diaDaSemana] += Number(pedido.valor_total);
      }
    });

    return rendimentoPorDia;
  }


  getWeekNumber(date: Date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.valueOf() - firstDayOfYear.valueOf()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }


  borderWidth: number = 3


  gerarGrafico() {
    this.graficoTotal()
    this.graficoSemanal()

  }

  graficoSemanal() {
    const rendimentoPorDia = this.calcularRendimentoDiario();
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const myChart = new Chart("financeiroSemanal", {
      type: 'line',
      data: {
        labels: diasDaSemana,
        datasets: [
          {
            label: 'Rendimento Bruto por Dia (Semana Atual)',
            data: rendimentoPorDia,
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

  graficoTotal() {
    const rendimentoSemanal = this.calcularRendimentoSemanal();

    const myChart = new Chart("financeiroTotal", {
      type: 'line',
      data: {
        labels: rendimentoSemanal.map((_, index) => `Semana ${index + 1}`),
        datasets: [
          {
            label: 'Rendimento Bruto Semanal',
            data: rendimentoSemanal,
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