import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PagamentosComponent } from './pagamentos.component';



@NgModule({
  declarations: [PagamentosComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [PagamentosComponent]
})
export class PagamentosModule { }
