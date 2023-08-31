import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemPagePage } from './listagem-page.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemPagePageRoutingModule {}
