import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariacoesPage } from './variacoes.page';

const routes: Routes = [
  {
    path: '',
    component: VariacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariacoesPageRoutingModule {}
