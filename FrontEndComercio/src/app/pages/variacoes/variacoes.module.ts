import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VariacoesPageRoutingModule } from './variacoes-routing.module';

import { VariacoesPage } from './variacoes.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';
import { AccordionGrupoVarComponent } from 'src/app/components/grupo-var/accordion-grupo-var/accordion-grupo-var.component';
import { CardsVariacaoComponent } from 'src/app/components/grupo-var/cards-variacao/cards-variacao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VariacoesPageRoutingModule,
    HeaderModule,
    LoadingModule
  ],
  declarations: [VariacoesPage, AccordionGrupoVarComponent, CardsVariacaoComponent]
})
export class VariacoesPageModule {}
