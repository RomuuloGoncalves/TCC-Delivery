import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DadosComponent } from './dados.component';



@NgModule({
  declarations: [DadosComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [DadosComponent]
})
export class DadosModule { }
