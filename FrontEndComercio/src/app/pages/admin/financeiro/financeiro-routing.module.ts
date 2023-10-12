import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceiroPage } from './financeiro.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceiroPageRoutingModule {}
