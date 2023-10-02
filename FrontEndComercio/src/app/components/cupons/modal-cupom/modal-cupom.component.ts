import { Component, Input, OnInit } from '@angular/core';
import { Cupom } from 'src/app/core/interfaces/cupom';

@Component({
  selector: 'app-modal-cupom',
  templateUrl: './modal-cupom.component.html',
  styleUrls: ['./modal-cupom.component.scss'],
})
export class ModalCupomComponent  implements OnInit {

  @Input() public cupom?: Cupom;

  constructor() { }

  ngOnInit() {}

}
