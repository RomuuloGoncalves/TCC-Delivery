import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CardMontagemHomeComponent } from '../card-montagem-home/card-montagem-home.component';
import { CardHomeComponent } from '../card-home/card-home.component';
import { SessaoCardsHomeComponent } from './sessao-cards-home.component';

@NgModule({
  declarations: [
    SessaoCardsHomeComponent,
    CardMontagemHomeComponent,
    CardHomeComponent,
  ],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [SessaoCardsHomeComponent],
})
export class SessaoCardsHomeModule {}
