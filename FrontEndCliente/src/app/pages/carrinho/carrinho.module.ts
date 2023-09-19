import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';

import { CarrinhoPage } from './carrinho.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { CardCarrinhoModule } from 'src/app/components/carrinho/card-carrinho/card-carrinho.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhoPageRoutingModule,
    HeaderModule,
    FooterModule,
    CardCarrinhoModule
  ],
  declarations: [CarrinhoPage],
})
export class CarrinhoPageModule {}
