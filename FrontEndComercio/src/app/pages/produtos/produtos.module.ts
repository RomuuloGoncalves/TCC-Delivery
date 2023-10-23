import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutosPageRoutingModule } from './produtos-routing.module';
import { ProdutosPage } from './produtos.page';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { AccordionComponent } from 'src/app/components/produtos/accordion/accordion.component';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';
import { ModalProdutoComponent } from 'src/app/components/produtos/modal-produto/modal-produto.component';
import { CardProdutoComponent } from 'src/app/components/produtos/card-produto/card-produto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
    HeaderModule,
    LoadingModule
  ],
  declarations: [ProdutosPage, AccordionComponent, CardProdutoComponent, ModalProdutoComponent]
})
export class ProdutosPageModule {}
