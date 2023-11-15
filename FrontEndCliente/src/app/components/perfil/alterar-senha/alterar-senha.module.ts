import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlterarSenhaComponent } from './alterar-senha.component';
import { LoadingModule } from '../../common/loading/loading.module';
import { BtnLoadingModule } from '../../common/btn-loading/btn-loading.module';

@NgModule({
  declarations: [AlterarSenhaComponent],
  imports: [CommonModule, IonicModule, RouterModule, LoadingModule, BtnLoadingModule],
  exports: [AlterarSenhaComponent]
})
export class AlterarSenhaModule {}
