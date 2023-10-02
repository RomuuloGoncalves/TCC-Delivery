import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCupomPageRoutingModule } from './editar-cupom-routing.module';

import { EditarCupomPage } from './editar-cupom.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCupomPageRoutingModule,
    HeaderModule
  ],
  declarations: [EditarCupomPage]
})
export class EditarCupomPageModule {}
