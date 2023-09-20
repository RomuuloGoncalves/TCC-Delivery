import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalMarmitaComponent } from './modal-marmita.component';

@NgModule({
  declarations: [ModalMarmitaComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [ModalMarmitaComponent]
})
export class ModalMarmitaModule {}
