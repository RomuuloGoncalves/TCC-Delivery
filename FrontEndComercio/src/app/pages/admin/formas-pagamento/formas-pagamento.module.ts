import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormasPagamentoPageRoutingModule } from './formas-pagamento-routing.module';

import { FormasPagamentoPage } from './formas-pagamento.page';
import { HeaderAdminModule } from 'src/app/components/admin/common/header-admin/header-admin.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormasPagamentoPageRoutingModule,
    HeaderAdminModule
  ],
  declarations: [FormasPagamentoPage]
})
export class FormasPagamentoPageModule {}
