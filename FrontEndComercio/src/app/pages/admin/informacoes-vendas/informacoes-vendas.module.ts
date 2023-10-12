import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacoesVendasPageRoutingModule } from './informacoes-vendas-routing.module';

import { InformacoesVendasPage } from './informacoes-vendas.page';
import { HeaderAdminModule } from 'src/app/components/admin/common/header-admin/header-admin.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacoesVendasPageRoutingModule,
    HeaderAdminModule
  ],
  declarations: [InformacoesVendasPage]
})
export class InformacoesVendasPageModule {}
