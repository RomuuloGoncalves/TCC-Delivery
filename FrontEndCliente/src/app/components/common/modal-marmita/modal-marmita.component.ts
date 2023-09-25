import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Produto } from 'src/app/core/interfaces/produto';
import { PassarMarmitaService } from 'src/app/core/services/passar-marmita.service';

@Component({
  selector: 'app-modal-marmita',
  templateUrl: './modal-marmita.component.html',
  styleUrls: ['./modal-marmita.component.scss'],
})
export class ModalMarmitaComponent  implements OnInit {

  constructor(private navParams: NavParams,
              private modalController: ModalController,
              private passarMarmita: PassarMarmitaService) { }

  ngOnInit() {}
  
  @Input() produto: any
  

  produtoModal = this.navParams.get('produto')
  
  fecharModal() {
    this.modalController.dismiss();
  }

  chamarDefinirMarmita(produto: Produto) {
    this.passarMarmita.definirMarmita(produto)
  }
}
