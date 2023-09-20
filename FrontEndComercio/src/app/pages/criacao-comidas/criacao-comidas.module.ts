import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoComidasPageRoutingModule } from './criacao-comidas-routing.module';

import { CriacaoComidasPage } from './criacao-comidas.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoComidasPageRoutingModule,
    HeaderModule
  ],
  declarations: [CriacaoComidasPage]
})
export class CriacaoComidasPageModule {}
