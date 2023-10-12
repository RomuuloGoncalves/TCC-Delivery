import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormasPagamentoPage } from './formas-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: FormasPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormasPagamentoPageRoutingModule {}
