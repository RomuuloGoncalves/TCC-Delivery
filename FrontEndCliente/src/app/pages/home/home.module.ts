import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { AtalhoHomeComponent } from 'src/app/components/home/atalho-home/atalho-home.component';
<<<<<<< HEAD
import { SessaoCardsProdutoModule } from 'src/app/components/common/sessao-cards-produto/sessao-cards-produto.module';
=======
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
>>>>>>> 86d51b08783a2cf431e125c0b889d41a44c464d2

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
