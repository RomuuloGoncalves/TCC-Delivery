import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhePedidoPage } from './detalhe-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhePedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhePedidoPageRoutingModule {}
