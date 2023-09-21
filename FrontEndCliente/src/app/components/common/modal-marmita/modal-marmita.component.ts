import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-marmita',
  templateUrl: './modal-marmita.component.html',
  styleUrls: ['./modal-marmita.component.scss'],
})
export class ModalMarmitaComponent  implements OnInit {

  constructor(private navParams: NavParams) { }

  ngOnInit() {}
  
  @Input() produto: any
  
  produtoModal = this.navParams.get('produto')
  
  
  // console.log(produtoModal)
  

}
