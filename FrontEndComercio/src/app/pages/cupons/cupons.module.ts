import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuponsPageRoutingModule } from './cupons-routing.module';

import { CuponsPage } from './cupons.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { CardsCuponsComponent } from 'src/app/components/cupons/cards-cupons/cards-cupons.component';
import { ModalCupomComponent } from 'src/app/components/cupons/modal-cupom/modal-cupom.component';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuponsPageRoutingModule,
    HeaderModule,
    LoadingModule
  ],
  declarations: [CuponsPage, CardsCuponsComponent, ModalCupomComponent]
})
export class CuponsPageModule {}
