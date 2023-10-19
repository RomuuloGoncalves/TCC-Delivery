import { Component, OnInit, Input, Output } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';
import { EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMarmitaComponent } from '../modal-marmita/modal-marmita.component';

@Component({
  selector: 'app-sessao-cards-produto',
  templateUrl: './sessao-cards-produto.component.html',
  styleUrls: ['./sessao-cards-produto.component.scss'],
})
export class SessaoCardsProdutoComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }  
  
  @Input() tituloSessao?: string;
  // trocar de any pra produto tava com erro
  @Input() produto!: any;
  @Input() cardMontagem: boolean = false;

  produtoModal?: Produto
  definirProdutoModal(produto: Produto) {
    this.produtoModal = produto
    this.abrirModal(this.produtoModal)
  }

  async abrirModal(produto: any) {
    const modal = await this.modalController.create({
      component: ModalMarmitaComponent,
      componentProps: {
        produto: produto
      }
    });

    return await modal.present()

  }

  mostrar() {
    console.log("sessao cards",this.produto)
  }

}
