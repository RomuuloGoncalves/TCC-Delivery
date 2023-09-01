import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuponsPage } from './cupons.page';

const routes: Routes = [
  {
    path: '',
    component: CuponsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuponsPageRoutingModule {}
