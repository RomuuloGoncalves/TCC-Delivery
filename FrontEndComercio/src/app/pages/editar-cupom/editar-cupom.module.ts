import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCupomPageRoutingModule } from './editar-cupom-routing.module';

import { EditarCupomPage } from './editar-cupom.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FormCupomModule } from 'src/app/components/cupons/form-cupom/form-cupom.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCupomPageRoutingModule,
    HeaderModule,
    FormCupomModule,
    LoadingModule
  ],
  declarations: [EditarCupomPage]
})
export class EditarCupomPageModule {}
