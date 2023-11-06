import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermosUsoPageRoutingModule } from './termos-uso-routing.module';

import { TermosUsoPage } from './termos-uso.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermosUsoPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [TermosUsoPage]
})
export class TermosUsoPageModule {}
