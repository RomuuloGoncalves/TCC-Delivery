import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacidadePageRoutingModule } from './privacidade-routing.module';

import { PrivacidadePage } from './privacidade.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacidadePageRoutingModule,
    HeaderModule
    
  ],
  declarations: [PrivacidadePage]
})
export class PrivacidadePageModule {}
