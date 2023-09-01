import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookiesPage } from './cookies.page';

const routes: Routes = [
  {
    path: '',
    component: CookiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookiesPageRoutingModule {}
