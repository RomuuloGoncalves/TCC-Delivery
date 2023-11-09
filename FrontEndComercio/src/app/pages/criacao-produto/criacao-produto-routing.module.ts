import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoProdutoPage } from './criacao-produto.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoProdutoPageRoutingModule {}
