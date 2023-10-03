import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCupomPageRoutingModule } from './editar-cupom-routing.module';

import { EditarCupomPage } from './editar-cupom.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FormCupomModule } from 'src/app/components/cupons/form-cupom/form-cupom.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCupomPageRoutingModule,
    HeaderModule,
    FormCupomModule
  ],
  declarations: [EditarCupomPage]
})
export class EditarCupomPageModule {}
