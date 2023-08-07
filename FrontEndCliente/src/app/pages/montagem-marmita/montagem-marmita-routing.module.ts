import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontagemMarmitaPage } from './montagem-marmita.page';

const routes: Routes = [
  {
    path: '',
    component: MontagemMarmitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontagemMarmitaPageRoutingModule {}
