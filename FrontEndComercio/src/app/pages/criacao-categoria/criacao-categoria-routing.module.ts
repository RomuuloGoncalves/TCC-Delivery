import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoCategoriaPage } from './criacao-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoCategoriaPageRoutingModule {}
