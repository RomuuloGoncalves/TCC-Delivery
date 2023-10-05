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

  cupons!: Cupom[];
  loading: boolean = true;

  ngOnInit() {
    this.carregarPagina();
  }

  carregarPagina() {
    this.loading = true;
    this.Cupom.pegarCupons().subscribe(
      (response) => {
        this.cupons = response;
        console.log(this.cupons);
        this.loading = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
