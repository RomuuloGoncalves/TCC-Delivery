import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalProdutoComponent } from './modal-produto.component';
import { ObservacoesModule } from '../observacoes/observacoes.module';
import { ContadorModule } from '../contador/contador.module';
import { LoadingModule } from '../loading/loading.module';


@NgModule({
  declarations: [ModalProdutoComponent],
  imports: [CommonModule, IonicModule, RouterModule, ObservacoesModule, ContadorModule, LoadingModule],
  exports: [ModalProdutoComponent]
})
export class ModalProdutoModule {}
