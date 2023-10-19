import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { PedidosService } from 'src/app/core/services/pedidos.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  constructor(private Pedidos: PedidosService) { }

  intervalo: any = 'semanalmente'
  ngOnInit() {
  }

  selecionarIntervalo(e: any) {
    this.intervalo = e.detail.value
    console.log("Intervalo", this.intervalo)
  }

}
