import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalMarmitaComponent } from './modal-marmita.component';
import { ObservacoesModule } from '../observacoes/observacoes.module';
import { ContadorModule } from '../contador/contador.module';
import { LoadingModule } from '../loading/loading.module';


@NgModule({
  declarations: [ModalMarmitaComponent],
  imports: [CommonModule, IonicModule, RouterModule, ObservacoesModule, ContadorModule, LoadingModule],
  exports: [ModalMarmitaComponent]
})
export class ModalMarmitaModule {}
