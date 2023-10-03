import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoCuponsPageRoutingModule } from './criacao-cupons-routing.module';

import { CriacaoCuponsPage } from './criacao-cupons.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FormCupomModule } from 'src/app/components/cupons/form-cupom/form-cupom.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoCuponsPageRoutingModule,
    HeaderModule,
    FormCupomModule
  ],
  declarations: [CriacaoCuponsPage]
})
export class CriacaoCuponsPageModule {}
