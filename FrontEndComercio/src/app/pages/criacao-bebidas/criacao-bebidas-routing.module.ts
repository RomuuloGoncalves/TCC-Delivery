import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriacaoBebidasPage } from './criacao-bebidas.page';

const routes: Routes = [
  {
    path: '',
    component: CriacaoBebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriacaoBebidasPageRoutingModule {}
