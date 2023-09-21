import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalMarmitaComponent } from './modal-marmita.component';
import { ObservacoesModule } from '../observacoes/observacoes.module';
import { ContadorModule } from '../contador/contador.module';


@NgModule({
  declarations: [ModalMarmitaComponent],
  imports: [CommonModule, IonicModule, RouterModule, ObservacoesModule, ContadorModule],
  exports: [ModalMarmitaComponent]
})
export class ModalMarmitaModule {}
