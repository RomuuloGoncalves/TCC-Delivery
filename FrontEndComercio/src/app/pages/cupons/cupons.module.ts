import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuponsPageRoutingModule } from './cupons-routing.module';

import { CuponsPage } from './cupons.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { CardsComponent } from 'src/app/components/produtos/cards/cards.component';
import { CardsCuponsComponent } from 'src/app/components/cupons/cards-cupons/cards-cupons.component';
import { ModalCupomComponent } from 'src/app/components/cupons/modal-cupom/modal-cupom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuponsPageRoutingModule,
    HeaderModule
  ],
  declarations: [CuponsPage, CardsCuponsComponent, ModalCupomComponent]
})
export class CuponsPageModule {}
