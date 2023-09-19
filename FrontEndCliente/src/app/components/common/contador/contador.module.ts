import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContadorComponent } from './contador.component';



@NgModule({
  declarations: [ContadorComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [ContadorComponent]
})
export class ContadorModule { }
