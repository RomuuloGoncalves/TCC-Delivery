import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CuponsComponent } from './cupons.component';



@NgModule({
  declarations: [CuponsComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [CuponsComponent]
})
export class CuponsModule { }
