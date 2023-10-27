import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EnderecoComponent } from './endereco.component';
import { MaskitoModule } from '@maskito/angular';
import { FormsModule } from '@angular/forms';
import { BtnLoadingModule } from '../../common/btn-loading/btn-loading.module';

@NgModule({
  declarations: [EnderecoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    MaskitoModule,
    BtnLoadingModule
  ],
  exports: [EnderecoComponent]
})
export class EnderecoModule { }
