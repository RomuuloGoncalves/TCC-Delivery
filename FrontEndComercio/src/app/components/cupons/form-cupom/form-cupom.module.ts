import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormCupomComponent } from './form-cupom.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormCupomComponent],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
  exports: [FormCupomComponent]
})
export class FormCupomModule { }
