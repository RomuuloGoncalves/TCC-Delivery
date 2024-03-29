import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { PerfilConfigComponent } from 'src/app/components/perfil/perfil-config/perfil-config.component';
import { LoadingModule } from 'src/app/components/common/loading/loading.module';
import { EnderecoModule } from 'src/app/components/perfil/endereco/endereco.module';
import { PerfilConfigModule } from 'src/app/components/perfil/perfil-config/perfil-config.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    FooterModule,
    HeaderModule,
    LoadingModule,
    EnderecoModule,
    PerfilConfigModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
