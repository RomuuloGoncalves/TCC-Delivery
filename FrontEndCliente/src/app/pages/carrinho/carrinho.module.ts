import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';

import { CarrinhoPage } from './carrinho.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { CardCarrinhoModule } from 'src/app/components/carrinho/card-carrinho/card-carrinho.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';
import { ModalFinalizarComponent } from 'src/app/components/carrinho/modal-finalizar/modal-finalizar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhoPageRoutingModule,
    HeaderModule,
    FooterModule,
    CardCarrinhoModule,
    LoadingModule,
    BtnLoadingModule,
  ],
  declarations: [CarrinhoPage, ModalFinalizarComponent],
})
export class CarrinhoPageModule {}
