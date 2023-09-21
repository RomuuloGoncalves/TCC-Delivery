import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-marmita',
  templateUrl: './modal-marmita.component.html',
  styleUrls: ['./modal-marmita.component.scss'],
})
export class ModalMarmitaComponent  implements OnInit {

  constructor(private navParams: NavParams,
              private modalController: ModalController) { }

  ngOnInit() {}
  
  @Input() produto: any
  

  produtoModal = this.navParams.get('produto')
  
  fecharModal() {
    this.modalController.dismiss();
    console.log(this.produto)
  }


  // console.log(produtoModal)
  

}
