import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CriacaoBebidasPageRoutingModule } from './criacao-bebidas-routing.module';
import { CriacaoBebidasPage } from './criacao-bebidas.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriacaoBebidasPageRoutingModule,
    HeaderModule
  ],
  declarations: [CriacaoBebidasPage]
})
export class CriacaoBebidasPageModule {}
