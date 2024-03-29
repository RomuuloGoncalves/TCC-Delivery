import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MaskitoModule } from '@maskito/angular';
import { FormsModule } from '@angular/forms';
import { BtnLoadingModule } from '../../common/btn-loading/btn-loading.module';
import { PerfilConfigComponent } from './perfil-config.component';
import { AlterarSenhaModule } from '../alterar-senha/alterar-senha.module';

@NgModule({
  declarations: [PerfilConfigComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    MaskitoModule,
    BtnLoadingModule,
    MaskitoModule,
    AlterarSenhaModule
  ],
  exports: [PerfilConfigComponent]
})
export class PerfilConfigModule { }
