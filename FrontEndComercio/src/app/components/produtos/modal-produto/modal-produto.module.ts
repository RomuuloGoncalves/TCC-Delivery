import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalProdutoComponent } from './modal-produto.component';



@NgModule({
  declarations: [ModalProdutoComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalProdutoComponent]
})
export class ModalProdutoModule { }
