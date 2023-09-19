import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoVariacoesPage } from './criacao-variacoes.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoVariacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoVariacoesPageRoutingModule {}
