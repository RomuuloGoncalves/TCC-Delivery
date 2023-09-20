import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriacaoCombosPageRoutingModule } from './criacao-combos-routing.module';

import { CriacaoCombosPage } from './criacao-combos.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoCombosPageRoutingModule,
    HeaderModule
  ],
  declarations: [CriacaoCombosPage]
})
export class CriacaoCombosPageModule {}
