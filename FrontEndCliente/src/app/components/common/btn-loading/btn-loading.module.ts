import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnLoadingComponent } from './btn-loading.component';
import { IonicModule } from '@ionic/angular';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [BtnLoadingComponent],
  imports: [
    CommonModule,
    IonicModule,
    LoadingModule
  ],
  exports: [BtnLoadingComponent]
})
export class BtnLoadingModule { }
