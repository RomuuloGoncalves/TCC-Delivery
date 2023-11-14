import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoGrupoVarPageRoutingModule } from './criacao-grupo-var-routing.module';

import { CriacaoGrupoVarPage } from './criacao-grupo-var.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoGrupoVarPageRoutingModule,
    HeaderModule,
    BtnLoadingModule
  ],
  declarations: [CriacaoGrupoVarPage]
})
export class CriacaoGrupoVarPageModule {}
