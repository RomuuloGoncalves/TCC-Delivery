import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoComidasPage } from './criacao-comidas.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoComidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoComidasPageRoutingModule {}
