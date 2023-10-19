import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HeaderAdminModule } from 'src/app/components/admin/common/header-admin/header-admin.module';
import { FormasPagamentosComponent } from 'src/app/components/admin/dashboard/graficos/formas-pagamentos/formas-pagamentos.component';
import { TaxaCancelamentoComponent } from 'src/app/components/admin/dashboard/graficos/taxa-cancelamento/taxa-cancelamento.component';
import { RendimentoComponent } from 'src/app/components/admin/dashboard/graficos/rendimento/rendimento.component';
import { VendasComponent } from 'src/app/components/admin/dashboard/graficos/vendas/vendas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    HeaderAdminModule
  ],
  declarations: [
    DashboardPage,
    FormasPagamentosComponent,
    TaxaCancelamentoComponent,
    RendimentoComponent,
    VendasComponent
  ]
})
export class DashboardPageModule {}
