import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CardHomeComponent } from 'src/app/components/card-home/card-home.component';
import { CardMontagemHomeComponent } from 'src/app/components/card-montagem-home/card-montagem-home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterModule,
    HeaderModule,
  ],
  declarations: [
    HomePage,
    CardHomeComponent,
    CardMontagemHomeComponent
  ]
})
export class HomePageModule {}
