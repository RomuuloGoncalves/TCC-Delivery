import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { EnderecoModule } from 'src/app/components/perfil/endereco/endereco.module';
import { PerfilConfigModule } from 'src/app/components/perfil/perfil-config/perfil-config.module';
import { PagamentosModule } from 'src/app/components/perfil/pagamentos/pagamentos.module';
import { CuponsModule } from 'src/app/components/perfil/cupons/cupons.module';
import { DadosModule } from 'src/app/components/perfil/dados/dados.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    FooterModule,
    HeaderModule,
    EnderecoModule,
    PerfilConfigModule,
    PagamentosModule,
    CuponsModule,
    DadosModule

  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}