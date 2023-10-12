import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxaCancelamentoPage } from './taxa-cancelamento.page';

const routes: Routes = [
  {
    path: '',
    component: TaxaCancelamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxaCancelamentoPageRoutingModule {}
