import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoCombosPage } from './criacao-combos.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoCombosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoCombosPageRoutingModule {}
