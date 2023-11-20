import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarGrupoVarPageRoutingModule } from './editar-grupo-var-routing.module';

import { EditarGrupoVarPage } from './editar-grupo-var.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { BtnLoadingModule } from 'src/app/components/common/btn-loading/btn-loading.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarGrupoVarPageRoutingModule,
    HeaderModule,
    BtnLoadingModule,
    LoadingModule
  ],
  declarations: [EditarGrupoVarPage]
})
export class EditarGrupoVarPageModule {}
