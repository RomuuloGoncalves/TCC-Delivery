import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-modal-marmita',
  templateUrl: './modal-marmita.component.html',
  styleUrls: ['./modal-marmita.component.scss'],
})
export class ModalMarmitaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @ViewChild('modal') modalpapa: IonicModule

  this.exibirModal()

  async exibirModal() {
    await this.modalpapa.present()
  }

}
