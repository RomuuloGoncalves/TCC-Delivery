import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermosUsoPage } from './termos-uso.page';

const routes: Routes = [
  {
    path: '',
    component: TermosUsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermosUsoPageRoutingModule {}
