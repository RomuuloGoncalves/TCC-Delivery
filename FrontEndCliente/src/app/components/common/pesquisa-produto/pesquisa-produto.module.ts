import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaProdutoComponent } from './pesquisa-produto.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PesquisaProdutoComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [PesquisaProdutoComponent],
})
export class PesquisaProdutoModule { }
