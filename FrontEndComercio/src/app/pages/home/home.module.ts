import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { OpcoesComponent } from 'src/app/components/home/opcoes/opcoes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
  ],
  declarations: [HomePage, OpcoesComponent]
})
export class HomePageModule {}
