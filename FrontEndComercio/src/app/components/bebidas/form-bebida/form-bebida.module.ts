import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBebidaComponent } from './form-bebida.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormBebidaComponent],
  imports: [
    CommonModule, IonicModule, RouterModule, FormsModule
  ],
  exports: [FormBebidaComponent]
})
export class FormBebidaModule { }
