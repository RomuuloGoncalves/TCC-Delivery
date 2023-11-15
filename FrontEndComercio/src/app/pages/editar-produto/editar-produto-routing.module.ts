import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarProdutoPage } from './editar-produto.page';

const routes: Routes = [
  {
    path: '',
    component: EditarProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarProdutoPageRoutingModule {}
