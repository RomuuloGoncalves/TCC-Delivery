import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { FormasPagamentosComponent } from 'src/app/components/admin/dashboard/graficos/formas-pagamentos/formas-pagamentos.component';
import { TaxaCancelamentoComponent } from 'src/app/components/admin/dashboard/graficos/taxa-cancelamento/taxa-cancelamento.component';
import { RendimentoComponent } from 'src/app/components/admin/dashboard/graficos/rendimento/rendimento.component';
import { VendasComponent } from 'src/app/components/admin/dashboard/graficos/vendas/vendas.component';
import { CategoriasComponent } from 'src/app/components/admin/dashboard/graficos/categorias/categorias.component';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    HeaderModule
  ],
  declarations: [
    DashboardPage,
    FormasPagamentosComponent,
    TaxaCancelamentoComponent,
    RendimentoComponent,
    VendasComponent,
    CategoriasComponent
  ]
})
export class DashboardPageModule {}
