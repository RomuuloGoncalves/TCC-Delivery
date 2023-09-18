import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoProdutosPage } from './criacao-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoProdutosPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CriacaoProdutosPageRoutingModule {}
