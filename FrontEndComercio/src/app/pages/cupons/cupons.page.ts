import { Component, OnInit } from '@angular/core';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { CuponsService } from 'src/app/core/services/cupons.service';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {
  constructor(private Cupom: CuponsService,) { }

  cupons!: Cupom[]

  ngOnInit() {
    this.recuperarTodosCupons()
  }

  recuperarTodosCupons() {
    this.Cupom.pegarCupons().subscribe(
      (response) => {
        this.cupons = response
        console.log(this.cupons)
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
