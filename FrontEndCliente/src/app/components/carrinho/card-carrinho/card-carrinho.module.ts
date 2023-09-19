import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCarrinhoComponent } from './card-carrinho.component';
import { IonicModule } from '@ionic/angular';
import { ContadorModule } from '../../common/contador/contador.module';



@NgModule({
  declarations: [CardCarrinhoComponent],
  imports: [
    CommonModule,
    IonicModule,
    ContadorModule
  ],
  exports: [CardCarrinhoComponent]
})
export class CardCarrinhoModule { }
