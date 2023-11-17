import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarVariacaoPage } from './editar-variacao.page';

const routes: Routes = [
  {
    path: '',
    component: EditarVariacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarVariacaoPageRoutingModule {}
