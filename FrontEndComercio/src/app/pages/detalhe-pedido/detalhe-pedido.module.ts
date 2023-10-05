import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhePedidoPageRoutingModule } from './detalhe-pedido-routing.module';

import { DetalhePedidoPage } from './detalhe-pedido.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhePedidoPageRoutingModule,
    HeaderModule,
    LoadingModule
  ],
  declarations: [DetalhePedidoPage]
})
export class DetalhePedidoPageModule {}
