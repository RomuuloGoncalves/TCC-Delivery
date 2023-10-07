import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoPageRoutingModule } from './pedido-routing.module';

import { PedidoPage } from './pedido.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';
import { ModalPedidoComponent } from 'src/app/components/pedido/modal-pedido/modal-pedido.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoPageRoutingModule,
    HeaderModule,
    LoadingModule
  ],
  declarations: [PedidoPage, ModalPedidoComponent]
})
export class PedidoPageModule {}
