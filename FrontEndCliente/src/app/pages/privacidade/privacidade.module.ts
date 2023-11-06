import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacidadePageRoutingModule } from './privacidade-routing.module';

import { PrivacidadePage } from './privacidade.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacidadePageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [PrivacidadePage]
})
export class PrivacidadePageModule {}
