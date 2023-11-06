import { Component, OnInit, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProdutoService } from 'src/app/core/services/produto.service';
import { ModalProdutoComponent } from '../modal-produto/modal-produto.component';

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

  async abrirModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalProdutoComponent,
      componentProps: {
        id: id
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
