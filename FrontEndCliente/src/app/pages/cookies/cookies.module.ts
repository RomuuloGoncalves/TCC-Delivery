import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookiesPageRoutingModule } from './cookies-routing.module';

import { CookiesPage } from './cookies.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookiesPageRoutingModule,
    HeaderModule
  ],
  declarations: [CookiesPage]
})
export class CookiesPageModule {}
