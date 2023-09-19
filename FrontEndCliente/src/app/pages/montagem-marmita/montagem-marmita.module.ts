import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontagemMarmitaPageRoutingModule } from './montagem-marmita-routing.module';

import { MontagemMarmitaPage } from './montagem-marmita.page';

import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ObservacoesModule } from 'src/app/components/common/observacoes/observacoes.module';
import { ContadorModule } from 'src/app/components/common/contador/contador.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontagemMarmitaPageRoutingModule,
    FooterModule,
    HeaderModule,
    ObservacoesModule,
    ContadorModule
  ],
  declarations: [MontagemMarmitaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MontagemMarmitaPageModule {}
