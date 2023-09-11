import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { AtalhoHomeComponent } from 'src/app/components/home/atalho-home/atalho-home.component';
import { SessaoCardsProdutoModule } from 'src/app/components/common/sessao-cards-produto/sessao-cards-produto.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterModule,
    HeaderModule,
    SessaoCardsProdutoModule,
  ],
  declarations: [HomePage, AtalhoHomeComponent],
})
export class HomePageModule {}
