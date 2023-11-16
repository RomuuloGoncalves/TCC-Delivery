import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlterarSenhaComponent } from './alterar-senha.component';
import { LoadingModule } from '../../common/loading/loading.module';
import { FormsModule } from '@angular/forms';
import { BtnLoadingModule } from '../../common/btn-loading/btn-loading.module';

@NgModule({
  declarations: [AlterarSenhaComponent],
  imports: [CommonModule, IonicModule, RouterModule, LoadingModule, BtnLoadingModule, FormsModule],
  exports: [AlterarSenhaComponent]
})
export class AlterarSenhaModule {}
