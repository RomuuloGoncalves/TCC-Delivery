import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerfilConfigComponent } from './perfil-config.component';



@NgModule({
  declarations: [PerfilConfigComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [PerfilConfigComponent]
})
export class PerfilConfigModule { }
