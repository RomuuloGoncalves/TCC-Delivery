import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCupomPage } from './editar-cupom.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCupomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCupomPageRoutingModule {}
