import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormCupomComponent } from './form-cupom.component';
import { FormsModule } from '@angular/forms';
import { BtnLoadingModule } from '../../common/btn-loading/btn-loading.module';



@NgModule({
  declarations: [FormCupomComponent],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule, BtnLoadingModule],
  exports: [FormCupomComponent]
})
export class FormCupomModule { }
