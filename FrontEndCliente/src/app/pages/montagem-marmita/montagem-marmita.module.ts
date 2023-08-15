import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontagemMarmitaPageRoutingModule } from './montagem-marmita-routing.module';

import { MontagemMarmitaPage } from './montagem-marmita.page';

import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';

import { IngredienteSelecionadoComponent } from 'src/app/components/montagem-marmita/ingrediente-selecionado/ingrediente-selecionado.component';
import { CardIngredienteComponent } from 'src/app/components/montagem-marmita/card-ingrediente/card-ingrediente.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontagemMarmitaPageRoutingModule,
    FooterModule,
    HeaderModule,
  ],
  declarations: [MontagemMarmitaPage, 
                 IngredienteSelecionadoComponent,
                 CardIngredienteComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class MontagemMarmitaPageModule {}
