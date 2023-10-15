import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabelaPedidosComponent } from './tabela-pedidos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TabelaPedidosComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [TabelaPedidosComponent]
})
export class TabelaPedidosModule { }
