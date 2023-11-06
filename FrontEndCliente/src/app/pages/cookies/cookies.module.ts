import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookiesPageRoutingModule } from './cookies-routing.module';

import { CookiesPage } from './cookies.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { FooterModule } from 'src/app/components/common/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookiesPageRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [CookiesPage],
})
export class CookiesPageModule {}
