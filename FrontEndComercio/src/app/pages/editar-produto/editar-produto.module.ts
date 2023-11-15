import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarProdutoPageRoutingModule } from './editar-produto-routing.module';

import { EditarProdutoPage } from './editar-produto.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarProdutoPageRoutingModule,
    HeaderModule,
    LoadingModule,
    BtnLoadingModule
  ],
  declarations: [EditarProdutoPage]
})
export class EditarProdutoPageModule {}
