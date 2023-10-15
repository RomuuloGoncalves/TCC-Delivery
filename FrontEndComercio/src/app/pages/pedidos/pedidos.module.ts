import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosPageRoutingModule } from './pedidos-routing.module';

import { PedidosPage } from './pedidos.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';
import { TabelaPedidosModule } from 'src/app/components/common/tabela-pedidos/tabela-pedidos.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosPageRoutingModule,
    HeaderModule,
    LoadingModule,
    TabelaPedidosModule
  ],
  declarations: [PedidosPage]
})
export class PedidosPageModule {}
