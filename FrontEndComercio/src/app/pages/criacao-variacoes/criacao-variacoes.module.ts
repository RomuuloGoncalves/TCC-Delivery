import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoVariacoesPageRoutingModule } from './criacao-variacoes-routing.module';

import { CriacaoVariacoesPage } from './criacao-variacoes.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoVariacoesPageRoutingModule,
    HeaderModule,
    BtnLoadingModule
  ],
  declarations: [CriacaoVariacoesPage]
})
export class CriacaoVariacoesPageModule {}
