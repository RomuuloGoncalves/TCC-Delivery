import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarGrupoVarPage } from './editar-grupo-var.page';

const routes: Routes = [
  {
    path: '',
    component: EditarGrupoVarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarGrupoVarPageRoutingModule {}
