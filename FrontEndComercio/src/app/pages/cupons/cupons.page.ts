import { Component, OnInit } from '@angular/core';
import { Cupom } from 'src/app/core/interfaces/cupom';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {

  constructor() { }

  cupons!: Cupom[]
  url = 'http://127.0.0.1:8000/cupom/listar'

  ngOnInit() {
    console.log(this.cupons)
    this.recuperarCupons()
  }

  recuperarCupons() {
    fetch(this.url)
      .then(response => response.json())
      .then(response => this.cupons = response)
      .catch(_ => console.log(_))
      .finally(() => {
        console.log("CUPONS:")
        console.log(this.cupons)
      })
  }
}
