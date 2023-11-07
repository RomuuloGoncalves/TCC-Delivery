import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { SessaoCardsProdutoComponent } from './sessao-cards-produto.component';
import { IonicModule } from '@ionic/angular';
import { ModalProdutoModule } from '../modal-produto/modal-produto.module';

@NgModule({
  declarations: [
    CardProdutoComponent,
    SessaoCardsProdutoComponent,
  ],
  imports: [CommonModule, IonicModule, RouterModule, ModalProdutoModule],
  exports: [SessaoCardsProdutoComponent],
})
export class SessaoCardsProdutoModule {}
