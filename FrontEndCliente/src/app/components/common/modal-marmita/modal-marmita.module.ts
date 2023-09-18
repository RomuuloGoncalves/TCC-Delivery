import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ObservacoesComponent } from '../observacoes/observacoes.component';

@NgModule({
  declarations: [
    ObservacoesComponent
  ],
  imports: [CommonModule, IonicModule, RouterModule],
})
export class SessaoCardsProdutoModule {}
