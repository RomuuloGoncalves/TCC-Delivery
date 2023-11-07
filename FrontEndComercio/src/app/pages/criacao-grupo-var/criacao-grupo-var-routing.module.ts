import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoGrupoVarPage } from './criacao-grupo-var.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoGrupoVarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoGrupoVarPageRoutingModule {}
