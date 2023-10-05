import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutosPageRoutingModule } from './produtos-routing.module';
import { ProdutosPage } from './produtos.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { AccordionComponent } from 'src/app/components/produtos/accordion/accordion.component';
import { CardsComponent } from 'src/app/components/produtos/cards/cards.component';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
    HeaderModule,
    LoadingModule
    
  ],
  declarations: [ProdutosPage, AccordionComponent, CardsComponent]
})
export class ProdutosPageModule {}
