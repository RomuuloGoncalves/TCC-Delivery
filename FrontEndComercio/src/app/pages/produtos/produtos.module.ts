import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutosPageRoutingModule } from './produtos-routing.module';
import { ProdutosPage } from './produtos.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { CardsComponent } from 'src/app/components/produtos/cards/cards.component';
import { AccordionComponent } from 'src/app/components/produtos/accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
    HeaderModule
  ],
  declarations: [ProdutosPage, CardsComponent, AccordionComponent]
})
export class ProdutosPageModule {}
