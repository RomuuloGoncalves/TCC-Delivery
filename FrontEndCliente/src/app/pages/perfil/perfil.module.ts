import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { EnderecoComponent } from 'src/app/components/perfil/endereco/endereco.component';
import { PerfilConfigComponent } from 'src/app/components/perfil/perfil-config/perfil-config.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    FooterModule,
    HeaderModule,

  ],
  declarations: [PerfilPage, EnderecoComponent, PerfilConfigComponent]
})
export class PerfilPageModule {}
