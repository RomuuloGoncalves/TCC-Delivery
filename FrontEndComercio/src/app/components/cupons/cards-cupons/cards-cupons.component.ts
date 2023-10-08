import { Component, Input, OnInit } from '@angular/core';
import { Cupom } from 'src/app/core/interfaces/cupom';

@Component({
  selector: 'app-cards-cupons',
  templateUrl: './cards-cupons.component.html',
  styleUrls: ['./cards-cupons.component.scss'],
})
export class CardsCuponsComponent  implements OnInit {

  constructor() { }

  @Input() public cupom?: Cupom;

  ngOnInit() {}

  converterData(dateString: any): Date {
    return new Date(dateString);
  }

}
