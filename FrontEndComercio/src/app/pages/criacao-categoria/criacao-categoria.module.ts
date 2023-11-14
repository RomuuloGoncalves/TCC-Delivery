import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoCategoriaPageRoutingModule } from './criacao-categoria-routing.module';

import { CriacaoCategoriaPage } from './criacao-categoria.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoCategoriaPageRoutingModule,
    HeaderModule,
    BtnLoadingModule
  ],
  declarations: [CriacaoCategoriaPage]
})
export class CriacaoCategoriaPageModule {}
