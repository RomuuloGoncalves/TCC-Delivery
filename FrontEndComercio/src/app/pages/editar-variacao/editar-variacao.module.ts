import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarVariacaoPageRoutingModule } from './editar-variacao-routing.module';

import { EditarVariacaoPage } from './editar-variacao.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarVariacaoPageRoutingModule,
    HeaderModule,
    LoadingModule,
    BtnLoadingModule
  ],
  declarations: [EditarVariacaoPage]
})
export class EditarVariacaoPageModule {}
