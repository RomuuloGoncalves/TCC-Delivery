import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemPagePageRoutingModule } from './listagem-page-routing.module';

import { ListagemPagePage } from './listagem-page.page';

import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemPagePageRoutingModule,
    FooterModule,
    HeaderModule,
  ],
  declarations: [ListagemPagePage]
})
export class ListagemPagePageModule {}