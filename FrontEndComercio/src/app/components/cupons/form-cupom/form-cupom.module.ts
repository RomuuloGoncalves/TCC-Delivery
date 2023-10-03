import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormCupomComponent } from './form-cupom.component';



@NgModule({
  declarations: [FormCupomComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [FormCupomComponent]
})
export class FormCupomModule { }
