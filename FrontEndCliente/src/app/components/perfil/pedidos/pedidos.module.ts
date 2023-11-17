import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoadingModule } from '../../common/loading/loading.module';
import { FormsModule } from '@angular/forms';
import { BtnLoadingModule } from '../../common/btn-loading/btn-loading.module';
import { PedidosComponent } from './pedidos.component';

@NgModule({
  declarations: [PedidosComponent],
  imports: [CommonModule, IonicModule, RouterModule, LoadingModule, BtnLoadingModule, FormsModule],
  exports: [PedidosComponent]
})
export class PedidosModule {}
