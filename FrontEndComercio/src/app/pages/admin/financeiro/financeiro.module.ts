import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceiroPageRoutingModule } from './financeiro-routing.module';

import { FinanceiroPage } from './financeiro.page';
import { HeaderAdminModule } from 'src/app/components/admin/common/header-admin/header-admin.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceiroPageRoutingModule,
    HeaderAdminModule
  ],
  declarations: [FinanceiroPage]
})
export class FinanceiroPageModule {}
