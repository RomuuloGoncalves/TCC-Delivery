import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxaCancelamentoPageRoutingModule } from './taxa-cancelamento-routing.module';

import { TaxaCancelamentoPage } from './taxa-cancelamento.page';
import { HeaderAdminModule } from 'src/app/components/admin/common/header-admin/header-admin.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxaCancelamentoPageRoutingModule,
    HeaderAdminModule
  ],
  declarations: [TaxaCancelamentoPage]
})
export class TaxaCancelamentoPageModule {}
