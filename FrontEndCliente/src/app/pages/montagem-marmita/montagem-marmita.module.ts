import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontagemMarmitaPageRoutingModule } from './montagem-marmita-routing.module';

import { MontagemMarmitaPage } from './montagem-marmita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontagemMarmitaPageRoutingModule
  ],
  declarations: [MontagemMarmitaPage]
})
export class MontagemMarmitaPageModule {}
