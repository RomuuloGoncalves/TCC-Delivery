import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-taxa-cancelamento',
  templateUrl: './taxa-cancelamento.page.html',
  styleUrls: ['./taxa-cancelamento.page.scss'],
})
export class TaxaCancelamentoPage implements OnInit {

  constructor() { }


  ngOnInit() {
    this.gerarGrafico()
  }
  
  gerarGrafico() {
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: ['Cancelado', 'Entregue'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
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
