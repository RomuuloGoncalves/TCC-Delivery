import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  constructor() { }

  intervalo: any = 'anualmente';

  ngOnInit() {
  }

  selecionarIntervalo(e: any) {
    this.intervalo = e.detail.value
  }

}
