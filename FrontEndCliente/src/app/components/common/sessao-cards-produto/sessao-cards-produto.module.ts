import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { SessaoCardsProdutoComponent } from './sessao-cards-produto.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CardProdutoComponent,
    SessaoCardsProdutoComponent,
  ],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [SessaoCardsProdutoComponent],
})
export class SessaoCardsProdutoModule {}
