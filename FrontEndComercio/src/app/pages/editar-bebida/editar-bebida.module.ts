import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarBebidaPageRoutingModule } from './editar-bebida-routing.module';

import { EditarBebidaPage } from './editar-bebida.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FormBebidaModule } from 'src/app/components/bebidas/form-bebida/form-bebida.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarBebidaPageRoutingModule,
    HeaderModule,
    FormBebidaModule
  ],
  declarations: [EditarBebidaPage]
})
export class EditarBebidaPageModule {}
