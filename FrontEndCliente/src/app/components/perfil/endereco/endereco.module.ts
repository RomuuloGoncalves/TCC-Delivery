import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EnderecoComponent } from './endereco.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EnderecoComponent],
  imports: [
    CommonModule, 
    IonicModule, 
    RouterModule,
    FormsModule
  ],
  exports: [EnderecoComponent]
})
export class EnderecoModule { }
