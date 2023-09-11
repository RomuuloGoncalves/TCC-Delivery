import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { SessaoCardsHomeModule } from 'src/app/components/home/sessao-cards-home/sessao-cards-home.module';
import { AtalhoHomeComponent } from 'src/app/components/home/atalho-home/atalho-home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterModule,
    HeaderModule,
    SessaoCardsHomeModule,
  ],
  declarations: [HomePage, AtalhoHomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
