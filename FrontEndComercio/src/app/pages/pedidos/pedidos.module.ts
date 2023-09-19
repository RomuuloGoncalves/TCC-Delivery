import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosPageRoutingModule } from './pedidos-routing.module';

import { PedidosPage } from './pedidos.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { CardPedidosComponent } from 'src/app/components/home/card-pedidos/card-pedidos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosPageRoutingModule,
    HeaderModule
  ],
  declarations: [PedidosPage, CardPedidosComponent]
})
export class PedidosPageModule {}
