import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoProdutosPageRoutingModule } from './criacao-produtos-routing.module';

import { CriacaoProdutosPage } from './criacao-produtos.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoProdutosPageRoutingModule,
    HeaderModule
  ],
  declarations: [CriacaoProdutosPage]
})
export class CriacaoProdutosPageModule {}
