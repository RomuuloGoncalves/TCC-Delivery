import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoProdutoPageRoutingModule } from './criacao-produto-routing.module';

import { CriacaoProdutoPage } from './criacao-produto.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoProdutoPageRoutingModule,
    HeaderModule
  ],
  declarations: [CriacaoProdutoPage]
})
export class CriacaoProdutoPageModule {}
