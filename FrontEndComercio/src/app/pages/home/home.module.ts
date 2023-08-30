import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { CardPedidosComponent } from 'src/app/components/home/card-pedidos/card-pedidos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
  ],
  declarations: [HomePage, CardPedidosComponent]
})
export class HomePageModule {}
