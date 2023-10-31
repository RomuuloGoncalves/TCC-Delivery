import { Component, OnInit } from '@angular/core';
import { Cupom } from 'src/app/core/interfaces/cupom';

@Component({
  selector: 'app-criacao-cupons',
  templateUrl: './criacao-cupons.page.html',
  styleUrls: ['./criacao-cupons.page.scss'],
})
export class CriacaoCuponsPage implements OnInit {

  constructor() { }

  cupom?: Cupom;

  ngOnInit() {
  }
}
