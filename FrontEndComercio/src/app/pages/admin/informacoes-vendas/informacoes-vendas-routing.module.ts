import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacoesVendasPage } from './informacoes-vendas.page';

const routes: Routes = [
  {
    path: '',
    component: InformacoesVendasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacoesVendasPageRoutingModule {}
