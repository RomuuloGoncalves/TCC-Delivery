import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from 'src/app/core/services/dashboard.service';
Chart.register(...registerables);

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  @Input() intervalo: string = 'semanalmente';
  id: string = 'semanalmente';

  constructor(private DashBoard: DashboardService) {}

  ngOnInit() {
    this.recuperarDadosSemanais().then(() => {
      this.gerarGrafico();
    });
  }
  arrayCores: string[] = [
    '#FAD02E',
    '#C7E4E9',
    '#FFDAC1',
    '#A2D2FF',
    '#FBE7C6',
    '#B9D4DB',
    '#EFD3E3',
    '#C6FFC1',
    '#FFD700',
    '#B6BAA4',
    '#FFD07E',
    '#BFD6C1',
    '#F8D577',
    '#C3E2E2',
    '#F9C5E0',
    '#C7E1C4',
    '#FFD573',
    '#B9D2A6',
    '#F8D67F',
    '#C5E1DE',
  ];

  rendimentoBrutoAtual: any = 0;
  rendimentoBrutoPassado: any = 0;
  despesas: number = 0;
  lucro: number = 0;
  dados!: any;

  recuperarDadosSemanais(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.DashBoard.categoriasSemanais().subscribe(
        (response) => {
          this.dados = response;
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
      this.DashBoard.categoriasMensais().subscribe(
        (response) => {
          this.dados = response;
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
      this.DashBoard.categoriasAnuais().subscribe(
        (response) => {
          this.dados = response;
          resolve();
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    });
  }

  borderWidth: number = 3;

  gerarGrafico() {
    if (this.intervalo == 'semanalmente') {
      this.id = 'semanalmente';

      this.recuperarDadosSemanais().then(() => {
        this.graficoSemanal();
      });
    }

    if (this.intervalo == 'mensalmente') {
      this.id = 'mensalmente';

      this.recuperarDadosMensais().then(() => {
        this.graficoMensal();
      });
    }

    if (this.intervalo == 'anualmente') {
      this.id = 'anualmente';

      this.recuperarDadosAnuais().then(() => {
        this.graficoAnual();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['intervalo']) {
      this.gerarGrafico();
    }
  }

  graficoSemanal() {
    this.destruirGraficos();

    const semanalmente = new Chart('categoriaSemanalmente', {
      type: 'bar',
      data: {
        labels: Object.keys(this.dados!.contagem_categorias),
        datasets: [
          {
            label: 'Categorias',
            data: Object.values(this.dados!.contagem_categorias),
            backgroundColor: this.arrayCores,
            borderColor: this.arrayCores,
            borderWidth: this.borderWidth,
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

  graficoMensal() {
    this.destruirGraficos();

    const mensalmente = new Chart('categoriaMensalmente', {
      type: 'bar',
      data: {
        labels: Object.keys(this.dados!.contagem_categorias),
        datasets: [
          {
            label: 'Categorias',
            data: Object.values(this.dados.contagem_categorias),
            backgroundColor: this.arrayCores,
            borderColor: this.arrayCores,
            borderWidth: this.borderWidth,
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

  graficoAnual() {
    this.destruirGraficos();

    const anualmente = new Chart('categoriaAnualmente', {
      type: 'bar',
      data: {
        labels: Object.keys(this.dados!.contagem_categorias),
        datasets: [
          {
            label: 'Categorias',
            data: Object.values(this.dados!.contagem_categorias),
            backgroundColor: this.arrayCores,
            borderColor: this.arrayCores,
            borderWidth: this.borderWidth,
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

  destruirGraficos() {
    Chart.getChart('categoriaSemanalmente')?.destroy();
    Chart.getChart('categoriaMensalmente')?.destroy();
    Chart.getChart('categoriaAnualmente')?.destroy();
  }
}
