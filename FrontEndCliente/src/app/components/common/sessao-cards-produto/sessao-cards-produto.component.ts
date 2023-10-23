import { Component, OnInit, Input, Output } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';
import { EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMarmitaComponent } from '../modal-marmita/modal-marmita.component';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-sessao-cards-produto',
  templateUrl: './sessao-cards-produto.component.html',
  styleUrls: ['./sessao-cards-produto.component.scss'],
})
export class SessaoCardsProdutoComponent implements OnInit {

  constructor(private modalController: ModalController, private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  @Input() tituloSessao?: string;
  @Input() produtos!: any;
  @Input() cardMontagem: boolean = false;


  async definirProdutoModal(id: number) {
    const produto = await this.pegarProduto(id)
    this.abrirModal(produto)
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

  pegarProduto(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.produtoService.pegarProduto(id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
